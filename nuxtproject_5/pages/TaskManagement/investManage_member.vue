<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('InvestProgress')">조사진행</v-btn>
            <v-btn @click="Rendering('ProgressReport')">진행보고</v-btn>
            <v-btn @click="Rendering('OtherBranchRequest')">타지점의뢰</v-btn>
            <v-btn @click="Rendering('ExpensePayment')">경비지급</v-btn>
            <v-btn @click="Rendering('ClosingStatus')">종결현황</v-btn>
            <v-btn @click="Rendering('ProfitStatus')">실적현황</v-btn>
            <v-btn @click="Rendering('RequestChange')">변경요청</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'InvestProgress'"
        >
            <InvestProgress/>
        </div>
        <div
            v-if="renderCondition === 'ProgressReport'"
        >
            <ProgressReport/>
        </div>
        <div
            v-if="renderCondition === 'OtherBranchRequest'"
        >
            <OtherBranchRequest/>
        </div>
        <div
            v-if="renderCondition === 'ExpensePayment'"
        >
            <ExpensePayment/>
        </div>
        <div
            v-if="renderCondition === 'ClosingStatus'"
        >
            <ClosingStatus/>
        </div>
        <div
            v-if="renderCondition === 'ProfitStatus'"
        >
            <ProfitStatus/>
        </div>
        <div
            v-if="renderCondition === 'RequestChange'"
        >
            <RequestChange/>
        </div>
    </div>
</template>
<script>
import InvestProgress from "../../components/investManage_member/InvestProgress.vue"
import ProgressReport from "../../components/investManage_member/ProgressReport.vue"
import OtherBranchRequest from "../../components/investManage_member/OtherBranchRequest.vue"
import ExpensePayment from "../../components/investManage_member/ExpensePayment.vue"
import ClosingStatus from "../../components/investManage_member/ClosingStatus.vue"
import ProfitStatus from "../../components/investManage_member/ProfitStatus.vue"
import RequestChange from "../../components/investManage_member/RequestChange.vue"

export default {
        components: {
            InvestProgress,
            ProgressReport,
            OtherBranchRequest,
            ExpensePayment,
            ClosingStatus,
            ProfitStatus,
            RequestChange,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'InvestProgress'
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