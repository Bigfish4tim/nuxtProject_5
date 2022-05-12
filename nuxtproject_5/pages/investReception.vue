<template>
  <v-container>
    <v-btn-toggle v-model="toggle_status">
      <v-btn @click="Rendering('Reciepts')">조사접수</v-btn>
      <v-btn @click="Rendering('RequestChange')">변경요청</v-btn>
      <v-btn @click="Rendering('ProgressReport')">진행보고</v-btn>
      <v-btn @click="Rendering('LossAssessment')">손해사정서</v-btn>
      <v-btn @click="Rendering('ClosingStatus')">종결현황</v-btn>
      <v-btn @click="Rendering('ProfitStatus')">실적현황</v-btn>
      <v-btn @click="Rendering('OtherBranchRequest')">타지점의뢰</v-btn>
      <v-btn @click="Rendering('Complaints')">민원현황</v-btn>
      <v-btn @click="Rendering('ChangeStatus')">변경현황</v-btn>
    </v-btn-toggle>
    <div
      v-if="renderCondition === 'Reciepts'"
    >
      <!-- <Receipts/> -->
      <ReceiptsTest/>
      <!-- <Practive/> -->
    </div>
    <div
      v-if="renderCondition === 'RequestChange'"
    >
      <RequestChange/>
    </div>
    <div
      v-if="renderCondition === 'ProgressReport'"
    >
      <ProgressReport/>
    </div>
    <div
      v-if="renderCondition === 'LossAssessment'"
    >
      <LossAssessment/>
    </div>
    <div
      v-if="renderCondition === 'ClosingStatus'"
    >
      <ClosingStatus/>
    </div>
    <div
      v-if="renderCondition === 'ProfitStatus'"
    >
      <ProfitStatus/>
    </div>
    <div
      v-if="renderCondition === 'OtherBranchRequest'"
    >
      <OtherBranchRequest/>
    </div>
    <div
      v-if="renderCondition === 'Complaints'"
    >
      <Complaints/>
    </div>
    <div
      v-if="renderCondition === 'ChangeStatus'"
    >
      <ChangeStatus/>
    </div>
  </v-container>

</template>

<script>
import Receipts from '../components/TaskManagement/investReception/Receipts.vue'
import Practive from '../components/TaskManagement/investReception/practive.vue'
import ReceiptsTest from '../components/TaskManagement/investReception/ReceiptsTest.vue'
import RequestChange from '../components/TaskManagement/investReception/RequestChange.vue'
import ProgressReport from '../components/TaskManagement/investReception/ProgressReport.vue'
import LossAssessment from '../components/TaskManagement/investReception/LossAssessment.vue'
import ClosingStatus from '../components/TaskManagement/investReception/ClosingStatus.vue'
import ProfitStatus from '../components/TaskManagement/investReception/ProfitStatus.vue'
import OtherBranchRequest from '../components/TaskManagement/investReception/OtherBranchRequest.vue'
import Complaints from '../components/TaskManagement/investReception/Complaints.vue'
import ChangeStatus from '../components/TaskManagement/investReception/ChangeStatus.vue'

export default {
  components: { 
    Receipts,
    Practive, 
    ReceiptsTest,
    RequestChange,
    ProgressReport,
    LossAssessment,
    ClosingStatus,
    ProfitStatus,
    OtherBranchRequest,
    Complaints,
    ChangeStatus,
  },
  data() {
    return {
      renderCondition: 'Reciepts',

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