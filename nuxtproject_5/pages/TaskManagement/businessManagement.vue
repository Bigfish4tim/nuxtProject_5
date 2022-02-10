<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('WaitingItems')">대기항목</v-btn>
            <v-btn @click="Rendering('asd')">상세내역</v-btn>
            <v-btn @click="Rendering('add')">교부리스트</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'WaitingItems'"
        >
            <WaitingItems/>
        </div>
    </div>
</template>
<script>
import WaitingItems from "../../components/businessManagement/WaitingItems.vue"

export default {
    components: {
        WaitingItems,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'WaitingItems'
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