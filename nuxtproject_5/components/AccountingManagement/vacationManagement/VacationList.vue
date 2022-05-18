<template>
    <div>
        <v-row>
            <v-col>
                <div>
                    기간 : 
                </div>
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
                :items="statusFilter"
                v-model="statusFilterText"
                label="-상태-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="paidFilter"
                v-model="paidFilterText"
                label="-유/무급-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="vacationstatusFilter"
                v-model="vacationstatusFilterText"
                label="-휴가분류-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="signstatusFilter"
                v-model="signstatusFilterText"
                label="-결재상태-"
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
                :items="workstatusFilter"
                v-model="workstatusFilterText"
                label="-근무여부-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="allFilter"
                v-model="allFilterText"
                label="-사원명-"
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
            <template v-slot:body.append="{ items }">
                <tr class="bottombody">
                    <td colspan="9" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.vacationCount).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.annualLeave).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.paidTotal).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.unpaidTotal).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import VacationListFilters from "../../../mixins.js/AccountingManagement/vacationManagement/VacationList/VacationListFilters"
import VacationListList from "../../../mixins.js/AccountingManagement/vacationManagement/VacationList/VacationListList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        VacationListFilters,
        VacationListList,
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
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '사원명',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '사업부',
                    align: 'center',
                    value: 'BusinessPart',
                    width: '140px',
                },
                {
                    text: '부서',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '일자',
                    align: 'center',
                    value: 'vacationDate',
                    width: '140px',
                },
                {
                    text: '유/무급',
                    align: 'center',
                    value: 'paidUnpaid',
                    width: '140px',
                },
                {
                    text: '휴가분류',
                    align: 'center',
                    value: 'vacationStatus',
                    width: '140px',
                },
                {
                    text: '휴가기간',
                    align: 'center',
                    value: 'vacationTerm',
                    width: '140px',
                },
                {
                    text: '일수',
                    align: 'center',
                    value: 'vacationCount',
                    width: '140px',
                },
                {
                    text: '연차',
                    align: 'center',
                    value: 'annualLeave',
                    width: '140px',
                },
                {
                    text: '유급',
                    align: 'center',
                    value: 'paidTotal',
                    width: '140px',
                },
                {
                    text: '무급',
                    align: 'center',
                    value: 'unpaidTotal',
                    width: '140px',
                },
                {
                    text: '결재',
                    align: 'center',
                    value: 'vacationSign',
                    width: '140px',
                },
                {
                    text: '결재문서',
                    align: 'center',
                    value: 'signDocument',
                    width: '140px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'vacationNote',
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