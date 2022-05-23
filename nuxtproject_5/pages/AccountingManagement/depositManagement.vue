<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('NonDeposit')">미입금</v-btn>
            <v-btn @click="Rendering('DifferenceAmountData')">차액자료</v-btn>
            <v-btn @click="Rendering('NonProcess')">미처리</v-btn>
            <v-btn @click="Rendering('DepositList')">입금내역</v-btn>
            <v-btn @click="Rendering('ForcedDeposit')">강제입금</v-btn>
            <v-btn @click="Rendering('DepositFinish')">마감처리</v-btn>
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
            v-if="renderCondition === 'NonProcess'"
        >
            <NonProcess/>
        </div>
        <div
            v-if="renderCondition === 'DepositList'"
        >
            <DepositList/>
        </div>
        <div
            v-if="renderCondition === 'ForcedDeposit'"
        >
            <ForcedDeposit/>
        </div>
        <div
            v-if="renderCondition === 'DepositFinish'"
        >
            <DepositFinish/>
        </div>
    </div>
</template>
<script>
import NonDeposit from "../../components/AccountingManagement/depositManagement/NonDeposit.vue"
import DifferenceAmountData from "../../components/AccountingManagement/depositManagement/DifferenceAmountData.vue"
import NonProcess from "../../components/AccountingManagement/depositManagement/NonProcess.vue"
import DepositList from "../../components/AccountingManagement/depositManagement/DepositList.vue"
import ForcedDeposit from "../../components/AccountingManagement/depositManagement/ForcedDeposit.vue"
import DepositFinish from "../../components/AccountingManagement/depositManagement/DepositFinish.vue"

export default {
    components: {
        NonDeposit,
        DifferenceAmountData,
        NonProcess,
        DepositList,
        ForcedDeposit,
        DepositFinish,
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