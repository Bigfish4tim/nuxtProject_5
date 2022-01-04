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
                    <v-spacer/>
                    aasdfasdf
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
import xlsx from 'xlsx'
import { mapMutations } from 'vuex'

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
        var tables = document.getElementsByTagName('table');

        for(var i=0; i<tables.length; i++) {
            // this.resizableGrid(tables[i]);
            // this.resizable(tables[i])
        }
        
        // this.resizable(tables)
        this.resizenew(tables)

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
        // ...mapMutations({
        //     resizable: 'resize/resizableGrid'
        // }),
        resizenew(tables) {
            this.$store.commit('asdasdasdasw', tables[0])
        },
        excelDownload() {
            let options = {
                header: this.headers,
                headProps: 'header'
            }

            var tables = document.getElementsByTagName('table')
            
            let config = { raw: true, type: 'string' }
            let ws = xlsx.utils.table_to_sheet(tables[0], config)
            let wb = xlsx.utils.book_new()

            xlsx.utils.book_append_sheet(wb, ws, 'Sheet1')
            xlsx.writeFile(wb, '성적표.xlsx')

            
        },
        resizableGrid(table) {
            var row = table.getElementsByTagName('tr')[0],
            cols = row ? row.children : undefined;

            if (!cols) return

            for (var i=0;i<cols.length;i++){
                var div = this.createDiv(table.offsetHeight); //header만 적용되도록 변경요망
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
                curCol = e.target.parentElement;
                nxtCol = curCol.nextElementSibling;
                pageX = e.pageX;
                curColWidth = curCol.offsetWidth
                if (nxtCol)
                nxtColWidth = nxtCol.offsetWidth
                // 전체 datatable 지정
                curTable = e.target.parentElement.parentElement.parentElement.parentElement
                // 전체 datatable 총 width 지정
                curTableWidth = curTable.offsetWidth
            });

            document.addEventListener('mousemove', function (e) {
                if (curCol) {
                    var diffX = e.pageX - pageX;

                    // 오른쪽 cell의 width를 줄이는 함수. 사용안함
                    // if (nxtCol)
                    //     nxtCol.style.width = (nxtColWidth - (diffX))+'px';

                    // 현재 cell의 width를 mousemove한 만큼 변경
                    curCol.style.width = (curColWidth + diffX)+'px';
                    // 현재 cell의 width가 변경된만큼 전체 datatable의 width도 변경
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
        },
        makeExcelFile5 () {
            const workBook = Xlsx.utils.book_new()
            const workSheet = Xlsx.utils.json_to_sheet(this.data1) // 데이터 경로 this.desserts 써야 함
            Xlsx.utils.book_append_sheet(workBook, workSheet, 'example')
            Xlsx.writeFile(workBook, 'example.xlsx')
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