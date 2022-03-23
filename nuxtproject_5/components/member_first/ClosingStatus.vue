<template>
    <div>
        <v-row>
            <v-col md="1">
                <div>
                    종결년도: 
                </div>
            </v-col>
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
                v-model="chargeFilterTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
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
                    <td colspan="3" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.totalcase).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.basic_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.surcharge).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.incentive).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.daily_expenses).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.transportation_cost).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.paperwork_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.medical_advice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.legal_advice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.etc).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.total).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import ClosingStatusFilters from "../../mixins.js/member_first/ClosingStatus/ClosingStatusFilters"
import ClosingStatusList from "../../mixins.js/member_first/ClosingStatus/ClosingStatusList"
import Resizable from "../../mixins.js/Resizable"
import ExcelDownloader from "../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        ClosingStatusList,
        ClosingStatusFilters,
        Resizable,
        ExcelDownloader,
    ],
    mounted() {
        var date = new Date()
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 2).toISOString().substr(0, 10)

        console.log(firstDay)
        console.log(date)
        console.log(this.wiimDate)
        console.log(this.first)
    },
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
                    text: 'C',
                    align: 'center',
                    value: 'c',
                    width: '140px',
                },
                {
                    text: '년월',
                    align: 'center',
                    value: 'excel',
                    width: '140px',
                },
                {
                    text: '사원',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '건수',
                    align: 'center',
                    value: 'totalcase',
                    width: '140px',
                },
                {
                    text: '기본료',
                    align: 'center',
                    value: 'basic_fee',
                    width: '130px',
                },
                {
                    text: '추가료',
                    align: 'center',
                    value: 'surcharge',
                    width: '130px',
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
                    value: 'daily_expenses',
                    width: '130px',
                },
                {
                    text: '교통비',
                    align: 'center',
                    value: 'transportation_cost',
                    width: '130px',
                },
                {
                    text: '서류비',
                    align: 'center',
                    value: 'paperwork_fee',
                    width: '130px',
                },
                {
                    text: '의료자문',
                    align: 'center',
                    value: 'medical_advice',
                    width: '130px',
                },
                {
                    text: '법률자문',
                    align: 'center',
                    value: 'legal_advice',
                    width: '130px',
                },
                {
                    text: '기타',
                    align: 'center',
                    value: 'etc',
                    width: '130px',
                },
                {
                    text: '합계',
                    align: 'center',
                    value: 'total',
                    width: '140px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'note',
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