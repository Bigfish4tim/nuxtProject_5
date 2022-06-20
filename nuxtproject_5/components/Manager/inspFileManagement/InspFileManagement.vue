<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="documentFilter"
                v-model="documentFilterText"
                label="-문서분류-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="statusFilter"
                v-model="statusFilterText"
                label="-상태-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="allFilter"
                v-model="allFilterText"
                label="-전체검색-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="allFilterTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="allFilterTextSearch"
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
import InspFileManagementFilters from "../../../mixins.js/Manager/inspFileManagement/InspFileManagement/InspFileManagementFilters"
import InspFileManagementList from "../../../mixins.js/Manager/inspFileManagement/InspFileManagement/InspFileManagementList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        InspFileManagementFilters,
        InspFileManagementList,
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
                    text: '보종',
                    align: 'center',
                    value: 'species',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'InspFileStatus',
                    width: '140px',
                },
                {
                    text: '삭제',
                    align: 'center',
                    value: 'InspDelete',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
                    width: '140px',
                },
                {
                    text: '문류',
                    align: 'center',
                    value: 'documnetType',
                    width: '140px',
                },
                {
                    text: '파일명',
                    align: 'center',
                    value: 'inspFileName',
                    width: '140px',
                },
                {
                    text: '확장자',
                    align: 'center',
                    value: 'inspFileExtension',
                    width: '140px',
                },
                {
                    text: '용량',
                    align: 'center',
                    value: 'inspFileSize',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '위임일',
                    align: 'center',
                    value: 'wiimDate',
                    width: '140px',
                },
                {
                    text: '종결일',
                    align: 'center',
                    value: 'endate',
                    width: '140px',
                },
                {
                    text: '삭제일',
                    align: 'center',
                    value: 'inspFileDeleteDate',
                    width: '140px',
                },
                {
                    text: '계약자',
                    align: 'center',
                    value: 'contractor',
                    width: '140px',
                },
                {
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '140px',
                },
                {
                    text: '등록자',
                    align: 'center',
                    value: 'manager',
                    width: '140px',
                },
                {
                    text: '등록일',
                    align: 'center',
                    value: 'registrationDate',
                    width: '140px',
                },
                {
                    text: 'PATH',
                    align: 'center',
                    value: 'inspFilePath',
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