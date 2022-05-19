<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('PerformanceData')">실적자료</v-btn>
            <v-btn @click="Rendering('DepositData')">입금자료</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'PerformanceData'"
        >
            <PerformanceData/>
        </div>
        <div
            v-if="renderCondition === 'DepositData'"
        >
            <DepositData/>
        </div>
    </div>
</template>
<script>
import PerformanceData from "../../components/AccountingManagement/salaryData/PerformanceData.vue"
import DepositData from "../../components/AccountingManagement/salaryData/DepositData.vue"

export default {
    components: {
        PerformanceData,
        DepositData,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'PerformanceData'
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