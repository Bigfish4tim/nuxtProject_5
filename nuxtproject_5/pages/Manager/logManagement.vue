<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('ConnectInform')">접속정보</v-btn>
            <v-btn @click="Rendering('ConnectStatistics')">접속통계</v-btn>
            <v-btn @click="Rendering('CurrentAccessor')">접속통계</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'ConnectInform'"
        >
            <ConnectInform/>
        </div>
        <div
            v-if="renderCondition === 'ConnectStatistics'"
        >
            <ConnectStatistics/>
        </div>
        <div
            v-if="renderCondition === 'CurrentAccessor'"
        >
            <CurrentAccessor/>
        </div>
    </div>
</template>
<script>
import ConnectInform from "../../components/Manager/logManagement/ConnectInform.vue"
import ConnectStatistics from "../../components/Manager/logManagement/ConnectStatistics.vue"
import CurrentAccessor from "../../components/Manager/logManagement/CurrentAccessor.vue"

export default {
    components: {
        ConnectInform,
        ConnectStatistics,
        CurrentAccessor,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'ConnectInform'
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