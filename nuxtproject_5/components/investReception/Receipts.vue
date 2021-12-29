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
        <!-- <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field> -->
        <v-text-field
          v-model="todaydate"
        >

        </v-text-field>
        <v-btn @click="evtHandle"><v-icon>mdi-magnify</v-icon></v-btn>
    </v-card-title>
    <v-data-table

      height="500px"
      fixed-header
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      :items-per-page="-1"
      :search="search"
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
        <template v-slot:footer>
            <tr id="tablefooter">
                <td>Totals</td>
                <td>{{ totals.calories }}</td>
                <td>{{ totals.fat }}</td>
                <td>{{ totals.carbs }}</td>
                <td>{{ totals.protein }}</td>
                <td>{{ totals.iron }}</td>
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
          console.log('1st array : ')
          console.log(this.names)

          var i = 0

          this.names.forEach(d => {
              const dyname = []
              dyname.push(d)

              this.dnames.push(dyname)

              this.dnames[i].push(d)

              i++
          })
          console.log('2nd array : ')
          console.log(this.dnames)

          this.desserts.forEach(d => {
            const dname = d.name
            this.obnames[dname] = ['sub+' + dname, 'sub2+' + dname]
          })

          this.mainkeys = Object.keys(this.obnames)

          console.log('3rd array : key')
          console.log(this.mainkeys)
          console.log('3rd array : value')
          console.log(Object.values(this.obnames))
          console.log('3rd array : yogurt value')
          console.log(this.obnames['Frozen Yogurt'])

          console.log(this.searchSwitch)

          console.log(this.headers)
      },
    data () {
      return {
        search: '',
        calories: '',
        fat: '',
        name: '',
        subname: '',
        searchSwitch: false,
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
            date: (new Date(new Date(2021, 11, 20) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
            date: (new Date(new Date(2021, 11, 23) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
            date: (new Date(new Date(2021, 11, 5) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
            date: (new Date(new Date(2021, 11, 1) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
            date: (new Date(new Date(2021, 11, 4) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
            date: (new Date(new Date(2021, 10, 29) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
            date: (new Date(new Date(2020, 11, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
            date: (new Date(new Date(2021, 11, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
            date: (new Date(new Date(2021, 11, 24) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KitKaqt',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KitKaet',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KitKaat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KitaKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KiatKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KistKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KsitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KitfKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KitKyat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KitKuat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          },
          {
            name: 'KitKiat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            date: (new Date(new Date(2021, 0, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
          }
        ],
        // headers: [
        //   {
        //       text: 'Dessert (100g serving)',
        //       align: 'center',
        //       sortable: false,
        //       value: 'name',
        //       filterable: false,
        //       filter: value => {
        //           if (!this.name) return true

        //           if (value == this.name) return value 
        //       },
        //   },
        //   {
        //       text: 'Calories',
        //       value: 'calories',
        //       filter: value => {
        //           if (!this.calories) return true

        //           return value < parseInt(this.calories)
        //       },
        //   },
        //   { 
        //       text: 'Fat (g)', 
        //       value: 'fat',
        //       filter: value => {
        //           if (!this.fat) return true

        //           return value < parseInt(this.fat)
        //       },
        //   },
        //   { 
        //       text: 'Carbs (g)', 
        //       value: 'carbs' 
        //   },
        //   { 
        //       text: 'Protein (g)', 
        //       value: 'protein' 
        //   },
        //   { 
        //       text: 'Iron (%)', 
        //       value: 'iron' 
        //   },
        //   {
        //       text: 'Date',
        //       value: 'date',
        //       filter: value => {
        //           if(!this.date) return true

        //           return value < this.date2 && value > this.date
        //       }
        //   }
        // ],
        date: (new Date(new Date(1999, 0, 1) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),        
        menu: false,
        menu2: false,
        todaydate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        afterdate: (new Date(new Date(2021, 11, 25) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0,10),
      }
    },
    watch: {
      name: function(newVal, oldVal) {
        this.subkeys = this.obnames[newVal]
        console.log(newVal)
        console.log(this.subkeys)
      }
    },
    methods: {
      evtHandle() {
        this.searchSwitch = true
      },
      onScroll(e) {
        // debounce if scrolling fast
        this.timeout && clearTimeout(this.timeout);
  
        this.timeout = setTimeout(() => {
          const { scrollTop } = e.target;
          const rows = Math.ceil(scrollTop / this.rowHeight);

          this.start = rows + this.perPage > this.desserts.length ?
            this.desserts.length - this.perPage: rows;

          this.$nextTick(() => {
            e.target.scrollTop = scrollTop;
          });
        }, 20);
      }
    },
    computed: {
        totals() {
            const totals = this.desserts.reduce((acc, d) => {
                acc.calories += d.calories
                acc.fat += d.fat
                acc.carbs += d.carbs
                acc.protein += d.protein
                acc.iron = `${parseInt(acc.iron) + parseInt(d.iron)}%`
                return acc
            }, {
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
                iron: '0'
                })
            totals.fat = totals.fat.toFixed(1)
            return totals
        },
        headers () {
            return [
                {
                    text: 'Dessert (100g serving)',
                    align: 'center',
                    sortable: false,
                    filterable: this.searchSwitch,
                    value: 'name',
                    filter: value => {
                        if (!this.name) return true

                        if (value == this.name) return value

                        // return value == this.name.toString()
                        
                    },
                    class: 'sticky-header title grey lighten-3'
                },
                {
                    text: 'Calories',
                    value: 'calories',
                    filter: value => {
                        if (!this.calories) return true

                        return value < parseInt(this.calories)
                    },
                    class: 'sticky-header title grey lighten-3'
                },
                { 
                    text: 'Fat (g)', 
                    value: 'fat',
                    filter: value => {
                        if (!this.fat) return true

                        return value < parseInt(this.fat)
                    },
                    class: 'sticky-header title grey lighten-3'
                },
                { 
                    text: 'Carbs (g)', 
                    value: 'carbs',
                    class: 'sticky-header title grey lighten-3'
                },
                { 
                    text: 'Protein (g)', 
                    value: 'protein',
                    class: 'sticky-header title grey lighten-3'
                },
                { 
                    text: 'Iron (%)', 
                    value: 'iron',
                    class: 'sticky-header title grey lighten-3'
                },
                {
                    text: 'Date',
                    value: 'date',
                    filter: value => {
                        if(!this.date) return true

                        return value < this.date2 && value > this.date
                    },
                    class: 'sticky-header title grey lighten-3'
                }
            ]
        },
    },
  }
</script>

<style>
.sticky-bottom {
    position: sticky;
    top: -500px;
}

/* th, td{
    border: 1px solid grey;
} */

</style>