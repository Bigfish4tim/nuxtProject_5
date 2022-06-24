<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('SecurityPolicy')">접속정보</v-btn>
            <v-btn @click="Rendering('PrivacyPolicy')">접속통계</v-btn>
            <v-btn @click="Rendering('PrivacyDeletePolicy')">현재접속자</v-btn>
            <v-btn @click="Rendering('SecurityDeleteLog')">보안삭제로그</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'SecurityPolicy'"
        >
            <SecurityPolicy/>
        </div>
        <div
            v-if="renderCondition === 'PrivacyPolicy'"
        >
            <PrivacyPolicy/>
        </div>
        <div
            v-if="renderCondition === 'PrivacyDeletePolicy'"
        >
            <PrivacyDeletePolicy/>
        </div>
        <div
            v-if="renderCondition === 'SecurityDeleteLog'"
        >
            <SecurityDeleteLog/>
        </div>
    </div>
</template>
<script>
import SecurityPolicy from "../../components/Manager/policySetting/SecurityPolicy.vue"
import PrivacyPolicy from "../../components/Manager/policySetting/PrivacyPolicy.vue"
import PrivacyDeletePolicy from "../../components/Manager/policySetting/PrivacyDeletePolicy.vue"
import SecurityDeleteLog from "../../components/Manager/policySetting/SecurityDeleteLog.vue"

export default {
    components: {
        SecurityPolicy,
        PrivacyPolicy,
        PrivacyDeletePolicy,
        SecurityDeleteLog,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'SecurityPolicy'
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