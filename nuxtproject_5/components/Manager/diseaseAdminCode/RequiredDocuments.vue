<template>
    <div>
        <v-row>
            <v-col>
                <v-btn>징구서류등록</v-btn>
            </v-col>
            <v-col>
                <v-btn>선택항목사용처리</v-btn>
            </v-col>
            <v-col>
                <v-btn>선택항목사용중지처리</v-btn>
            </v-col>
            <v-col>
                <v-btn>선택항목완전삭제</v-btn>
            </v-col>
            <v-col>
                <v-btn>징구서류관리</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="1">
                <v-select
                :items="companyFilter"
                v-model="companyFilterText"
                label="-보험사-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="speciesFilter"
                v-model="speciesFilterText"
                label="-보종-"
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
            :search="allFilterTextSearchClone"
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
import RequiredDocumentsFilters from "../../../mixins.js/Manager/diseaseAdminCode/RequiredDocuments/RequiredDocumentsFilters"
import RequiredDocumentsList from "../../../mixins.js/Manager/diseaseAdminCode/RequiredDocuments/RequiredDocumentsList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        RequiredDocumentsFilters,
        RequiredDocumentsList,
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
                    text: 'NO',
                    align: 'center',
                    value: 'documentNO',
                    width: '420px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'documentStatus',
                    width: '140px',
                },
                {
                    text: '보종',
                    align: 'center',
                    value: 'documentSpecies',
                    width: '140px',
                },
                {
                    text: '파일명',
                    align: 'center',
                    value: 'documentFileName',
                    width: '140px',
                },
                {
                    text: '다운파일명',
                    align: 'center',
                    value: 'downloadFileName',
                    width: '140px',
                },
                {
                    text: '보험사영문',
                    align: 'center',
                    value: 'companyEnglish',
                    width: '140px',
                },
                {
                    text: '정렬',
                    align: 'center',
                    value: 'documentSort',
                    width: '140px',
                },
                {
                    text: '등록자',
                    align: 'center',
                    value: 'documentRegistrant',
                    width: '140px',
                },
                {
                    text: '등록일',
                    align: 'center',
                    value: 'registrationDate',
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