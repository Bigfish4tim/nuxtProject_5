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
            <v-col md="1">
                <v-select
                :items="closingResultFilter"
                v-model="closingResultFilterText"
                label="-종결결과-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="dayFilter"
                v-model="dayFilterText"
                label="-일자구분-"
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
                    <td>{{ items.map(item => item.beforeCount).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.beforemonthAVGCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.presentCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.presentmonthAVGCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.increase).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import ClosingSummaryFilters from "../../../mixins.js/Statistics/performanceStatus/ClosingSummary/ClosingSummaryFilters"
import ClosingSummaryList from "../../../mixins.js/Statistics/performanceStatus/ClosingSummary/ClosingSummaryList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        ClosingSummaryFilters,
        ClosingSummaryList,
    ],
    data() {
        return {
            filterMenu: false,

            items: [],

            year: new Date().getFullYear()
        }
    },
    computed: {
        headers() {
            return [
                {
                    text: '보험사',
                    align: 'center',
                    value: 'allinsurName',
                    width: '140px',
                },
                {
                    text: '지점',
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
                    text: 처리기일(C-Day),
                    align: 'center',
                    value: 'processDate',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '전체',
                            align: 'center',
                            value: 'processTotalDate',
                            width: '140px',
                        },
                        {
                            text: '부책',
                            align: 'center',
                            value: 'liabilityDate',
                            width: '140px',
                        },
                        {
                            text: '부지급',
                            align: 'center',
                            value: 'nonPayment',
                            width: '140px',
                        },
                        {
                            text: '해지',
                            align: 'center',
                            value: 'termination',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '종결건수',
                    align: 'center',
                    value: 'closingDate',
                    width: '420px',
                    divider: true,
                    children: [
                        {
                            text: '상해',
                            align: 'center',
                            value: 'wound',
                            width: '140px',
                        },
                        {
                            text: '질병',
                            align: 'center',
                            value: 'disease',
                            width: '140px',
                        },
                        {
                            text: '계',
                            align: 'center',
                            value: 'closingTotalCount',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '미결건',
                    align: 'center',
                    value: 'suspenseCount',
                    width: '140px',
                },
                {
                    text: '지정건',
                    align: 'center',
                    value: 'appointedCount',
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
        },
    },
}
</script>
<style>
    
</style>