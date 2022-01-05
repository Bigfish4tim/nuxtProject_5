<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items"
            item-key="name"
            class="elevation-1"
        >

        </v-data-table>
    </div>
</template>
<script>
import Resizable from "../../mixins.js/Resizable"

export default {
    mixins: [
        Resizable,
    ],
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
            var time = new Date()
            time.setHours(time.getHours() + 9)
            return time.toISOString().replace('T', ' ').substring(0, 19)
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
                    align: 'center',
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
                    width: '70px',
                },
                {
                    text: '손감',
                    align: 'center',
                    value: 'songam',
                    width: '70px',
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
                },
                {
                    text: '계약자',
                    align: 'center',
                    value: 'contractor',
                },
                {
                    text: '팀',
                    align: 'center',
                    value: 'team',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'investigator',
                },
                {
                    text: '담당자',
                    align: 'center',
                    value: 'manager',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'classification',
                },
                {
                    text: '사고유형',
                    align: 'center',
                    value: 'accident_type',
                },
                {
                    text: '사고일자',
                    align: 'center',
                    value: 'accident_date',
                },
                {
                    text: '조사지역',
                    align: 'center',
                    value: 'survey_area',
                },
                {
                    text: '피해자',
                    align: 'center',
                    value: 'victim',
                },
                {
                    text: '추산금액',
                    align: 'center',
                    value: 'estimated_amount',
                },
                {
                    text: '입금액',
                    align: 'center',
                    value: 'deposit_amount',
                },
                {
                    text: '인보이스',
                    align: 'center',
                    value: 'invoice',
                },
                {
                    text: '기본료',
                    align: 'center',
                    value: 'basic_fee',
                },
                {
                    text: '추가료',
                    align: 'center',
                    value: 'surcharge',
                },
                {
                    text: '인센티브',
                    align: 'center',
                    value: 'incentive',
                },
                {
                    text: '일비',
                    align: 'center',
                    value: 'daily_expenses',
                },
                {
                    text: '교통비',
                    align: 'center',
                    value: 'transportation_cost',
                },
                {
                    text: '서류비',
                    align: 'center',
                    value: 'paperwork_fee',
                },
                {
                    text: '의료자문',
                    align: 'center',
                    value: 'medical_advice',
                },
                {
                    text: '법률자문',
                    align: 'center',
                    value: 'legal_advice',
                },
                {
                    text: '기타',
                    align: 'center',
                    value: 'etc',
                },
                {
                    text: '경비',
                    align: 'center',
                    value: 'expenses',
                },
                {
                    text: '부서',
                    align: 'center',
                    value: 'department',
                },
                {
                    text: '보험종목',
                    align: 'center',
                    value: 'insurance_type',
                },
                {
                    text: '증권번호',
                    align: 'center',
                    value: 'stock_number',
                },
                {
                    text: '수정자',
                    align: 'center',
                    value: 'modifier',
                },
                {
                    text: '코드(보)',
                    align: 'center',
                    value: 'code',
                },
                {
                    text: '보험사명',
                    align: 'center',
                    value: 'insurance_company_name',
                },
                {
                    text: '추산금액',
                    align: 'center',
                    value: 'estimated_amount',
                },
                {
                    text: '삭감액',
                    align: 'center',
                    value: 'cut',
                },
                {
                    text: '지급액',
                    align: 'center',
                    value: 'payment',
                },
                {
                    text: '등록일시',
                    align: 'center',
                    value: 'registration_date',
                },
                {
                    text: '처리기일',
                    align: 'center',
                    value: 'processing_date',
                }
            ]
        },
    }
}
</script>
<style>
    
</style>