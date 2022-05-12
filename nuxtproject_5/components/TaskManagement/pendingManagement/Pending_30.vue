<template>
    <div>
        <v-row>
            <v-col md="1">
                <div>
                    기준일 : 
                </div>
            </v-col>
            <v-col md="1">
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="date"
                        label="위임일자"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        required
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                    locale="ko-KR"
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                    >
                        OK
                    </v-btn>
                    </v-date-picker>
                </v-menu>
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
                :items="departmentFilter"
                v-model="departmentFilterText"
                label="-부서-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <div>
                    담당자 : 
                </div>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="managerTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <div>
                    조사자 : 
                </div>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="chargeNameTextSearch"
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
            :search="managerTextSearchClone"
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
import Pending_30Filters from "../../../mixins.js/TaskManagement/pendingManagement/Pending_30/Pending_30Filters"
import Pending_30List from "../../../mixins.js/TaskManagement/pendingManagement/Pending_30/Pending_30List"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        Pending_30Filters,
        Pending_30List,
    ],
    data() {
        return {
            menu: false,

            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

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
                    text: '부서',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '담당자(보)',
                    align: 'center',
                    value: 'manager',
                    width: '110px',
                },
                {
                    text: '사고번호',
                    align: 'center',
                    value: 'sagoNum',
                    width: '140px',
                },
                {
                    text: '위임일',
                    align: 'center',
                    value: 'wiimDate',
                    width: '110px',
                },
                {
                    text: '경과일',
                    align: 'center',
                    value: 'elapsedDate',
                    width: '110px',
                },
                {
                    text: '지연안내여부',
                    align: 'center',
                    value: 'delayStatus',
                    width: '110px',
                },
                {
                    text: '예상종결일',
                    align: 'center',
                    value: 'expectedDate',
                    width: '110px',
                },
                {
                    text: '지연사유',
                    align: 'center',
                    value: 'pendingReason',
                    width: '110px',
                },
                {
                    text: '상세내용',
                    align: 'center',
                    value: 'pendingDetatil',
                    width: '110px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'pending30_note',
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