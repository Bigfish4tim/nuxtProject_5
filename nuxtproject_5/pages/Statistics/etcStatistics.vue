<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('EmployeeStatistics')">직원통계</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'EmployeeStatistics'"
        >
            <EmployeeStatistics/>
        </div>
    </div>
</template>
<script>
import EmployeeStatistics from "../../components/Statistics/etcStatistics/EmployeeStatistics.vue"

export default {
    components: {
        EmployeeStatistics
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