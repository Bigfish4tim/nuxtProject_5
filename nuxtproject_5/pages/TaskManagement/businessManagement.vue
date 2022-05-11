<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('WaitingItems')">대기항목</v-btn>
            <v-btn @click="Rendering('Details')">상세내역</v-btn>
            <v-btn @click="Rendering('GrantList')">교부리스트(미완)</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'WaitingItems'"
        >
            <WaitingItems/>
        </div>
        <div
            v-if="renderCondition === 'Details'"
        >
            <Details/>
        </div>
        <div
            v-if="renderCondition === 'GrantList'"
        >
            <GrantList/>
        </div>
    </div>
</template>
<script>
import WaitingItems from "../../components/TaskManagement/businessManagement/WaitingItems.vue"
import Details from "../../components/TaskManagement/businessManagement/Details.vue"
import GrantList from "../../components/TaskManagement/businessManagement/GrantList.vue"

export default {
    components: {
        WaitingItems,
        Details,
        GrantList,
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