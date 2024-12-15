<template>
    <div
        style="width: 100vw; height: 360px; background-color: var(--primary-bg-color); padding: 10px 40px 30px 130px; position: relative;">
        <v-col>
            <v-row justify="space-between" style="margin: 0;">
                <img src="/logo/theananta-logo.png" alt="theananta logo" width="70.px" height="36px">
                <v-btn variant="tonal" style="background-color: var(--primary-color); border-radius: 100px; color: var(--quadnary-color);">
                    Sign in
                </v-btn>
            </v-row>

            <img src="/img/hero/hero-img.png" alt="Hero Img" style="position: absolute; bottom: 0; right: 0; z-index: 10;"
                width="410px" height="295px">

            <div
                style="display: flex; flex-direction: column; justify-content: start; align-items: start; gap: 12px; color: white;">
                <p style="font-size: 38px; font-weight:bolder; margin-top: 20px;">
                    Events <br>Simplified
                </p>
                <p style="font-size: 12px; font-weight:400; margin-bottom: 20px;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Natus ad, nihil iste quo maiores.
                </p>

                <v-row style="gap: 20px;">
                    <v-btn variant="tonal" style="background-color: var(--quadnary-color); border-radius: 100px; color: var(--secondary-color);">
                        Host an event
                    </v-btn>
                    <v-btn variant="outlined" style="border-color: #938F99; border-radius: 100px; color: var(--quadnary-color );">
                        Learn more
                    </v-btn>
                </v-row>
            </div>
        </v-col>
        <div
            style="width: 110vw; height: 50px; background-color: var(--tertiary-color); padding: 0px 10px; display: flex; justify-content: center; align-items: center; position: absolute; bottom: 0; left: 30px; rotate: -13deg;">
            <p style="color: white; font-size: 16px; font-weight: 500; text-wrap: nowrap;">
                ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE
                • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE
                • ABCDE • ABCDE
                • ABCDE • ABCDE • ABCDE
            </p>
        </div>
    </div>
    <div
        style="width: 100vw; height: 50px; background-color: var(--primary-color); padding: 0px 10px; display: flex; justify-content: center; align-items: center; z-index: 10; position: relative;">
        <p style="color: white; font-size: 16px; font-weight: 500; text-wrap: nowrap;">
            ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE
            • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE
            • ABCDE • ABCDE
            • ABCDE • ABCDE • ABCDE
        </p>
    </div>
</template>