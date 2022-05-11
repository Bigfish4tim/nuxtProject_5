<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="communicationStateFilter"
                v-model="communicationStateFilterText"
                label="-상태-"
                ></v-select>
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
                <v-text-field
                v-model="allFilterTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-btn @click="searchEvt">검색</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn @click="excelDownload">엑셀다운</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="allFilterTextSearchClone"
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
import WaitingItemsList from "../../../mixins.js/TaskManagement/businessManagement/WaitingItems/WaitingItemsList"
import WaitingItemsFilters from "../../../mixins.js/TaskManagement/businessManagement/WaitingItems/WaitingItemsFilters"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        WaitingItemsList,
        WaitingItemsFilters,
    ],
    data() {
        return {
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
                    width: '140px',
                },
                {
                    text: '보종',
                    align: 'center',
                    value: 'species',
                    width: '140px',
                    filters: this.speciesFiltering,
                },
                {
                    text: '종결',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '종결일',
                    align: 'center',
                    value: 'endate',
                    width: '140px',
                },
                {
                    text: '수임일',
                    align: 'center',
                    value: 'wiimDate',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'communicationState',
                    width: '140px',
                    filters: this.communicationStateFiltering,
                },
                {
                    text: '보종',
                    align: 'center',
                    value: 'species',
                    width: '140px',
                },
                {
                    text: '사고유형',
                    align: 'center',
                    value: 'accidentType',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                    filters: this.companyFiltering,
                },
                {
                    text: '사고번호',
                    align: 'center',
                    value: 'sagoNum',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '계약자',
                    align: 'center',
                    value: 'contractor',
                    width: '140px',
                },
                {
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '140px',
                },
                {
                    text: '전체건',
                    align: 'center',
                    value: 'totals',
                    width: '140px',
                },
                {
                    text: '미처리',
                    align: 'center',
                    value: 'unprocessed',
                    width: '140px',
                },
                {
                    text: '대기건',
                    align: 'center',
                    value: 'waiting',
                    width: '140px',
                },
                {
                    text: '체크건',
                    align: 'center',
                    value: 'checked',
                    width: '140px',
                },
                {
                    text: '완료건',
                    align: 'center',
                    value: 'completed',
                    width: '140px',
                },
                {
                    text: '실패건',
                    align: 'center',
                    value: 'failed',
                    width: '140px',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '조사팀',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                    filters: this.departmentFiltering,
                },
            ]
        }
    },
    methods: {
        
    },
}
</script>
<style>
    
</style>