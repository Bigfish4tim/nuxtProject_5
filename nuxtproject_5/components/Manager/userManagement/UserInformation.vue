<template>
    <div>
        <v-row>
            <v-col>
                <v-btn>사원추가</v-btn>
            </v-col>
            <v-col>
                <v-btn>정보일괄등록</v-btn>
            </v-col>
            <v-col>
                <v-btn>입사서류등록</v-btn>
            </v-col>
            <v-col>
                <v-btn>퇴사자자료등록</v-btn>
            </v-col>
            <v-col>
                <v-btn>PRMID관리</v-btn>
            </v-col>
            <v-col>
                <v-btn>사용자 역할설정</v-btn>
            </v-col>
            <v-col>
                <v-btn>더존코드관리</v-btn>
            </v-col>
            <v-col>
                <v-select
                :items="standardFilter"
                v-model="standardFilterText"
                label="-양식-"
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="1">
                <v-select
                :items="workstatusFilter"
                v-model="workstatusFilterText"
                label="-근무여부-"
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
                <v-select
                :items="securityrankFilter"
                v-model="securityrankFilterText"
                label="-보안등급-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="dateFilter"
                v-model="dateFilterText"
                label="-기간-"
                ></v-select>
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
                <v-select
                :items="etcFilter"
                v-model="etcFilterText"
                label="-기타-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="allFilterTextSearchClone"
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
import UserInformationFilters from "../../../mixins.js/Manager/userManagement/UserInformation/UserInformationFilters"
import UserInformationList from "../../../mixins.js/Manager/userManagement/UserInformation/UserInformationList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        UserInformationFilters,
        UserInformationList,
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
                    text: '보낸사람',
                    align: 'center',
                    value: 'memoReceiver',
                    width: '140px',
                },
                {
                    text: '제목',
                    align: 'center',
                    value: 'memoTitle',
                    width: '420px',
                },
                {
                    text: '받은날짜',
                    align: 'center',
                    value: 'memoReceivedDate',
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