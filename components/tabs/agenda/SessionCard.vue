<template>
    <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 16px;">
        <div style="width: 100%; display: flex; justify-content: start; gap: 16px;">

            <!-- Time -->
            <div style="display: flex; flex-direction: column; justify-content: start; gap: 5px;">
                <p style="font-size: 20px; font-weight: 500; color: var(--primary-txt-color);">10:00 AM</p>
                <p style="font-size: 15px; font-weight: 500; color: var(--primary-txt-color); opacity: 70%;">10:20 AM
                </p>
                <p style="font-size: 10px; font-weight: 500; color: var(--primary-txt-color); opacity: 70%;">(20 mins)
                </p>
            </div>

            <!-- Event Description -->
            <div style="display: flex; flex-direction: column; justify-content: start; flex: 1;">

                <!-- Session Type -->
                <p style="text-transform: uppercase; font-size: 12px; font-weight: 500; color: #49454F;">codelab</p>

                <!-- Session Topic -->
                <p style="font-size: 16px; font-weight: 400; color: var(--secondary-txt-color);">
                    Getting Started with GenKit</p>

                <!-- Session Description -->
                <p style="font-size: 14px; font-weight: 400; color: var(--tertiary-txt-color);">
                    Supporting line text lorem ipsum dolor sit amet, consectetur.</p>

                <!-- Chips -->
                <div style="display: flex; justify-content: start; gap: 5px; align-items: start; margin-top: 8px;">

                    <!-- Venue -->
                    <v-chip prepend-icon="mdi-map-marker-outline" variant="outlined"
                        style="border-color: var(--tertiary-txt-color); color: var(--quadnary-color)">
                        <p style="color: var(--primary-txt-color)">
                            Lab Alpha
                        </p>
                    </v-chip>

                    <!-- Category -->
                    <v-chip class="categoryType" variant="elevated" :color="'var(--primary-chip-color)'" >
                        <v-icon :color="'var(--quinary-color)'" icon="mdi-star-outline"></v-icon>
                        <p
                            style="color: var(--quadnary-txt-color); font-weight: 500; font-size: 11px; margin-left: 7px;">
                            AI/ML
                        </p>
                    </v-chip>

                    <!-- Speaker -->
                    <v-chip variant="outlined"
                        style="border-color: var(--tertiary-txt-color); color: var(--quadnary-color); padding: 0px 5px;">
                        <img src="https://s3-alpha-sig.figma.com/img/ad02/30e5/1cf72c468f60f22a06ee0b26b40e974f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GCaQ8qpTks6x1Im5W-iOT76lBntVaHDVCvG10YMGDGh0Z6GcQsVs75MUV4HeM~DrYY41b9vN2MZQ5a2hk5zhzBJfLXWAbrq2gsfuVuvLwmgz4cwN8qHj030R1hr5MBpd4JhWriER1F5-9yOtLX6AeturXIdaeVbKe3lRnlbd4x375RsmQ7Qz4h~jzEsAmtAG9xDv6tQDMAi11Py2JP1uJRwOyIoEXYmIlBuTyHMcOlGIkafWWwmSPMQqhyLPJIvnGmfZ4jmKew0KSmvkIBnzJvy6KX5LIXuStkcrAyICz1AW9~~A4yroGy31Jd0EMEPtmV3OAarFXZxHnLRaAmu4OA__"
                            alt="Michaelangelo Singh" style="width: 20px; height: 20px;">
                        <p style="color: var(--primary-txt-color); margin-left: 7px">
                            Michaelangelo Singh
                        </p>
                    </v-chip>
                </div>
            </div>

            <!-- Action Buttons [ Delete | Edit ] -->
            <div style="width: 72px; display: flex; justify-content: space-between; align-items: start; cursor: pointer;">
                <v-icon :color="'var(--primary-red-color)'">
                    mdi-trash-can-outline
                </v-icon>
                <v-icon>
                    mdi-pencil
                </v-icon>
            </div>
        </div>

        <!-- Divider -->
         <div style="width: 100%; height: 1px; background: var(--tertiary-txt-color);"></div>
    </div>
</template>
