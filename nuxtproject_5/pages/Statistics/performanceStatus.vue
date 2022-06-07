<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('CommitmentStatus')">수임현황</v-btn>
            <v-btn @click="Rendering('ClosingStatus')">종결현황</v-btn>
            <v-btn @click="Rendering('ClosingSummary')">종결요약</v-btn>
            <v-btn @click="Rendering('OfficeClosingStatus')">종결요약</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'CommitmentStatus'"
        >
            <CommitmentStatus/>
        </div>
        <div
            v-if="renderCondition === 'ClosingStatus'"
        >
            <ClosingStatus/>
        </div>
        <div
            v-if="renderCondition === 'ClosingSummary'"
        >
            <ClosingSummary/>
        </div>
        <div
            v-if="renderCondition === 'OfficeClosingStatus'"
        >
            <OfficeClosingStatus/>
        </div>
    </div>
</template>
<script>
import CommitmentStatus from "../../components/Statistics/performanceStatus/CommitmentStatus.vue"
import ClosingStatus from "../../components/Statistics/performanceStatus/ClosingStatus.vue"
import ClosingSummary from "../../components/Statistics/performanceStatus/ClosingSummary.vue"
import OfficeClosingStatus from "../../components/Statistics/performanceStatus/OfficeClosingStatus.vue"

export default {
    components: {
        CommitmentStatus,
        ClosingStatus,
        ClosingSummary,
        OfficeClosingStatus,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'CommitmentStatus'
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