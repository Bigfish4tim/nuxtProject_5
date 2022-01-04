<template>
    <div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
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
                }
            ]
        }
    },
    methods: {
        timestamp() {
            var time = new Date()
            time.setHours(time.getHours() + 9)
            return time.toISOString().replace('T', ' ').substring(0, 19)
        }
    },
}
</script>
<style>
    
</style>