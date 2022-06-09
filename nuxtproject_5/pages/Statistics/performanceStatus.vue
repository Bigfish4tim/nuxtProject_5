<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('CommitmentStatus')">수임현황</v-btn>
            <v-btn @click="Rendering('ClosingStatus')">종결현황</v-btn>
            <v-btn @click="Rendering('ClosingSummary')">종결요약</v-btn>
            <v-btn @click="Rendering('OfficeClosingStatus')">종결요약</v-btn>
            <v-btn @click="Rendering('EmployeeClosingStatus')">사원별종결현황</v-btn>
            <v-btn @click="Rendering('OfficeSummary')">지점별요약</v-btn>
            <v-btn @click="Rendering('WeeklyTask')">주간업무</v-btn>
            <v-btn @click="Rendering('InsurTerminSummary')">보험사종결요약</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'CommitmentStatus'"
        >
            <CommitmentStatus/>
        </div>
        <div
            v-if="renderCondition === 'ClosingStatus'"
        >
            <ClosingStatus/>
        </div>
        <div
            v-if="renderCondition === 'ClosingSummary'"
        >
            <ClosingSummary/>
        </div>
        <div
            v-if="renderCondition === 'OfficeClosingStatus'"
        >
            <OfficeClosingStatus/>
        </div>
        <div
            v-if="renderCondition === 'EmployeeClosingStatus'"
        >
            <EmployeeClosingStatus/>
        </div>
        <div
            v-if="renderCondition === 'OfficeSummary'"
        >
            <OfficeSummary/>
        </div>
        <div
            v-if="renderCondition === 'WeeklyTask'"
        >
            <WeeklyTask/>
        </div>
        <div
            v-if="renderCondition === 'InsurTerminSummary'"
        >
            <InsurTerminSummary/>
        </div>
    </div>
</template>
<script>
import CommitmentStatus from "../../components/Statistics/performanceStatus/CommitmentStatus.vue"
import ClosingStatus from "../../components/Statistics/performanceStatus/ClosingStatus.vue"
import ClosingSummary from "../../components/Statistics/performanceStatus/ClosingSummary.vue"
import OfficeClosingStatus from "../../components/Statistics/performanceStatus/OfficeClosingStatus.vue"
import EmployeeClosingStatus from "../../components/Statistics/performanceStatus/EmployeeClosingStatus.vue"
import OfficeSummary from "../../components/Statistics/performanceStatus/OfficeSummary.vue"
import WeeklyTask from "../../components/Statistics/performanceStatus/WeeklyTask.vue"
import InsurTerminSummary from "../../components/Statistics/performanceStatus/InsurTerminSummary.vue"

export default {
    components: {
        CommitmentStatus,
        ClosingStatus,
        ClosingSummary,
        OfficeClosingStatus,
        EmployeeClosingStatus,
        OfficeSummary,
        WeeklyTask,
        InsurTerminSummary,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'CommitmentStatus'
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