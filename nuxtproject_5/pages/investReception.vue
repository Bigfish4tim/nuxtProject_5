<template>
  <v-container>
    <v-btn @click="Rendering('Reciepts')">조사접수</v-btn>
    <v-btn @click="Rendering('RequestChange')">변경요청</v-btn>
    <v-btn @click="Rendering('ProgressReport')">진행보고</v-btn>
    <v-btn @click="Rendering('LossAssessment')">진행보고</v-btn>
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
  </v-container>

</template>

<script>
import Receipts from '../components/investReception/Receipts.vue'
import Practive from '../components/investReception/practive.vue'
import ReceiptsTest from '../components/investReception/ReceiptsTest.vue'
import RequestChange from '../components/investReception/RequestChange.vue'
import ProgressReport from '../components/investReception/ProgressReport.vue'
import LossAssessment from '../components/investReception/LossAssessment.vue'

export default {
  components: { 
    Receipts,
    Practive, 
    ReceiptsTest,
    RequestChange,
    ProgressReport,
    LossAssessment,
  },
  data() {
    return {
      renderCondition: 'Reciepts',
    }
  },
  methods: {
    Rendering(cond) {
      this.renderCondition = cond
    }
  },
}
</script>