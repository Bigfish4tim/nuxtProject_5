<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="yearsFilter"
                v-model="yearsFilterText"
                ></v-select>
            </v-col>
            <v-col md="1">
                <div>
                    조사자: 
                </div>
            </v-col>
            <v-col md="1">
                <v-text-field
                label="사원이름"
                v-model="chargeFilterTextSearch"
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
            :search="chargeFilterTextSearchClone"
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
                    <td colspan="2" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.totalcase).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.sales).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.basefee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.surcharge).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.incentive).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.perdiem).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.transportation).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.document).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.medicaladvice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.legaladvice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.etc).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import ProfitStatusFilters from "../../mixins.js/investManage_member/ProfitStatus/ProfitStatusFilters"
import ProfitStatusList from "../../mixins.js/investManage_member/ProfitStatus/ProfitStatusList"
import Resizable from "../../mixins.js/Resizable"
import ExcelDownloader from "../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        ProfitStatusList,
        ProfitStatusFilters,
        Resizable,
        ExcelDownloader,
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
                    text: 'C',
                    align: 'center',
                    value: 'c',
                    width: '140px',
                },
                {
                    text: '년/월',
                    align: 'center',
                    value: 'excel',
                    width: '140px',
                },
                {
                    text: '건수',
                    align: 'center',
                    value: 'totalcase',
                    width: '140px',
                },
                {
                    text: '매출액',
                    align: 'center',
                    value: 'sales',
                    width: '140px',
                },
                {
                    text: '기본료',
                    align: 'center',
                    value: 'basefee',
                    width: '140px',
                },
                {
                    text: '추가료',
                    align: 'center',
                    value: 'surcharge',
                    width: '140px',
                },
                {
                    text: '인센티브',
                    align: 'center',
                    value: 'incentive',
                    width: '130px',
                },
                {
                    text: '일비',
                    align: 'center',
                    value: 'perdiem',
                    width: '140px',
                },
                {
                    text: '교통비',
                    align: 'center',
                    value: 'transportation',
                    width: '140px',
                },
                {
                    text: '서류비',
                    align: 'center',
                    value: 'document',
                    width: '140px',
                },
                {
                    text: '의료자문',
                    align: 'center',
                    value: 'medicaladvice',
                    width: '140px',
                },
                {
                    text: '법률자문',
                    align: 'center',
                    value: 'legaladvice',
                    width: '140px',
                },
                {
                    text: '기타',
                    align: 'center',
                    value: 'etc',
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