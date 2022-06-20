<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Program')">프로그램</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Program'"
        >
            <Program/>
        </div>
    </div>
</template>
<script>
import Program from "../../components/Manager/programManagement/Program.vue"

export default {
    components: {
        Program,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'Program'
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