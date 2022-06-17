<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-btn>질병코드추가</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div>코드 : </div>
            </v-col>
            <v-col>
                <v-text-field
                v-model="codeFilterText"
                ></v-text-field>
            </v-col>
            <v-col>
                <div>코드명 : </div>
            </v-col>
            <v-col>
                <v-text-field
                v-model="codenameFilterText"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="codenameFilterText"
            hide-default-header
            :items-per-page="100"
            :footer-props="{
                'items-per-page-options': [10, 50, 100]
            }"
        >
            <template v-slot:body.prepend="headers">
                <tr class="topbody">
                    <td
                        v-for="(header, i) in headers.headers"
                        :key="i"
                        class="topbody_data"
                        style="text-align: center;"
                    >
                        {{ header.text }}
                    </td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import DiseaseCodeFilters from "../../../mixins.js/Manager/diseaseAdminCode/DiseaseCode/DiseaseCodeFilters"
import DiseaseCodeList from "../../../mixins.js/Manager/diseaseAdminCode/DiseaseCode/DiseaseCodeList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        DiseaseCodeFilters,
        DiseaseCodeList,
    ],
    data() {
        return {
            filterMenu: false,

            items: [],
        }
    },
    computed: {
        headers() {
            return [
                {
                    text: '기능',
                    align: 'center',
                    value: 'function',
                    width: '140px',
                },
                {
                    text: '질병코드',
                    align: 'center',
                    value: 'diseaseCode',
                    width: '140px',
                },
                {
                    text: '질병명',
                    align: 'center',
                    value: 'diseaseName',
                    width: '140px',
                },
                {
                    text: '영문명',
                    align: 'center',
                    value: 'diseaseName_eng',
                    width: '140px',
                },
            ]
        },
        filterdateRange () {
            console.log(this.filterDate)
            return this.filterDate.join(' ~ ')
        },
    },
    methods: {
        sumReducer(prev, curr) {

            if(prev === '') {
                var intprev = 0
            } else {
                var intprev = parseInt(prev.replace(/,/g , ''))
            }

            if(curr === '') {
                var intcurr = 0
            } else {
                var intcurr = parseInt(curr.replace(/,/g , ''))
            }
            var sum = intprev + intcurr
            
            return sum.toLocaleString('ko-KR')
        },
    },
}
</script>
<style>
    
</style>