<template>
  <div>
    <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
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
                    <!-- <v-text-field
                    v-model="name"
                    label="name y"
                    ></v-text-field> -->
                    <v-select
                        :items="names"
                        label="Standard"
                        v-model="name"
                    ></v-select>
                </td>
                <td>
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
        </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
      mounted() {
          console.log(this.desserts)

          this.desserts.forEach(d => {
              const dname = d.name
              this.names.push(dname)
          })

          console.log(this.names)
      },
    data () {
      return {
        search: '',
        calories: '',
        fat: '',
        name: '',
        names: ['',],
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
      }
    },
    computed: {
        headers () {
            return [
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                    filter: value => {
                        if (!this.name) return true

                        if (value == this.name) return value

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