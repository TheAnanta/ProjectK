<template>
    <div class="main-container" style="width: 100%; display: flex; flex-direction: column; justify-content: center;">

        <!-- Speakers -->
        <div style="width: 100%;  display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <p
                style="font-weight: 500; font-size: 14px; letter-spacing: 0.1px; margin-bottom: 16px; color: white; text-align: left; width: 100%;">
                Speakers</p>

            <div class="speakers-container" style="width: 100%;"
                >
                <TabsSpeakerCard v-for="(item, index) in speakersData" :key="index" :data="item" />
            </div>
        </div>

        <!-- Call for papers -->
        <div
            style="width: 100%;  display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 20px;">
            <p
                style="font-weight: 500; font-size: 14px; letter-spacing: 0.1px; margin-bottom: 16px; color: white; text-align: left; width: 100%;">
                Call for papers</p>

            <div class="papersCardsContainer" style="display: grid;  gap: 16px;">
                <TabsSpeakerCallForPapersCard />
                <TabsSpeakerCallForPapersCard />
                <TabsSpeakerCallForPapersCard />
            </div>
        </div>

        <!-- Papers -->
        <div
            style="width: 100%;  display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 20px;">
            <p
                style="font-weight: 500; font-size: 14px; letter-spacing: 0.1px; margin-bottom: 16px; color: white; text-align: left; width: 100%;">
                Papers</p>

            <div class="papersCardsContainer" style="display: grid; gap: 16px;">
                <TabsSpeakerPapersCard />
                <TabsSpeakerPapersCard />
            </div>
        </div>
    </div>
</template>

<script setup>

// Static DEMO data
const speakersData = [
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/ad02/30e5/1cf72c468f60f22a06ee0b26b40e974f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GCaQ8qpTks6x1Im5W-iOT76lBntVaHDVCvG10YMGDGh0Z6GcQsVs75MUV4HeM~DrYY41b9vN2MZQ5a2hk5zhzBJfLXWAbrq2gsfuVuvLwmgz4cwN8qHj030R1hr5MBpd4JhWriER1F5-9yOtLX6AeturXIdaeVbKe3lRnlbd4x375RsmQ7Qz4h~jzEsAmtAG9xDv6tQDMAi11Py2JP1uJRwOyIoEXYmIlBuTyHMcOlGIkafWWwmSPMQqhyLPJIvnGmfZ4jmKew0KSmvkIBnzJvy6KX5LIXuStkcrAyICz1AW9~~A4yroGy31Jd0EMEPtmV3OAarFXZxHnLRaAmu4OA__',
        speakerName: 'Michaelangelo Singh',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/c288/10f7/72a98a2e7933d4dec7904c11bf11ad82?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIz5HdTY4d7rCL3r99kGu9NJGy9t0cFuPMoMXA9rMCMXaosN37qz2SQ28z5laUW7N8F~yrBMMfzULszxIIyQOkeTUFbo8Z7nS6eSsnvCy6JyQd2zGMacMv-PAJznXyKoUwVxc2DChMPdbAJHETuMHQg~UyWb4wrioDs7TNJQcsSS~GgFJDGLi7tjSjaZK7FPvOXO~NGwOfnMahXHBaKyTH8GpeGICXxJ0IcqeEjeB6XQ85oiyZ1uYyfR36D2o8OJa0KIZFIrLkfmNQsQY1P4oABMbRSvs8eMNyKMDmDBMWcQ1I5ZgKGKqLYTSYJNih81S8bG~GCN3qgzbZU4T8ciQg__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'COO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/a0b8/46e7/6cae6700516f401c2b0ddceeb96a6402?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbtzKr1Ii5hJuDAp4lRgVg2w6IyUHEGgzK44VtsWcYtmAeiGNMVPtzPVcx3hCwC3HX0XHTb0ew2lV0QV8rpxzIn-NMmlzRoLT0R13QifgmslQ13VAomfFMGMBuzcdjD3XK24V6V0IZrx~EdYuC7ssCo-sx9tO6~Kfy21dSaVkLYLtxo4859F0Kwdw3OP-DQrQwi7GYIZwTfhtEf~BqfIU8MiPPBHvLKc3eRQZNaFBJbp-tCLRkSjYhurfL6aRxdOlIKEJa5MTuw-NdIalDzeQaq1sIsBriQLo~iVGuNnowDbuAJtG1yChX1QCQPk~B3r~IKWsoLdITTpNNyUsSnThw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'CEO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/f290/5db0/cff0258fe1161e71ce0b684c9616c5ef?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NcexAfSL1oBpgFx4mGrZWKBmIBPZCybcLN1s0kH3UPxbA4jx2cn4fwsu5w6cP-PYjQLfOXJBoSiJkq3EXpja7RW7xHWRqMr5Iv3ob0c5xExtwOEQlLF4T80M8dK~e9MOCNG6UaTALCYP-3yspturih60bXOh4QkYO6kgW~WLQHvCZG0wfiGoUWCBh4un05nVglLcwKsSoCP50AFKh1kkEbO11B-s-O5gDn8PCvaReBHq3jgI~-KlHdAsrwoN0jzr4R1KvaHky73YD5N~BvXKyxvUyIPgGZmbdUElJfjR-SfOuP-gmILB~cXHYzGum9~bxNHO9IaqTRfB9t0Gw57kvw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/ad02/30e5/1cf72c468f60f22a06ee0b26b40e974f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GCaQ8qpTks6x1Im5W-iOT76lBntVaHDVCvG10YMGDGh0Z6GcQsVs75MUV4HeM~DrYY41b9vN2MZQ5a2hk5zhzBJfLXWAbrq2gsfuVuvLwmgz4cwN8qHj030R1hr5MBpd4JhWriER1F5-9yOtLX6AeturXIdaeVbKe3lRnlbd4x375RsmQ7Qz4h~jzEsAmtAG9xDv6tQDMAi11Py2JP1uJRwOyIoEXYmIlBuTyHMcOlGIkafWWwmSPMQqhyLPJIvnGmfZ4jmKew0KSmvkIBnzJvy6KX5LIXuStkcrAyICz1AW9~~A4yroGy31Jd0EMEPtmV3OAarFXZxHnLRaAmu4OA__',
        speakerName: 'Michaelangelo Singh',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/c288/10f7/72a98a2e7933d4dec7904c11bf11ad82?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIz5HdTY4d7rCL3r99kGu9NJGy9t0cFuPMoMXA9rMCMXaosN37qz2SQ28z5laUW7N8F~yrBMMfzULszxIIyQOkeTUFbo8Z7nS6eSsnvCy6JyQd2zGMacMv-PAJznXyKoUwVxc2DChMPdbAJHETuMHQg~UyWb4wrioDs7TNJQcsSS~GgFJDGLi7tjSjaZK7FPvOXO~NGwOfnMahXHBaKyTH8GpeGICXxJ0IcqeEjeB6XQ85oiyZ1uYyfR36D2o8OJa0KIZFIrLkfmNQsQY1P4oABMbRSvs8eMNyKMDmDBMWcQ1I5ZgKGKqLYTSYJNih81S8bG~GCN3qgzbZU4T8ciQg__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'COO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/a0b8/46e7/6cae6700516f401c2b0ddceeb96a6402?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbtzKr1Ii5hJuDAp4lRgVg2w6IyUHEGgzK44VtsWcYtmAeiGNMVPtzPVcx3hCwC3HX0XHTb0ew2lV0QV8rpxzIn-NMmlzRoLT0R13QifgmslQ13VAomfFMGMBuzcdjD3XK24V6V0IZrx~EdYuC7ssCo-sx9tO6~Kfy21dSaVkLYLtxo4859F0Kwdw3OP-DQrQwi7GYIZwTfhtEf~BqfIU8MiPPBHvLKc3eRQZNaFBJbp-tCLRkSjYhurfL6aRxdOlIKEJa5MTuw-NdIalDzeQaq1sIsBriQLo~iVGuNnowDbuAJtG1yChX1QCQPk~B3r~IKWsoLdITTpNNyUsSnThw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'CEO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/f290/5db0/cff0258fe1161e71ce0b684c9616c5ef?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NcexAfSL1oBpgFx4mGrZWKBmIBPZCybcLN1s0kH3UPxbA4jx2cn4fwsu5w6cP-PYjQLfOXJBoSiJkq3EXpja7RW7xHWRqMr5Iv3ob0c5xExtwOEQlLF4T80M8dK~e9MOCNG6UaTALCYP-3yspturih60bXOh4QkYO6kgW~WLQHvCZG0wfiGoUWCBh4un05nVglLcwKsSoCP50AFKh1kkEbO11B-s-O5gDn8PCvaReBHq3jgI~-KlHdAsrwoN0jzr4R1KvaHky73YD5N~BvXKyxvUyIPgGZmbdUElJfjR-SfOuP-gmILB~cXHYzGum9~bxNHO9IaqTRfB9t0Gw57kvw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/ad02/30e5/1cf72c468f60f22a06ee0b26b40e974f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GCaQ8qpTks6x1Im5W-iOT76lBntVaHDVCvG10YMGDGh0Z6GcQsVs75MUV4HeM~DrYY41b9vN2MZQ5a2hk5zhzBJfLXWAbrq2gsfuVuvLwmgz4cwN8qHj030R1hr5MBpd4JhWriER1F5-9yOtLX6AeturXIdaeVbKe3lRnlbd4x375RsmQ7Qz4h~jzEsAmtAG9xDv6tQDMAi11Py2JP1uJRwOyIoEXYmIlBuTyHMcOlGIkafWWwmSPMQqhyLPJIvnGmfZ4jmKew0KSmvkIBnzJvy6KX5LIXuStkcrAyICz1AW9~~A4yroGy31Jd0EMEPtmV3OAarFXZxHnLRaAmu4OA__',
        speakerName: 'Michaelangelo Singh',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/c288/10f7/72a98a2e7933d4dec7904c11bf11ad82?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIz5HdTY4d7rCL3r99kGu9NJGy9t0cFuPMoMXA9rMCMXaosN37qz2SQ28z5laUW7N8F~yrBMMfzULszxIIyQOkeTUFbo8Z7nS6eSsnvCy6JyQd2zGMacMv-PAJznXyKoUwVxc2DChMPdbAJHETuMHQg~UyWb4wrioDs7TNJQcsSS~GgFJDGLi7tjSjaZK7FPvOXO~NGwOfnMahXHBaKyTH8GpeGICXxJ0IcqeEjeB6XQ85oiyZ1uYyfR36D2o8OJa0KIZFIrLkfmNQsQY1P4oABMbRSvs8eMNyKMDmDBMWcQ1I5ZgKGKqLYTSYJNih81S8bG~GCN3qgzbZU4T8ciQg__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'COO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/a0b8/46e7/6cae6700516f401c2b0ddceeb96a6402?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbtzKr1Ii5hJuDAp4lRgVg2w6IyUHEGgzK44VtsWcYtmAeiGNMVPtzPVcx3hCwC3HX0XHTb0ew2lV0QV8rpxzIn-NMmlzRoLT0R13QifgmslQ13VAomfFMGMBuzcdjD3XK24V6V0IZrx~EdYuC7ssCo-sx9tO6~Kfy21dSaVkLYLtxo4859F0Kwdw3OP-DQrQwi7GYIZwTfhtEf~BqfIU8MiPPBHvLKc3eRQZNaFBJbp-tCLRkSjYhurfL6aRxdOlIKEJa5MTuw-NdIalDzeQaq1sIsBriQLo~iVGuNnowDbuAJtG1yChX1QCQPk~B3r~IKWsoLdITTpNNyUsSnThw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'CEO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/f290/5db0/cff0258fe1161e71ce0b684c9616c5ef?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NcexAfSL1oBpgFx4mGrZWKBmIBPZCybcLN1s0kH3UPxbA4jx2cn4fwsu5w6cP-PYjQLfOXJBoSiJkq3EXpja7RW7xHWRqMr5Iv3ob0c5xExtwOEQlLF4T80M8dK~e9MOCNG6UaTALCYP-3yspturih60bXOh4QkYO6kgW~WLQHvCZG0wfiGoUWCBh4un05nVglLcwKsSoCP50AFKh1kkEbO11B-s-O5gDn8PCvaReBHq3jgI~-KlHdAsrwoN0jzr4R1KvaHky73YD5N~BvXKyxvUyIPgGZmbdUElJfjR-SfOuP-gmILB~cXHYzGum9~bxNHO9IaqTRfB9t0Gw57kvw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/ad02/30e5/1cf72c468f60f22a06ee0b26b40e974f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GCaQ8qpTks6x1Im5W-iOT76lBntVaHDVCvG10YMGDGh0Z6GcQsVs75MUV4HeM~DrYY41b9vN2MZQ5a2hk5zhzBJfLXWAbrq2gsfuVuvLwmgz4cwN8qHj030R1hr5MBpd4JhWriER1F5-9yOtLX6AeturXIdaeVbKe3lRnlbd4x375RsmQ7Qz4h~jzEsAmtAG9xDv6tQDMAi11Py2JP1uJRwOyIoEXYmIlBuTyHMcOlGIkafWWwmSPMQqhyLPJIvnGmfZ4jmKew0KSmvkIBnzJvy6KX5LIXuStkcrAyICz1AW9~~A4yroGy31Jd0EMEPtmV3OAarFXZxHnLRaAmu4OA__',
        speakerName: 'Michaelangelo Singh',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/c288/10f7/72a98a2e7933d4dec7904c11bf11ad82?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIz5HdTY4d7rCL3r99kGu9NJGy9t0cFuPMoMXA9rMCMXaosN37qz2SQ28z5laUW7N8F~yrBMMfzULszxIIyQOkeTUFbo8Z7nS6eSsnvCy6JyQd2zGMacMv-PAJznXyKoUwVxc2DChMPdbAJHETuMHQg~UyWb4wrioDs7TNJQcsSS~GgFJDGLi7tjSjaZK7FPvOXO~NGwOfnMahXHBaKyTH8GpeGICXxJ0IcqeEjeB6XQ85oiyZ1uYyfR36D2o8OJa0KIZFIrLkfmNQsQY1P4oABMbRSvs8eMNyKMDmDBMWcQ1I5ZgKGKqLYTSYJNih81S8bG~GCN3qgzbZU4T8ciQg__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'COO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/a0b8/46e7/6cae6700516f401c2b0ddceeb96a6402?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbtzKr1Ii5hJuDAp4lRgVg2w6IyUHEGgzK44VtsWcYtmAeiGNMVPtzPVcx3hCwC3HX0XHTb0ew2lV0QV8rpxzIn-NMmlzRoLT0R13QifgmslQ13VAomfFMGMBuzcdjD3XK24V6V0IZrx~EdYuC7ssCo-sx9tO6~Kfy21dSaVkLYLtxo4859F0Kwdw3OP-DQrQwi7GYIZwTfhtEf~BqfIU8MiPPBHvLKc3eRQZNaFBJbp-tCLRkSjYhurfL6aRxdOlIKEJa5MTuw-NdIalDzeQaq1sIsBriQLo~iVGuNnowDbuAJtG1yChX1QCQPk~B3r~IKWsoLdITTpNNyUsSnThw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'CEO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/f290/5db0/cff0258fe1161e71ce0b684c9616c5ef?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NcexAfSL1oBpgFx4mGrZWKBmIBPZCybcLN1s0kH3UPxbA4jx2cn4fwsu5w6cP-PYjQLfOXJBoSiJkq3EXpja7RW7xHWRqMr5Iv3ob0c5xExtwOEQlLF4T80M8dK~e9MOCNG6UaTALCYP-3yspturih60bXOh4QkYO6kgW~WLQHvCZG0wfiGoUWCBh4un05nVglLcwKsSoCP50AFKh1kkEbO11B-s-O5gDn8PCvaReBHq3jgI~-KlHdAsrwoN0jzr4R1KvaHky73YD5N~BvXKyxvUyIPgGZmbdUElJfjR-SfOuP-gmILB~cXHYzGum9~bxNHO9IaqTRfB9t0Gw57kvw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/ad02/30e5/1cf72c468f60f22a06ee0b26b40e974f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GCaQ8qpTks6x1Im5W-iOT76lBntVaHDVCvG10YMGDGh0Z6GcQsVs75MUV4HeM~DrYY41b9vN2MZQ5a2hk5zhzBJfLXWAbrq2gsfuVuvLwmgz4cwN8qHj030R1hr5MBpd4JhWriER1F5-9yOtLX6AeturXIdaeVbKe3lRnlbd4x375RsmQ7Qz4h~jzEsAmtAG9xDv6tQDMAi11Py2JP1uJRwOyIoEXYmIlBuTyHMcOlGIkafWWwmSPMQqhyLPJIvnGmfZ4jmKew0KSmvkIBnzJvy6KX5LIXuStkcrAyICz1AW9~~A4yroGy31Jd0EMEPtmV3OAarFXZxHnLRaAmu4OA__',
        speakerName: 'Michaelangelo Singh',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/c288/10f7/72a98a2e7933d4dec7904c11bf11ad82?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIz5HdTY4d7rCL3r99kGu9NJGy9t0cFuPMoMXA9rMCMXaosN37qz2SQ28z5laUW7N8F~yrBMMfzULszxIIyQOkeTUFbo8Z7nS6eSsnvCy6JyQd2zGMacMv-PAJznXyKoUwVxc2DChMPdbAJHETuMHQg~UyWb4wrioDs7TNJQcsSS~GgFJDGLi7tjSjaZK7FPvOXO~NGwOfnMahXHBaKyTH8GpeGICXxJ0IcqeEjeB6XQ85oiyZ1uYyfR36D2o8OJa0KIZFIrLkfmNQsQY1P4oABMbRSvs8eMNyKMDmDBMWcQ1I5ZgKGKqLYTSYJNih81S8bG~GCN3qgzbZU4T8ciQg__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'COO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/a0b8/46e7/6cae6700516f401c2b0ddceeb96a6402?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbtzKr1Ii5hJuDAp4lRgVg2w6IyUHEGgzK44VtsWcYtmAeiGNMVPtzPVcx3hCwC3HX0XHTb0ew2lV0QV8rpxzIn-NMmlzRoLT0R13QifgmslQ13VAomfFMGMBuzcdjD3XK24V6V0IZrx~EdYuC7ssCo-sx9tO6~Kfy21dSaVkLYLtxo4859F0Kwdw3OP-DQrQwi7GYIZwTfhtEf~BqfIU8MiPPBHvLKc3eRQZNaFBJbp-tCLRkSjYhurfL6aRxdOlIKEJa5MTuw-NdIalDzeQaq1sIsBriQLo~iVGuNnowDbuAJtG1yChX1QCQPk~B3r~IKWsoLdITTpNNyUsSnThw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'CEO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/f290/5db0/cff0258fe1161e71ce0b684c9616c5ef?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NcexAfSL1oBpgFx4mGrZWKBmIBPZCybcLN1s0kH3UPxbA4jx2cn4fwsu5w6cP-PYjQLfOXJBoSiJkq3EXpja7RW7xHWRqMr5Iv3ob0c5xExtwOEQlLF4T80M8dK~e9MOCNG6UaTALCYP-3yspturih60bXOh4QkYO6kgW~WLQHvCZG0wfiGoUWCBh4un05nVglLcwKsSoCP50AFKh1kkEbO11B-s-O5gDn8PCvaReBHq3jgI~-KlHdAsrwoN0jzr4R1KvaHky73YD5N~BvXKyxvUyIPgGZmbdUElJfjR-SfOuP-gmILB~cXHYzGum9~bxNHO9IaqTRfB9t0Gw57kvw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/ad02/30e5/1cf72c468f60f22a06ee0b26b40e974f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GCaQ8qpTks6x1Im5W-iOT76lBntVaHDVCvG10YMGDGh0Z6GcQsVs75MUV4HeM~DrYY41b9vN2MZQ5a2hk5zhzBJfLXWAbrq2gsfuVuvLwmgz4cwN8qHj030R1hr5MBpd4JhWriER1F5-9yOtLX6AeturXIdaeVbKe3lRnlbd4x375RsmQ7Qz4h~jzEsAmtAG9xDv6tQDMAi11Py2JP1uJRwOyIoEXYmIlBuTyHMcOlGIkafWWwmSPMQqhyLPJIvnGmfZ4jmKew0KSmvkIBnzJvy6KX5LIXuStkcrAyICz1AW9~~A4yroGy31Jd0EMEPtmV3OAarFXZxHnLRaAmu4OA__',
        speakerName: 'Michaelangelo Singh',
        designation: 'SDE, PayPal'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/c288/10f7/72a98a2e7933d4dec7904c11bf11ad82?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIz5HdTY4d7rCL3r99kGu9NJGy9t0cFuPMoMXA9rMCMXaosN37qz2SQ28z5laUW7N8F~yrBMMfzULszxIIyQOkeTUFbo8Z7nS6eSsnvCy6JyQd2zGMacMv-PAJznXyKoUwVxc2DChMPdbAJHETuMHQg~UyWb4wrioDs7TNJQcsSS~GgFJDGLi7tjSjaZK7FPvOXO~NGwOfnMahXHBaKyTH8GpeGICXxJ0IcqeEjeB6XQ85oiyZ1uYyfR36D2o8OJa0KIZFIrLkfmNQsQY1P4oABMbRSvs8eMNyKMDmDBMWcQ1I5ZgKGKqLYTSYJNih81S8bG~GCN3qgzbZU4T8ciQg__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'COO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/a0b8/46e7/6cae6700516f401c2b0ddceeb96a6402?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbtzKr1Ii5hJuDAp4lRgVg2w6IyUHEGgzK44VtsWcYtmAeiGNMVPtzPVcx3hCwC3HX0XHTb0ew2lV0QV8rpxzIn-NMmlzRoLT0R13QifgmslQ13VAomfFMGMBuzcdjD3XK24V6V0IZrx~EdYuC7ssCo-sx9tO6~Kfy21dSaVkLYLtxo4859F0Kwdw3OP-DQrQwi7GYIZwTfhtEf~BqfIU8MiPPBHvLKc3eRQZNaFBJbp-tCLRkSjYhurfL6aRxdOlIKEJa5MTuw-NdIalDzeQaq1sIsBriQLo~iVGuNnowDbuAJtG1yChX1QCQPk~B3r~IKWsoLdITTpNNyUsSnThw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'CEO, the ananta studio'
    },
    {
        imgURL: 'https://s3-alpha-sig.figma.com/img/f290/5db0/cff0258fe1161e71ce0b684c9616c5ef?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NcexAfSL1oBpgFx4mGrZWKBmIBPZCybcLN1s0kH3UPxbA4jx2cn4fwsu5w6cP-PYjQLfOXJBoSiJkq3EXpja7RW7xHWRqMr5Iv3ob0c5xExtwOEQlLF4T80M8dK~e9MOCNG6UaTALCYP-3yspturih60bXOh4QkYO6kgW~WLQHvCZG0wfiGoUWCBh4un05nVglLcwKsSoCP50AFKh1kkEbO11B-s-O5gDn8PCvaReBHq3jgI~-KlHdAsrwoN0jzr4R1KvaHky73YD5N~BvXKyxvUyIPgGZmbdUElJfjR-SfOuP-gmILB~cXHYzGum9~bxNHO9IaqTRfB9t0Gw57kvw__',
        speakerName: 'Michaelangelo Muchlongername',
        designation: 'SDE, PayPal'
    }
];

// 📍 TODO: this get should only be called ONCE, when user arrives at event page specifically. 
// And again GET can be done, if agenda data gets updated.
// Mostly data may be needs to be passed from EVENT index page.
/*
onMounted(() => {
    // @onMounted | call Cloud Function | Method : GET
    const getSpeakersData = async () => {
        try {
            const response = await fetch('https://firebase/event/getSpeakers?eventID=101');
            speakersData = await response.json();
        } catch (error) {
            console.error("Error Occured in getting agenda data : ", error);
        }
    };
});
*/

// @click | call Cloud Function | Method : POST
const onSave = async () => {
    try {
        const response = await fetch('https://firebase/event/addSpeakers', 
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

<style scoped>
.main-container {
    padding: 2rem 2rem 2rem 2rem;
}

.speakers-container {
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    align-items: start;
}

.papersCardsContainer {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media screen and (max-width: 640px) {
    .papersCardsContainer {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .main-container {
        padding: 1rem;
    }

    .speakers-container {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

@media screen and (max-width: 400px) {
    .speakers-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>