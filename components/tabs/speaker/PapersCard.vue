<template>
    <div style="border: 1px solid var(--tertiary-txt-color); border-radius: 12px; padding: 16px; display: flex; justify-content: space-between; align-items: center;">

        <div style="display: flex; flex-direction: column; justify-content: start; align-items: start; gap: 12px;">
            <!-- Title -->
            <p style="font-size: 16px; font-weight: 500; color: var(--secondary-txt-color);">Nand2Tetris</p>

            <!-- Chips -->
            <div style="display: flex; justify-content: start; gap: 12px;">
                <v-chip prepend-icon="mdi-map-marker-outline" style="color: var(--quadnary-color)">
                    <p style="color: var(--primary-txt-color)">
                        General
                    </p>
                </v-chip>

                <v-chip prepend-icon="mdi-map-marker-outline" variant="outlined"
                    style="border-color: var(--tertiary-txt-color); color: var(--quadnary-color)">
                    <p style="color: var(--primary-txt-color)">
                        Codelab
                    </p>
                </v-chip>
            </div>

            <!-- Description -->
            <p class="line-clamp-3" style="width: 90%; font-size: 14px; font-weight: 400; color: var(--secondary-txt-color); text-wrap: wrap;">
                Microservices are an architectural approach to developing software applications as a collection of
                small, independent services that communicate with each other over a network.
                small, independent services that communicate with each other over a network.
                small, independent services that communicate with each other over a network.
                small, independent services that communicate with each other over a network.
            </p>
        </div>

        <div style="text-align: center; gap: 12px;">
            <p style="font-size: 24px; font-weight: 500;">100</p>
            <p style="font-size: 14px; font-weight: 500;">applications</p>
        </div>
    </div>

</template>
