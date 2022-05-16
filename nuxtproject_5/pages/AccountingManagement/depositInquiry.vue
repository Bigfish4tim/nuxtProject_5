<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('NonDeposit')">미입금</v-btn>
            <v-btn @click="Rendering('DifferenceAmountData')">차액자료</v-btn>
            <v-btn @click="Rendering('DepositList')">미처리</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'NonDeposit'"
        >
            <NonDeposit/>
        </div>
        <div
            v-if="renderCondition === 'DifferenceAmountData'"
        >
            <DifferenceAmountData/>
        </div>
        <div
            v-if="renderCondition === 'DepositList'"
        >
            <DepositList/>
        </div>
    </div>
</template>
<script>
import NonDeposit from "../../components/AccountingManagement/depositInquiry/NonDeposit.vue"
import DifferenceAmountData from "../../components/AccountingManagement/depositInquiry/DifferenceAmountData.vue"
import DepositList from "../../components/AccountingManagement/depositInquiry/DepositList.vue"

export default {
    components: {
        NonDeposit,
        DifferenceAmountData,
        DepositList,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'NonDeposit'
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