<template>
    <div>
        <v-row>
            <v-col>
                <div>
                    기준년도 : 
                </div>
            </v-col>
            <v-col>
                <v-text-field
                v-model="year"
                ></v-text-field>
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
                    text: '구분',
                    align: 'center',
                    value: 'closingSummary_category',
                    width: '140px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'closingSummary_classification',
                    width: '140px',
                },
                {
                    text: this.year-1,
                    align: 'center',
                    value: 'beforeDate',
                    width: '280px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'beforeCount',
                            width: '140px',
                        },
                        {
                            text: '월평균',
                            align: 'center',
                            value: 'beforemonthAVGCount',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: this.year,
                    align: 'center',
                    value: 'presentDate',
                    width: '280px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'presentCount',
                            width: '140px',
                        },
                        {
                            text: '월평균',
                            align: 'center',
                            value: 'presentmonthAVGCount',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '증감(%)',
                    align: 'center',
                    value: 'increase',
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