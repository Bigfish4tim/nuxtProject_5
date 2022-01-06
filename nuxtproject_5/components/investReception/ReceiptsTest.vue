<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items"
            item-key="name"
            class="elevation-1"
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
                    value: 'estimated_amount2',
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
    
</style>