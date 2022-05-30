<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('BasicStatistics')">기본통계</v-btn>
            <v-btn @click="Rendering('MemoDeleteLog')">사정결과</v-btn>
            <v-btn @click="Rendering('SalesTransition')">사정결과</v-btn>
            <v-btn @click="Rendering('CompanyTransition')">사정결과</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'BasicStatistics'"
        >
            <BasicStatistics/>
        </div>
        <div
            v-if="renderCondition === 'AdjustmentResult'"
        >
            <AdjustmentResult/>
        </div>
        <div
            v-if="renderCondition === 'SalesTransition'"
        >
            <SalesTransition/>
        </div>
        <div
            v-if="renderCondition === 'CompanyTransition'"
        >
            <CompanyTransition/>
        </div>
    </div>
</template>
<script>
import BasicStatistics from "../../components/Statistics/basicStatistics/BasicStatistics.vue"
import AdjustmentResult from "../../components/Statistics/basicStatistics/AdjustmentResult.vue"
import SalesTransition from "../../components/Statistics/basicStatistics/SalesTransition.vue"
import CompanyTransition from "../../components/Statistics/basicStatistics/CompanyTransition.vue"

export default {
    components: {
        BasicStatistics,
        AdjustmentResult,
        SalesTransition,
        CompanyTransition,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'BasicStatistics'
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