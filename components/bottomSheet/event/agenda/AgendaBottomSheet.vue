<template>
    <v-bottom-sheet v-model="localSheet" style="z-index: 1000; color: white;" height="500">
        <v-card
            style="background-color: var(--secondary-bg-color); display: grid;  grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; color: var(--quadnary-color); padding: 16px;"
            >
            <!-- Session Starts Time Input -->
            <v-text-field v-model="sessionData.startTime" :active="sessionStartTime" :focus="sessionStartTime" label="Session Starts at"
                prepend-inner-icon="mdi-clock-time-four-outline" readonly>
                <v-menu v-model="sessionStartTime" :close-on-content-click="false" activator="parent"
                    transition="scale-transition">
                    <v-time-picker v-if="sessionStartTime" v-model="time" full-width></v-time-picker>
                </v-menu>
            </v-text-field>

            <!-- Session Ends Time Input -->
            <v-text-field v-model="sessionData.endTime" :active="sessionEndTime" :focus="sessionEndTime" label="Session Ends at"
                prepend-inner-icon="mdi-clock-time-four-outline" readonly>
                <v-menu v-model="sessionEndTime" :close-on-content-click="false" activator="parent"
                    transition="scale-transition">
                    <v-time-picker v-if="sessionEndTime" v-model="time" full-width></v-time-picker>
                </v-menu>
            </v-text-field>

            <!-- Session Type  -->
            <v-text-field v-model="sessionData.type" label="Session Type" variant="outlined"></v-text-field>
            <v-text-field v-model="sessionData.title" label="Title" variant="outlined"></v-text-field>
            <v-text-field v-model="sessionData.description" label="Description" variant="outlined"></v-text-field>
            <v-text-field v-model="sessionData.category" label="Category" variant="outlined"></v-text-field>
            <v-text-field v-model="sessionData.speakerName" label="Speaker Name" variant="outlined"></v-text-field>

            <v-btn variant="tonal" @click="closeSheet" style="grid-column: span 2 / span 2; width: 30%; margin: 0 auto;">Save</v-btn>
        </v-card>
    </v-bottom-sheet>
</template>

<script setup>
import { ref } from "vue";

const time = ref(null);
const sessionStartTime = ref(false);
const sessionEndTime = ref(false);

const sessionData = ref({
    startTime: null,
    endTime: null,
    type: '',
    title: '',
    description: '',
    category: '',
    speakerName: ''
});

const props = defineProps({
    sheet: {
        type: Boolean,
        required: true,
        default: false
    },
});
const emit = defineEmits(['update:sheet']);

const localSheet = ref(props.sheet);

watch(
    () => props.sheet, (newVal) => {
        localSheet.value = newVal;
    }
);

const closeSheet = () => {
    emit('update:sheet', false);
};

</script>