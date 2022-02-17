<template>
    <div>
        <v-row>
            <v-col md="1">
                <div>
                    실적일자: 
                </div>
            </v-col>
            <v-col md="2">
                <v-menu
                    ref="filterMenu"
                    v-model="filterMenu"
                    :close-on-content-click="false"
                    :return-value.sync="filterDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="filterdateRange"
                        label="보험기간"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="filterDate"
                    no-title
                    scrollable
                    locale="ko-KR"
                    range
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="filterMenu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.filterMenu.save(filterDate)"
                    >
                        OK
                    </v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
            <v-col md="1">
                <v-select
                :items="departmentFilter"
                v-model="departmentFilterText"
                label="-부서-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-text-field
                label="사원이름"
                v-model="name"
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
            :search="nameClone"
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
                    <td>{{ items.map(item => item.newcase).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.changecase).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.cancelcase).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.profit).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.sales).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.expenses).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.basefee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.surcharge).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.incentive).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.perdiem).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.transportation).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.document).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.medicaladvice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.legaladvice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.etc).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import ProfitStatusList from "../../mixins.js/ProfitStatus/ProfitStatusList"
import filters from "../../mixins.js/ProfitStatus/filters"
import Resizable from "../../mixins.js/Resizable"
import ExcelDownloader from "../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        ProfitStatusList,
        filters,
        Resizable,
        ExcelDownloader,
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
                    filters: this.departmentFiltering,
                },
                {
                    text: '사원',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '총건수',
                    align: 'center',
                    value: 'totalcase',
                    width: '140px',
                },
                {
                    text: '신규건',
                    align: 'center',
                    value: 'newcase',
                    width: '140px',
                },
                {
                    text: '변동건',
                    align: 'center',
                    value: 'changecase',
                    width: '140px',
                },
                {
                    text: '취소건',
                    align: 'center',
                    value: 'cancelcase',
                    width: '140px',
                },
                {
                    text: '실적액',
                    align: 'center',
                    value: 'profit',
                    width: '140px',
                },
                {
                    text: '매출액',
                    align: 'center',
                    value: 'sales',
                    width: '140px',
                },
                {
                    text: '경비',
                    align: 'center',
                    value: 'expenses',
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
        filterdateRange () {
            console.log(this.filterDate)
            return this.filterDate.join(' ~ ')
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
<style>
    
</style>