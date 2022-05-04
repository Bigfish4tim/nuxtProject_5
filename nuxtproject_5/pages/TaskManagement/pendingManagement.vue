<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Pending_14')">미결사유(14)</v-btn>
            <v-btn @click="Rendering('Pending_20')">미결사유(20)</v-btn>
            <v-btn @click="Rendering('WaitingPayment_Count')">미결사유(30)</v-btn>
            <v-btn @click="Rendering('PaymentList')">미결사유(60)</v-btn>
            <v-btn @click="Rendering('PaymentDetailList')">미결현황</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Pending_14'"
        >
            <Pending_14/>
        </div>
        <div
            v-if="renderCondition === 'Pending_20'"
        >
            <Pending_20/>
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
    </div>
</template>
<script>
import Pending_14 from "../../components/pendingManagement/Pending_14.vue"
import Pending_20 from "../../components/pendingManagement/Pending_20.vue"
import WaitingPayment_Member from "../../components/expenseManagement/WaitingPayment_Member.vue"
import WaitingPayment_Count from "../../components/expenseManagement/WaitingPayment_Count.vue"
import PaymentList from "../../components/expenseManagement/PaymentList.vue"
import PaymentDetailList from "../../components/expenseManagement/PaymentDetailList.vue"

export default {
    components: {
        Pending_14,
        Pending_20,
        WaitingPayment_Count,
        PaymentList,
        PaymentDetailList,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'Pending_14'
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