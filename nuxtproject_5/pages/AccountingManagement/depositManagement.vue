<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('NonDeposit')">미입금</v-btn>
            <v-btn @click="Rendering('DifferenceAmountData')">차액자료</v-btn>
            <v-btn @click="Rendering('NonDeposit')">미입금</v-btn>
            <v-btn @click="Rendering('NonDeposit')">미입금</v-btn>
            <v-btn @click="Rendering('Details')">상세내역</v-btn>
            <v-btn @click="Rendering('GrantList')">교부리스트(미완)</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'NonDeposit'"
        >
            <NonDeposit/>
        </div>
        <div
            v-if="renderCondition === 'DifferenceAmountData'"
        >
            <DifferenceAmountData/>
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
import NonDeposit from "../../components/AccountingManagement/depositManagement/NonDeposit.vue"
import DifferenceAmountData from "../../components/AccountingManagement/depositManagement/DifferenceAmountData.vue"
import WaitingItems from "../../components/TaskManagement/businessManagement/WaitingItems.vue"
import Details from "../../components/TaskManagement/businessManagement/Details.vue"
import GrantList from "../../components/TaskManagement/businessManagement/GrantList.vue"

export default {
    components: {
        NonDeposit,
        DifferenceAmountData,
        WaitingItems,
        Details,
        GrantList,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'NonDeposit'
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