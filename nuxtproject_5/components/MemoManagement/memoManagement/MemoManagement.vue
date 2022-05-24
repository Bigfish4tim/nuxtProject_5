<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="deletebunryuFilter"
                v-model="deletebunryuFilterText"
                label="-삭제분류-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="deletewhetherFilter"
                v-model="deletewhetherFilterText"
                label="-삭제여부-"
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
import MemoManagementFilters from "../../../mixins.js/MemoManagement/memoManagement/MemoManagement/MemoManagementFilters"
import MemoManagementList from "../../../mixins.js/MemoManagement/memoManagement/MemoManagement/MemoManagementList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        MemoManagementFilters,
        MemoManagementList,
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
                    text: '작성일',
                    align: 'center',
                    value: 'memoWriteDate',
                    width: '140px',
                },
                {
                    text: '삭제분류',
                    align: 'center',
                    value: 'memoDeleteBunryu',
                    width: '140px',
                },
                {
                    text: '삭제',
                    align: 'center',
                    value: 'memoDelete',
                    width: '140px',
                },
                {
                    text: '작성자',
                    align: 'center',
                    value: 'memoWriter',
                    width: '140px',
                },
                {
                    text: '수신자',
                    align: 'center',
                    value: 'memoReceiver',
                    width: '140px',
                },
                {
                    text: '제목',
                    align: 'center',
                    value: 'memoTitle',
                    width: '280px',
                },
                {
                    text: '첨부',
                    align: 'center',
                    value: 'memoAttachment',
                    width: '140px',
                },
                {
                    text: '사원수',
                    align: 'center',
                    value: 'memoReceiverCount',
                    width: '140px',
                },
                {
                    text: '근무자수',
                    align: 'center',
                    value: 'memoReceiver',
                    width: '140px',
                },
                {
                    text: '작성일시',
                    align: 'center',
                    value: 'memoDate',
                    width: '140px',
                },
                {
                    text: '삭제일시',
                    align: 'center',
                    value: 'memoDeleteDate',
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