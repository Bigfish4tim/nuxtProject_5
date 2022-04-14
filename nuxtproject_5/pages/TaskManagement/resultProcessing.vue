<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Unprocessed')">미처리</v-btn>
            <v-btn @click="Rendering('AmountChange')">금액변동</v-btn>
            <v-btn @click="Rendering('ProgressReport')">처리완료</v-btn>
            <v-btn @click="Rendering('MemberStatus')">실적변동내역</v-btn>
            <v-btn @click="Rendering('ClosingStatus')">배분율오류내역</v-btn>
            <v-btn @click="Rendering('RequestChange')">상세처리내역</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Unprocessed'"
        >
            <Unprocessed/>
        </div>
        <div
            v-if="renderCondition === 'AmountChange'"
        >
            <AmountChange/>
        </div>
        <div
            v-if="renderCondition === 'ProgressReport'"
        >
            <ProgressReport/>
        </div>
        <div
            v-if="renderCondition === 'MemberStatus'"
        >
            <MemberStatus/>
        </div>
        <div
            v-if="renderCondition === 'ClosingStatus'"
        >
            <ClosingStatus/>
        </div>
        <div
            v-if="renderCondition === 'RequestChange'"
        >
            <RequestChange/>
        </div>
    </div>
</template>
<script>
import Unprocessed from "../../components/resultProcessing/Unprocessed.vue"
import AmountChange from "../../components/resultProcessing/AmountChange.vue"
import InvestProgress from "../../components/leader_first/InvestProgress.vue"
import MyProgress from "../../components/leader_first/MyProgress.vue"
import ProgressReport from "../../components/leader_first/ProgressReport.vue"
import MemberStatus from "../../components/leader_first/MemberStatus.vue"
import ClosingStatus from "../../components/leader_first/ClosingStatus.vue"
import RequestChange from "../../components/leader_first/RequestChange.vue"

export default {
    components: {
        Unprocessed,
        AmountChange,
        InvestProgress,
        MyProgress,
        ProgressReport,
        MemberStatus,
        ClosingStatus,
        RequestChange,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'Unprocessed'
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