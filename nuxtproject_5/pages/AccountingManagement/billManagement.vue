<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('NonPublished')">미발행</v-btn>
            <v-btn @click="Rendering('DifferenceAmountData')">차액자료</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'NonPublished'"
        >
            <NonPublished/>
        </div>
        <div
            v-if="renderCondition === 'DifferenceAmountData'"
        >
            <DifferenceAmountData/>
        </div>
    </div>
</template>
<script>
import NonPublished from "../../components/AccountingManagement/billManagement/NonPublished.vue"
import DifferenceAmountData from "../../components/AccountingManagement/depositInquiry/DifferenceAmountData.vue"

export default {
    components: {
        NonPublished,
        DifferenceAmountData,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'NonPublished'
        }
    },
    methods: {
        Rendering(cond) {
            this.renderCondition = cond
        }
    }
}
</script>
<style>
    
</style>