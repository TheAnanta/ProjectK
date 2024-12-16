<template>
    <div
        @click="onFileUpload()"
        style=" border: 2px dashed #3c3c3c; border-radius: 8px; padding: 40px 20px; display: flex; justify-content: center; align-items: center; color: var(--primary-border-color); cursor: pointer;">
        <v-icon size="50px">
            mdi-cloud-upload-outline
        </v-icon>
        <p style="font-size: large;">Upload files here</p>
    </div>

    <!-- Hidden File Input -->
    <input type="file" ref="FileInput" accept="image/*" style="display: none;" @change="handleFileChange">
</template>

<script setup>
    const isMounted = useState('isMounted', () => false);
    const FileInput = useState('FileInput', () => null);

    onMounted(() => {
        isMounted.value = true;
    });

    const onFileUpload = async () => {
        if (isMounted.value) {
            FileInput.value?.click();
        } else {
            console.error("FileInput ref not yet available");
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