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
                    text: '상태',
                    align: 'center',
                    value: 'employeeStatus',
                    width: '140px',
                },
                {
                    text: '이력서',
                    align: 'center',
                    value: 'resume',
                    width: '140px',
                },
                {
                    text: '아이디',
                    align: 'center',
                    value: 'employeeId',
                    width: '140px',
                },
                {
                    text: '부서',
                    align: 'center',
                    value: 'employeeDepartment',
                    width: '140px',
                },
                {
                    text: '종',
                    align: 'center',
                    value: 'species',
                    width: '140px',
                },
                {
                    text: '핸드폰',
                    align: 'center',
                    value: 'phoneNum',
                    width: '140px',
                },
                {
                    text: '건',
                    align: 'center',
                    value: 'employeeCount',
                    width: '140px',
                },
                {
                    text: '집전화',
                    align: 'center',
                    value: 'homePhoneNum',
                    width: '140px',
                },
                {
                    text: '직무',
                    align: 'center',
                    value: 'duty',
                    width: '140px',
                },
                {
                    text: '상세직무',
                    align: 'center',
                    value: 'dutyDetail',
                    width: '140px',
                },
                {
                    text: '손해사정사무원',
                    align: 'center',
                    value: 'insurOffice',
                    width: '140px',
                },
                {
                    text: '등록번호',
                    align: 'center',
                    value: 'registrationNum',
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
                    text: '도장',
                    align: 'center',
                    value: 'stamp',
                    width: '140px',
                },
                {
                    text: '서류',
                    align: 'center',
                    value: 'docu1',
                    width: '140px',
                },
                {
                    text: '서류',
                    align: 'center',
                    value: 'docu2',
                    width: '140px',
                },
                {
                    text: 'ROLE',
                    align: 'center',
                    value: 'role',
                    width: '140px',
                },
                {
                    text: 'LEVEL',
                    align: 'center',
                    value: 'level',
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