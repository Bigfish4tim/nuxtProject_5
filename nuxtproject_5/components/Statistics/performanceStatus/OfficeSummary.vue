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
                :items="bunryucountFilter"
                v-model="bunryucountFilterText"
                label="-건분류-"
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
                :items="standardFilter"
                v-model="standardFilterText"
                label="-부서기준-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="departsortFilter"
                v-model="departsortFilterText"
                label="-정렬기준-"
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
                    <td>{{ items.map(item => item.processTotalDate).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.liabilityDate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.nonPayment).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.termination).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.wound).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.disease).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.closingTotalCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.appointedCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.invoiceEstimatedAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.adjustmentAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.etcAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.performanceAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.liabilityCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.liabilityCountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.liabilityAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.liabilityAmountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.indemnificationCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.indemnificationCountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.indemnificationAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.indemnificationAmountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.cutCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.cutCountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.cutAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.cutAmountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.nonPaymentCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.nonPaymentCountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.nonPaymentAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.nonPaymentAmountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.terminationCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.terminationCountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.terminationAgreeCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.terminationAgreeCountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.terminationAuthorityCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.terminationAuthorityCountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.budamboCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.budamboCountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.jobChangeCount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.jobChangeCountRate).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.EvaluationResults_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.EvaluationResults_add).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.EvaluationResults_incen).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.EvaluationResults_amount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import OfficeSummaryFilters from "../../../mixins.js/Statistics/performanceStatus/OfficeSummary/OfficeSummaryFilters"
import OfficeSummaryList from "../../../mixins.js/Statistics/performanceStatus/OfficeSummary/OfficeSummaryList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        OfficeSummaryFilters,
        OfficeSummaryList,
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
                    text: '처리기일',
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
                    text: '지정건',
                    align: 'center',
                    value: 'appointedCount',
                    width: '140px',
                },
                {
                    text: '인보이스',
                    align: 'center',
                    value: 'performanceInvoice',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '추산액',
                            align: 'center',
                            value: 'invoiceEstimatedAmount',
                            width: '140px',
                        },
                        {
                            text: '사정료계',
                            align: 'center',
                            value: 'adjustmentAmount',
                            width: '140px',
                        },
                        {
                            text: '비용',
                            align: 'center',
                            value: 'etcAmount',
                            width: '140px',
                        },
                        {
                            text: '실적',
                            align: 'center',
                            value: 'performanceAmount',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '부책율',
                    align: 'center',
                    value: 'liability',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'liabilityCount',
                            width: '140px',
                        },
                        {
                            text: '비율(건)',
                            align: 'center',
                            value: 'liabilityCountRate',
                            width: '140px',
                        },
                        {
                            text: '금액',
                            align: 'center',
                            value: 'liabilityAmount',
                            width: '140px',
                        },
                        {
                            text: '비율(금)',
                            align: 'center',
                            value: 'liabilityAmountRate',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '면책율',
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
                            text: '금액',
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
                    text: '삭감율',
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
                            text: '금액',
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
                            text: '금액',
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
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
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
                    text: '해지동의',
                    align: 'center',
                    value: 'terminationAgree',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'terminationAgreeCount',
                            width: '140px',
                        },
                        {
                            text: '비율(건)',
                            align: 'center',
                            value: 'terminationAgreeCountRate',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '직권해지',
                    align: 'center',
                    value: 'terminationAuthority',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'terminationAuthorityCount',
                            width: '140px',
                        },
                        {
                            text: '비율(건)',
                            align: 'center',
                            value: 'terminationAuthorityCountRate',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '부담보',
                    align: 'center',
                    value: 'budambo',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'budamboCount',
                            width: '140px',
                        },
                        {
                            text: '비율(건)',
                            align: 'center',
                            value: 'budamboCountRate',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '직업급수변경',
                    align: 'center',
                    value: 'jobChange',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '건수',
                            align: 'center',
                            value: 'jobChangeCount',
                            width: '140px',
                        },
                        {
                            text: '비율(건)',
                            align: 'center',
                            value: 'jobChangeCountRate',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '평가실적',
                    align: 'center',
                    value: 'EvaluationResults',
                    width: '560px',
                    divider: true,
                    children: [
                        {
                            text: '기본료',
                            align: 'center',
                            value: 'EvaluationResults_fee',
                            width: '140px',
                        },
                        {
                            text: '추가료',
                            align: 'center',
                            value: 'EvaluationResults_add',
                            width: '140px',
                        },
                        {
                            text: '인센티브',
                            align: 'center',
                            value: 'EvaluationResults_incen',
                            width: '140px',
                        },
                        {
                            text: '평가실적',
                            align: 'center',
                            value: 'EvaluationResults_amount',
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