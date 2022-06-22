<template>
    <div>
        <div
            v-if="renderCondition === 'AccessIPManagement'"
        >
            <AccessIPManagement/>
        </div>
    </div>
</template>
<script>
import AccessIPManagement from "../../components/Manager/accessIPManagement/AccessIPManagement.vue"

export default {
    components: {
        AccessIPManagement,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'AccessIPManagement'
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