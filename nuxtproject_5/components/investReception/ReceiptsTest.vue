<template>
    <div>
        <v-row justify="center">
            <v-dialog
            v-model="dialog"
            persistent
            max-width="1200px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="white"
                v-bind="attrs"
                v-on="on"
                >
                Open Dialog
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-card-title>
                            <span class="text-h5">일반사항</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="사업종"
                                            v-model="testname"
                                            :rules="testRules"
                                            required
                                            ></v-text-field>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="담당자(보)"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="보험사/지부"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <v-text-field
                                                    label="지사"
                                                    ></v-text-field>
                                                </td>
                                                <td>
                                                    <v-text-field
                                                    label="부서"
                                                    ></v-text-field>
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="보고서번호"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
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
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="date"
                                                no-title
                                                scrollable
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
                                        </td>
                                        <td colspan="2">
                                            <v-text-field
                                            label="사고번호"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <!-- 체크사항 -->
                                            <tr>
                                                <td>체크사항</td>
                                                <td>
                                                    <v-checkbox
                                                    v-model="ex4"
                                                    color="red"
                                                    value="red"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span style="color:red">유의</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                                <td>
                                                    <v-checkbox
                                                    v-model="ex4"
                                                    color="indigo"
                                                    value="indigo"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span style="color:blue">지정건</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-select
                                            :items="departmentList"
                                            label="- 수주부서 -"
                                            ></v-select>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="경영지원"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="조사자"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <tr>
                                                <td style="width:360px">SMS전송</td>
                                                <td>
                                                    <v-checkbox
                                                    v-model="ex4"
                                                    color="indigo"
                                                    value="indigo"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span>담당</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                                <td>
                                                    <v-checkbox
                                                    v-model="ex4"
                                                    color="indigo"
                                                    value="indigo"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span>팀장</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                                <td>
                                                    <v-checkbox
                                                    v-model="ex4"
                                                    color="indigo"
                                                    value="indigo"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span>보험</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                                <v-text-field
                                                label="SMS전송"
                                                ></v-text-field>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-card-title>
                            <span class="text-h5">피보험자정보(사고정보)</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="피보험자"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="생년월일"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="보험사등급"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="당사등급"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="계약자"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="휴대폰"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="보험종목구분"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="의뢰사유"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="사고유형"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="사고일자"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="피해물"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="장애지급률"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="추산금액"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="피해자"
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2" rowspan="4">
                                            <v-textarea
                                            label="사고내용"
                                            height="240px"
                                            ></v-textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="사지역"
                                            color="#FFF59D"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="직업"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="나이 외"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="진단명"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="진단명"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2" rowspan="4">
                                            <v-textarea
                                            label="조사요구 및 지시사항"
                                            height="240px"
                                            ></v-textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="진단명"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <v-text-field
                                            label="청구병원"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <v-text-field
                                            label="첨부파일"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-card-title>
                            <span class="text-h5">계약사항</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <thead>
                                    <tr>
                                        <th colspan="3">
                                            보험종목
                                        </th>
                                        <th>
                                            증권번호
                                        </th>
                                        <th>보험기간</th>
                                        <th>계약자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-card-title>
                            <span class="text-h5">농협추가사항</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="2"
                                >
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                    Close
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                    Save
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
        <div>asdasd</div>
        <v-data-table
            :headers="headers"
            :items="items"
            item-key="name"
            class="datatable"
            hide-default-header
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
                    <td colspan="24" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.estimated_amount).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.deposit_amount).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.invoice).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.basic_fee).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.surcharge).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.incentive).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.daily_expenses).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.transportation_cost).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.paperwork_fee).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.medical_advice).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.legal_advice).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.etc).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.expenses).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td colspan="6"></td>
                    <td>{{ items.map(item => item.estimated_amount).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.cut).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.payment).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td colspan="2"></td>
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
import Resizable from "../../mixins.js/Resizable"

export default {
    mixins: [
        Resizable,
    ],
    mounted() {
        this.sizeInitialize()
    },
    data() {
        return {
            dialog: false,
            valid: false,
            testname: '인보험',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            departmentList: [
                '인보험본부',
                '서울1팀',
                '서울2팀',
                '인천팀',
                '수원팀',
                '강원팀',
                '대전팀',
                '전주팀',
                '광주팀',
                '대구팀',
                '부산팀',
            ],
            testRules: [
                v => !!v || 'text required!',
            ],
            items: [
                {
                    function: '',
                    report_number: 'KM2200028-L',
                    species: '1',
                    m: '',
                    c: '',
                    e: '',
                    status: '접수',
                    songam: '',
                    mandate: (new Date(new Date(2022, 0, 3) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                    endate: '',
                    setdate: '',
                    depodate: '',
                    result: '',
                    companies: '삼성화재',
                    insured: '(주)서울남대문실탄사격장',
                    contractor: '(주)서울남대문실탄사격장',
                    team: '',
                    investigator: '',
                    manager: '이재훈',
                    classification: '배책',
                    accident_type: '대인배상',
                    accident_date: (new Date(new Date(2021, 11, 16) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                    survey_area: '',
                    victim: '',
                    estimated_amount: '',
                    deposit_amount: '',
                    invoice: '',
                    basic_fee: '',
                    surcharge: '',
                    incentive: '',
                    daily_expenses: '',
                    transportation_cost: '',
                    paperwork_fee: '',
                    medical_advice: '',
                    legal_advice: '',
                    etc: '',
                    expenses: '',
                    department: '수도권물보험1팀',
                    insurance_type: '무배당삼성화재재물보험수퍼비즈니스(BOP)_2106.17',
                    stock_number: '52131434900000',
                    modifier: '이소향',
                    code: '2001',
                    insurance_company_name: '삼성화재',
                    estimated_amount: '',
                    cut: '',
                    payment: '',
                    registration_date: this.timestamp(),
                    processing_date: '0',
                },
            ],
        }
    },
    methods: {
        timestamp() {
            console.log('asdas')
            var time = new Date()
            time.setHours(time.getHours() + 9)
            return time.toISOString().replace('T', ' ').substring(0, 19)
        },
        sizeInitialize() {
            var header_tds = document.getElementsByClassName('topbody_data')
            console.log(header_tds)

            for(var i=0; i<header_tds.length; i++) {
                header_tds[i].style.width = this.headers[i].width
            }
        }
    },
    computed: {
        headers () {
            return [
                {
                    text: '기능',
                    align: 'center',
                    value: 'function',
                    width: '100px',
                },
                {
                    text: '보고서번호',
                    align: 'left',
                    value: 'report_number',
                    width: '150px',
                },
                {
                    text: '종',
                    align: 'center',
                    value: 'species',
                    width: '40px',
                },
                {
                    text: 'M',
                    align: 'center',
                    value: 'm',
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
                    value: 'mandate',
                    width: '110px',
                },
                {
                    text: '종결일자',
                    align: 'center',
                    value: 'endate',
                    width: '110px',
                },
                {
                    text: '발행일자',
                    align: 'center',
                    value: 'setdate',
                    width: '110px',
                },
                {
                    text: '입금일자',
                    align: 'center',
                    value: 'depodate',
                    width: '110px',
                },
                {
                    text: '사정결과',
                    align: 'center',
                    value: 'result',
                    width: '110px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'companies',
                    width: '110px',
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
                    text: '팀',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'investigator',
                    width: '110px',
                },
                {
                    text: '담당자',
                    align: 'center',
                    value: 'manager',
                    width: '110px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'classification',
                    width: '110px',
                },
                {
                    text: '사고유형',
                    align: 'center',
                    value: 'accident_type',
                    width: '140px',
                },
                {
                    text: '사고일자',
                    align: 'center',
                    value: 'accident_date',
                    width: '140px',
                },
                {
                    text: '조사지역',
                    align: 'center',
                    value: 'survey_area',
                    width: '150px',
                },
                {
                    text: '피해자',
                    align: 'center',
                    value: 'victim',
                    width: '140px',
                },
                {
                    text: '추산금액',
                    align: 'center',
                    value: 'estimated_amount',
                    width: '120px',
                },
                {
                    text: '입금액',
                    align: 'center',
                    value: 'deposit_amount',
                    width: '120px',
                },
                {
                    text: '인보이스',
                    align: 'center',
                    value: 'invoice',
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
                    text: '부서',
                    align: 'center',
                    value: 'department',
                    width: '130px',
                },
                {
                    text: '보험종목',
                    align: 'center',
                    value: 'insurance_type',
                    width: '160px',
                },
                {
                    text: '증권번호',
                    align: 'center',
                    value: 'stock_number',
                    width: '130px',
                },
                {
                    text: '수정자',
                    align: 'center',
                    value: 'modifier',
                    width: '110px',
                },
                {
                    text: '코드(보)',
                    align: 'center',
                    value: 'code',
                    width: '100px',
                },
                {
                    text: '보험사명',
                    align: 'center',
                    value: 'insurance_company_name',
                    width: '130px',
                },
                {
                    text: '추산금액',
                    align: 'center',
                    value: 'estimated_amount',
                    width: '130px',
                },
                {
                    text: '삭감액',
                    align: 'center',
                    value: 'cut',
                    width: '130px',
                },
                {
                    text: '지급액',
                    align: 'center',
                    value: 'payment',
                    width: '130px',
                },
                {
                    text: '등록일시',
                    align: 'center',
                    value: 'registration_date',
                    width: '190px',
                },
                {
                    text: '처리기일',
                    align: 'center',
                    value: 'processing_date',
                    width: '160px',
                }
            ]
        },
    }
}
</script>

<style lang="scss">
@import '@/assets/Datatable.scss';
@import '@/assets/ModalFont.scss';
    
</style>