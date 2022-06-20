<template>
    <div>
        <v-row>
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
            :search="allFilterTextSearch"
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
import CurrentAccessorFilters from "../../../mixins.js/Manager/logManagement/CurrentAccessor/CurrentAccessorFilters"
import CurrentAccessorList from "../../../mixins.js/Manager/logManagement/CurrentAccessor/CurrentAccessorList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        CurrentAccessorFilters,
        CurrentAccessorList,
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
                    text: '번호',
                    align: 'center',
                    value: 'logIndex',
                    width: '140px',
                },
                {
                    text: '사원명',
                    align: 'center',
                    value: 'employeeName',
                    width: '140px',
                },
                {
                    text: '부서',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '로그인',
                    align: 'center',
                    value: 'loginDate',
                    width: '140px',
                },
                {
                    text: '접속유지',
                    align: 'center',
                    value: 'accessMaintain',
                    width: '140px',
                },
                {
                    text: '세션종료예정시간',
                    align: 'center',
                    value: 'sessionEndate',
                    width: '140px',
                },
                {
                    text: '최종시간',
                    align: 'center',
                    value: 'logEndate',
                    width: '140px',
                },
                {
                    text: '강제종료(세션삭제시간)',
                    align: 'center',
                    value: 'forcedQuit',
                    width: '140px',
                },
                {
                    text: '접속IP',
                    align: 'center',
                    value: 'accessIP',
                    width: '140px',
                },
                {
                    text: '사용시간(분)',
                    align: 'center',
                    value: 'usageTime_m',
                    width: '140px',
                },
                {
                    text: '미사용시간(분)',
                    align: 'center',
                    value: 'unusedTime_m',
                    width: '140px',
                },
                {
                    text: '강제종료(초)',
                    align: 'center',
                    value: 'forcedQuit_s',
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