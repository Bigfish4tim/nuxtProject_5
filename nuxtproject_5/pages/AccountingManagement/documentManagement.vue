<template>
    <div>
        <v-btn-toggle v-model="toggle_status">
            <v-btn @click="Rendering('CertificateIssued')">실적자료</v-btn>
        </v-btn-toggle>
        <div
            v-if="renderCondition === 'CertificateIssued'"
        >
            <CertificateIssued/>
        </div>
    </div>
</template>
<script>
import CertificateIssued from "../../components/AccountingManagement/documentManagement/CertificateIssued.vue"

export default {
    components: {
        CertificateIssued,
    },
    data() {
        return {
            toggle_status: 0,

            renderCondition: 'CertificateIssued'
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