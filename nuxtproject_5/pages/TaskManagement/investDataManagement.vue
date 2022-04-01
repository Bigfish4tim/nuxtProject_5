<template>
  <v-container>
    <v-btn-toggle v-model="toggle_status">
      <v-btn @click="Rendering('DataManagement')">기본자료관리</v-btn>
      <v-btn @click="Rendering('ApprovalData')">결재자료</v-btn>
      <v-btn @click="Rendering('RateError')">배분율오류</v-btn>
      <v-btn @click="Rendering('InvestigatorError')">정조사자오류</v-btn>
    </v-btn-toggle>
    <div
      v-if="renderCondition === 'DataManagement'"
    >
      <DataManagement/>
    </div>
    <div
      v-if="renderCondition === 'ApprovalData'"
    >
      <ApprovalData/>
    </div>
    <div
      v-if="renderCondition === 'RateError'"
    >
      <RateError/>
    </div>
    <div
      v-if="renderCondition === 'InvestigatorError'"
    >
      <InvestigatorError/>
    </div>
  </v-container>

</template>

<script>
import DataManagement from '../../components/investDataManagement/DataManagement.vue'
import ApprovalData from '../../components/investDataManagement/ApprovalData.vue'
import RateError from '../../components/investDataManagement/RateError.vue'
import InvestigatorError from '../../components/investDataManagement/InvestigatorError.vue'

export default {
  components: { 
    DataManagement,
    ApprovalData,
    RateError,
    InvestigatorError,
  },
  data() {
    return {
      renderCondition: 'DataManagement',

      toggle_status: 0
    }
  },
  methods: {
    Rendering(cond) {
      this.renderCondition = cond
    }
  },
}
</script>