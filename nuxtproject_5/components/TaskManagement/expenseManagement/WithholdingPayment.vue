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
                :items="companyFilter"
                v-model="companyFilterText"
                label="-보험사-"
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
                :items="itemFilter"
                v-model="itemFilterText"
                label="-항목-"
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
            <v-col md="1">
                <v-btn @click="excelDownload">엑셀다운</v-btn>
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
            <template v-slot:body.append="{ items }">
                <tr class="bottombody">
                    <td colspan="7" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.expensesDetail).reduce(sumReducer, '') }}</td>
                    <td></td>
                    <td>{{ items.map(item => item.expensesDetail_date).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.sales).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import WithholdingPaymentFilters from "../../../mixins.js/TaskManagement/expenseManagement/WithholdingPayment/WithholdingPaymentFilters"
import WithholdingPaymentList from "../../../mixins.js/TaskManagement/expenseManagement/WithholdingPayment/WithholdingPaymentList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        WithholdingPaymentFilters,
        WithholdingPaymentList,
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
                    text: '대상',
                    align: 'center',
                    value: 'target',
                    width: '140px',
                },
                {
                    text: '진행',
                    align: 'center',
                    value: 'progress',
                    width: '80px',
                },
                {
                    text: '문서번호',
                    align: 'center',
                    value: 'documentNum',
                    width: '140px',
                },
                {
                    text: '항목',
                    align: 'center',
                    value: 'item',
                    width: '140px',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '종료일자',
                    align: 'center',
                    value: 'endate',
                    width: '140px',
                },
                {
                    text: '조사경비',
                    align: 'center',
                    value: 'expensesDetail',
                    width: '140px',
                },
                {
                    text: '지급일',
                    align: 'center',
                    value: 'expensesDetail_date',
                    width: '130px',
                },
                {
                    text: '지급금액',
                    align: 'center',
                    value: 'expensesDetail_date',
                    width: '130px',
                },
                {
                    text: '매출액',
                    align: 'center',
                    value: 'sales',
                    width: '140px',
                },
                {
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '140px',
                },
                {
                    text: '계약자',
                    align: 'center',
                    value: 'contractor',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '출장일',
                    align: 'center',
                    value: 'businesstrip_date',
                    width: '140px',
                },
                {
                    text: '출장지',
                    align: 'center',
                    value: 'businesstrip_location',
                    width: '140px',
                },
                {
                    text: '출장목적',
                    align: 'center',
                    value: 'businesstrip_perpose',
                    width: '140px',
                },
                {
                    text: '처리자',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'expensesDetail_note',
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