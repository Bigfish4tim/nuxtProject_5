<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('IncidentHandlingProcess')">사고처리과정표</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'IncidentHandlingProcess'"
        >
            <IncidentHandlingProcess/>
        </div>
    </div>
</template>
<script>
import IncidentHandlingProcess from "../../components/TaskManagement/progressReportSearch/IncidentHandlingProcess.vue"

export default {
    components: {
        IncidentHandlingProcess,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'IncidentHandlingProcess'
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