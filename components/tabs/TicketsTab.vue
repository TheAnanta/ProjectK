<template>
    <div
        style="width: 100%; height: 100vh; padding: 0px 2rem; display: flex; flex-wrap: wrap; justify-content: center; align-items: start; gap: 40px; margin-top: 20px;">

        <TabsTicketCard v-for="(ticket, index) in TicketsData" :key="index" :ticketData="ticket"/>
    </div>
</template>

<script setup>

const TicketsData = [
    {
        title: 'one day ticket',
        date: '8th October',
        mode: 'offline',
        price: 500,
        totalTicketsCount: 500,
        soldTicketCount: 120,
        sold: false,
    },
    {
        title: 'one day ticket',
        date: '8th October',
        mode: 'offline',
        price: 500,
        totalTicketsCount: 500,
        soldTicketCount: 500,
        sold: true,
    },
    {
        title: 'one day ticket',
        date: '8th October',
        mode: 'offline',
        price: 500,
        totalTicketsCount: 500,
        soldTicketCount: 120,
        sold: false,
    },
    {
        title: 'one day ticket',
        date: '8th October',
        mode: 'offline',
        price: 500,
        totalTicketsCount: 500,
        soldTicketCount: 120,
        sold: false,
    },
]

</script>