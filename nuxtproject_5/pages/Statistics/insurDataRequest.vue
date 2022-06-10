<template>
    <div>
        <div
            v-if="renderCondition === 'BranchStatistics'"
        >
            <BranchStatistics/>
        </div>
    </div>
</template>
<script>
import BranchStatistics from "../../components/Statistics/branchStatistics/BranchStatistics.vue"

export default {
    components: {
        BranchStatistics,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'BranchStatistics',
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