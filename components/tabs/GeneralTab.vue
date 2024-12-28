<template>
    <div
        style="width: 100%; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-top: 20px;">
        <v-text-field v-model="inputData.eventName" label="Event Name"></v-text-field>
        <v-date-input v-model="inputData.date" label="Date" prepend-icon="" append-inner-icon="$calendar"
            variant="outlined"></v-date-input>
        <v-text-field v-model="inputData.venue" label="Venue" variant="outlined"></v-text-field>
        <v-autocomplete v-model="inputData.mode" :items="['Offline', 'Online', 'Hybrid']" label="Mode"
            placeholder="Select..." required></v-autocomplete>
        <v-text-field label="Label" variant="outlined"></v-text-field>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
const inputData = ref({
    eventName: '',
    subtitle: '',
    venue: '',
    date: null,
    mode: ''
});

watch(inputData, (newVal) => {
    console.log('Changed value = ', newVal.date);
}, { deep: true });

// @click | call Cloud Function | Method : POST
const onSave = async () => {
    try {
        const response = await fetch('https://firebase/event/general', 
            {
                method: "POST",
                body: JSON.stringify(inputData.value)
            }
        )
    } catch (error) {
        console.error("Error Occured in General Tab on Saving data : ", error);
    }
};


</script>