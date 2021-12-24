<template>
  <div>
        <v-row justify="space-around">
            <v-spacer/>
            <v-col
                cols="12"
                sm="3"
                md="2"
            >
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            label="Picker without buttons"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="date"
                    @input="menu = false"
                    ></v-date-picker>
                </v-menu>
            </v-col>
            <v-col
                cols="12"
                sm="3"
                md="2"
            >
                <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date2"
                            label="Picker without buttons"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="date2"
                    @input="menu2 = false"
                    ></v-date-picker>
                </v-menu>
            </v-col>
        </v-row>
    <v-card-title>
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
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      :search="search"
      v-columns-resizable
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
        <template v-slot:body.prepend>
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
                    <!-- <v-text-field
                    v-model="calories"
                    type="number"
                    label="Less than"
                    ></v-text-field> -->
                </td>
                <td>
                    <v-text-field
                    v-model="fat"
                    type="number"
                    label="Less than"
                    ></v-text-field>
                </td>
            </tr>
        </template>
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
      }
    },
    computed: {
        headers2 () {
            return [
                {
                    text: '기능',
                    align: 'center',
                    sortable: false,
                    value: 'function',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNo',
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
                    value: 'Classification',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'Classification',
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