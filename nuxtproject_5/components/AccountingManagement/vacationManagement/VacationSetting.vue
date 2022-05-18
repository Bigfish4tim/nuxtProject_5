<template>
    <div>
        <v-row>
            <v-col>
                <div>
                    기준일자 : 
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
                :items="statusFilter"
                v-model="statusFilterText"
                label="-상태-"
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
                    <td colspan="10" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.expectedAnnual).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.availableAnnual).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.usedAnnual).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.leftoverAnnual).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.annual).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.paidTotal).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.unpaidTotal).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import VacationSettingFilters from "../../../mixins.js/AccountingManagement/vacationManagement/VacationSetting/VacationSettingFilters"
import VacationSettingList from "../../../mixins.js/AccountingManagement/vacationManagement/VacationSetting/VacationSettingList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        VacationSettingFilters,
        VacationSettingList,
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
                    text: '시작년도',
                    align: 'center',
                    value: 'accountingYear',
                    width: '140px',
                },
                {
                    text: '기준',
                    align: 'center',
                    value: 'accountingStandard',
                    width: '140px',
                },
                {
                    text: '부서',
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
                    text: '직급',
                    align: 'center',
                    value: 'position',
                    width: '140px',
                },
                {
                    text: '입사일',
                    align: 'center',
                    value: 'entryDate',
                    width: '140px',
                },
                {
                    text: '시작일',
                    align: 'center',
                    value: 'entryDate',
                    width: '140px',
                },
                {
                    text: '종료일',
                    align: 'center',
                    value: 'entryDate',
                    width: '140px',
                },
                {
                    text: '예정연차',
                    align: 'center',
                    value: 'expectedAnnual',
                    width: '140px',
                },
                {
                    text: '가용연차',
                    align: 'center',
                    value: 'availableAnnual',
                    width: '140px',
                },
                {
                    text: '사용연차',
                    align: 'center',
                    value: 'usedAnnual',
                    width: '140px',
                },
                {
                    text: '잔여연차',
                    align: 'center',
                    value: 'leftoverAnnual',
                    width: '140px',
                },
                {
                    text: '연차',
                    align: 'center',
                    value: 'annual',
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