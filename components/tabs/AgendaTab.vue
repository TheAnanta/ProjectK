<template>
    <div style="width: 100%;">
        <v-card style="background-color: var(--secondary-bg-color); color: var(--primary-txt-color);">
            <v-tabs v-model="tab" align-tabs="center" :color="'#D0BCFE'" style="outline: 1px solid var(--tertiary-txt-color);" height="60px">
                <!-- <v-tab v-for="(item, index) in eventTabsHeads" :key="index">{{ item.title }}</v-tab> -->
                <v-tab>7th Dec | Day 1</v-tab>
                <v-tab>8th Dec | Day 2</v-tab>
            </v-tabs>

            <v-card-text style="padding: 2rem">
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="7th Dec | Day 1">
                        <TabsAgendaSessionCard/>
                        <TabsAgendaSessionCard/>
                        <TabsAgendaSessionCard/>
                        <TabsAgendaSessionCard/>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>   
    </div>
</template>
<script setup>
const tab = ref('7th Dec | Day 1');

// 📍 TODO: this get should only be called ONCE, when user arrives at event page specifically. 
// And again GET can be done, if agenda data gets updated.
// Mostly data may be needs to be passed from EVENT index page.
/*
onMounted(() => {
    // @onMounted | call Cloud Function | Method : GET
    const getAgendaData = async () => {
        try {
            const response = await fetch('https://firebase/event/getAgenda?eventID=101'
            )
        } catch (error) {
            console.error("Error Occured in getting agenda data : ", error);
        }
    };
});
*/

// @click | call Cloud Function | Method : POST
const onSave = async () => {
    try {
        const response = await fetch('https://firebase/event/agenda', 
            {
                method: "POST",
                body: JSON.stringify()
            }
        )
    } catch (error) {
        console.error("Error Occured in General Tab on Saving data : ", error);
    }
};
</script>
