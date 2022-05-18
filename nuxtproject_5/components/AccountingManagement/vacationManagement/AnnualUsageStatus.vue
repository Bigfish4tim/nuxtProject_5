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
                    <td colspan="5" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.grantVacation).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.vacation_1st).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_2nd).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_3th).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_4th).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_5th).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_6th).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_7th).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_8th).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_9th).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_10th).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_11th).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_12th).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_used).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.vacation_leftover).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import AnnualUsageStatusFilters from "../../../mixins.js/AccountingManagement/vacationManagement/AnnualUsageStatus/AnnualUsageStatusFilters"
import AnnualUsageStatusList from "../../../mixins.js/AccountingManagement/vacationManagement/AnnualUsageStatus/AnnualUsageStatusList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        AnnualUsageStatusFilters,
        AnnualUsageStatusList,
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
                    text: '부여일수',
                    align: 'center',
                    value: 'grantVacation',
                    width: '140px',
                },
                {
                    text: '1월',
                    align: 'center',
                    value: 'vacation_1st',
                    width: '120px',
                },
                {
                    text: '2월',
                    align: 'center',
                    value: 'vacation_2nd',
                    width: '120px',
                },
                {
                    text: '3월',
                    align: 'center',
                    value: 'vacation_3th',
                    width: '120px',
                },
                {
                    text: '4월',
                    align: 'center',
                    value: 'vacation_4th',
                    width: '120px',
                },
                {
                    text: '5월',
                    align: 'center',
                    value: 'vacation_5th',
                    width: '120px',
                },
                {
                    text: '6월',
                    align: 'center',
                    value: 'vacation_6th',
                    width: '120px',
                },
                {
                    text: '7월',
                    align: 'center',
                    value: 'vacation_7th',
                    width: '120px',
                },
                {
                    text: '8월',
                    align: 'center',
                    value: 'vacation_8th',
                    width: '120px',
                },
                {
                    text: '9월',
                    align: 'center',
                    value: 'vacation_9th',
                    width: '120px',
                },
                {
                    text: '10월',
                    align: 'center',
                    value: 'vacation_10th',
                    width: '120px',
                },
                {
                    text: '11월',
                    align: 'center',
                    value: 'vacation_11th',
                    width: '120px',
                },
                {
                    text: '12월',
                    align: 'center',
                    value: 'vacation_12th',
                    width: '120px',
                },
                {
                    text: '사용일수',
                    align: 'center',
                    value: 'vacation_used',
                    width: '140px',
                },
                {
                    text: '잔여일수',
                    align: 'center',
                    value: 'vacation_leftover',
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