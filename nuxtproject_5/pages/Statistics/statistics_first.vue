<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('EmployeeStatistics')">직원통계</v-btn>
            <v-btn @click="Rendering('SMSUsage')">SMS사용량</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'EmployeeStatistics'"
        >
            <EmployeeStatistics/>
        </div>
        <div
            v-if="renderCondition === 'SMSUsage'"
        >
            <SMSUsage/>
        </div>
    </div>
</template>
<script>
import EmployeeStatistics from "../../components/Statistics/etcStatistics/EmployeeStatistics.vue"
import SMSUsage from "../../components/Statistics/etcStatistics/SMSUsage.vue"

export default {
    components: {
        EmployeeStatistics,
        SMSUsage,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'EmployeeStatistics'
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