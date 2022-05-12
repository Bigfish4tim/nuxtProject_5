<template>
    <!-- <Stickyhead/> -->
    <!-- <Doubleheader/> -->
    <!-- <Exceltest /> -->
    <!-- <ExcelDownload /> -->
    <!-- <TestPagination/> -->
    <!-- <Receipts/> -->
    <!-- <Practive/> -->
    <Vuelidate/>
</template>

<script>
import Stickyhead from "../components/TaskManagement/investReception/stickyhead.vue"
import Doubleheader from "../components/doubleheader.vue"
import Exceltest from "../components/exceltest.vue"
import ExcelDownload from "../components/excelDownload.vue"
import TestPagination from "../components/testpagination.vue"
import Receipts from "../components/TaskManagement/investReception/Receipts.vue"
import Practive from "../components/TaskManagement/investReception/practive.vue"
import Vuelidate from "../components/vuelidate.vue"

export default {
    components: { 
        Stickyhead,
        Doubleheader, 
        Exceltest,
        ExcelDownload,
        TestPagination,
        Receipts,
        Practive,
        Vuelidate,
    }
}
</script>
