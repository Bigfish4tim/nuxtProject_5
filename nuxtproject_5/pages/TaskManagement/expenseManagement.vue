<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('WaitingProcess')">처리대기</v-btn>
            <v-btn @click="Rendering('WaitingPayment_Member')">지급대기(사원)</v-btn>
            <v-btn @click="Rendering('WaitingPayment_Count')">지급대기(건별)</v-btn>
            <v-btn @click="Rendering('PaymentList')">지급내역</v-btn>
            <v-btn @click="Rendering('PaymentDetailList')">지급상세내역</v-btn>
            <v-btn @click="Rendering('ProcessList')">경비집계</v-btn>
            <v-btn @click="Rendering('ProcessList')">지급보류</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'WaitingProcess'"
        >
            <WaitingProcess/>
        </div>
        <div
            v-if="renderCondition === 'WaitingPayment_Member'"
        >
            <WaitingPayment_Member/>
        </div>
        <div
            v-if="renderCondition === 'WaitingPayment_Count'"
        >
            <WaitingPayment_Count/>
        </div>
        <div
            v-if="renderCondition === 'PaymentList'"
        >
            <PaymentList/>
        </div>
        <div
            v-if="renderCondition === 'PaymentDetailList'"
        >
            <PaymentDetailList/>
        </div>
        <div
            v-if="renderCondition === 'ProcessList'"
        >
            <ProcessList/>
        </div>
    </div>
</template>
<script>
import WaitingProcess from "../../components/expenseManagement/WaitingProcess.vue"
import WaitingPayment_Member from "../../components/expenseManagement/WaitingPayment_Member.vue"
import WaitingPayment_Count from "../../components/expenseManagement/WaitingPayment_Count.vue"
import PaymentList from "../../components/expenseManagement/PaymentList.vue"
import PaymentDetailList from "../../components/expenseManagement/PaymentDetailList.vue"
import Unprocessed from "../../components/resultProcessing/Unprocessed.vue"
import AmountChange from "../../components/resultProcessing/AmountChange.vue"
import ProcessComplete from "../../components/resultProcessing/ProcessComplete.vue"
import PerformanceChanges from "../../components/resultProcessing/PerformanceChanges.vue"
import RateErrorList from "../../components/resultProcessing/RateErrorList.vue"
import ProcessList from "../../components/resultProcessing/ProcessList.vue"

export default {
    components: {
        WaitingProcess,
        WaitingPayment_Member,
        WaitingPayment_Count,
        PaymentList,
        PaymentDetailList,
        Unprocessed,
        AmountChange,
        ProcessComplete,
        PerformanceChanges,
        RateErrorList,
        ProcessList,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'WaitingProcess'
        }
    },
    methods: {
        Rendering(cond) {
            this.renderCondition = cond
        }
    },
}
</script>
<style>
    
</style>