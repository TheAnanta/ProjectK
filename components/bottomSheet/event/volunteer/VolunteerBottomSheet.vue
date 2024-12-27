<template>
    <v-bottom-sheet v-model="localSheet" style="z-index: 1000; color: white;" height="500">
        <v-card
            style="width: 50%; margin: 0 auto; background-color: var(--secondary-bg-color); display: grid;  grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 20px; color: var(--quadnary-color); padding: 16px;"
            >

            <CustomInputHeadshot/>

            <!-- Session Type  -->
            <v-text-field v-model="speakerData.name" label="Volunteer Name" variant="outlined"></v-text-field>
            <v-text-field v-model="speakerData.designation" label="Designation" variant="outlined"></v-text-field>
            <v-switch
              v-model="speakerData.isVerified"
              color="primary"
              label="Verified"
              value="primary"
              hide-details
              inset
            ></v-switch>
            <v-btn variant="tonal" @click="closeSheet" style="width: 30%; margin: 0 auto;">Save</v-btn>
        </v-card>
    </v-bottom-sheet>
</template>

<script setup>
import { ref } from "vue";

const speakerData = ref({
    imgURL : '',
    name: '',
    designation: '',
    isVerified: false
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