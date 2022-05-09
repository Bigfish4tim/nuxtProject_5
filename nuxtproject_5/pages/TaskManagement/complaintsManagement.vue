<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Pending_5')">미결사유(5)</v-btn>
            <v-btn @click="Rendering('Pending_30')">미결사유(30)</v-btn>
            <v-btn @click="Rendering('Pending_60')">미결사유(60)</v-btn>
            <v-btn @click="Rendering('Pending_90')">미결사유(90)</v-btn>
            <v-btn @click="Rendering('PendingStatus')">미결현황</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Pending_5'"
        >
            <Pending_5/>
        </div>
        <div
            v-if="renderCondition === 'Pending_30'"
        >
            <Pending_30/>
        </div>
        <div
            v-if="renderCondition === 'Pending_60'"
        >
            <Pending_60/>
        </div>
        <div
            v-if="renderCondition === 'Pending_90'"
        >
            <Pending_90/>
        </div>
        <div
            v-if="renderCondition === 'PendingStatus'"
        >
            <PendingStatus/>
        </div>
    </div>
</template>
<script>
import Pending_5 from "../../components/pendingManagement_1/Pending_5.vue"
import Pending_30 from "../../components/pendingManagement_1/Pending_30.vue"
import Pending_60 from "../../components/pendingManagement_1/Pending_60.vue"
import Pending_90 from "../../components/pendingManagement_1/Pending_90.vue"
import PendingStatus from "../../components/pendingManagement_1/PendingStatus.vue"

export default {
    components: {
        Pending_5,
        Pending_30,
        Pending_60,
        Pending_90,
        PendingStatus,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'Pending_5'
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