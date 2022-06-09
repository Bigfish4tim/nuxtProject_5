<template>
    <div>
        <v-row>
            <v-col md="1">
                <div>
                    기준일 : 
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
                        v-model="filterDate"
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
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(filterDate)"
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
                :items="departmentFilter"
                v-model="departmentFilterText"
                label="-부서-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="lookupFilter"
                v-model="lookupFilterText"
                label="-조회건-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
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
                    <td colspan="2" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.lastlastMonthSuspense).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.lastMonthOccur).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.currentMonthOccur).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.occurIncrease).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.lastMonthProcess).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.currentMonthProcess).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.processOccur).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.lastMonthSuspense).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.currentMonthSuspense).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.suspenseIncrease).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.currentSuspense).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import MonthlyStatisticsFilters from "../../../mixins.js/Statistics/performanceStatus/MonthlyStatistics/MonthlyStatisticsFilters"
import MonthlyStatisticsList from "../../../mixins.js/Statistics/performanceStatus/MonthlyStatistics/MonthlyStatisticsList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        MonthlyStatisticsFilters,
        MonthlyStatisticsList,
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
                    text: '사원',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '전전월미결',
                    align: 'center',
                    value: 'lastlastMonthSuspense',
                    width: '140px',
                },
                {
                    text: '전월발생',
                    align: 'center',
                    value: 'lastMonthOccur',
                    width: '140px',
                },
                {
                    text: '당월발생',
                    align: 'center',
                    value: 'currentMonthOccur',
                    width: '140px',
                },
                {
                    text: '발생증감',
                    align: 'center',
                    value: 'occurIncrease',
                    width: '140px',
                },
                {
                    text: '전월처리',
                    align: 'center',
                    value: 'lastMonthProcess',
                    width: '140px',
                },
                {
                    text: '당월처리',
                    align: 'center',
                    value: 'currentMonthProcess',
                    width: '140px',
                },
                {
                    text: '처리증감',
                    align: 'center',
                    value: 'processOccur',
                    width: '140px',
                },
                {
                    text: '전월미결',
                    align: 'center',
                    value: 'lastMonthSuspense',
                    width: '140px',
                },
                {
                    text: '당월미결',
                    align: 'center',
                    value: 'currentMonthSuspense',
                    width: '140px',
                },
                {
                    text: '미결증감',
                    align: 'center',
                    value: 'suspenseIncrease',
                    width: '140px',
                },
                {
                    text: '현미결',
                    align: 'center',
                    value: 'currentSuspense',
                    width: '140px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'MonthlyStatistics_note',
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