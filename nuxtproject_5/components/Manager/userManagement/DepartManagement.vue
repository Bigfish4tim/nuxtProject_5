<template>
    <div>
        <v-row>
            <v-col>
                <v-btn>부서추가</v-btn>
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
import DepartManagementFilters from "../../../mixins.js/Manager/userManagement/DepartManagement/DepartManagementFilters"
import DepartManagementList from "../../../mixins.js/Manager/userManagement/DepartManagement/DepartManagementList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        DepartManagementFilters,
        DepartManagementList,
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
                    text: '부서코드',
                    align: 'center',
                    value: 'departCode',
                    width: '420px',
                },
                {
                    text: '부서명',
                    align: 'center',
                    value: 'departName',
                    width: '140px',
                },
                {
                    text: '시작번호',
                    align: 'center',
                    value: 'departStartNum',
                    width: '140px',
                },
                {
                    text: '끝번호',
                    align: 'center',
                    value: 'departEndNum',
                    width: '140px',
                },
                {
                    text: 'SHIFT',
                    align: 'center',
                    value: 'shift',
                    width: '140px',
                },
                {
                    text: 'PID',
                    align: 'center',
                    value: 'pid',
                    width: '140px',
                },
                {
                    text: '차이',
                    align: 'center',
                    value: 'departDiff',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'departStatus',
                    width: '140px',
                },
                {
                    text: '보종',
                    align: 'center',
                    value: 'departSpecies',
                    width: '140px',
                },
                {
                    text: 'DOC',
                    align: 'center',
                    value: 'doc',
                    width: '140px',
                },
                {
                    text: '팀장',
                    align: 'center',
                    value: 'departLeader',
                    width: '140px',
                },
                {
                    text: '팀별손해사정사',
                    align: 'center',
                    value: 'teamInsur',
                    width: '140px',
                },
                {
                    text: '팀원',
                    align: 'center',
                    value: 'teamMember',
                    width: '140px',
                },
                {
                    text: '조사건',
                    align: 'center',
                    value: 'investCount',
                    width: '140px',
                },
                {
                    text: '그룹0',
                    align: 'center',
                    value: 'group0',
                    width: '140px',
                },
                {
                    text: '그룹1',
                    align: 'center',
                    value: 'group1',
                    width: '140px',
                },
                {
                    text: '그룹2',
                    align: 'center',
                    value: 'group2',
                    width: '140px',
                },
                {
                    text: '그룹3',
                    align: 'center',
                    value: 'group3',
                    width: '140px',
                },
                {
                    text: '그룹4',
                    align: 'center',
                    value: 'group4',
                    width: '140px',
                },
                {
                    text: '그룹5',
                    align: 'center',
                    value: 'group5',
                    width: '140px',
                },
                {
                    text: '그룹6',
                    align: 'center',
                    value: 'group6',
                    width: '140px',
                },
                {
                    text: '그룹7',
                    align: 'center',
                    value: 'group7',
                    width: '140px',
                },
                {
                    text: '그룹8',
                    align: 'center',
                    value: 'group8',
                    width: '140px',
                },
                {
                    text: '그룹9',
                    align: 'center',
                    value: 'group9',
                    width: '140px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'departManagement_note',
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