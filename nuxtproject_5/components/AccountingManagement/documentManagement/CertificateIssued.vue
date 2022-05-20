<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="dateFilter"
                v-model="dateFilterText"
                label="-기간-"
                ></v-select>
            </v-col>
            <v-col md="2">
                <v-menu
                    ref="filterMenu"
                    v-model="filterMenu"
                    :close-on-content-click="false"
                    :return-value.sync="filterDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="filterdateRange"
                        label="보험기간"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="filterDate"
                    no-title
                    scrollable
                    locale="ko-KR"
                    range
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="filterMenu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.filterMenu.save(filterDate)"
                    >
                        OK
                    </v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
            <v-col md="1">
                <v-select
                :items="processFilter"
                v-model="processFilterText"
                label="-처리상태-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="documentClassificationFilter"
                v-model="documentClassificationFilterText"
                label="-문서부류-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="departmentFilter"
                v-model="departmentFilterText"
                label="-부서-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="departmentFilter"
                v-model="departmentFilterText"
                label="-사원-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="allFilter"
                v-model="allFilterText"
                label="-전체검색-"
                ></v-select>
            </v-col>
            <v-col>
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
            hide-default-header
            :search="allFilterTextSearchClone"
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
import CertificateIssuedFilters from "../../../mixins.js/AccountingManagement/documentManagement/CertificateIssued/CertificateIssuedFilters"
import CertificateIssuedList from "../../../mixins.js/AccountingManagement/documentManagement/CertificateIssued/CertificateIssuedList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        CertificateIssuedFilters,
        CertificateIssuedList,
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
                    text: '출력',
                    align: 'center',
                    value: 'print',
                    width: '140px',
                },
                {
                    text: '번호',
                    align: 'center',
                    value: 'documentIndex',
                    width: '140px',
                },
                {
                    text: '신청일',
                    align: 'center',
                    value: 'signupDate',
                    width: '140px',
                },
                {
                    text: '문서분류',
                    align: 'center',
                    value: 'documentClassification',
                    width: '140px',
                },
                {
                    text: '문서번호',
                    align: 'center',
                    value: 'documentNumber',
                    width: '140px',
                },
                {
                    text: '처리상태',
                    align: 'center',
                    value: 'processStatus',
                    width: '140px',
                },
                {
                    text: '부서명',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '사원명',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '처리일자',
                    align: 'center',
                    value: 'processDate',
                    width: '140px',
                },
                {
                    text: '처리부서',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '처리자',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '처리메모',
                    align: 'center',
                    value: 'processNote',
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