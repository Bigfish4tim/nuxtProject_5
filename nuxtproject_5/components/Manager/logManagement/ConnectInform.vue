<template>
    <div>
        <v-row>
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
            :search="allFilterTextSearch"
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
import ConnectInformFilters from "../../../mixins.js/Manager/logManagement/ConnectInform/ConnectInformFilters"
import ConnectInformList from "../../../mixins.js/Manager/logManagement/ConnectInform/ConnectInformList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        ConnectInformFilters,
        ConnectInformList,
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
                    text: '날짜',
                    align: 'center',
                    value: 'logDate',
                    width: '140px',
                },
                {
                    text: '요일',
                    align: 'center',
                    value: 'logDay',
                    width: '140px',
                },
                {
                    text: '아이디',
                    align: 'center',
                    value: 'logID',
                    width: '140px',
                },
                {
                    text: '사원명',
                    align: 'center',
                    value: 'logEmployeeName',
                    width: '140px',
                },
                {
                    text: '근무',
                    align: 'center',
                    value: 'logWorkStatus',
                    width: '140px',
                },
                {
                    text: '성공',
                    align: 'center',
                    value: 'successLog',
                    width: '140px',
                },
                {
                    text: '접속IP',
                    align: 'center',
                    value: 'accessIP',
                    width: '140px',
                },
                {
                    text: '접속일시',
                    align: 'center',
                    value: 'accessTime',
                    width: '140px',
                },
                {
                    text: '메시지',
                    align: 'center',
                    value: 'exceptionMassage',
                    width: '140px',
                },
                {
                    text: '처리프로세스',
                    align: 'center',
                    value: 'logProcess',
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