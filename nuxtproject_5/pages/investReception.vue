<template>
  <v-container>
    <v-btn @click="Rendering('Reciepts')">조사접수</v-btn>
    <v-btn @click="Rendering('RequestChange')">변경요청</v-btn>
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
  </v-container>

</template>

<script>
import Receipts from '../components/investReception/Receipts.vue'
import Practive from '../components/investReception/practive.vue'
import ReceiptsTest from '../components/investReception/ReceiptsTest.vue'
import RequestChange from '../components/investReception/RequestChange.vue'

export default {
  components: { 
    Receipts,
    Practive, 
    ReceiptsTest,
    RequestChange,
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