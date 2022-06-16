<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('RequiredDocuments')">징구서류</v-btn>
            <v-btn @click="Rendering('DepartManagement')">부서관리</v-btn>
            <v-btn @click="Rendering('ReportApprovalLine')">보고서결제라인</v-btn>
            <v-btn @click="Rendering('UserRole')">사용자역할</v-btn>
            <v-btn @click="Rendering('CorpCardManage')">법인카드관리</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'RequiredDocuments'"
        >
            <RequiredDocuments/>
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
        <div
            v-if="renderCondition === 'CorpCardManage'"
        >
            <CorpCardManage/>
        </div>
    </div>
</template>
<script>
import RequiredDocuments from "../../components/Manager/diseaseAdminCode/RequiredDocuments.vue"

export default {
    components: {
        RequiredDocuments,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'RequiredDocuments'
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