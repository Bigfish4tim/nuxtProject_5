<template>
    <div>
        <v-row>
            <v-col>
                <v-btn>보고서결재자등록</v-btn>
            </v-col>
        </v-row>
        <v-row>
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
import ReportApprovalLineFilters from "../../../mixins.js/Manager/userManagement/ReportApprovalLine/ReportApprovalLineFilters"
import ReportApprovalLineList from "../../../mixins.js/Manager/userManagement/ReportApprovalLine/ReportApprovalLineList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        ReportApprovalLineFilters,
        ReportApprovalLineList,
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
                    text: '순번',
                    align: 'center',
                    value: 'reportApprovalIndex',
                    width: '140px',
                },
                {
                    text: '부서명',
                    align: 'center',
                    value: 'departName',
                    width: '140px',
                },
                {
                    text: '팀장',
                    align: 'center',
                    value: 'departLeader',
                    width: '140px',
                },
                {
                    text: '결재자',
                    align: 'center',
                    value: 'approver',
                    width: '140px',
                },
                {
                    text: '1차 결재',
                    align: 'center',
                    value: 'approver_1',
                    width: '140px',
                },
                {
                    text: '2차 결재',
                    align: 'center',
                    value: 'approver_2',
                    width: '140px',
                },
                {
                    text: '3차 결재',
                    align: 'center',
                    value: 'approver_3',
                    width: '140px',
                },
                {
                    text: '4차 결재',
                    align: 'center',
                    value: 'approver_4',
                    width: '140px',
                },
                {
                    text: '5차 결재',
                    align: 'center',
                    value: 'approver_5',
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