<template>
    <div>
        <v-row>
            <v-col>
                <v-btn>사원등록요청</v-btn>
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
                :items="departmentFilter"
                v-model="departmentFilterText"
                label="-부서-"
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
import MemberManagementFilters from "../../../mixins.js/Manager/memberManagement/MemberManagement/MemberManagementFilters"
import MemberManagementList from "../../../mixins.js/Manager/memberManagement/MemberManagement/MemberManagementList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        MemberManagementFilters,
        MemberManagementList,
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
                    text: '기능',
                    align: 'center',
                    value: 'function',
                    width: '140px',
                },
                {
                    text: '사원번호',
                    align: 'center',
                    value: 'employeeNum',
                    width: '420px',
                },
                {
                    text: '아이디',
                    align: 'center',
                    value: 'employeeId',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'employeeStatus',
                    width: '140px',
                },
                {
                    text: '사원명',
                    align: 'center',
                    value: 'employeeName',
                    width: '140px',
                },
                {
                    text: '직위',
                    align: 'center',
                    value: 'employeePosition',
                    width: '140px',
                },
                {
                    text: '부서',
                    align: 'center',
                    value: 'employeeDepartment',
                    width: '140px',
                },
                {
                    text: '핸드폰',
                    align: 'center',
                    value: 'phoneNum',
                    width: '140px',
                },
                {
                    text: '전화번호',
                    align: 'center',
                    value: 'homephoneNum',
                    width: '140px',
                },
                {
                    text: '입사일',
                    align: 'center',
                    value: 'joinDate',
                    width: '140px',
                },
                {
                    text: '퇴사일',
                    align: 'center',
                    value: 'leaveDate',
                    width: '140px',
                },
                {
                    text: '손사시작일',
                    align: 'center',
                    value: 'insurStartDate',
                    width: '140px',
                },
                {
                    text: '손사경력',
                    align: 'center',
                    value: 'insurStartDate',
                    width: '140px',
                },
                {
                    text: 'E-Mail',
                    align: 'center',
                    value: 'email',
                    width: '140px',
                },
                {
                    text: '사인',
                    align: 'center',
                    value: 'sign',
                    width: '140px',
                },
                {
                    text: '학교',
                    align: 'center',
                    value: 'school',
                    width: '140px',
                },
                {
                    text: '학과',
                    align: 'center',
                    value: 'schoolSubject',
                    width: '140px',
                },
                {
                    text: '자격증',
                    align: 'center',
                    value: 'certificate',
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