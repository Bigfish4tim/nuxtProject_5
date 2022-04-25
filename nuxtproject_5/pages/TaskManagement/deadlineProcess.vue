<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('DeadlineProcess')">마감처리</v-btn>
            <v-btn @click="Rendering('PerformanceCheck')">실적확인</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'DeadlineProcess'"
        >
            <DeadlineProcess/>
        </div>
        <div
            v-if="renderCondition === 'PerformanceCheck'"
        >
            <PerformanceCheck/>
        </div>
    </div>
</template>
<script>
import DeadlineProcess from "../../components/deadlineProcess/DeadlineProcess.vue"
import PerformanceCheck from "../../components/deadlineProcess/PerformanceCheck.vue"

export default {
    components: {
        DeadlineProcess,
        PerformanceCheck,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'DeadlineProcess'
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