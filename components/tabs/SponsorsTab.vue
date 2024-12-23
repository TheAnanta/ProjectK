<template>
    <div class="main-container" style="width: 100%; margin: 0px auto; display:grid; padding: 2rem; grid-row-gap: 20px;">

        <!-- Gold Sponsors -->
        <div style="width: 400px; display: flex; flex-direction: column; justify-content: start; align-items: start;">
            <p style="font-weight: 500; font-size: large; margin-bottom: 20px;">Gold Sponsors</p>

            <v-list style="width: 80%; background-color: transparent; color: var(--secondary-txt-color);">
                <v-list-item v-for="(item, index) in sponsorsList" :key="index"
                    :prepend-avatar="item.avatarLink" :title="item.title" append-icon="mdi-menu-right" style="margin-bottom: 10px;"></v-list-item>
            </v-list>
        </div>

        <!-- Title Sponsors -->
        <div style="width: 400px; display: flex; flex-direction: column; justify-content: start; align-items: start;">
            <p style="font-weight: 500; font-size: large; margin-bottom: 20px;">Title Sponsors</p>

            <v-list style="width: 80%; background-color: transparent; color: var(--secondary-txt-color);">
                <v-list-item v-for="(item, index) in sponsorsList" :key="index"
                    :prepend-avatar="item.avatarLink" :title="item.title" append-icon="mdi-menu-right" style="margin-bottom: 10px;"></v-list-item>
            </v-list>
        </div>
        <!-- Brand Sponsors -->
        <div style="width: 400px; display: flex; flex-direction: column; justify-content: start; align-items: start;">
            <p style="font-weight: 500; font-size: large; margin-bottom: 20px;">Brand Sponsors</p>

            <v-list style="width: 80%; background-color: transparent; color: var(--secondary-txt-color);">
                <v-list-item v-for="(item, index) in sponsorsList" :key="index"
                    :prepend-avatar="item.avatarLink" :title="item.title" append-icon="mdi-menu-right" style="margin-bottom: 10px;"></v-list-item>
            </v-list>
        </div>

    </div>
</template>

<script setup>
import { VList, VListItem } from 'vuetify/components'; // Correct imports for Vuetify 3

const sponsorsList = [
    {
        title: 'theananta',
        avatarLink: 'https://avatars.githubusercontent.com/u/136988864?v=4',
    },
    {
        title: 'theananta',
        avatarLink: 'https://avatars.githubusercontent.com/u/136988864?v=4',
    },
    {
        title: 'theananta',
        avatarLink: 'https://avatars.githubusercontent.com/u/136988864?v=4',
    },
    {
        title: 'theananta',
        avatarLink: 'https://avatars.githubusercontent.com/u/136988864?v=4',
    },
    {
        title: 'theananta',
        avatarLink: 'https://avatars.githubusercontent.com/u/136988864?v=4',
    },
];
</script>

<style scoped>
.main-container{
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media screen and (max-width: 1042px) {
    .main-container{
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
}

@media screen and (max-width: 840px) {
    .main-container{
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    
}
</style>