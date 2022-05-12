<template>
    <div>
        <v-row>
            <v-col md="1">
                <div>
                    기준일 : 
                </div>
            </v-col>
            <v-col md="1">
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="date"
                        label="위임일자"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        required
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="date"
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
                        @click="$refs.menu.save(date)"
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
                :items="departmentFilter"
                v-model="departmentFilterText"
                label="-사원-"
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
                <v-btn>검색</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn @click="excelDownload">엑셀다운</v-btn>
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
            <template #header="{ }">
                <thead class="topbody">
                    <tr>
                        <td
                            v-for="(h,i) in headers" 
                            :key="i" 
                            class="topbody_data" 
                            :rowspan="h.children?1:2" 
                            :colspan="h.children?h.children.length:1"
                        >
                            {{ h.text }}
                        </td>
                    </tr>
                    <tr>
                        <td 
                            v-for="(h1,i1) in getSubHeader(headers)" 
                            :key="i1" 
                            class=""
                        >
                            {{ h1.text }}
                        </td>
                    </tr>
                </thead>
            </template>
            <template #item="props">
                <tr>
                    <td v-for="(c,ci) in getRows(props.item)" :key="ci">
                        {{ c }}
                    </td>
                </tr>
            </template>
            <template v-slot:body.append="{ items }">
                <tr class="bottombody">
                    <td colspan="2" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.previousPending_1).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.currentPending_1).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.currentClosing_1).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.totalcount_1).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.totalPendingRate_1).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.count_1_5).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.PendingRate_1_5).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.count_1_30).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.PendingRate_1_30).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.count_1_60).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.PendingRate_1_60).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.count_1_90).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.PendingRate_1_90).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.count_1_180).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.PendingRate_1_180).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.overpendingcount_1).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.overpendingrate_1).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import PendingStatusFilters from "../../../mixins.js/TaskManagement/pendingManagement_1/PendingStatus/PendingStatusFilters"
import PendingStatusList from "../../../mixins.js/TaskManagement/pendingManagement_1/PendingStatus/PendingStatusList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        PendingStatusFilters,
        PendingStatusList,
    ],
    data() {
        return {
            menu: false,

            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

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
                    text: '수임/종결현황',
                    align: 'center',
                    value: 'commit_closingStatus',
                    width: '420px',
                    divider: true,
                    children: [
                        {
                            text: '전월미결',
                            align: 'center',
                            value: 'previousPending_1',
                            width: '140px',
                        },
                        {
                            text: '당월발생',
                            align: 'center',
                            value: 'currentPending_1',
                            width: '140px',
                        },
                        {
                            text: '당월종결',
                            align: 'center',
                            value: 'currentClosing_1',
                            width: '140px',
                        },
                    ]
                },
                {
                    text: '전체미결',
                    align: 'center',
                    value: 'totalpending_1',
                    width: '280px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'totalcount_1',
                            width: '140px'
                        },
                        {
                            text: '미결률',
                            align: 'center',
                            value: 'totalPendingRate_1',
                            width: '140px'
                        },
                    ]
                },
                {
                    text: '5일초과',
                    align: 'center',
                    value: 'excess_1_5',
                    width: '280px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'count_1_5',
                            width: '140px'
                        },
                        {
                            text: '미결률',
                            align: 'center',
                            value: 'PendingRate_1_5',
                            width: '140px'
                        },
                    ]
                },
                {
                    text: '30일초과',
                    align: 'center',
                    value: 'excess_1_30',
                    width: '280px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'count_1_30',
                            width: '140px'
                        },
                        {
                            text: '미결률',
                            align: 'center',
                            value: 'PendingRate_1_30',
                            width: '140px'
                        },
                    ]
                },
                {
                    text: '60일초과',
                    align: 'center',
                    value: 'excess_1_60',
                    width: '280px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'count_1_60',
                            width: '140px'
                        },
                        {
                            text: '미결률',
                            align: 'center',
                            value: 'PendingRate_1_60',
                            width: '140px'
                        },
                    ]
                },
                {
                    text: '90일초과',
                    align: 'center',
                    value: 'excess_1_90',
                    width: '280px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'count_1_90',
                            width: '140px'
                        },
                        {
                            text: '미결률',
                            align: 'center',
                            value: 'PendingRate_1_90',
                            width: '140px'
                        },
                    ]
                },
                {
                    text: '180일초과',
                    align: 'center',
                    value: 'excess_1_180',
                    width: '280px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'count_1_180',
                            width: '140px'
                        },
                        {
                            text: '미결률',
                            align: 'center',
                            value: 'PendingRate_1_180',
                            width: '140px'
                        },
                    ]
                },
                {
                    text: '60일초과전체',
                    align: 'center',
                    value: 'overpending_1',
                    width: '280px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'overpendingcount_1',
                            width: '140px'
                        },
                        {
                            text: '미결률',
                            align: 'center',
                            value: 'overpendingrate_1',
                            width: '140px'
                        },
                    ]
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'pendingStatus_note',
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
        getMainHeader(headers) {
            return headers.filter((i) => i.children);
        },
        getSubHeader(headers) {
            let result = [];

            headers
                .filter((i) => i.children)
                .forEach((v) => {
                    result = result.concat(v.children);
                });
            return result;
        },
        getRows(rows) {
            const result = {};
            _.forEach(rows, (i, key) => {
                if (i.children) {
                _.forEach(i.children, (i1, key1) => {
                    result["c" + key1] = i1;
                });
                } else result[key] = i;
            });
            return result;
        }
    },
}
</script>
<style>
    
</style>