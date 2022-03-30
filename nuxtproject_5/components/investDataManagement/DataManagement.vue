<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-btn>보험사이동</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>담당자이동</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>담당자만이동</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>부서이동</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>조사자변경</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>조사자만변경</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>상태변경</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>완전삭제(삭제요청건)</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>1/4종인보이스체크</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>4종웹보고서체크</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn @click="excelDownload">엑셀다운</v-btn>
            </v-col>
        </v-row>
        <v-row>
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
                :items="speciesFilter"
                v-model="speciesFilterText"
                label="-보종-"
                ></v-select>
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
                :items="companyList"
                v-model="companyListText"
                label="-센터/지사"
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
                :items="bunryu1Filter"
                v-model="bunryu1FilterText"
                label="-분류(보)-"
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
                <v-select
                :items="etcFilter"
                v-model="etcFilterText"
                label="-기타-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-btn @click="searchEvt">검색</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="allFilterTextSearchClone"
            item-key="name"
            class="datatable"
            hide-default-header
            :items-per-page="100"
            :footer-props="{
                'items-per-page-options': [10, 50, 100]
            }"
            @dblclick:row=showRowInfo
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
                    <td colspan="9" style="text-align: center;">소계</td>
                    <!-- <td>{{ items.map(item => item.approval).reduce(sumReducer, '') }}</td> -->
                    <td></td>
                    <td>{{ items.map(item => item.songam).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ items.map(item => item.depositAmount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ items.map(item => item.estimatedLoss).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.invoice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.deposit_amount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.basic_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.surcharge).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.incentive).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.daily_expenses).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.transportation_cost).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.paperwork_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.medical_advice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.legal_advice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.etc).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.expenses).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <!-- <td>{{ items.map(item => item.calories).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.fat).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.carbs).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.protein).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => parseInt(item.iron)).reduce((prev, curr) => prev + curr, 0) + '%'}}</td> -->
                </tr>
            </template>
            <template #item.function="{ item }">
                <v-card-actions>
                    <v-btn x-small @click="openDialog('update', item)">수정</v-btn>
                    <v-btn x-small @click="remove(item)">삭제</v-btn>
                </v-card-actions>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import Resizable from "../../mixins.js/Resizable"
import Vuelidate from "../../mixins.js/Vuelidate"
import crud from "../../mixins.js/crud"
import ExcelDownloader from "../../mixins.js/ExcelDownloader"
import DataManagementFilters from "../../mixins.js/investDataManagement/DataManagement/DataManagementFilters"
import DataManagementList from "../../mixins.js/investDataManagement/DataManagement/DataManagementList"

import $ from 'jquery'

const clonedeep = require("lodash.clonedeep")

// import { validationMixin } from 'vuelidate'
// import { required } from 'vuelidate/lib/validators'


// 미완

export default {
    mixins: [
        Resizable,
        Vuelidate,
        crud,
        ExcelDownloader,
        DataManagementFilters,
        DataManagementList,
    ],
    mounted() {
        // this.formInit = this.cloneObject(this.form)
        // this.formInit2 = this.cloneObject(this.form2)
        // this.formInit = this.cloneObject(this.form)
        
        console.log(this.formInit)

    },
    data() {
        return {
            dialog: false,
            dialog2: false,
            menu: false,
            menu2: false,
            valid: false,
            formInit: {},
            formInit2: {},
            wiim_1Menu: false,
            gugun: '',
            sido: '',
            
            contractMenu1: false,
            contractMenu2: false,
            contractMenu3: false,
            contractMenu21: false,
            contractMenu22: false,
            contractMenu23: false,
            filterDate: [],
            contractDate1: [],
            contractDate2: [],
            contractDate3: [],
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            
            bunryu1: '',
            bunryu2: '',
            accidentMenu: false,

            componentKey: 0,
            componentKey2: 100,
            renderComponent: true,
        }
    },
    methods: {
        forceRerender() {
            console.log('rerender//////////')
            this.componentKey += 1;
            console.log(this.componentKey)

            // this.renderComponent = false;

            // this.$nextTick(() => {
            // // Adding the component back in
            // this.renderComponent = true;
            // });
        },
        forceRerender2() {
            console.log('rerender//////////')
            this.componentKey2 += 1;
            console.log(this.componentKey2)
        },
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
        timestamp() {
            console.log('asdas')
            var time = new Date()
            time.setHours(time.getHours() + 9)
            return time.toISOString().replace('T', ' ').substring(0, 19)
        },
        addInvestigator() {
            
            var key = 'invest' + this.form2.investigatorCount.length
            
            this.form2.investigatorCount.push(key)

            this.form2.investigatorName[key] = ''
            this.form2.investigatorSelect[key] = ''
            this.form2.investigatorRate[key] = ''

            console.log(this.form2.investigatorCount)
        },
        sumMoney(prev, curr) {
            numprev = Number(prev.replace(",", ""))
            numcurr = Number(curr.replace(",", ""))
        },
        dongil() {
            this.form.contractor = this.form.insured
        },
        showRowInfo (event, { item } ) {
            // console.log('item//')
            // console.log(item)

            this.openDialog('update', item)
        },
    },
    computed: {
        headers () {
            return [
                {
                    text: '기능',
                    align: 'center',
                    value: 'function',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'left',
                    value: 'reportNum',
                    width: '150px',
                },
                {
                    text: '종',
                    align: 'center',
                    value: 'species',
                    width: '40px',
                    filter: this.speciesFiltering
                },
                {
                    text: 'M',
                    align: 'center',
                    value: 'm',
                    width: '40px',
                },
                {
                    text: '배분',
                    align: 'center',
                    value: 'distribution',
                    width: '140px',
                },
                {
                    text: 'P',
                    align: 'center',
                    value: 'p',
                    width: '40px',
                },
                {
                    text: 'C',
                    align: 'center',
                    value: 'c',
                    width: '40px',
                },
                {
                    text: 'E',
                    align: 'center',
                    value: 'e',
                    width: '40px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '80px',
                    filter: this.statusFiltering
                },
                {
                    text: '결재',
                    align: 'center',
                    value: 'approval',
                    width: '80px',
                },
                {
                    text: '손감',
                    align: 'center',
                    value: 'songam',
                    width: '80px',
                },
                {
                    text: '위임일자',
                    align: 'center',
                    value: 'wiimDate',
                    width: '110px',
                    filter: this.wiimFiltering,
                },
                {
                    text: '현장보고',
                    align: 'center',
                    value: 'wiimDate',
                    width: '110px',
                },
                {
                    text: '중간보고',
                    align: 'center',
                    value: 'wiimDate',
                    width: '110px',
                },
                {
                    text: '종결일자',
                    align: 'center',
                    value: 'endate',
                    width: '110px',
                },
                {
                    text: '최초실적일',
                    align: 'center',
                    value: 'firstPerformanceDate',
                    width: '110px',
                },
                {
                    text: '발행일자',
                    align: 'center',
                    value: 'setdate',
                    width: '110px',
                },
                {
                    text: '입금',
                    align: 'center',
                    value: 'deposit',
                    width: '90px',
                },
                {
                    text: '입금일자',
                    align: 'center',
                    value: 'depodate',
                    width: '110px',
                },
                {
                    text: '입금액',
                    align: 'center',
                    value: 'depositAmount',
                    width: '110px',
                },
                {
                    text: '삭제(P)',
                    align: 'center',
                    value: 'deleteP',
                    width: '110px',
                },
                {
                    text: '삭제(D)',
                    align: 'center',
                    value: 'deleteD',
                    width: '110px',
                },
                {
                    text: '사정결과',
                    align: 'center',
                    value: 'result',
                    width: '110px',
                },
                {
                    text: '팀코드',
                    align: 'center',
                    value: 'teamCode',
                    width: '110px',
                },
                {
                    text: '조사팀',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                    filter: this.teamfiltering
                },
                {
                    text: '팀장코드',
                    align: 'center',
                    value: 'leaderCode',
                    width: '140px',
                },
                {
                    text: '팀장',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '조사자코드',
                    align: 'center',
                    value: 'memberCode',
                    width: '140px',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'MemberName',
                    width: '140px',
                },
                {
                    text: '보험사코드',
                    align: 'center',
                    value: 'insurCode',
                    width: '110px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '110px',
                },
                {
                    text: '지정센터',
                    align: 'center',
                    value: 'designatedCenter',
                    width: '110px',
                },
                {
                    text: '사업장코드',
                    align: 'center',
                    value: 'workplaceCode',
                    width: '110px',
                },
                {
                    text: '사업장명',
                    align: 'center',
                    value: 'workplace',
                    width: '110px',
                },
                {
                    text: '사업부',
                    align: 'center',
                    value: 'department',
                    width: '110px',
                },
                {
                    text: '부서',
                    align: 'center',
                    value: 'department2',
                    width: '110px',
                },
                {
                    text: '담당자코드',
                    align: 'center',
                    value: 'managerCode',
                    width: '110px',
                },
                {
                    text: '담당자',
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
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '110px',
                },
                {
                    text: '계약자',
                    align: 'center',
                    value: 'contractor',
                    width: '110px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'bunryu1',
                    width: '110px',
                },
                {
                    text: '상세분류',
                    align: 'center',
                    value: 'bunryu1Detail',
                    width: '110px',
                },
                {
                    text: '등급',
                    align: 'center',
                    value: 'rank',
                    width: '110px',
                },
                {
                    text: '사고일자',
                    align: 'center',
                    value: 'sagodate',
                    width: '140px',
                },
                {
                    text: '경과',
                    align: 'center',
                    value: 'lapse',
                    width: '110px',
                },
                {
                    text: '경과W',
                    align: 'center',
                    value: 'lapseW',
                    width: '110px',
                },
                {
                    text: '접수W',
                    align: 'center',
                    value: 'receiptW',
                    width: '140px',
                },
                {
                    text: '경과1',
                    align: 'center',
                    value: 'lapse1',
                    width: '110px',
                },
                {
                    text: '경과W2',
                    align: 'center',
                    value: 'lapseW2',
                    width: '110px',
                },
                {
                    text: '조사지역',
                    align: 'center',
                    value: 'location',
                    width: '150px',
                },
                {
                    text: '추산금액',
                    align: 'center',
                    value: 'estimatedLoss',
                    width: '120px',
                },
                {
                    text: '인보이스',
                    align: 'center',
                    value: 'invoice',
                    width: '120px',
                },
                {
                    text: '입금액',
                    align: 'center',
                    value: 'deposit_amount',
                    width: '120px',
                },
                {
                    text: '기본료',
                    align: 'center',
                    value: 'basic_fee',
                    width: '130px',
                },
                {
                    text: '추가료',
                    align: 'center',
                    value: 'surcharge',
                    width: '130px',
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
                    value: 'daily_expenses',
                    width: '130px',
                },
                {
                    text: '교통비',
                    align: 'center',
                    value: 'transportation_cost',
                    width: '130px',
                },
                {
                    text: '서류비',
                    align: 'center',
                    value: 'paperwork_fee',
                    width: '130px',
                },
                {
                    text: '의료자문',
                    align: 'center',
                    value: 'medical_advice',
                    width: '130px',
                },
                {
                    text: '법률자문',
                    align: 'center',
                    value: 'legal_advice',
                    width: '130px',
                },
                {
                    text: '기타',
                    align: 'center',
                    value: 'etc',
                    width: '130px',
                },
                {
                    text: '경비',
                    align: 'center',
                    value: 'expenses',
                    width: '130px',
                },
                {
                    text: '보험종목',
                    align: 'center',
                    value: 'insurType1',
                    width: '160px',
                },
                {
                    text: '증권번호',
                    align: 'center',
                    value: 'stockNum1',
                    width: '130px',
                },
                {
                    text: '수정자',
                    align: 'center',
                    value: 'modifier',
                    width: '110px',
                },
            ]
        },
        filterdateRange () {
            console.log(this.filterDate)
            return this.filterDate.join(' ~ ')
        }
    },
    watch: {
        'form.jumin1': function(val, old) {
            if(val.length == 6 && this.mode === 'create') {
                var f = document.getElementsByName('jumin2')
                f[0].focus()
            }
        },
        'form.sido': function(newVal, oldVal) {
            this.CityList = this.City[newVal]
        },
        'form.gugun': function(newVal, oldVal) {
            this.form.location = this.form.sido + ' ' + this.form.gugun
        },
        'form2.bunryu1': function(newVal, oldVal) {
            this.bunryuList = this.accidentType2[newVal]
        },
        'form2.bunryu2': function(newVal, oldVal) {
            this.form2.bunryu2 = newVal
        },
        'form.contractDate1': function(newVal, oldVal) {
            this.form.contractdateRange1 = newVal
        },
        'form.contractDate2': function(newVal, oldVal) {
            this.form.contractdateRange2 = newVal
        },
        'form.contractDate3': function(newVal, oldVal) {
            this.form.contractdateRange3 = newVal
        },
        'form2.contractDate1': function(newVal, oldVal) {
            this.form2.contractdateRange1 = newVal
        },
        'form2.contractDate2': function(newVal, oldVal) {
            this.form2.contractdateRange2 = newVal
        },
        'form2.contractDate3': function(newVal, oldVal) {
            this.form2.contractdateRange3 = newVal
        },
        companyFilterText: function(newVal, oldVal) {
            this.companyList = this.companyFilter2[newVal]
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/Datatable.scss';
@import '@/assets/ModalFont.scss';
    
</style>