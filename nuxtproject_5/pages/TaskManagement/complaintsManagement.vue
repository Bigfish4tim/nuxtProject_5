<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('ComplaintsDailyReport')">민원예상 일일보고</v-btn>
            <v-btn @click="Rendering('ComplaintsCase')">민원발생건</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'ComplaintsDailyReport'"
        >
            <ComplaintsDailyReport/>
        </div>
        <div
            v-if="renderCondition === 'ComplaintsCase'"
        >
            <ComplaintsCase/>
        </div>
    </div>
</template>
<script>
import ComplaintsDailyReport from "../../components/complaintsManagement/ComplaintsDailyReport.vue"
import ComplaintsCase from "../../components/complaintsManagement/ComplaintsCase.vue"

export default {
    components: {
        ComplaintsDailyReport,
        ComplaintsCase,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'ComplaintsDailyReport'
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