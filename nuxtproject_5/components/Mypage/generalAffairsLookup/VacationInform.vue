<template>
    <div>
        <v-row>
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
                :items="additionalFilter"
                v-model="additionalFilterText"
                label="-추가건-"
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
        </v-data-table>
    </div>
</template>
<script>
import CommitmentStatusFilters from "../../../mixins.js/Statistics/performanceStatus/CommitmentStatus/CommitmentStatusFilters"
import CommitmentStatusList from "../../../mixins.js/Statistics/performanceStatus/CommitmentStatus/CommitmentStatusList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        CommitmentStatusFilters,
        CommitmentStatusList,
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
                    text: '의뢰일자',
                    align: 'center',
                    value: 'commitmentDate',
                    width: '140px',
                },
                {
                    text: '일반건',
                    align: 'center',
                    value: 'commitmentNormalCount',
                    width: '420px',
                },
                {
                    text: '추가건',
                    align: 'center',
                    value: 'commitmentAddCount',
                    width: '140px',
                },
                {
                    text: '전체건',
                    align: 'center',
                    value: 'commitmentTotalCount',
                    width: '140px',
                },
                {
                    text: '농협손보',
                    align: 'center',
                    value: 'insuranceNH',
                    width: '140px',
                },
                {
                    text: '메리츠',
                    align: 'center',
                    value: 'insuranceM',
                    width: '140px',
                },
                {
                    text: 'DB손보',
                    align: 'center',
                    value: 'insuranceDB',
                    width: '140px',
                },
                {
                    text: 'KB손보',
                    align: 'center',
                    value: 'insuranceKB',
                    width: '140px',
                },
                {
                    text: 'KB손사',
                    align: 'center',
                    value: 'insuranceKB2',
                    width: '140px',
                },
                {
                    text: '롯데손보',
                    align: 'center',
                    value: 'insuranceLotte',
                    width: '140px',
                },
                {
                    text: '삼성화재',
                    align: 'center',
                    value: 'insuranceSS',
                    width: '140px',
                },
                {
                    text: '수협',
                    align: 'center',
                    value: 'insuranceSH',
                    width: '140px',
                },
                {
                    text: '한화손보',
                    align: 'center',
                    value: 'insuranceHH',
                    width: '140px',
                },
                {
                    text: '현대해상',
                    align: 'center',
                    value: 'insuranceHD',
                    width: '140px',
                },
                {
                    text: '흥국화재',
                    align: 'center',
                    value: 'insuranceHG',
                    width: '140px',
                },
                {
                    text: 'AIG손보',
                    align: 'center',
                    value: 'insuranceAIG',
                    width: '140px',
                },
                {
                    text: 'MG손보',
                    align: 'center',
                    value: 'insuranceMG',
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