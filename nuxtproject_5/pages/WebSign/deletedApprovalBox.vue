<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Total')">전체</v-btn>
            <v-btn @click="Rendering('Waiting')">대기</v-btn>
            <v-btn @click="Rendering('Hold')">보류</v-btn>
            <v-btn @click="Rendering('Reject')">반려</v-btn>
            <v-btn @click="Rendering('Dismissal')">기각</v-btn>
            <v-btn @click="Rendering('Approved')">승인</v-btn>
            <v-btn @click="Rendering('Delete')">삭제</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Total'"
        >
            <Total/>
        </div>
        <div
            v-if="renderCondition === 'Waiting'"
        >
            <Waiting/>
        </div>
        <div
            v-if="renderCondition === 'Hold'"
        >
            <Hold/>
        </div>
        <div
            v-if="renderCondition === 'Reject'"
        >
            <Reject/>
        </div>
        <div
            v-if="renderCondition === 'Dismissal'"
        >
            <Dismissal/>
        </div>
        <div
            v-if="renderCondition === 'Approved'"
        >
            <Approved/>
        </div>
        <div
            v-if="renderCondition === 'Delete'"
        >
            <Delete/>
        </div>
    </div>
</template>
<script>
import Total from "../../components/WebSign/deletedApprovalBox/Total.vue"
import Waiting from "../../components/WebSign/deletedApprovalBox/Waiting.vue"
import Hold from "../../components/WebSign/deletedApprovalBox/Hold.vue"
import Reject from "../../components/WebSign/deletedApprovalBox/Reject.vue"
import Dismissal from "../../components/WebSign/deletedApprovalBox/Reject.vue"
import Approved from "../../components/WebSign/deletedApprovalBox/Approved.vue"
import Delete from "../../components/WebSign/deletedApprovalBox/Delete.vue"

export default {
    components: {
        Total,
        Waiting,
        Hold,
        Reject,
        Dismissal,
        Approved,
        Delete,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'Total'
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