<template>
    <div
        :style="{ width: '100vw', height: isScrolled ? `${350 - Math.min(96, scrollY) / 2}px` : '350px', position: 'relative', padding: '20px', overflow: 'hidden', }">
        <!-- Grayscale background image -->
        <div :style="{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${data.imgURL})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)',
            zIndex: 0
        }">
        </div>

        <!-- Horizontal Black shade Image -->
        <img src="/img/event/horizontal-black-shade.png" alt="Horizontal Black shade"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;">

        <!-- Left Black shade Image -->
        <img src="/img/event/left-black-shade.png" alt="Left Black shade"
            style="position: absolute; top: 0; left: 0; height: 100%; object-fit: cover; z-index: 1;">

        <!-- Right Black shade Image -->
        <img src="/img/event/right-black-shade.png" alt="Right Black shade"
            style="position: absolute; top: 0; right: 0; height: 100%; object-fit: cover; z-index: 1;">

        <!-- Content -->
        <div
            style="display: flex; flex-direction: column; justify-content: start; align-items: start; position: absolute; bottom: 16px; left: 16px; z-index: 2; width: 100%; padding-right: 30px; gap: 12px;">
            <div>
                <p style="font-weight: 700; font-size: 35px; color: var(--secondary-txt-color); ">{{ data.title }}</p>
                <p style="font-weight: 400; font-size: 21px; color: var(--primary-txt-color);">{{ data.subTitle }}</p>
            </div>

            <div class="date-venue"
                :style="{ display: shouldShowDateVenue ? 'flex' : 'none', justifyContent: 'start', alignItems: 'start', gap: '10px', transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }">
                <v-chip size="small" prepend-icon="mdi-calendar" variant="outlined"
                    style="font-size: 10px; font-weight: 500; border-color: #49454F;">
                    <template #prepend>
                        <v-icon color="#D0BCFE">mdi-calendar</v-icon>
                    </template>
                    <p style="color: var(--secondary-txt-color); font-size: 10px; ">
                        {{ data.eventDate }}
                    </p>
                </v-chip>

                <v-chip size="small" prepend-icon="mdi-map-marker-radius" variant="outlined"
                    style="font-size: 10px; font-weight: 500; border-color: #49454F;">
                    <template #prepend>
                        <v-icon style="color: #e50914">mdi-map-marker-radius</v-icon>
                    </template>
                    <p style="color: var(--secondary-txt-color); font-size: 10px; ">
                        {{ data.location }}
                    </p>
                </v-chip>
            </div>

            <div class="description-analytics-btn"
                :style="{ width: '100%', display: shouldShowDescriptionAnalytics ? 'flex' : 'none', justifyContent: 'space-between', alignItems: 'center', transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms' }">
                <p style="color: var(--primary-txt-color); font-size: 12px;">Lorem ipsum dolor sit amet, consectetur
                    adipiscing
                    elit, sed do eiusmod tempor</p>
                <v-btn prepend-icon="mdi-inbox-arrow-up-outline" rounded="xl" variant="outlined"
                    style="border-color: var(--primary-border-color); color: var(--quadnary-color); font-size: 12px;">
                    View Analytics
                </v-btn>
            </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
        default: () => ({
            id: 0,
            title: '',
            subTitle: '',
            eventDate: '',
            completed: false,
            location: '',
            imgURL: '',
        }),
    },
    isScrolled: {
        type: Boolean,
        required: true,
        default: false
    },
    scrollY: {
        type: Number,
        required: true,
        default: 0
    }
});

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});


const shouldShowDateVenue = computed(() => {
    if (windowWidth.value <= 500) return false;
    return props.scrollY < 100;
});

const shouldShowDescriptionAnalytics = computed(() => {
    if (windowWidth.value <= 500) return false;
    return props.scrollY < 100;
});

</script>

<style scoped>
</style>
