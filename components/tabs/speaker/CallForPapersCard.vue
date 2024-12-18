<template>
    <div
        style="border: 1px solid var(--tertiary-txt-color); border-radius: 12px; padding: 16px; display: flex; justify-content: space-between; align-items: center;">

        <div style="display: flex; flex-direction: column; justify-content: start; align-items: start; gap: 12px;">
            <!-- Title -->
            <p style="font-size: 16px; font-weight: 500; color: var(--secondary-txt-color);">Building Pokedex with Angular</p>

            <!-- Chips -->
            <div style="display: flex; justify-content: start; gap: 12px;">
                <v-chip prepend-icon="mdi-map-marker-outline" style="color: var(--quadnary-color)">
                    <p style="color: var(--primary-txt-color)">
                        Web
                    </p>
                </v-chip>

                <v-chip variant="outlined"
                    style="border-color: var(--tertiary-txt-color); color: var(--quadnary-color); padding: 0px 5px;">
                    <img src="https://s3-alpha-sig.figma.com/img/ad02/30e5/1cf72c468f60f22a06ee0b26b40e974f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GCaQ8qpTks6x1Im5W-iOT76lBntVaHDVCvG10YMGDGh0Z6GcQsVs75MUV4HeM~DrYY41b9vN2MZQ5a2hk5zhzBJfLXWAbrq2gsfuVuvLwmgz4cwN8qHj030R1hr5MBpd4JhWriER1F5-9yOtLX6AeturXIdaeVbKe3lRnlbd4x375RsmQ7Qz4h~jzEsAmtAG9xDv6tQDMAi11Py2JP1uJRwOyIoEXYmIlBuTyHMcOlGIkafWWwmSPMQqhyLPJIvnGmfZ4jmKew0KSmvkIBnzJvy6KX5LIXuStkcrAyICz1AW9~~A4yroGy31Jd0EMEPtmV3OAarFXZxHnLRaAmu4OA__"
                        alt="Michaelangelo Singh" style="width: 20px; height: 20px;">
                    <p style="color: var(--primary-txt-color); margin-left: 7px">
                        Michaelangelo Singh
                    </p>
                </v-chip>
            </div>

            <!-- Description -->
            <p class="line-clamp-3"
                style="width: 90%; font-size: 14px; font-weight: 400; color: var(--secondary-txt-color); text-wrap: wrap;">
                Microservices are an architectural approach to developing software applications as a collection of small, independent services that communicate with each other over a network.
                Microservices are an architectural approach to developing software applications as a collection of small, independent services that communicate with each other over a network.
                Microservices are an architectural approach to developing software applications as a collection of small, independent services that communicate with each other over a network.
            </p>
        </div>

        <v-icon color="#EADDFF" style="width: 13px; height: 13px; align-self: start; cursor: pointer">mdi-arrow-top-right</v-icon>
    </div>

</template>
