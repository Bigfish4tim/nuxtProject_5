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
                :items="subspeciesFilter"
                v-model="subspeciesFilterText"
                label="-부보종-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="surveyFilter"
                v-model="surveyFilterText"
                label="-조사분류-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="accidentTypeFilter"
                v-model="accidentTypeFilterText"
                label="-사고유형-"
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
                <div>
                    경과일보정 : 
                </div>
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
        </v-data-table>
    </div>
</template>
<script>
import ClosingStatusFilters from "../../../mixins.js/Statistics/performanceStatus/ClosingStatus/ClosingStatusFilters"
import ClosingStatusList from "../../../mixins.js/Statistics/performanceStatus/ClosingStatus/ClosingStatusList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        ClosingStatusFilters,
        ClosingStatusList,
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
                    text: 'NO',
                    align: 'center',
                    value: 'commitmentIndex',
                    width: '140px',
                },
                {
                    text: '코드',
                    align: 'center',
                    value: 'closingStatusCode',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '건수',
                    align: 'center',
                    value: 'closingStatusCount',
                    width: '140px',
                },
                {
                    text: '추가건',
                    align: 'center',
                    value: 'closingStatusAddCount',
                    width: '140px',
                },
                {
                    text: '사정료계',
                    align: 'center',
                    value: 'closingStatusTotal_fee',
                    width: '130px',
                },
                {
                    text: '기본료',
                    align: 'center',
                    value: 'closingStatusbasic_fee',
                    width: '130px',
                },
                {
                    text: '추가료',
                    align: 'center',
                    value: 'closingStatussurcharge',
                    width: '130px',
                },
                {
                    text: '인센티브',
                    align: 'center',
                    value: 'closingStatusincentive',
                    width: '130px',
                },
                {
                    text: '일비',
                    align: 'center',
                    value: 'closingStatusdaily_expenses',
                    width: '130px',
                },
                {
                    text: '교통비',
                    align: 'center',
                    value: 'closingStatustransportation_cost',
                    width: '130px',
                },
                {
                    text: '서류비',
                    align: 'center',
                    value: 'closingStatuspaperwork_fee',
                    width: '130px',
                },
                {
                    text: '의료자문',
                    align: 'center',
                    value: 'closingStatusmedical_advice',
                    width: '130px',
                },
                {
                    text: '법률자문',
                    align: 'center',
                    value: 'closingStatuslegal_advice',
                    width: '130px',
                },
                {
                    text: '기타',
                    align: 'center',
                    value: 'closingStatusetc',
                    width: '130px',
                },
                {
                    text: '사용경비',
                    align: 'center',
                    value: 'closingStatusexpenses',
                    width: '130px',
                },
                {
                    text: '실적액',
                    align: 'center',
                    value: 'closingStatusPerformance',
                    width: '130px',
                },
                {
                    text: '소요일',
                    align: 'center',
                    value: 'closingStatusDuration',
                    width: '130px',
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