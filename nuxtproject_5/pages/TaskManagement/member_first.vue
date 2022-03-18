<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('InvestProgress')">조사진행</v-btn>
            <v-btn @click="Rendering('MyProgress')">내진행건</v-btn>
            <v-btn @click="Rendering('ProgressReport')">진행보고</v-btn>
            <v-btn @click="Rendering('MemberStatus')">팀원현황</v-btn>
            <v-btn @click="Rendering('ClosingStatus')">종결현황</v-btn>
            <v-btn @click="Rendering('RequestChange')">변경요청</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'InvestProgress'"
        >
            <InvestProgress/>
        </div>
        <div
            v-if="renderCondition === 'MyProgress'"
        >
            <MyProgress/>
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
import InvestProgress from "../../components/member_first/InvestProgress.vue"
import MyProgress from "../../components/leader_first/MyProgress.vue"
import ProgressReport from "../../components/leader_first/ProgressReport.vue"
import MemberStatus from "../../components/leader_first/MemberStatus.vue"
import ClosingStatus from "../../components/leader_first/ClosingStatus.vue"
import RequestChange from "../../components/leader_first/RequestChange.vue"

export default {
    components: {
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