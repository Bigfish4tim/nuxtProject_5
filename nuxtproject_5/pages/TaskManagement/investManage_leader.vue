<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('InvestProgress')">조사진행</v-btn>
            <v-btn @click="Rendering('ProgressReport')">진행보고</v-btn>
            <v-btn @click="Rendering('OtherBranchRequest')">타지점의뢰</v-btn>
            <v-btn @click="Rendering('ClosingStatus')">종결현황</v-btn>
            <v-btn @click="Rendering('ProfitStatus')">실적현황</v-btn>
            <v-btn @click="Rendering('Complaints')">민원사항</v-btn>
            <v-btn @click="Rendering('asdasd')">변경요청</v-btn>
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
            v-if="renderCondition === 'Complaints'"
        >
            <Complaints/>
        </div>
        <div
            v-if="renderCondition === 'asdasd'"
        >
            <asdasd/>
        </div>
    </div>
</template>
<script>
import InvestProgress from "../../components/investManage_leader/InvestProgress.vue"
import ProgressReport from "../../components/investManage_leader/ProgressReport.vue"
import OtherBranchRequest from "../../components/investManage_leader/OtherBranchRequest.vue"
import ClosingStatus from "../../components/investManage_leader/ClosingStatus.vue"
import ProfitStatus from "../../components/investManage_leader/ProfitStatus.vue"
import Complaints from "../../components/investManage_leader/Complaints.vue"

export default {
    components: {
        InvestProgress,
        ProgressReport,
        OtherBranchRequest,
        ClosingStatus,
        ProfitStatus,
        Complaints,
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