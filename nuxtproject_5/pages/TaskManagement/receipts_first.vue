<template>
  <v-container>
    <v-btn-toggle v-model="toggle_status">
      <v-btn @click="Rendering('Reciepts')">조사진행</v-btn>
      <v-btn @click="Rendering('ProgressReport')">진행보고</v-btn>
      <v-btn @click="Rendering('ClosingStatus')">종결현황</v-btn>
      <v-btn @click="Rendering('MemberStatus')">팀원현황</v-btn>
      <v-btn @click="Rendering('SMSStatus')">SMS현황</v-btn>
    </v-btn-toggle>
    <div
      v-if="renderCondition === 'Reciepts'"
    >
      <Receipts/>
    </div>
    <div
      v-if="renderCondition === 'ProgressReport'"
    >
      <ProgressReport/>
    </div>
    <div
      v-if="renderCondition === 'ClosingStatus'"
    >
      <ClosingStatus/>
    </div>
    <div
      v-if="renderCondition === 'MemberStatus'"
    >
      <MemberStatus/>
    </div>
    <div
      v-if="renderCondition === 'SMSStatus'"
    >
      <SMSStatus/>
    </div>
  </v-container>
</template>

<script>
import ProgressReport from '../../components/TaskManagement/receipts_first/ProgressReport.vue'
import ClosingStatus from '../../components/TaskManagement/receipts_first/ClosingStatus.vue'
import Receipts from '../../components/TaskManagement/receipts_first/Receipts.vue'
import MemberStatus from '../../components/TaskManagement/receipts_first/MemberStatus.vue'
import SMSStatus from '../../components/TaskManagement/receipts_first/SMSStatus.vue'

export default {
  components: { 
    Receipts,
    ProgressReport,
    ClosingStatus,
    MemberStatus,
    SMSStatus,
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