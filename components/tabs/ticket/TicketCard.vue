<template>
    <div class="card-container"
        style="display: flex; flex-direction: column; justify-content: center; align-items: center;">

        <div
            style="width: 100%; height: 140px; background: var(--tertiary-bg-color); position: relative; border-radius: 18px; display: flex; justify-content: center; align-items: center; padding: 12px;">

            <!-- oval left -->
            <div
                style="width: 30px; height: 25px; background-color: var(--secondary-bg-color); border-radius: 100%; position: absolute; left: -5%; top: 50%; transform: translateY(-50%); z-index: 1;">
            </div>

            <!-- oval Right -->
            <div
                style="width: 30px; height: 25px; background-color: var(--secondary-bg-color); border-radius: 100%; position: absolute; right: -5%; top: 50%; transform: translateY(-50%); z-index: 1;">
            </div>

            <!-- Content Container -->
            <div
                style="width: 100%; height: 100%; padding: 4px 18px; display: flex; justify-content: space-between; align-items: center; border: 2px dashed var(--primary-chip-color); border-radius: 18px;">

                <!-- Left Most Content ( Ticket type | Date | Event mode ) -->
                <div
                    style="display: flex; flex-direction: column; justify-content: start; align-items: start; gap: 2px;">
                    <p style="font-weight: bold; font-size: 16px; text-transform: uppercase; color: white;">one day <br>
                        ticket</p>
                    <p style="font-weight: 500; font-size: 10px; color: white; opacity: 50%;">8th October</p>
                    <p
                        style="font-weight: 700; font-size: 10px; text-transform: uppercase; color: white; letter-spacing: 1px;">
                        offline</p>
                </div>

                <!-- Right Most Content ( Price | Bar Code ) -->
                <div style="height: 100%; display: flex; justify-content: center; align-items: center; gap: 12px;">

                    <!-- Price + Tax ( Text ) -->
                    <div style="align-self: end;">
                        <p style="font-weight: 400; font-size: 8px; color: white; opacity: 50%;">inclusive of taxes</p>
                        <p style="font-weight: bold; font-size: 26px; color: white;">₹500</p>
                    </div>

                    <!-- Bar Code -->
                    <img src="/img/event/bar-code.svg" alt="Event Bar Code">
                </div>
            </div>
        </div>

        <!-- Sold Count | Edit | Delete Options -->
        <div
            style="width: 100%; background-color: var(--quadnary-bg-color); border-radius: 18px; padding: 14px; display: flex; justify-content: space-between; align-items: center;"
        >   
            <div 
                style="width: 60%; border: 2px dashed var(--primary-chip-color); border-radius: 18px; padding: 14px; display: flex; justify-content: center; align-items: center; align-self: self-start;"
            >
                <p style="font-weight: 500px; font-size: 12px; letter-spacing: 1px; color: white;">120 sold/500</p>
            </div>

            <div style="display: flex; flex: 1; justify-content: space-evenly; align-items: center;">

                <v-icon>
                    mdi-pencil-outline
                </v-icon>
                <v-icon>
                    mdi-trash-can-outline
                </v-icon>
            </div>

        </div>
    </div>
</template>

<style scoped>
.card-container {
    width: 300px;
}
</style>
