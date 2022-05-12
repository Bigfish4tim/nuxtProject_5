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
                :items="companyFilter"
                v-model="companyFilterText"
                label="-보험사-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="allFilter"
                v-model="allFilterText"
                label="-전체검색-"
                ></v-select>
            </v-col>
            <v-col md="2">
                <v-text-field
                v-model="allFilterTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <div>
                    경과일: 
                </div>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="lapseSearch"
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
            <template v-slot:body.append="{ items }">
                <tr class="bottombody">
                    <td colspan="6" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.estimatedLoss).reduce(sumReducer, '') }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ items.map(item => item.lapsec).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.lapseW).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <td></td>
                    <td>{{ items.map(item => item.expectedPayment).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <!-- <td>{{ items.map(item => item.calories).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.fat).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.carbs).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.protein).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => parseInt(item.iron)).reduce((prev, curr) => prev + curr, 0) + '%'}}</td> -->
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from '../../../mixins.js/ExcelDownloader'
import ProgressReportFilters from "../../../mixins.js/TaskManagement/member_first/ProgressReport/ProgressReportFilters"
import ProgressReportList from "../../../mixins.js/TaskManagement/member_first/ProgressReport/ProgressReportList"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        ProgressReportList,
        ProgressReportFilters
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
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                    filters: this.companyFiltering,
                },
                {
                    text: '추산보험금',
                    align: 'center',
                    value: 'estimatedLoss',
                    width: '140px',
                },
                {
                    text: '위임일자',
                    align: 'center',
                    value: 'wiimDate',
                    width: '140px',
                },
                {
                    text: '수정일자',
                    align: 'center',
                    value: 'modifiedDate',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                    filters: this.statusFiltering,
                },
                {
                    text: '경과(C)',
                    align: 'center',
                    value: 'lapsec',
                    width: '140px',
                    filters: this.lapseFiltering,
                },
                {
                    text: '경과(W)',
                    align: 'center',
                    value: 'lapseW',
                    width: '140px',
                },
                {
                    text: '진행내용',
                    align: 'center',
                    value: 'progressContent',
                    width: '140px',
                },
                {
                    text: '사고번호',
                    align: 'center',
                    value: 'sagoNum',
                    width: '140px',
                },
                {
                    text: '예상지급액',
                    align: 'center',
                    value: 'expectedPayment',
                    width: '140px',
                },
                {
                    text: '예상종결일',
                    align: 'center',
                    value: 'expectedEndate',
                    width: '140px',
                },
            ]
        }
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
<style lang="scss">
@import '@/assets/Datatable.scss';

</style>