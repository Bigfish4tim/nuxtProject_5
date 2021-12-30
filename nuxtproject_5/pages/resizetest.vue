<template>
    <div>
        <v-app>
            <v-data-table
            height="500px"
            :headers="headers"
            fixed-header
            :items="desserts"
            class="elevation-1"
            lg="12"
            calculate-widths
            hide-default-header
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
            </v-data-table>
        </v-app>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                { text: 'Dessert (100g serving)', sortable: false, value: 'name', width: '500px' },
                { text: 'Calories', sortable: false, value: 'calories', width: '500px' },
                { text: 'Fat (g)', sortable: false, value: 'fat', width: '500px' },
                { text: 'Carbs (g)', sortable: false, value: 'carbs', width: '500px' },
                { text: 'Protein (g)', sortable: false, value: 'protein', width: '500px' },
                { text: 'Iron (%)', sortable: false, value: 'iron', width: '500px' },     
            ],
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
            empty: []
        }
    },
    mounted() {
        var tables = document.getElementsByTagName('table');

        for(var i=0; i<tables.length; i++) {
            this.resizableGrid(tables[i]);
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
    },
    methods: {
        resizableGrid(table) {
            console.log(table)
            var row = table.getElementsByTagName('tr')[0],
            cols = row ? row.children : undefined;

            console.log(row)
            console.log(cols)

            // var rrow = table.getElementsByTagName('thead')[0]
            // var rrow2 = rrow.getElementsByTagName('tr')[0],
            // cols = rrow2 ? rrow2.children : undefined


            if (!cols) return


            for (var i=0;i<cols.length;i++){
                var div = this.createDiv(table.offsetHeight);
                cols[i].appendChild(div);
                cols[i].style.position = 'relative';
                this.setListeners(div);
            }
        },
        createDiv(height) {
            var div = document.createElement('div');
            div.style.top = 0;
            div.style.right = 0;
            div.style.width = '5px';
            div.style.position = 'absolute';
            div.style.cursor = 'col-resize';
            /* remove backGroundColor later */
            div.style.backgroundColor = 'red';
            div.style.userSelect = 'none';
            /* table height */
            div.style.height = height+'px';
            return div;
        },
        setListeners(div){
            var pageX,curCol,nxtCol,curColWidth,nxtColWidth;
            var curTable, curTableWidth;
            div.addEventListener('mousedown', function (e) {
                console.log('eeeeeeeeee')
                console.log(e)
                console.log('eeeeeeeeee')
                curCol = e.target.parentElement;
                console.log(curCol)
                nxtCol = curCol.nextElementSibling;
                console.log(nxtCol)
                pageX = e.pageX;
                console.log(pageX)
                curColWidth = curCol.offsetWidth
                if (nxtCol)
                nxtColWidth = nxtCol.offsetWidth
                console.log(nxtColWidth)
                curTable = e.target.parentElement.parentElement.parentElement.parentElement
                console.log('//////////')
                console.log(curTable)
                curTableWidth = curTable.offsetWidth
                console.log('\\\\\\\\\/')
                console.log(curTableWidth)
            });

            document.addEventListener('mousemove', function (e) {
                if (curCol) {
                    var diffX = e.pageX - pageX;
                    
                    // if (nxtCol)
                    //     nxtCol.style.width = (nxtColWidth - (diffX))+'px';

                    curCol.style.width = (curColWidth + diffX)+'px';
                    curTable.style.width = (curTableWidth + diffX)+'px';
                    
                }
            });

            document.addEventListener('mouseup', function (e) {                
                curCol = undefined;
                nxtCol = undefined;
                pageX = undefined;
                nxtColWidth = undefined;
                curColWidth = undefined;
            });
        }
    }
}
</script>

<style lang="scss">
th, td{
    border: 1px solid grey;
}

.bottombody {
    position: sticky;
    bottom: 0px;
    background-color: rgb(208, 216, 224);
}

.topbody {
    position: sticky;
    top: 0px;
    background-color: rgb(57, 199, 235);
}
</style>