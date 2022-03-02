<template>
    <div>
        <v-row>
            <v-col>
                <v-select
                :items="departmentFilter"
                ></v-select>
            </v-col>
            <v-col>
                <v-btn>검색</v-btn>
            </v-col>
            <v-col>
                <v-btn @click="excelDownload">엑셀다운</v-btn>
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
            <template v-slot:body.append="{ items }">
                <tr class="bottombody">
                    <td colspan="2" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.charge).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.chargeB).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.chargeJ).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.deputy).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.deputyB).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.deputyJ).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.cable).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.cableB).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.cableJ).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.total).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import Resizable from "../../mixins.js/Resizable"
import ExcelDownloader from "../../mixins.js/ExcelDownloader"
import MemberStatusList from "../../mixins.js/receipts_first/MemberStatus/MemberStatusList"
import MemberStatusFilters from "../../mixins.js/receipts_first/MemberStatus/MemberStatusFilters"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        MemberStatusList,
        MemberStatusFilters,
    ],
    mounted() {

    },
    data() {
        return {
            items: [],
        }
    },
    computed: {
        headers() {
            return [
                {
                    text: '부서명',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '사원명',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '정',
                    align: 'center',
                    value: 'charge',
                    width: '140px',
                },
                {
                    text: '정(배)',
                    align: 'center',
                    value: 'chargeB',
                    width: '140px',
                },
                {
                    text: '정(재)',
                    align: 'center',
                    value: 'chargeJ',
                    width: '140px',
                },
                {
                    text: '부',
                    align: 'center',
                    value: 'deputy',
                    width: '140px',
                },
                {
                    text: '부(배)',
                    align: 'center',
                    value: 'deputyB',
                    width: '140px',
                },
                {
                    text: '부(재)',
                    align: 'center',
                    value: 'deputyJ',
                    width: '140px',
                },
                {
                    text: '유선',
                    align: 'center',
                    value: 'cable',
                    width: '140px',
                },
                {
                    text: '유선(배)',
                    align: 'center',
                    value: 'cableB',
                    width: '140px',
                },
                {
                    text: '유선(재)',
                    align: 'center',
                    value: 'cableJ',
                    width: '140px',
                },
                {
                    text: '합계',
                    align: 'center',
                    value: 'total',
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