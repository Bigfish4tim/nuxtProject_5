<template>
  <v-container>
    <div>조사접수</div>
    <!-- <Receipts/> -->
    <ReceiptsTest/>
    <!-- <Practive/> -->
  </v-container>

</template>

<script>
import Receipts from '../components/investReception/Receipts.vue'
import Practive from '../components/investReception/practive.vue'
import ReceiptsTest from '../components/investReception/ReceiptsTest.vue'

export default {
  components: { 
    Receipts,
    Practive, 
    ReceiptsTest,
  },

}
</script>