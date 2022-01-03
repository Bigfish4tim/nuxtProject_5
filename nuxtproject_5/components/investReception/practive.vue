<template>
  <div>
    <!-- <v-card-title>
        조사접수
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        <v-btn @click="evtHandle"><v-icon>mdi-magnify</v-icon></v-btn>
    </v-card-title> -->
    <v-data-table
      :headers="headers2"
      :items="items"
      item-key="name"
      class="elevation-1"
    >
        <!-- <template v-slot:top>
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search (UPPER CASE ONLY)"
            class="mx-4"
            single-line
            hide-details
            ></v-text-field>
        </template> -->
        <!-- <template v-slot:body.prepend>
            <tr>
                <td>
                    <v-select
                        :items="mainkeys"
                        label="Standard"
                        v-model="name"
                    ></v-select>
                </td>
                <td>
                    <v-select
                        :items="subkeys"
                        label="Standard"
                        v-model="subname"
                    ></v-select>
                    <v-text-field
                    v-model="calories"
                    type="number"
                    label="Less than"
                    ></v-text-field>
                </td>
                <td>
                    <v-text-field
                    v-model="fat"
                    type="number"
                    label="Less than"
                    ></v-text-field>
                </td>
            </tr>
        </template> -->
    </v-data-table>
  </div>
</template>

<script>
  export default {
      mounted() {

          this.desserts.forEach(d => {
              const dname = d.name
              this.names.push(dname)
          })

          var i = 0

          this.names.forEach(d => {
              const dyname = []
              dyname.push(d)

              this.dnames.push(dyname)

              this.dnames[i].push(d)

              i++
          })

          this.desserts.forEach(d => {
            const dname = d.name
            this.obnames[dname] = ['sub+' + dname, 'sub2+' + dname]
          })

          this.mainkeys = Object.keys(this.obnames)
      },
    data () {
      return {
        search: '',
        calories: '',
        fat: '',
        name: '',
        name2: '',
        subname: '',
        names: ['',],
        dnames: [],
        obnames: {},
        mainkeys: [],
        subkeys: [],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
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
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),        
        menu: false,
        menu2: false,
      }
    },
    watch: {
        name: function(newVal, oldVal) {
            this.subkeys = this.obnames[newVal]
        }
    },
    methods: {
        evtHandle() {
            this.name2 = this.name
        },
        timestamp() {
            var time = new Date()
            time.setHours(time.getHours() + 9)
            return time.toISOString().replace('T', ' ').substring(0, 19)
        }
    },
    computed: {
        headers2 () {
            return [
                {
                    text: '기능',
                    align: 'center',
                    value: 'function',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'report_number',
                },
                {
                    text: '종',
                    align: 'center',
                    value: 'species',
                },
                {
                    text: 'M',
                    align: 'center',
                    value: 'm',
                },
                {
                    text: 'C',
                    align: 'center',
                    value: 'c',
                },
                {
                    text: 'E',
                    align: 'center',
                    value: 'e',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                },
                {
                    text: '손감',
                    align: 'center',
                    value: 'songam',
                },
                {
                    text: '위임일자',
                    align: 'center',
                    value: 'mandate',
                },
                {
                    text: '종경일자',
                    align: 'center',
                    value: 'endate',
                },
                {
                    text: '발행일자',
                    align: 'center',
                    value: 'setdate',
                },
                {
                    text: '입금일자',
                    align: 'center',
                    value: 'depodate',
                },
                {
                    text: '사정결과',
                    align: 'center',
                    value: 'result',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'companies',
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
        headers () {
            return [
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                    filter: value => {
                        if (!this.name2) return true

                        if (value == this.name2) return value

                        // return value == this.name.toString()
                        
                    },
                },
                {
                    text: 'Calories',
                    value: 'calories',
                    filter: value => {
                        if (!this.calories) return true

                        return value < parseInt(this.calories)
                    },
                },
                { 
                    text: 'Fat (g)', 
                    value: 'fat',
                    // filter: value => {
                    //     if (!this.fat) return true

                    //     return value < parseInt(this.fat)
                    // },
                },
                { 
                    text: 'Carbs (g)', 
                    value: 'carbs' 
                },
                { 
                    text: 'Protein (g)', 
                    value: 'protein' 
                },
                { 
                    text: 'Iron (%)', 
                    value: 'iron' 
                },
            ]
        },
    },
  }
</script>