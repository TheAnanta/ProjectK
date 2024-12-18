<template>
    <div
        style="width: 109px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 16px; padding: 0 8px; margin-bottom: 2rem;">

        <!-- Volunter Img -->
        <img class="volunteerImg" :src="data.imgURL" alt="Volunteer info" style="border-radius: 100%; object-fit: cover;">

        <!-- Name | Designation -->
        <div style="text-align: center; color: var(--secondary-txt-color)">
            <p class="volunteerName" style="text-wrap: wrap; font-weight: 500;">{{ data.volunteerName }}</p>
            <p class="volunteerDesignation" style="text-wrap: wrap; font-weight: 400;">{{ data.designation }}</p>
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
            volunteerName: '',
            designation: ''
        }
    }
});
</script>

<style scoped>
.volunteerImg {
    width: 86px;
    height: 86px;
}

.volunteerName {
    font-size: 12px;
}

.volunteerDesignation {
    font-size: 10px;
}

@media screen and (max-width: 500px) {
    .volunteerImg {
        width: 61px;
        height: 61px;
    }

    .volunteerName {
        font-size: 8.64px;
    }

    .volunteerDesignation {
        font-size: 7.12px;
    }
}
</style>