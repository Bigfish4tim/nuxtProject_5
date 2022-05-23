<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="approvalFilter"
                v-model="approvalFilterText"
                label="-분류-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="signstatusFilter"
                v-model="signstatusFilterText"
                label="-결재-"
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
                label="-전체검색-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="allFilterTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-select
                :items="approvalEtcFilter"
                v-model="approvalEtcFilterText"
                label="-기타확인-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
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
import ApprovalManagementFilters from "../../../mixins.js/WebSign/approvalManagement/ApprovalManagement/ApprovalManagementFilters"
import ApprovalManagementList from "../../../mixins.js/WebSign/approvalManagement/ApprovalManagement/ApprovalManagementList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        ApprovalManagementFilters,
        ApprovalManagementList,
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
                    text: '상태',
                    align: 'center',
                    value: 'approvalstatus',
                    width: '140px',
                },
                {
                    text: '상태2',
                    align: 'center',
                    value: 'approvalstatus2',
                    width: '140px',
                },
                {
                    text: '상태3',
                    align: 'center',
                    value: 'approvalstatus3',
                    width: '140px',
                },
                {
                    text: '기안일자',
                    align: 'center',
                    value: 'draftingDate',
                    width: '140px',
                },
                {
                    text: '승인일',
                    align: 'center',
                    value: 'approvalDate',
                    width: '140px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'bunryu1',
                    width: '140px',
                },
                {
                    text: '부서',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '기안자',
                    align: 'center',
                    value: 'drafter',
                    width: '140px',
                },
                {
                    text: '문서번호',
                    align: 'center',
                    value: 'documentNumber',
                    width: '140px',
                },
                {
                    text: '다음결재자',
                    align: 'center',
                    value: 'nextApprover',
                    width: '140px',
                },
                {
                    text: '제목',
                    align: 'center',
                    value: 'approvalTitle',
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