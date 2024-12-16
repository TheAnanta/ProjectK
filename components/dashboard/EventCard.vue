<template>
    <div class=""
        @click="() => {
            router.push(`/event?eventId=${data.id}`)
        }"
        :style="{ height: '300px', border: '2px solid #49454f', borderRadius: '12px', position: 'relative', padding: '10px', overflow: 'hidden' }">
        
        <!-- Grayscale background image -->
        <div 
            :style="{ 
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

        <!-- Black Fade Image -->
        <img src="/img/dashboard/blackFade.png" alt="Black fade"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;">

        <!-- Content -->
        <v-col style="position: absolute; bottom: 16px; left: 16px; z-index: 2;">
            <div style="margin-bottom: 20px;">
                <p style="font-weight: 700; font-size: 18px; color: var(--secondary-txt-color);">{{ data.title }}</p>
                <p style="font-weight: 400; font-size: 11px; color: var(--primary-txt-color);">{{ data.subTitle }}</p>
            </div>

            <v-row style="gap: 10px; margin-bottom: 10px;">
                <v-chip size="small" prepend-icon="mdi-calendar" variant="outlined" style="font-size: 10px; font-weight: 500; border-color: #49454F;">
                    <template #prepend>
                        <v-icon color="#D0BCFE">mdi-calendar</v-icon>
                    </template>
                    <p style="color: var(--secondary-txt-color);">
                        {{ data.eventDate }}
                    </p>
                </v-chip>

                <v-chip size="small" prepend-icon="mdi-map-marker-radius" variant="outlined"
                    style="font-size: 10px; font-weight: 500; border-color: #49454F;">
                    <template #prepend>
                        <v-icon style="color: #e50914">mdi-map-marker-radius</v-icon>
                    </template>
                    <p style="color: var(--secondary-txt-color);">
                        {{ data.location }}
                    </p>
                </v-chip>
            </v-row>

            <v-row style="gap: 20px;">
                <v-btn size="small" variant="tonal" style="background-color: var(--quadnary-color); border-radius: 100px; color: var(--secondary-color); font-size: 9px;">
                    Host an event
                </v-btn>
                <v-btn size="small" variant="outlined" style="border-color: #938F99; border-radius: 100px; color: var(--quadnary-color ); font-size: 9px;">
                    Learn more
                </v-btn>
            </v-row>
        </v-col>

        <!-- Complete Tag -->
         <img v-if="data.completed"  src="/img/dashboard/Complete-tag.png" alt="Event Complete Tag" style="position: absolute; top: 0; right: 0; z-index: 2; width: 100px;">
    </div>
</template>

<script setup>
const router = useRouter();
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
});
</script>
