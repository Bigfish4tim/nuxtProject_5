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
        }
    },
    computed: {
        headers() {
            return [
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
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
                    text: '소요',
                    align: 'center',
                    value: 'duration',
                    width: '140px',
                },
                {
                    text: '건수',
                    align: 'center',
                    value: 'individualCount',
                    width: '420px',
                    divider: true,
                    children: [
                        {
                            text: '재물',
                            align: 'center',
                            value: 'individualPackage',
                            width: '140px',
                        },
                        {
                            text: '배책',
                            align: 'center',
                            value: 'individualLiability',
                            width: '140px',
                        },
                        {
                            text: '계',
                            align: 'center',
                            value: 'individualTotal',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '추산액',
                    align: 'center',
                    value: 'individualEstimated',
                    width: '140px',
                },
                {
                    text: '사정료계',
                    align: 'center',
                    value: 'individualAdjustment',
                    width: '140px',
                },
                {
                    text: '비용',
                    align: 'center',
                    value: 'individualCost',
                    width: '140px',
                },
                {
                    text: '실적',
                    align: 'center',
                    value: 'individualPerformance',
                    width: '140px',
                },
                {
                    text: '면책',
                    align: 'center',
                    value: 'indemnification',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'indemnificationCount',
                            width: '140px',
                        },
                        {
                            text: '비율(건)',
                            align: 'center',
                            value: 'indemnificationCountRate',
                            width: '140px',
                        },
                        {
                            text: '면책액',
                            align: 'center',
                            value: 'indemnificationAmount',
                            width: '140px',
                        },
                        {
                            text: '비율(금)',
                            align: 'center',
                            value: 'indemnificationAmountRate',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '삭감',
                    align: 'center',
                    value: 'cut',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'cutCount',
                            width: '140px',
                        },
                        {
                            text: '비율(건)',
                            align: 'center',
                            value: 'cutCountRate',
                            width: '140px',
                        },
                        {
                            text: '면책액',
                            align: 'center',
                            value: 'cutAmount',
                            width: '140px',
                        },
                        {
                            text: '비율(금)',
                            align: 'center',
                            value: 'cutAmountRate',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '부지급',
                    align: 'center',
                    value: 'nonPayment',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'nonPaymentCount',
                            width: '140px',
                        },
                        {
                            text: '비율(건)',
                            align: 'center',
                            value: 'nonPaymentCountRate',
                            width: '140px',
                        },
                        {
                            text: '면책액',
                            align: 'center',
                            value: 'nonPaymentAmount',
                            width: '140px',
                        },
                        {
                            text: '비율(금)',
                            align: 'center',
                            value: 'nonPaymentAmountRate',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '해지',
                    align: 'center',
                    value: 'termination',
                    width: '280px',
                    divider: true,
                    children: [
                        {
                            text: '해지건',
                            align: 'center',
                            value: 'terminationCount',
                            width: '140px',
                        },
                        {
                            text: '비율(건)',
                            align: 'center',
                            value: 'terminationCountRate',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '평가실적',
                    align: 'center',
                    value: 'evaluation',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '기본료',
                            align: 'center',
                            value: 'evaluation_fee',
                            width: '140px',
                        },
                        {
                            text: '추가료',
                            align: 'center',
                            value: 'evaluation_add',
                            width: '140px',
                        },
                        {
                            text: '인센티브',
                            align: 'center',
                            value: 'evaluation_incentive',
                            width: '140px',
                        },
                        {
                            text: '평가실적',
                            align: 'center',
                            value: 'evaluationResult',
                            width: '140px',
                        },
                    ],
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