<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Individual')">개인별</v-btn>
            <v-btn @click="Rendering('Branch')">지점별</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Individual'"
        >
            <EmployeeStatistics/>
        </div>
        <div
            v-if="renderCondition === 'Branch'"
        >
            <Branch/>
        </div>
    </div>
</template>
<script>
import Individual from "../../components/Statistics/insurStatistics/Individual.vue"
import Branch from "../../components/Statistics/insurStatistics/Branch.vue"

export default {
    components: {
        Individual,
        Branch,
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