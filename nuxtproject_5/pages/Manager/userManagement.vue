<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('UserInformation')">사용자정보</v-btn>
            <v-btn @click="Rendering('DepartManagement')">부서관리</v-btn>
            <v-btn @click="Rendering('ReportApprovalLine')">부서관리</v-btn>
            <v-btn @click="Rendering('UserRole')">부서관리</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'UserInformation'"
        >
            <UserInformation/>
        </div>
        <div
            v-if="renderCondition === 'DepartManagement'"
        >
            <DepartManagement/>
        </div>
        <div
            v-if="renderCondition === 'ReportApprovalLine'"
        >
            <ReportApprovalLine/>
        </div>
        <div
            v-if="renderCondition === 'UserRole'"
        >
            <UserRole/>
        </div>
    </div>
</template>
<script>
import UserInformation from "../../components/Manager/userManagement/UserInformation.vue"
import DepartManagement from "../../components/Manager/userManagement/DepartManagement.vue"
import ReportApprovalLine from "../../components/Manager/userManagement/ReportApprovalLine.vue"
import UserRole from "../../components/Manager/userManagement/UserRole.vue"

export default {
    components: {
        UserInformation,
        DepartManagement,
        ReportApprovalLine,
        UserRole,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'UserInformation'
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