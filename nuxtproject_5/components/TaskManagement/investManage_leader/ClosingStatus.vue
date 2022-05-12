<template>
    <div>
        <v-row>
            <v-col md="1">
                <div>
                    종결일자: 
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
                <v-btn>검색</v-btn>
            </v-col>
            <v-col md="1">
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
                    <td colspan="5" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.suspense).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.Occur).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.closing).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.cancel).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.totalsuspense).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.nowsuspense).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import ClosingStatusFilters from "../../../mixins.js/TaskManagement/investManage_leader/ClosingStatus/ClosingStatusFilters"
import ClosingStatusList from "../../../mixins.js/TaskManagement/investManage_leader/ClosingStatus/ClosingStatusList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

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
                    text: '엑셀',
                    align: 'center',
                    value: 'excel',
                    width: '140px',
                },
                {
                    text: '부서',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '사원',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '직위',
                    align: 'center',
                    value: 'position',
                    width: '140px',
                },
                {
                    text: '전월미결',
                    align: 'center',
                    value: 'suspense',
                    width: '140px',
                },
                {
                    text: '발생',
                    align: 'center',
                    value: 'Occur',
                    width: '140px',
                },
                {
                    text: '종결',
                    align: 'center',
                    value: 'closing',
                    width: '140px',
                },
                {
                    text: '취소',
                    align: 'center',
                    value: 'cancel',
                    width: '140px',
                },
                {
                    text: '미결',
                    align: 'center',
                    value: 'totalsuspense',
                    width: '140px',
                },
                {
                    text: '현재미결',
                    align: 'center',
                    value: 'nowsuspense',
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