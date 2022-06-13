<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Individual')">개인별</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Individual'"
        >
            <EmployeeStatistics/>
        </div>
    </div>
</template>
<script>
import Individual from "../../components/Statistics/statistics_first/Individual.vue"

export default {
    components: {
        Individual,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'Individual'
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