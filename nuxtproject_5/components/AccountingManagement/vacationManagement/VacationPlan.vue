<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="statusFilter"
                v-model="statusFilterText"
                label="-상태-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="workstatusFilter"
                v-model="workstatusFilterText"
                label="-차수-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="workstatusFilter"
                v-model="workstatusFilterText"
                label="-년/월-"
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
                <v-select
                :items="workstatusFilter"
                v-model="workstatusFilterText"
                label="-근무여부-"
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
                    <td colspan="9" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.standardAnnual).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.availableAnnual).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.usedAnnual).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.leftoverAnnual).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import VacationPlanFilters from "../../../mixins.js/AccountingManagement/vacationManagement/VacationPlan/VacationPlanFilters"
import VacationPlanList from "../../../mixins.js/AccountingManagement/vacationManagement/VacationPlan/VacationPlanList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        VacationPlanFilters,
        VacationPlanList,
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
                    text: '파일',
                    align: 'center',
                    value: 'vacationFile',
                    width: '140px',
                },
                {
                    text: '생성일자',
                    align: 'center',
                    value: 'vacationFileDate',
                    width: '140px',
                },
                {
                    text: '차수',
                    align: 'center',
                    value: 'vacationFileNumber',
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
                    text: '부서',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '입사일',
                    align: 'center',
                    value: 'entryDate',
                    width: '140px',
                },
                {
                    text: '표준연차',
                    align: 'center',
                    value: 'standardAnnual',
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
                    text: '비고',
                    align: 'center',
                    value: 'vacationNote',
                    width: '140px',
                },
                {
                    text: '수정일시',
                    align: 'center',
                    value: 'vacationModifyDate',
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