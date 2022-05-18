<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('VacationList')">휴가내역</v-btn>
            <v-btn @click="Rendering('AnnualUsageStatus')">년차사용현황</v-btn>
            <v-btn @click="Rendering('VacationSetting')">휴가일수설정</v-btn>
            <v-btn @click="Rendering('WorkOath')">근로서약서</v-btn>
            <v-btn @click="Rendering('YearEndSettlement')">연말정산</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'VacationList'"
        >
            <VacationList/>
        </div>
        <div
            v-if="renderCondition === 'AnnualUsageStatus'"
        >
            <AnnualUsageStatus/>
        </div>
        <div
            v-if="renderCondition === 'VacationSetting'"
        >
            <VacationSetting/>
        </div>
        <div
            v-if="renderCondition === 'WorkOath'"
        >
            <WorkOath/>
        </div>
        <div
            v-if="renderCondition === 'YearEndSettlement'"
        >
            <YearEndSettlement/>
        </div>
    </div>
</template>
<script>
import VacationList from "../../components/AccountingManagement/vacationManagement/VacationList.vue"
import AnnualUsageStatus from "../../components/AccountingManagement/vacationManagement/AnnualUsageStatus.vue"
import VacationSetting from "../../components/AccountingManagement/vacationManagement/VacationSetting.vue"
import WorkOath from "../../components/AccountingManagement/generalAccounting/WorkOath.vue"
import YearEndSettlement from "../../components/AccountingManagement/generalAccounting/YearEndSettlement.vue"

export default {
    components: {
        VacationList,
        AnnualUsageStatus,
        VacationSetting,
        WorkOath,
        YearEndSettlement,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'VacationList'
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