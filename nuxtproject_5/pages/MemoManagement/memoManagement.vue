<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('MemoManagement')">메모관리</v-btn>
            <v-btn @click="Rendering('MemoDeleteLog')">메모삭제로그</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'MemoManagement'"
        >
            <MemoManagement/>
        </div>
        <div
            v-if="renderCondition === 'MemoDeleteLog'"
        >
            <MemoDeleteLog/>
        </div>
    </div>
</template>
<script>
import MemoManagement from "../../components/MemoManagement/memoManagement/MemoManagement.vue"
import MemoDeleteLog from "../../components/MemoManagement/memoManagement/MemoDeleteLog.vue"

export default {
    components: {
        MemoManagement,
        MemoDeleteLog,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'MemoManagement'
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