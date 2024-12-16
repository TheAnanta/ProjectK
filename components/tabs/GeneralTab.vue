<template>
    <div style="width: 100%; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-top: 20px;">
        <v-text-field label="Event Name"></v-text-field>
        <v-date-input label="Date" prepend-icon="" append-inner-icon="$calendar" variant="outlined"></v-date-input>
        <v-text-field label="Venue" variant="outlined"></v-text-field>
        <v-autocomplete ref="mode" v-model="mode" :items="['Offline', 'Online', 'Hybrid']"
        :rules="[() => !!mode || 'This field is required']" label="Mode" placeholder="Select..."
        required></v-autocomplete>
        <v-text-field label="Label" variant="outlined"></v-text-field>
    </div>
</template>