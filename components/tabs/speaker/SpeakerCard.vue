<template>
    <div
        style="width: 120px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 16px; padding: 0 8px; margin-bottom: 2rem;">

        <!-- Speaker Img -->
        <img class="speakerImg" :src="data.imgURL" alt="Speaker info" style="border-radius: 100%; object-fit: cover;">

        <!-- Name | Designation -->
        <div style="text-align: center; color: var(--secondary-txt-color)">
            <p class="speakerName" style="text-wrap: wrap; font-weight: 500;">{{ data.speakerName }}</p>
            <p class="speakerDesignation" style="text-wrap: nowrap; font-weight: 400;">{{ data.designation }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    data: {
        type: Object,
        required: true,
        default: {
            imgURL: '',
            speakerName: '',
            designation: ''
        }
    }
});
</script>

<style scoped>
.speakerImg {
    width: 86px;
    height: 86px;
}

.speakerName {
    font-size: 12px;
}

.speakerDesignation {
    font-size: 10px;
}

@media screen and (max-width: 500px) {
    .speakerImg {
        width: 61px;
        height: 61px;
    }

    .speakerName {
        font-size: 8.64px;
    }

    .speakerDesignation {
        font-size: 7.12px;
    }
}
</style>