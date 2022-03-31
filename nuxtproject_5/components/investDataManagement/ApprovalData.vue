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
                :items="myStateFilter"
                v-model="myStateFilterText"
                label="-내상태-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="approveDivFilter"
                v-model="approveDivFilterText"
                label="-결재구분-"
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
import ApprovalDataFilters from "../../mixins.js/investDataManagement/ApprovalData/ApprovalDataFilters"
import ApprovalDataList from "../../mixins.js/investDataManagement/ApprovalData/ApprovalDataList"
import Resizable from "../../mixins.js/Resizable"
import ExcelDownloader from "../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        ApprovalDataFilters,
        ApprovalDataList,
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
                    width: '140px',
                },
                {
                    text: '순번',
                    align: 'center',
                    value: 'index',
                    width: '140px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'bunryu1',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'communicationState',
                    width: '140px',
                },
                {
                    text: '내결재',
                    align: 'center',
                    value: 'myApproval',
                    width: '80px',
                },
                {
                    text: '보종',
                    align: 'center',
                    value: 'species',
                    width: '140px',
                },
                {
                    text: '열람',
                    align: 'center',
                    value: 'browse',
                    width: '140px',
                },
                {
                    text: '요청일',
                    align: 'center',
                    value: 'requestDate',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
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
                },
                {
                    text: '요청자',
                    align: 'center',
                    value: 'requester',
                    width: '140px',
                },
                {
                    text: '요청내용',
                    align: 'center',
                    value: 'requestDetails',
                    width: '140px',
                },
                {
                    text: '결재자',
                    align: 'center',
                    value: 'approver',
                    width: '140px',
                },
                {
                    text: '결재일',
                    align: 'center',
                    value: 'approveDate',
                    width: '140px',
                },
                {
                    text: '전송일',
                    align: 'center',
                    value: 'transmissionDate',
                    width: '140px',
                },
                {
                    text: '결재내용',
                    align: 'center',
                    value: 'approveContents',
                    width: '140px',
                },
            ]
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