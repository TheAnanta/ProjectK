<template>
    <div style="width: 109px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 16px; padding: 0 8px">

        <!-- Speaker Img -->
        <img :src="data.imgURL" alt="Speaker info" style="width: 86px; height: 86px; border-radius: 100%; object-fit: cover;">

        <!-- Name | Designation -->
        <div style="text-align: center; color: var(--secondary-txt-color)">
            <p style="text-wrap: wrap; font-weight: 500; font-size: 12px;">{{ data.speakerName }}</p>
            <p style="text-wrap: wrap; font-weight: 400; font-size: 10px;">{{ data.designation }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    data : {
        type: Object,
        required : true,
        default : {
            imgURL : '',
            speakerName: '',
            designation: ''
        }
    }
});
</script>