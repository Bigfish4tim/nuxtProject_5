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
import SMSSendLogFilters from "../../../mixins.js/Manager/logManagement/SMSSendLog/SMSSendLogFilters"
import SMSSendLogList from "../../../mixins.js/Manager/logManagement/SMSSendLog/SMSSendLogList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        SMSSendLogFilters,
        SMSSendLogList,
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
                    text: '로그',
                    align: 'center',
                    value: 'SMSLog',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'SMSStatus',
                    width: '140px',
                },
                {
                    text: '회사',
                    align: 'center',
                    value: 'SMSCompany',
                    width: '140px',
                },
                {
                    text: '타입',
                    align: 'center',
                    value: 'SMSType',
                    width: '140px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'SMSBunryu',
                    width: '140px',
                },
                {
                    text: '전송자',
                    align: 'center',
                    value: 'SMSSender',
                    width: '140px',
                },
                {
                    text: '날짜',
                    align: 'center',
                    value: 'SMSDate',
                    width: '140px',
                },
                {
                    text: '회신번호',
                    align: 'center',
                    value: 'SMSPhoneNum',
                    width: '140px',
                },
                {
                    text: '수신번호',
                    align: 'center',
                    value: 'SMSReceptionNum',
                    width: '140px',
                },
                {
                    text: '길이',
                    align: 'center',
                    value: 'SMSLength',
                    width: '140px',
                },
                {
                    text: '전송내용',
                    align: 'center',
                    value: 'SMSContents',
                    width: '140px',
                },
                {
                    text: '전송일시',
                    align: 'center',
                    value: 'SMSSendDateTime',
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