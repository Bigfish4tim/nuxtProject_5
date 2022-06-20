<template>
    <div>
        <div
            v-if="renderCondition === 'InspFileManagement'"
        >
            <InspFileManagement/>
        </div>
    </div>
</template>
<script>
import InspFileManagement from "../../components/Manager/inspFileManagement/InspFileManagement.vue"

export default {
    components: {
        InspFileManagement,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'InspFileManagement'
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