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
import MemoDeleteLogFilters from "../../../mixins.js/MemoManagement/memoManagement/MemoDeleteLog/MemoDeleteLogFilters"
import MemoDeleteLogList from "../../../mixins.js/MemoManagement/memoManagement/MemoDeleteLog/MemoDeleteLogList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        MemoDeleteLogFilters,
        MemoDeleteLogList,
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
                    value: 'memoIndex',
                    width: '140px',
                },
                {
                    text: '삭제분류',
                    align: 'center',
                    value: 'memoDeleteBunryu',
                    width: '140px',
                },
                {
                    text: '삭제일시',
                    align: 'center',
                    value: 'memoDeleteDate',
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
                    text: '처리내용',
                    align: 'center',
                    value: 'memoProcessDetail',
                    width: '140px',
                },
                {
                    text: '원작성일시',
                    align: 'center',
                    value: 'memoWriteDate',
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