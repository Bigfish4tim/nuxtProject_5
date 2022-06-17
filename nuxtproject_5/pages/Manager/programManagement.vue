<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('RequiredDocuments')">징구서류</v-btn>
            <v-btn @click="Rendering('HospitalInformation')">부서관리</v-btn>
            <v-btn @click="Rendering('AccidentArea')">보고서결제라인</v-btn>
            <v-btn @click="Rendering('CalendarManage')">달력관리</v-btn>
            <v-btn @click="Rendering('DiseaseCode')">질병코드</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'RequiredDocuments'"
        >
            <RequiredDocuments/>
        </div>
        <div
            v-if="renderCondition === 'HospitalInformation'"
        >
            <HospitalInformation/>
        </div>
        <div
            v-if="renderCondition === 'AccidentArea'"
        >
            <AccidentArea/>
        </div>
        <div
            v-if="renderCondition === 'CalendarManage'"
        >
            <CalendarManage/>
        </div>
        <div
            v-if="renderCondition === 'DiseaseCode'"
        >
            <DiseaseCode/>
        </div>
    </div>
</template>
<script>
import RequiredDocuments from "../../components/Manager/diseaseAdminCode/RequiredDocuments.vue"
import HospitalInformation from "../../components/Manager/diseaseAdminCode/HospitalInformation.vue"
import AccidentArea from "../../components/Manager/diseaseAdminCode/AccidentArea.vue"
import CalendarManage from "../../components/Manager/diseaseAdminCode/CalendarManage.vue"
import DiseaseCode from "../../components/Manager/diseaseAdminCode/DiseaseCode.vue"

export default {
    components: {
        RequiredDocuments,
        HospitalInformation,
        AccidentArea,
        CalendarManage,
        DiseaseCode,
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