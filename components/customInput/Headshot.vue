<template>
    <div
        @click="headshotUpload()"
        style="width: 100px; height: 100px; margin: 0 auto; border-radius: 100%; cursor: pointer; background-image: url('/img/non-user.png'); background-position: center; background-repeat: no-repeat; background-size: cover; position: relative;">
        <div class="edit-overlay"
            style="position: absolute; background-color: rgba(73, 69, 79, 0.8); width: 40px; height: 40px; border-radius: 80px; z-index: 2000; cursor: pointer; display: flex; justify-content: center; align-items: center; bottom: 0; right: 0;">
            <v-icon size="20" :color="'var(--quadnary-color)'">mdi-pencil</v-icon>
        </div>
    </div>

    <!-- Hidden File Input -->
    <input type="file" ref="HeadShotInput" accept="image/*" style="display: none;" @change="handleFileChange">
</template>

<script setup>
const isMounted = useState('isMounted', () => false);
const HeadShotInput = useState('HeadShotInput', () => null);

onMounted(() => {
    isMounted.value = true;
});

const headshotUpload = async () => {
    if (isMounted.value) {
        HeadShotInput.value?.click();
    } else {
        console.error("HeadShotInput ref not yet available");
    }
};

// TODO: Need to functionality for Receving `Single File & Multi-File Upload`
async function handleFileChange(event) {
    // const file = event.target.files[0];
    // if (file) {
    //     console.log("Selected file:", file);
    //     isUploadingFile.value = true;
    //     const newHeadShot = ref(storage, `headshots/${user.value.uid}.png`);

    //     try {
    //         await uploadBytes(newHeadShot, file);
    //         const headshotURL = await getDownloadURL(newHeadShot);
    //         console.log("Headshot URL = ", headshotURL);

    //         await updateDoc(doc(db, "users", user.value.uid), {
    //             photoURL: headshotURL
    //         });
    //         userDetails.value.photoURL = headshotURL;
    //         isUploadingFile.value = false;
    //         alert('Headshot updated successfully ✅')
    //     } catch (error) {
    //         isUploadingFile.value = false;
    //         console.error("Error in Uploading headshot to cloud!! = ", error);
    //         alert("Error in saving your request!");
    //     }
    // }
};
</script>