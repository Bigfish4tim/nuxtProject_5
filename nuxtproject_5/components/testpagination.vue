<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    >
      <div>asdfasdfsadf</div>   
    </v-pagination>
    <v-btn @click="pageup">pageup</v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
    methods: {
        pageup() {
            this.page = this.page + 1
        }
    }
  }
</script>