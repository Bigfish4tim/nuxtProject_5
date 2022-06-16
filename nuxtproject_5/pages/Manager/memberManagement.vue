<template>
    <div>
        <div
            v-if="renderCondition === 'MemberManagement'"
        >
            <MemberManagement/>
        </div>
    </div>
</template>
<script>
import MemberManagement from "../../components/Manager/memberManagement/MemberManagement.vue"

export default {
    components: {
        MemberManagement,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'MemberManagement'
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