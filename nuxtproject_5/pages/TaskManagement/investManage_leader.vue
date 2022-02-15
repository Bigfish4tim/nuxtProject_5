<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('InvestProgress')">조사진행</v-btn>
            <v-btn @click="Rendering('asdzxc')">진행보고</v-btn>
            <v-btn @click="Rendering('qwe123')">타지점의뢰</v-btn>
            <v-btn @click="Rendering('qwe123')">종결현황</v-btn>
            <v-btn @click="Rendering('qwe123')">실적현황</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'InvestProgress'"
        >
            <InvestProgress/>
        </div>
    </div>
</template>
<script>
import InvestProgress from "../../components/investManage_leader/InvestProgress.vue"
export default {
    components: {
        InvestProgress,
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