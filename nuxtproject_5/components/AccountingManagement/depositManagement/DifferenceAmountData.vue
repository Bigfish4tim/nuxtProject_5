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
                :items="speciesFilter"
                v-model="speciesFilterText"
                label="-보종-"
                ></v-select>
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
            <v-col>
                <v-text-field
                v-model="accountingFilterTextSearch"
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
            :search="accountingFilterTextSearch"
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
                    <td colspan="17" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.invoice).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.basic_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.surcharge).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.incentive).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.daily_expenses).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.transportation_cost).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.paperwork_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.medical_advice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.legal_advice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.etc).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.expenses).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import DifferenceAmountDataFilters from "../../../mixins.js/AccountingManagement/depositManagement/DifferenceAmountData/DifferenceAmountDataFilters"
import DifferenceAmountDataList from "../../../mixins.js/AccountingManagement/depositManagement/DifferenceAmountData/DifferenceAmountDataList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        DifferenceAmountDataFilters,
        DifferenceAmountDataList,
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
                    width: '80px',
                },
                {
                    text: '종',
                    align: 'center',
                    value: 'species',
                    width: '80px',
                },
                {
                    text: 'N',
                    align: 'center',
                    value: 'n',
                    width: '80px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
                    width: '140px',
                },
                {
                    text: '사고번호',
                    align: 'center',
                    value: 'sagoNum',
                    width: '140px',
                },
                {
                    text: '표시명',
                    align: 'center',
                    value: 'display',
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
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '사고일자',
                    align: 'center',
                    value: 'sagodate',
                    width: '140px',
                },
                {
                    text: '위임일',
                    align: 'center',
                    value: 'wiimDate',
                    width: '110px',
                },
                {
                    text: '종결일',
                    align: 'center',
                    value: 'endate',
                    width: '110px',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '발행일',
                    align: 'center',
                    value: 'setdate',
                    width: '110px',
                },
                {
                    text: '입금일',
                    align: 'center',
                    value: 'depodate',
                    width: '110px',
                },
                {
                    text: '입금액',
                    align: 'center',
                    value: 'deposit_amount',
                    width: '120px',
                },
                {
                    text: '발행액',
                    align: 'center',
                    value: 'setBill',
                    width: '110px',
                },
                {
                    text: '차액',
                    align: 'center',
                    value: 'differenceBill',
                    width: '110px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'differenceAmountNote',
                    width: '110px',
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