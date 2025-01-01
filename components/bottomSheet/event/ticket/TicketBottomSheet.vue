<template>
    <v-bottom-sheet class="ticket-bottom-sheet" v-model="localSheet" style="z-index: 1000; color: white;"
        height="700">
        <v-card class="grid-temp-cols-ticket"
            style="background-color: var(--secondary-bg-color); display: grid; gap: 20px; color: var(--quadnary-color); padding: 16px;">

            <!-- Sheet Title -->
            <p style="font-size: 24px; font-weight: bold;">Add or Edit Ticket</p>

            <!-- Ticket Title -->
            <v-text-field v-model="ticketData.title" label="Ticket Title" variant="outlined" class="grid-cols-ticket"
                style=""></v-text-field>

            <!-- Single Day Ticket | Multi Day Ticket -->
            <div>
                <p>
                    Is this ticket for a single day or multiple days?
                </p>
                <v-radio-group v-model="ticketData.ticketType" inline class="grid-cols-ticket">
                    <v-radio label="Single Day Ticket" value="singleDayTicket"></v-radio>
                    <v-radio label="Multi Day Ticket" value="multiDayTicket"></v-radio>
                </v-radio-group>
            </div>

            <!-- Event Dates 📆 -->
            <div class="eventDateInputs grid-cols-ticket" style=" display: flex; justify-content: start; gap: 30px;">
                <!-- Event From -->
                <v-date-picker v-model="fromDate" tile="false" title="Choose date | Ticket Applicable from!"
                    bg-color="#222026" theme="dark" style="color: var(--primary-txt-color);"></v-date-picker>

                <!-- Event Till -->
                <v-date-picker v-model="tillDate" v-if="ticketData.ticketType == 'multiDayTicket'"
                    title="Choose date | Ticket Applicable till!" bg-color="#222026" theme="dark"
                    style="color: var(--primary-txt-color);"></v-date-picker>
            </div>

            <!-- Event Mode ( offline | online ) -->
            <div class="grid-cols-ticket">
                <p>How will attendees participate in the event?</p>
                <v-radio-group inline v-model="ticketData.mode">
                    <v-radio label="Offline" value="offline"></v-radio>
                    <v-radio label="Online" value="online"></v-radio>
                </v-radio-group>
            </div>

            <!-- Ticket Price -->
            <v-text-field type="number" v-model="ticketData.price" label="Ticket Price ( ₹ )" variant="outlined"
                clear-icon="mdi-cash-multiple" prefix="₹" theme="dark"></v-text-field>

            <!-- Total Tickets limit -->
            <v-text-field type="number" v-model="ticketData.totalTicketsCount" label="Total Tickets limit"
                variant="outlined" clear-icon="mdi-ticket-percent"
                prepend-inner-icon="mdi-ticket-percent-outline"></v-text-field>

            <!-- Toggler -> All tickets sold -->
            <v-checkbox v-model="ticketData.sold" color="success" label="All tickets sold?" value="success"
                hide-details></v-checkbox>

            <!-- Save -->
            <v-btn variant="tonal" @click="closeSheet" class="grid-cols-ticket"
                style="width: 30%; margin: 0 auto;">Save</v-btn>
        </v-card>
    </v-bottom-sheet>
</template>

<script setup>
import { ref } from "vue";
import { orj_to_custom_single_day, orj_to_custom_multi_day } from "../../../../helper/formatter/dateFormatter";

const ticketData = ref({
    title: '',
    ticketType: '',
    date: '',
    mode: '',
    price: 0,
    totalTicketsCount: 0,
    soldTicketCount: 0,
    sold: false,
});

const fromDate = ref(null);
const tillDate = ref(null);

const props = defineProps({
    sheet: {
        type: Boolean,
        required: true,
        default: false
    },
});
const emit = defineEmits(['update:sheet']);

const localSheet = ref(props.sheet);

watch(
    () => props.sheet, (newVal) => {
        localSheet.value = newVal;
    }
);

const closeSheet = () => {
    // Formate the date
    const formattedDateString = ticketData.value.ticketType === 'multiDayTicket' ? orj_to_custom_multi_day(fromDate.value, tillDate.value) : orj_to_custom_single_day(fromDate.value);
    ticketData.value.date = formattedDateString;
    emit('update:sheet', false);
};

</script>

<style>
.ticket-bottom-sheet {
    width: 80% !important; 
}

.grid-temp-cols-ticket {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-ticket {
    grid-column: span 2 / span 2;
}


@media screen and (max-width: 640px) {
    .grid-temp-cols-ticket {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .grid-cols-ticket {
        grid-column: span 1 / span 1;
    }

    .eventDateInputs {
        flex-direction: column;
    }

    .ticket-bottom-sheet {
        width: 100% !important;
    }
}
</style>