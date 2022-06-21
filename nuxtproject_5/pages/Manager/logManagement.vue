<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('ConnectInform')">접속정보</v-btn>
            <v-btn @click="Rendering('ConnectStatistics')">접속통계</v-btn>
            <v-btn @click="Rendering('CurrentAccessor')">현재접속자</v-btn>
            <v-btn @click="Rendering('PasswordHistory')">비밀번호변경이력</v-btn>
            <v-btn @click="Rendering('PrivacyHistory')">개인정보열람이력</v-btn>
            <v-btn @click="Rendering('DBLog')">DB LOG</v-btn>
            <v-btn @click="Rendering('EmployeeHistory')">사원변경이력</v-btn>
            <v-btn @click="Rendering('AssessmentHistory')">손해사정서이력</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'ConnectInform'"
        >
            <ConnectInform/>
        </div>
        <div
            v-if="renderCondition === 'ConnectStatistics'"
        >
            <ConnectStatistics/>
        </div>
        <div
            v-if="renderCondition === 'CurrentAccessor'"
        >
            <CurrentAccessor/>
        </div>
        <div
            v-if="renderCondition === 'PasswordHistory'"
        >
            <PasswordHistory/>
        </div>
        <div
            v-if="renderCondition === 'PrivacyHistory'"
        >
            <PrivacyHistory/>
        </div>
        <div
            v-if="renderCondition === 'DBLog'"
        >
            <DBLog/>
        </div>
        <div
            v-if="renderCondition === 'EmployeeHistory'"
        >
            <EmployeeHistory/>
        </div>
        <div
            v-if="renderCondition === 'AssessmentHistory'"
        >
            <AssessmentHistory/>
        </div>
    </div>
</template>
<script>
import ConnectInform from "../../components/Manager/logManagement/ConnectInform.vue"
import ConnectStatistics from "../../components/Manager/logManagement/ConnectStatistics.vue"
import CurrentAccessor from "../../components/Manager/logManagement/CurrentAccessor.vue"
import PasswordHistory from "../../components/Manager/logManagement/PasswordHistory.vue"
import PrivacyHistory from "../../components/Manager/logManagement/PrivacyHistory.vue"
import DBLog from "../../components/Manager/logManagement/DBLog.vue"
import EmployeeHistory from "../../components/Manager/logManagement/EmployeeHistory.vue"
import AssessmentHistory from "../../components/Manager/logManagement/AssessmentHistory.vue"

export default {
    components: {
        ConnectInform,
        ConnectStatistics,
        CurrentAccessor,
        PasswordHistory,
        PrivacyHistory,
        DBLog,
        EmployeeHistory,
        AssessmentHistory,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'ConnectInform'
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