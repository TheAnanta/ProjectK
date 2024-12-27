<template>
    <NuxtPage />
    <v-app>
        <NuxtLayout>
            <div style="background-color: var(--secondary-bg-color); width: 100%; min-height: 100vh;">

                <div style="width: 100vw; position: relative;">
                    <!-- Navigation Bar -->
                    <div style="width: 100%; position: absolute; top: 0; left: 0; z-index: 3;">
                        <Navbar :back-arrow="true" :bg-toogle="scrollY > 150 ? true : false" />
                    </div>
                    <EventPageHead :data="eventData" :is-scrolled="isScrolled" :scroll-y="scrollY" />
                    <v-card style="background-color: var(--secondary-bg-color); color: var(--primary-txt-color);">
                        <v-tabs v-model="tab" align-tabs="center" :color="'#D0BCFE'" height="60px"
                            style="border-bottom: 1px solid var(--tertiary-txt-color);">
                            <v-tab v-for="(item, index) in eventTabsHeads" :key="index">{{ item.title }}</v-tab>
                        </v-tabs>

                        <v-card-text style="padding: 0;">
                            <v-tabs-window v-model="tab">
                                <v-tabs-window-item value="GENERAL" style="padding: 0px 2rem;">
                                    <TabsGeneralTab />
                                    <TabsGalleryTab />
                                </v-tabs-window-item>
                                <v-tabs-window-item value="TICKETS">
                                    <!-- <TabsAgendaTab /> -->
                                </v-tabs-window-item>
                                <v-tabs-window-item value="AGENDA" style="width: 100%;">
                                    <TabsAgendaTab />
                                </v-tabs-window-item>
                                <v-tabs-window-item value="SPEAKERS" style="width: 100%;">
                                    <TabsSpeakersTab />
                                </v-tabs-window-item>
                                <v-tabs-window-item value="VOLUNTEERS" style="width: 100%;">
                                    <TabsVolunteerTab />
                                </v-tabs-window-item>
                                <v-tabs-window-item value="SPONSORS" style="width: 100%;">
                                    <TabsSponsorsTab />
                                </v-tabs-window-item>

                            </v-tabs-window>
                        </v-card-text>
                    </v-card>
                </div>
            </div>
        </NuxtLayout>
        <v-fab @click="toggleBottomSheet(parseInt(tab))" :rounded="false" extended height="60"
            style="position: fixed; bottom: 50px; right: 200px; font-size: small; z-index: 10; color: var(--quadnary-color) !important"
            :color="'#36343B'">
            <v-icon :color="'#D0BCFE'" style="margin-right: 6px;">{{ tab === 0 ? 'mdi-pencil' : tab === 2 || tab === 3
                || tab === 4 || tab === 5 ?
                'mdi-plus' : 'mdi-pencil' }}</v-icon>
            <p :style="{ color: '#D0BCFE', fontWeight: '500', fontSize: '14px' }">{{ tab === 0 ? "Add Modules" : tab ===
                1 ? "Add Tickets" : tab === 3 ? "Add Speakers" : tab === 4 ? "Add Volunteers" : tab === 5 ? "Add Sponsors" : ""}}</p>
        </v-fab>

        <BottomSheetEventAgendaBottomSheet v-model:sheet="bottomSheetsRef[2]"/>
    </v-app>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import eventTabsHeads from "../../../data/eventTabsHeads.json";
const route = useRoute();
const router = useRouter();

const isScrolled = ref(false);
const scrollY = ref(0);
const eventData = ref(null);
const tab = ref('GENERAL');

const bottomSheetsRef = ref({
    // 0 : {
    //     generalBottomSheet : false,
    // },
    // 1 : {
    //     ticketsBottomSheet : false,
    // },
    // 2 : {
    //     agendaBottomSheet : false,
    // },
    // 3 : {
    //     speakersBottomSheet : false,
    // },
    // 4 : {
    //     volunteersBottomSheet : false,
    // },
    // 5 : {
    //     sponsorsBottomSheet : false,
    // },
    0 : false,
    1 : false,
    2 : false,
    3 : false,
    4 : false,
    5 : false,
});



// const {eventTabsHeads} = useJSONData();

const eventDetails = [
    {
        id: 101,
        title: 'DevFest 2024',
        subTitle: 'Google Developer Groups Vizag',
        eventDate: 'December 7-8',
        completed: true,
        location: 'GITAM University',
        imgURL: 'https://s3-alpha-sig.figma.com/img/882e/180c/0c25e97c8b5cdc88d1054ab6cd9c1dcf?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fwffj~W8mUsq1Oh6wSbvCJr3Pu4ZoR03rhpEI4LkwbcrwoIN8tL4e7qEgCz3A4Lq3jrDTsz5RMwDZC~FrCRO4LdSEf0vKx~PLu4ffEwGtx2LIlnk-tP7pVGKatepYrs2IjIZR5D9k9Q~SjIDjGenr2SB2-Fb-M0Eo6KZ7tnzz8-~rC25RPkbDSUBIBv4ABx-436NkawBWytW3Wa91mblNvlyn7vuI1rw8hPNRVyICExSOdVDKX4o45b8hzg8SWcWTMUVaz9f-1Bjw2LBHhCr6PY5NEmkxJpZXIxkq724GX9LDjiUmXGqK-U88UViZyYrXY-u3SvozE96x6IJO3TKQA__'
    },
    {
        id: 102,
        title: 'Internation Womens Day 2025',
        subTitle: 'Google Developer Groups Vizag',
        eventDate: 'December 7-8',
        completed: false,
        location: 'Online',
        imgURL: 'https://s3-alpha-sig.figma.com/img/52a5/9620/64fa179e66d6229637e09f860b8ef6f1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AJeVurUOt2UFeQGEXc6yYhhMGU9PLWSHSQsykmSdZGOdMWuWCbdwiSdf1pZGF5Aafw0nOPkuiFGafaJeWj0Lo3skF5T9rCf0vajJyzh4w30ArbTgqY94QVjnBl2GRqb1tVnsL8fbgutglxMSpFZH9~vTtbHsnuB4HgcPDxsKlr4xvrN3cv4sdjUiQDOYpf~dM31FNaO-CwHDfWbTmVMTOQjuoAp53nitgbOPT4IA5T1kS3-gTDyge2XQIVUHHv1yi9mG3LDJRVX3TB5StSZChkRLVyXWbwtH7UXhAxsY7xsbYxfGm4sE1eKGS0v2ugJUZzuqqic2i1EOVkcNlUkGnA__'
    },
    {
        id: 103,
        title: 'DevFest 2023',
        subTitle: 'Google Developer Groups Vizag',
        eventDate: 'December 7-8',
        completed: true,
        location: 'SRM University',
        imgURL: 'https://s3-alpha-sig.figma.com/img/db79/2eab/34915545b80e7f742402825d0cd98239?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVPdZ7lPDFvMBHES6WEOjhJ8TOOaVIadHitoUjAACF2sEy7OYWx92SYqEjKnb-dYlMCzE6GUnskEDiABf6Tqqf3QQgvOXlYc8BmNaf4j~Wk7cA7cMmsI8yg85WZ345AXRXrBI9AZyFxslTcOCzIqbzitIgBxwQU~70JFcwGo8MCo2DM2zExd--6qiY7OLK1E8EVAmb2Ob0ug6GKTs5aAVFsYQJxiL0JE~acMIMERJv-1Dq04nVu6yjNABT8WZjU6u~MZoedT9P2mwS7tNLLUWQwPKkDxihqesaSvATv6WcWWVxlAQLgfQP-vGPqPJ7TLr47Lf-V8wAZaZF6SzGEchA__'
    },
    {
        id: 104,
        title: 'DevFest 2024',
        subTitle: 'Google Developer Groups Vizag',
        eventDate: 'December 7-8',
        completed: false,
        location: 'AP University',
        imgURL: 'https://s3-alpha-sig.figma.com/img/882e/180c/0c25e97c8b5cdc88d1054ab6cd9c1dcf?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fwffj~W8mUsq1Oh6wSbvCJr3Pu4ZoR03rhpEI4LkwbcrwoIN8tL4e7qEgCz3A4Lq3jrDTsz5RMwDZC~FrCRO4LdSEf0vKx~PLu4ffEwGtx2LIlnk-tP7pVGKatepYrs2IjIZR5D9k9Q~SjIDjGenr2SB2-Fb-M0Eo6KZ7tnzz8-~rC25RPkbDSUBIBv4ABx-436NkawBWytW3Wa91mblNvlyn7vuI1rw8hPNRVyICExSOdVDKX4o45b8hzg8SWcWTMUVaz9f-1Bjw2LBHhCr6PY5NEmkxJpZXIxkq724GX9LDjiUmXGqK-U88UViZyYrXY-u3SvozE96x6IJO3TKQA__'
    },
    {
        id: 105,
        title: 'Google I/O',
        subTitle: 'Google Developer Groups Vizag',
        eventDate: 'June 12',
        completed: false,
        location: 'GMRIT University',
        imgURL: 'https://s3-alpha-sig.figma.com/img/882e/180c/0c25e97c8b5cdc88d1054ab6cd9c1dcf?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fwffj~W8mUsq1Oh6wSbvCJr3Pu4ZoR03rhpEI4LkwbcrwoIN8tL4e7qEgCz3A4Lq3jrDTsz5RMwDZC~FrCRO4LdSEf0vKx~PLu4ffEwGtx2LIlnk-tP7pVGKatepYrs2IjIZR5D9k9Q~SjIDjGenr2SB2-Fb-M0Eo6KZ7tnzz8-~rC25RPkbDSUBIBv4ABx-436NkawBWytW3Wa91mblNvlyn7vuI1rw8hPNRVyICExSOdVDKX4o45b8hzg8SWcWTMUVaz9f-1Bjw2LBHhCr6PY5NEmkxJpZXIxkq724GX9LDjiUmXGqK-U88UViZyYrXY-u3SvozE96x6IJO3TKQA__'
    },
];

const eventId = computed(() => Number(route.query.eventId));

if (eventId.value) {
    console.log('event id = ', eventId.value);
    if (eventId.value === 300) {
        eventData.value = {
            id: 300,
            title: 'Event Name',
            subTitle: 'Event Subtitle',
            eventDate: 'Event Date',
            completed: false,
            location: 'Event Location',
            imgURL: '/img/event/non-event.png'
        }
    }
    else {
        eventData.value = eventDetails.find((event) => event.id === eventId.value);
    }

}

if (!eventData.value) {
    console.warn('Invalid event ID. Redirecting...');
    router.push('/404');
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    scrollY.value = window.scrollY;
    // console.log('scroll value = ',window.scrollY );
    isScrolled.value = window.scrollY > 0;
    // console.log('isScrolled  = ', isScrolled.value);
};

watch(tab, (val) => {
    console.log('Changed tab value = ', val);
});

// Toggle Bottom Sheet
const toggleBottomSheet = (tab) => {
    console.log('Toogling the bottom sheet & got index = ', tab);
    bottomSheetsRef.value[tab] = !bottomSheetsRef.value[tab];
};

</script>

<style scoped>
.v-fab--extended .v-btn {
    border-radius: 18px !important;
}
</style>