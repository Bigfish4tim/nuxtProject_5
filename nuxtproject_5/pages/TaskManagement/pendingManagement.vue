<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Pending_14')">미결사유(14)</v-btn>
            <v-btn @click="Rendering('Pending_20')">미결사유(20)</v-btn>
            <v-btn @click="Rendering('Pending_30')">미결사유(30)</v-btn>
            <v-btn @click="Rendering('Pending_60')">미결사유(60)</v-btn>
            <v-btn @click="Rendering('PendingStatus')">미결현황</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Pending_14'"
        >
            <Pending_14/>
        </div>
        <div
            v-if="renderCondition === 'Pending_20'"
        >
            <Pending_20/>
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
            v-if="renderCondition === 'PendingStatus'"
        >
            <PendingStatus/>
        </div>
    </div>
</template>
<script>
import Pending_14 from "../../components/TaskManagement/pendingManagement/Pending_14.vue"
import Pending_20 from "../../components/TaskManagement/pendingManagement/Pending_20.vue"
import Pending_30 from "../../components/TaskManagement/pendingManagement/Pending_30.vue"
import Pending_60 from "../../components/TaskManagement/pendingManagement/Pending_60.vue"
import PendingStatus from "../../components/TaskManagement/pendingManagement/PendingStatus.vue"

export default {
    components: {
        Pending_14,
        Pending_20,
        Pending_30,
        Pending_60,
        PendingStatus,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'Pending_14'
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