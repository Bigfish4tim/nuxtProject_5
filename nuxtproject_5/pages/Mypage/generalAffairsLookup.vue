<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('Privacy')">개인정보</v-btn>
            <v-btn @click="Rendering('Password')">비밀번호</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'Privacy'"
        >
            <Privacy/>
        </div>
        <div
            v-if="renderCondition === 'Password'"
        >
            <Password/>
        </div>
    </div>
</template>
<script>
import Privacy from "../../components/Mypage/privacyChange/Privacy.vue"
import Password from "../../components/Mypage/privacyChange/Password.vue"

export default {
    components: {
        Privacy,
        Password,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'Privacy'
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