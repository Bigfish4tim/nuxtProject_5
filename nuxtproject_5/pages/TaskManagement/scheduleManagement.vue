<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Calendar')">달력보기</v-btn>
            <v-btn @click="Rendering('Calendar')">항목별보기</v-btn>
            <v-btn @click="Rendering('Calendar')">당직자관리</v-btn>
            <v-btn @click="Rendering('Calendar')">휴가자현황</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Calendar'"
        >
            <Calendar/>
        </div>
        <div
            v-if="renderCondition === 'Calendar'"
        >
            <Calendar/>
        </div>
        <div
            v-if="renderCondition === 'Calendar'"
        >
            <Calendar/>
        </div>
        <div
            v-if="renderCondition === 'Calendar'"
        >
            <Calendar/>
        </div>
    </div>
</template>
<script>
import Calendar from "../../components/schedule/Calendar.vue"
import AmountChange from "../../components/resultProcessing/AmountChange.vue"
import ProcessComplete from "../../components/resultProcessing/ProcessComplete.vue"
import PerformanceChanges from "../../components/resultProcessing/PerformanceChanges.vue"

export default {
    components: {
        Calendar,
        AmountChange,
        ProcessComplete,
        PerformanceChanges,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'Calendar'
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