<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Total')">휴가내역</v-btn>
            <v-btn @click="Rendering('AnnualUsageStatus')">내미결</v-btn>
            <v-btn @click="Rendering('VacationSetting')">휴가일수설정</v-btn>
            <v-btn @click="Rendering('VacationPlan')">휴가계획서</v-btn>
            <v-btn @click="Rendering('LaborAcceptRefusal')">노무수령거부동의</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Total'"
        >
            <Total/>
        </div>
        <div
            v-if="renderCondition === 'MySuspense'"
        >
            <MySuspense/>
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
import Total from "../../components/WebSign/receivedApprovalBox/Total.vue"
import MySuspense from "../../components/WebSign/receivedApprovalBox/MySuspense.vue"
import VacationSetting from "../../components/AccountingManagement/vacationManagement/VacationSetting.vue"
import VacationPlan from "../../components/AccountingManagement/vacationManagement/VacationPlan.vue"
import LaborAcceptRefusal from "../../components/AccountingManagement/vacationManagement/LaborAcceptRefusal.vue"

export default {
    components: {
        Total,
        MySuspense,
        VacationSetting,
        VacationPlan,
        LaborAcceptRefusal,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'Total'
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