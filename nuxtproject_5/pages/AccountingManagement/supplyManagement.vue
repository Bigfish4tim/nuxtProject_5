<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('ConsumableManagement')">실적자료</v-btn>
            <v-btn @click="Rendering('FixtureManagement')">입금자료</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'ConsumableManagement'"
        >
            <ConsumableManagement/>
        </div>
        <div
            v-if="renderCondition === 'FixtureManagement'"
        >
            <FixtureManagement/>
        </div>
    </div>
</template>
<script>
import ConsumableManagement from "../../components/AccountingManagement/supplyManagement/ConsumableManagement.vue"
import FixtureManagement from "../../components/AccountingManagement/supplyManagement/FixtureManagement.vue"

export default {
    components: {
        ConsumableManagement,
        FixtureManagement,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'ConsumableManagement'
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