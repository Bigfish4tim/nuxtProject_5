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
            <v-col md="1">
                <v-btn>법인카드등록</v-btn>
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
import CorpCardManageFilters from "../../../mixins.js/Manager/userManagement/CorpCardManage/CorpCardManageFilters"
import CorpCardManageList from "../../../mixins.js/Manager/userManagement/CorpCardManage/CorpCardManageList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        CorpCardManageFilters,
        CorpCardManageList,
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
                    text: '사원명',
                    align: 'center',
                    value: 'employeeName',
                    width: '140px',
                },
                {
                    text: '부서명',
                    align: 'center',
                    value: 'departName',
                    width: '420px',
                },
                {
                    text: '카드번호',
                    align: 'center',
                    value: 'cardNum',
                    width: '140px',
                },
                {
                    text: '구분',
                    align: 'center',
                    value: 'cardgubun',
                    width: '140px',
                },
                {
                    text: '공용',
                    align: 'center',
                    value: 'public',
                    width: '140px',
                },
                {
                    text: '사용',
                    align: 'center',
                    value: 'private',
                    width: '140px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'CorpCardManage_note',
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