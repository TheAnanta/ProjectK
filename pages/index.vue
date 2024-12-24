<template>
    <NuxtPage />
    <v-app>
        <NuxtLayout>
            <div style="background-color: #141218; width: 100%; height: 100vh; position: relative;">
                <NavigationRail />
                <div class="navbar" style="width: 100%; position: absolute; top: 0; left: 0; z-index: 10;">
                    <Navbar />
                </div>
                <MainHero />
            </div>
        </NuxtLayout>
    </v-app>
</template>

<style scoped>
.navbar {
    display: none;
}
@media screen and (max-width: 640px) {
    .navbar {
        display: block;
    }
}
</style>