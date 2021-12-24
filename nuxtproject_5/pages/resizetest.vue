<template>
    <div>
        <v-app>
            <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
            lg="12"
            
            >
                <template v-slot:headers="props">
                    <tr>
                        <th
                            v-for="header in props.headers"
                            :key="header.text"
                        >
                        </th>
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
                { text: 'Dessert (100g serving)', sortable: false, value: 'name'},
                { text: 'Calories', sortable: false, value: 'calories' },
                { text: 'Fat (g)', sortable: false, value: 'fat' },
                { text: 'Carbs (g)', sortable: false, value: 'carbs' },
                { text: 'Protein (g)', sortable: false, value: 'protein' },
                { text: 'Iron (%)', sortable: false, value: 'iron' },
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
        }
    },
    mounted() {
        var tables = document.getElementsByTagName('table');

        this.resizableGrid(tables[0]);
    },
    created() {
    },
    methods: {
        resizableGrid(table) {
            console.log(table)
            var row = table.getElementsByTagName('tr')[1],
            cols = row ? row.children : undefined;

            

            // var rrow = table.getElementsByTagName('thead')[0]
            // var rrow2 = rrow.getElementsByTagName('tr')[0],
            // cols = rrow2 ? rrow2.children : undefined

            console.log('ISRETURN ???')

            if (!cols) return

            console.log('ISRETURN ???')

            for (var i=0;i<cols.length;i++){
                console.log(table.offsetHeight)
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
            div.addEventListener('mousedown', function (e) {
                curCol = e.target.parentElement;
                nxtCol = curCol.nextElementSibling;
                pageX = e.pageX;
                curColWidth = curCol.offsetWidth
                if (nxtCol)
                nxtColWidth = nxtCol.offsetWidth
            });

            document.addEventListener('mousemove', function (e) {
                if (curCol) {
                    var diffX = e.pageX - pageX;
                    
                    if (nxtCol)
                        nxtCol.style.width = (nxtColWidth - (diffX))+'px';

                    curCol.style.width = (curColWidth + diffX)+'px';
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
</style>