<template>
    <!-- <Stickyhead/> -->
    <!-- <Doubleheader/> -->
    <!-- <Exceltest /> -->
    <ExcelDownload />
</template>

<script>
import Stickyhead from "../components/investReception/stickyhead.vue"
import Doubleheader from "../components/doubleheader.vue"
import Exceltest from "../components/exceltest.vue"
import ExcelDownload from "../components/excelDownload.vue"

export default {
    components: { 
        Stickyhead,
        Doubleheader, 
        Exceltest,
        ExcelDownload,
    }
}
</script>
