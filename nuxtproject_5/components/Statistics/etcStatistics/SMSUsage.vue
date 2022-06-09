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
            <template v-slot:body.append="{ items }">
                <tr class="bottombody">
                    <td colspan="1" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.deposit_amount).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.invoice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.basic_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.surcharge).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import EmployeeStatisticsFilters from "../../../mixins.js/Statistics/etcStatistics/EmployeeStatistics/EmployeeStatisticsFilters"
import EmployeeStatisticsList from "../../../mixins.js/Statistics/etcStatistics/EmployeeStatistics/EmployeeStatisticsList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        EmployeeStatisticsFilters,
        EmployeeStatisticsList,
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
                    text: '부서명',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '총인원',
                    align: 'center',
                    value: 'departmemberCount',
                    width: '140px',
                },
                {
                    text: '지원',
                    align: 'center',
                    value: 'departmemberCount_add',
                    width: '140px',
                },
                {
                    text: '팀장',
                    align: 'center',
                    value: 'departmemberCount_leader',
                    width: '140px',
                },
                {
                    text: '팀원',
                    align: 'center',
                    value: 'departmemberCount_member',
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