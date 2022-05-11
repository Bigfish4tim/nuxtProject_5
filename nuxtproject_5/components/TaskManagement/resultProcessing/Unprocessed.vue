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
                :items="bunryu1Filter"
                v-model="bunryu1FilterText"
                label="-분류-"
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
                :items="companyFilter"
                v-model="companyFilterText"
                label="-보험사-"
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
                :items="departmentFilter"
                v-model="departmentFilterText"
                label="-부서-"
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
                    <td>{{ items.map(item => item.invoice).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.resultSales).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.depositAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ items.map(item => item.assessment_cost).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.daily_expenses).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.transportation_cost).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.paperwork_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.expenses).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ items.map(item => item.estimatedLoss).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.depositAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import UnprocessedFilters from "../../../mixins.js/TaskManagement/resultProcessing/Unprocessed/UnprocessedFilters"
import UnprocessedList from "../../../mixins.js/TaskManagement/resultProcessing/Unprocessed/UnprocessedList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        UnprocessedFilters,
        UnprocessedList,
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
                    text: '분류',
                    align: 'center',
                    value: 'bunryu1',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '종결일자',
                    align: 'center',
                    value: 'endate',
                    width: '110px',
                },
                {
                    text: '실적일자',
                    align: 'center',
                    value: 'resultDate',
                    width: '110px',
                },
                {
                    text: 'TAX일자',
                    align: 'center',
                    value: 'TAXDate',
                    width: '110px',
                },
                {
                    text: '인보이스',
                    align: 'center',
                    value: 'invoice',
                    width: '120px',
                },
                {
                    text: '실적매출',
                    align: 'center',
                    value: 'resultSales',
                    width: '120px',
                },
                {
                    text: '입금액',
                    align: 'center',
                    value: 'depositAmount',
                    width: '110px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '담당자(보)',
                    align: 'center',
                    value: 'manager',
                    width: '110px',
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
                    text: '조사자',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '사정료',
                    align: 'center',
                    value: 'assessment_cost',
                    width: '140px',
                },
                {
                    text: '일비',
                    align: 'center',
                    value: 'daily_expenses',
                    width: '130px',
                },
                {
                    text: '교통비',
                    align: 'center',
                    value: 'transportation_cost',
                    width: '130px',
                },
                {
                    text: '서류비',
                    align: 'center',
                    value: 'paperwork_fee',
                    width: '130px',
                },
                {
                    text: '경비',
                    align: 'center',
                    value: 'expenses',
                    width: '130px',
                },
                {
                    text: '특이사항',
                    align: 'center',
                    value: 'significant',
                    width: '130px',
                },
                {
                    text: '보험종목',
                    align: 'center',
                    value: 'insurType1',
                    width: '160px',
                },
                {
                    text: '입금일자',
                    align: 'center',
                    value: 'depodate',
                    width: '110px',
                },
                {
                    text: '증권번호',
                    align: 'center',
                    value: 'stockNum1',
                    width: '130px',
                },
                {
                    text: '사고번호',
                    align: 'center',
                    value: 'sagoNum',
                    width: '140px',
                },
                {
                    text: '조사팀',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'bunryu1',
                    width: '140px',
                },
                {
                    text: '위임일자',
                    align: 'center',
                    value: 'wiimDate',
                    width: '110px',
                },
                {
                    text: '사고일자',
                    align: 'center',
                    value: 'sagodate',
                    width: '140px',
                },
                {
                    text: '조사지역',
                    align: 'center',
                    value: 'location',
                    width: '150px',
                },
                {
                    text: '추산금액',
                    align: 'center',
                    value: 'estimatedLoss',
                    width: '120px',
                },
                {
                    text: '입금액',
                    align: 'center',
                    value: 'depositAmount',
                    width: '110px',
                },
                {
                    text: '부서',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '수정자',
                    align: 'center',
                    value: 'modifier',
                    width: '110px',
                },
                {
                    text: '코드(보)',
                    align: 'center',
                    value: 'code',
                    width: '110px'
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