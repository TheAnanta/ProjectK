<template>
    <NuxtPage />
    <v-app>
        <NuxtLayout>
            <div class="page" style="width: 100%; height: 100%;">
                <NavigationRail />
                <Navbar />
                <div class="page-content" style="width: 100vw; height: 360px;">
                    <v-col>
                        <div
                            style="display: flex; flex-direction: column; justify-content: start; align-items: start; gap: 12px; color: white; margin-top: 60px;">
                            <!-- Headline -->
                            <p style="font-size: 28px; font-weight:bold">
                                Your Events
                            </p>
                            <!-- Description -->
                            <p style="font-size: 12px; font-weight:400; margin-bottom: 20px;">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Ut ut enim et neque
                                aliquam
                                ultricies vel eu ipsum.
                            </p>
                        </div>
                        <!-- Event Cards -->
                        <div class="cardDiv" style="margin-top: 20px; gap: 30px;">
                            <div v-for="(item, index) in eventDetails" :key="index" style="cursor: pointer;">
                                <DashboardEventCard :data="item" />
                            </div>
                        </div>
                    </v-col>
                </div>
            </div>

        </NuxtLayout>

        <v-fab extended prepend-icon="mdi-plus" text="Add Event"
            style="position: fixed; bottom: 50px; right: 170px; font-size: small; border-radius: 32% !important; z-index: 10;"
            :color="'#4F378B'"
            @click="() => {
                router.push(`/event?eventId=300`)
            }"    
        >
        </v-fab>
    </v-app>
</template>

<script setup>
const router = useRouter();
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
]
</script>

<style>
.page {
    background-color: var(--secondary-bg-color);
}

.page-content {
    padding: 10px 40px 30px 130px;
}

.cardDiv {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media screen and (max-width: 500px) {
    .page {
        background-color: #0f0d13;
    }

    .page-content {
        padding: 0 8px 0;
    }

    .cardDiv {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>