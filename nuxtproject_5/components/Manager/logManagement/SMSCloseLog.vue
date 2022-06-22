<template>
    <div>
        <v-row>
            <v-col md="1">
                <div>발송일 : </div>
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
            <v-col>
                <div>분류 : </div>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="bunryuFilterText"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-select
                :items="statusFilter"
                v-model="statusFilterText"
                label="-상태-"
                ></v-select>
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
import SMSCloseLogFilters from "../../../mixins.js/Manager/logManagement/SMSCloseLog/SMSCloseLogFilters"
import SMSCloseLogList from "../../../mixins.js/Manager/logManagement/SMSCloseLog/SMSCloseLogList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        SMSCloseLogFilters,
        SMSCloseLogList,
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
                    text: '상태',
                    align: 'center',
                    value: 'SMSCStatus',
                    width: '140px',
                },
                {
                    text: '회사',
                    align: 'center',
                    value: 'SMSCCompany',
                    width: '140px',
                },
                {
                    text: '타입',
                    align: 'center',
                    value: 'SMSCType',
                    width: '140px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'SMSCBunryu',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
                    width: '140px',
                },
                {
                    text: '전송자',
                    align: 'center',
                    value: 'SMSCSender',
                    width: '140px',
                },
                {
                    text: '날짜',
                    align: 'center',
                    value: 'SMSCDate',
                    width: '140px',
                },
                {
                    text: '회신번호',
                    align: 'center',
                    value: 'SMSCPhoneNum',
                    width: '140px',
                },
                {
                    text: '수신번호',
                    align: 'center',
                    value: 'SMSCReceptionNum',
                    width: '140px',
                },
                {
                    text: '길이',
                    align: 'center',
                    value: 'SMSCLength',
                    width: '140px',
                },
                {
                    text: '전송내용',
                    align: 'center',
                    value: 'SMSCContents',
                    width: '140px',
                },
                {
                    text: '전송일시',
                    align: 'center',
                    value: 'SMSCSendDateTime',
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