<template>
    <v-row :style="{margin: '0', padding: '12px 16px', position: 'fixed', backgroundColor: bgToogle ? '#141218' : 'transparent'}" :class="backArrow ? `navbarWithSpaceBetween` : `navbar`">
        <v-icon v-if="backArrow" class="backArrow" style="color: var(--primary-txt-color)">mdi-arrow-left</v-icon>
        <v-icon class="menu" style="color: var(--primary-txt-color)">mdi-menu</v-icon>
        <p class="navTitle" style="font-weight: 400; font-size: 22px; color: var(--secondary-txt-color);">#ProjectK</p>
        <v-icon
            style="color: var(--secondary-txt-color); width: 20px; height: 20px; cursor: pointer;">mdi-account-circle-outline</v-icon>
    </v-row>
</template>

<script setup>
    const props = defineProps({
        backArrow : {
            type: Boolean,
            required: false,
            default : false
        },
        bgToogle : {
            type: Boolean,
            required: false,
            default : false
        }
    });

</script>

<style>
.navbar {
    width: 100vw;
    justify-content: end;
}
.navbarWithSpaceBetween {
    width: 100vw;
    justify-content: space-between
}

.menu,
.navTitle {
    display: none;
}

@media screen and (max-width: 500px) {
    .navbar {
        background-color: var(--secondary-bg-color);
        align-items: center;
        justify-content: space-between;
    }

    .menu,
    .navTitle {
        display: block;
    }
}
</style>
