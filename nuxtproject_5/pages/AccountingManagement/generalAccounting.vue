<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('BirthdaySearch')">미발행</v-btn>
            <v-btn @click="Rendering('VacationCheck')">차액자료</v-btn>
            <v-btn @click="Rendering('WorkOath')">근로서약서</v-btn>
            <v-btn @click="Rendering('YearEndSettlement')">연말정산</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'BirthdaySearch'"
        >
            <BirthdaySearch/>
        </div>
        <div
            v-if="renderCondition === 'VacationCheck'"
        >
            <VacationCheck/>
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
import BirthdaySearch from "../../components/AccountingManagement/generalAccounting/BirthdaySearch.vue"
import VacationCheck from "../../components/AccountingManagement/generalAccounting/VacationCheck.vue"
import WorkOath from "../../components/AccountingManagement/generalAccounting/WorkOath.vue"
import YearEndSettlement from "../../components/AccountingManagement/generalAccounting/YearEndSettlement.vue"

export default {
    components: {
        BirthdaySearch,
        VacationCheck,
        WorkOath,
        YearEndSettlement,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'BirthdaySearch'
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