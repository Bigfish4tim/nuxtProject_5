<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="bunryu1Filter"
                v-model="bunryu1FilterText"
                label="-분류-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="dateFilter"
                v-model="dateFilterText"
                label="-기간-"
                ></v-select>
            </v-col>
            <v-col md="1">
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
                :items="companyFilter"
                v-model="companyFilterText"
                label="-보험사-"
                ></v-select>
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
                <v-btn @click="searchEvt">검색</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn @click="excelDownload">엑셀다운</v-btn>
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
            <template v-slot:body.append="{ items }">
                <tr class="bottombody">
                    <td colspan="21" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.os).reduce(sumReducer, '') }}</td>
                    <td colspan="4"></td>
                    <td>{{ items.map(item => item.lapse).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td></td>
                    <td></td>
                    <td>{{ items.map(item => item.invoice).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td></td>
                    <td>{{ items.map(item => item.deposit_amount).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ items.map(item => item.fixed_amount).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.cut).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <!-- <td>{{ items.map(item => item.calories).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.fat).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.carbs).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.protein).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => parseInt(item.iron)).reduce((prev, curr) => prev + curr, 0) + '%'}}</td> -->
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import MyProgressFilters from "../../../mixins.js/TaskManagement/member_first/MyProgress/MyProgressFilters"
import MyProgressList from "../../../mixins.js/TaskManagement/member_first/MyProgress/MyProgressList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        MyProgressList,
        MyProgressFilters,
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
                    text: '분류',
                    align: 'center',
                    value: 'bunryu1',
                    width: '110px',
                },
                {
                    text: '구분',
                    align: 'left',
                    value: 'gubun',
                    width: '150px',
                },
                {
                    text: '지정',
                    align: 'left',
                    value: 'jijung',
                    width: '150px',
                },
                {
                    text: '현',
                    align: 'center',
                    value: 'hyun',
                    width: '80px',
                },
                {
                    text: '중',
                    align: 'center',
                    value: 'jung',
                    width: '80px',
                },
                {
                    text: '정/부',
                    align: 'center',
                    value: 'resp_vice',
                    width: '80px',
                },
                {
                    text: 'M',
                    align: 'center',
                    value: 'm',
                    width: '80px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '80px',
                    filters: this.statusFiltering,
                },
                {
                    text: '보고서번호',
                    align: 'left',
                    value: 'reportNum',
                    width: '150px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '110px',
                },
                {
                    text: '의뢰부서',
                    align: 'center',
                    value: 'requestTeam',
                    width: '140px',
                    filters: this.requestDepartmentFiltering,
                },
                {
                    text: '담당자',
                    align: 'center',
                    value: 'manager',
                    width: '110px',
                },
                {
                    text: '사고유형',
                    align: 'center',
                    value: 'accidentType',
                    width: '140px',
                },
                {
                    text: '사고번호',
                    align: 'center',
                    value: 'sagoNum',
                    width: '140px',
                },
                {
                    text: '보험종목',
                    align: 'center',
                    value: 'insurType1',
                    width: '160px',
                },
                {
                    text: '계약자',
                    align: 'center',
                    value: 'contractor',
                    width: '140px',
                },
                {
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '140px',
                },
                {
                    text: '피해자(물)',
                    align: 'center',
                    value: 'victim',
                    width: '140px'
                },
                {
                    text: '사고일자',
                    align: 'center',
                    value: 'sagodate',
                    width: '140px',
                },
                {
                    text: '위임일자',
                    align: 'center',
                    value: 'wiimDate',
                    width: '110px',
                },
                {
                    text: 'O/S',
                    align: 'center',
                    value: 'os',
                    width: '140px',
                },
                {
                    text: '사고내용',
                    align: 'center',
                    value: 'accidentDetails',
                    width: '150px',
                },
                {
                    text: '쟁점사항',
                    align: 'center',
                    value: 'issue',
                    width: '150px',
                },
                {
                    text: '진행내용',
                    align: 'center',
                    value: 'progressContent',
                    width: '140px',
                },
                {
                    text: '면담내용',
                    align: 'center',
                    value: 'interview',
                    width: '150px',
                },
                {
                    text: '경과',
                    align: 'center',
                    value: 'lapse',
                    width: '110px',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'chargeName',
                    width: '110px',
                },
                {
                    text: '종결일자',
                    align: 'center',
                    value: 'endate',
                    width: '110px',
                },
                {
                    text: '인보이스',
                    align: 'center',
                    value: 'invoice',
                    width: '120px',
                },
                {
                    text: '입금일자',
                    align: 'center',
                    value: 'depodate',
                    width: '120px',
                },
                {
                    text: '입금액',
                    align: 'center',
                    value: 'deposit_amount',
                    width: '120px',
                },
                {
                    text: '팀',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                    filters: this.teamfiltering,
                },
                {
                    text: '피해자',
                    align: 'center',
                    value: 'victim',
                    width: '140px'
                },
                {
                    text: '사고장소',
                    align: 'center',
                    value: 'location',
                    width: '150px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'bunryu1',
                    width: '110px',
                },
                {
                    text: '담당(보)',
                    align: 'center',
                    value: 'manager',
                    width: '110px',
                },
                {
                    text: '사정결과',
                    align: 'center',
                    value: 'result',
                    width: '110px',
                },
                {
                    text: '확정금액',
                    align: 'center',
                    value: 'fixed_amount',
                    width: '120px',
                },
                {
                    text: '삭감금액',
                    align: 'center',
                    value: 'cut',
                    width: '120px',
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