<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Unprocessed')">미처리</v-btn>
            <v-btn @click="Rendering('AmountChange')">금액변동</v-btn>
            <v-btn @click="Rendering('ProcessComplete')">처리완료</v-btn>
            <v-btn @click="Rendering('PerformanceChanges')">실적변동내역</v-btn>
            <v-btn @click="Rendering('RateErrorList')">배분율오류내역</v-btn>
            <v-btn @click="Rendering('ProcessList')">상세처리내역</v-btn>
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
            v-if="renderCondition === 'ProcessComplete'"
        >
            <ProcessComplete/>
        </div>
        <div
            v-if="renderCondition === 'PerformanceChanges'"
        >
            <PerformanceChanges/>
        </div>
        <div
            v-if="renderCondition === 'RateErrorList'"
        >
            <RateErrorList/>
        </div>
        <div
            v-if="renderCondition === 'ProcessList'"
        >
            <ProcessList/>
        </div>
    </div>
</template>
<script>
import Unprocessed from "../../components/resultProcessing/Unprocessed.vue"
import AmountChange from "../../components/resultProcessing/AmountChange.vue"
import ProcessComplete from "../../components/resultProcessing/ProcessComplete.vue"
import PerformanceChanges from "../../components/resultProcessing/PerformanceChanges.vue"
import RateErrorList from "../../components/resultProcessing/RateErrorList.vue"
import ProcessList from "../../components/resultProcessing/ProcessList.vue"

export default {
    components: {
        Unprocessed,
        AmountChange,
        ProcessComplete,
        PerformanceChanges,
        RateErrorList,
        ProcessList,
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