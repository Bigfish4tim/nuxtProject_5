<template>
    <div>
        <v-app>
            <v-btn @click="excelDownload">excel</v-btn>
            <v-data-table
            height="500px"
            :headers="headers"
            fixed-header
            :items="desserts"
            class="elevation-1"
            lg="12"
            calculate-widths
            hide-default-header
            :page="page"
            @page-count="pageCount = $event"
            :items-per-page="viewCount"
            >
                <!-- <template v-slot:headers="props">
                    <tr>
                        <td
                            v-for="header in props.headers"
                            :key="header.text"
                        >
                        </td>
                    </tr>
                </template> -->
                <template v-slot:body.prepend="headers">
                    <tr class="topbody">
                        <td
                            v-for="header in headers.headers"
                            :key="header.text"
                        >
                            {{ header.text }}
                        </td>
                    </tr>
                </template>
                <template v-slot:body.append="{ items }">
                    <tr class="bottombody">
                        <td>Totals</td>
                        <td>{{ items.map(item => item.calories).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => item.fat).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => item.carbs).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => item.protein).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => parseInt(item.iron)).reduce((prev, curr) => prev + curr, 0) + '%'}}</td>
                    </tr>
                </template>
                <template v-slot:footer>
                    <v-pagination
                        v-model="page"
                        :length="pageCount"
                        :total-visible="7"
                    ></v-pagination>
                </template>
            </v-data-table>
        </v-app>
    </div>
</template>

<script>
import Resizable from '../mixins.js/Resizable'
import ExcelDownloader from '../mixins.js/ExcelDownloader'

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
    ],
    data() {
        return {
            headers: [
                { text: 'Dessert (100g serving)', sortable: false, value: 'name', width: '100px' },
                { text: 'Calories', sortable: false, value: 'calories', width: '100px' },
                { text: 'Fat (g)', sortable: false, value: 'fat', width: '100px' },
                { text: 'Carbs (g)', sortable: false, value: 'carbs', width: '100px' },
                { text: 'Protein (g)', sortable: false, value: 'protein', width: '100px' },
                { text: 'Iron (%)', sortable: false, value: 'iron', width: '50px' },
            ],
            desserts: [
                {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%',
                cont: 111
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
                {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%',
                },
            ],        
            // total: [
            //     {
            //         text: this.totals.calories,
            //         value: 'calories',
            //         width: this.headers[1].width
            //     },
            //     {
            //         text: this.totals.fat,
            //         value: 'fat',
            //         width: this.headers[2].width
            //     },
            //     {
            //         text: this.totals.carbs,
            //         value: 'carbs',
            //         width: this.headers[3].width
            //     },
            //     {
            //         text: this.totals.protein,
            //         value: 'protein',
            //         width: this.headers[4].width
            //     },
            //     {
            //         text: this.totals.iron,
            //         value: 'iron',
            //         width: this.headers[5].width
            //     }
            // ],
            page: 1,
            pageCount: 5,
            viewCount: 1,
        }
    },
    mounted() {
        console.log('component mounted..../////')

        var s = document.getElementsByClassName('bottombody')[0]
        // var t = s[0].getElementsByTagName('td')

        console.log(s.children)
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
    },
    methods: {

    }
}
</script>

<style lang="scss">
@import '@/assets/Datatable.scss';

</style>