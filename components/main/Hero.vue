<template>
    <div class="hero-container"
        style="width: 100vw; background-color: var(--primary-bg-color); position: relative; overflow: hidden;">
        <v-col class="content-container">
            <v-row justify="end" style="margin: 0;">
                <v-btn class="signinBtn" variant="tonal"
                    style="background-color: var(--primary-color); border-radius: 100px; color: var(--quadnary-color);">
                    Sign in
                </v-btn>
            </v-row>

            <img class="heroImg" src="/img/hero/hero-img.png" alt="Hero Img"
                style="position: absolute; bottom: 0; right: 0; z-index: 10;">

            <div class="content"
                style="display: flex; flex-direction: column; justify-content: start; align-items: start; gap: 12px; color: white;">
                <img src="/logo/theananta-logo.png" alt="theananta logo" width="70.px" height="36px">
                <p style="font-size: 38px; font-weight:bolder;">
                    Events <br>Simplified
                </p>
                <p style="font-size: 12px; font-weight:400; margin-bottom: 20px;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Natus ad, nihil iste quo maiores.
                </p>

                <div style="display: flex; justify-content: start; align-items: start; gap: 20px; flex-wrap: nowrap;">
                    <v-btn @click="router.push('/dashboard')" variant="tonal"
                        style="background-color: var(--quadnary-color); border-radius: 100px; color: var(--secondary-color);">
                        Host an event
                    </v-btn>
                    <v-btn variant="outlined"
                        style="border-color: #938F99; border-radius: 100px; color: var(--quadnary-color );">
                        Learn more
                    </v-btn>
                </div>
            </div>
        </v-col>
        <div class="common-multer"
            style="width: 127vw; height: 50px; background-color: var(--tertiary-color); padding: 0px 10px; display: flex; justify-content: center; align-items: center; position: absolute; left: -30px; rotate: -13deg;">
            <p style="color: white; font-size: 16px; font-weight: 500; text-wrap: nowrap;">
                ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE
                • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE
                • ABCDE • ABCDE
                • ABCDE • ABCDE • ABCDE
            </p>
        </div>
        <div class="mobile-multer"
            style="width: 100vw; height: 50px; background-color: var(--primary-color); padding: 0px 10px; justify-content: center; align-items: center; z-index: 10;">
            <p
                style="color: white; font-size: 16px; font-weight: 500; text-wrap: nowrap; width: 100%; overflow: hidden;">
                ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE
                • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE
                • ABCDE • ABCDE
                • ABCDE • ABCDE • ABCDE
            </p>
        </div>
    </div>
    <div class="pc-multer"
        style="width: 100vw; height: 50px; background-color: var(--primary-color); padding: 0px 10px; justify-content: center; align-items: center; z-index: 10; position: relative;">
        <p
            style="color: white; font-size: 16px; font-weight: 500; text-wrap: nowrap; width: 100%; overflow: hidden;">
            ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE
            • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE • ABCDE
            • ABCDE • ABCDE
            • ABCDE • ABCDE • ABCDE
        </p>
    </div>

</template>

<script setup>
const router = useRouter();
</script>

<style scoped>
.hero-container {
    height: 400px;
    padding: 10px 40px 30px 130px;
}

.signinBtn {
    display: block;
}

.heroImg {
    width: 410px;
    height: 295px;
}

.mobile-multer {
    display: none;
}

.pc-multer {
    display: flex;
}

.common-multer {
    bottom: 0;
}

@media screen and (max-width: 1230px) {
    .hero-container {
        padding: 10px 20px 30px 0px;
    }

    .content-container {
        padding-left: 20px;
    }
}

@media screen and (max-width: 640px) {
    .signinBtn {
        display: none;
    }

    .content {
        margin-top: 50px;
    }

    .hero-container {
        height: 100vh;
    }


    .heroImg {
        width: 328px;
        height: 236px;
        margin-bottom: 40px;
    }

    .mobile-multer {
        display: flex;
        position: absolute;
        bottom: 0;
    }

    .pc-multer {
        display: none;
    }

    .common-multer {
        bottom: 64px;
    }

}
</style>