<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('VacationList')">휴가내역</v-btn>
            <v-btn @click="Rendering('AnnualUsageStatus')">년차사용현황</v-btn>
            <v-btn @click="Rendering('VacationSetting')">휴가일수설정</v-btn>
            <v-btn @click="Rendering('VacationPlan')">휴가계획서</v-btn>
            <v-btn @click="Rendering('LaborAcceptRefusal')">노무수령거부동의</v-btn>
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
            v-if="renderCondition === 'VacationPlan'"
        >
            <VacationPlan/>
        </div>
        <div
            v-if="renderCondition === 'LaborAcceptRefusal'"
        >
            <LaborAcceptRefusal/>
        </div>
    </div>
</template>
<script>
import VacationList from "../../components/AccountingManagement/vacationManagement/VacationList.vue"
import AnnualUsageStatus from "../../components/AccountingManagement/vacationManagement/AnnualUsageStatus.vue"
import VacationSetting from "../../components/AccountingManagement/vacationManagement/VacationSetting.vue"
import VacationPlan from "../../components/AccountingManagement/vacationManagement/VacationPlan.vue"
import LaborAcceptRefusal from "../../components/AccountingManagement/vacationManagement/LaborAcceptRefusal.vue"

export default {
    components: {
        VacationList,
        AnnualUsageStatus,
        VacationSetting,
        VacationPlan,
        LaborAcceptRefusal,
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