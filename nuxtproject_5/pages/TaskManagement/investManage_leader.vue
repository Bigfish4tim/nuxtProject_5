<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('asd')">조사진행</v-btn>
            <v-btn @click="Rendering('asdzxc')">진행보고</v-btn>
            <v-btn @click="Rendering('qwe123')">타지점의뢰</v-btn>
            <v-btn @click="Rendering('qwe123')">종결현황</v-btn>
            <v-btn @click="Rendering('qwe123')">실적현황</v-btn>
        </v-btn-toggle>
        <div
        
        >

        </div>
    </div>
</template>
<script>
export default {
    components: {

    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: ''
        }
    },
    methods: {
        Rendering(cond) {
            this.renderCondition = cond
        }
    },
}
</script>
<style>
    
</style>