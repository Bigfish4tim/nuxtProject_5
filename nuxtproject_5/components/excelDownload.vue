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
            >
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
import xlsx from 'xlsx'

export default {
    data() {
        return {
            visibleHeadProps: [],
            instance: undefined,
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
            excelList: [
                {no: 1, name: 'Anchovy', point: 70},
                {no: 2, name: 'ZeroLine', point: 95},
                {no: 3, name: '서울시장', point: 100},
                {no: 4, name: 'KingPork', point: 80},
                {no: 5, name: 'LeeMass', point: 60}
            ],
            header: [
                {
                key: 'no',
                name: 'No'
                },
                {
                key: 'name',
                name: '성명'
                },
                {
                key: 'point',
                name: '점수'
                }
            ],
        }
    },
    methods: {
        excelDownload() {
            let options = {
                header: this.headers,
                headProps: 'header'
            }
            
            this.excelExport(this.desserts, options)
        },
        excelExport(data, options) {
            // data row별 header에 바인딩 될 매핑값 설정
            let headProps = []
            if (Array.isArray(options.headProps)) {
                headProps = options.headProps
            } else if (options.headProps === 'header') {
                for (let h of this.headers) {
                    headProps.push(h.value)
                }
            } else {
                headProps = Object.keys(data[0])
            }
            this.visibleHeadProps = headProps
            
            this.instance = document.createElement('table')
            
            // Header 세팅
            let header = []
            if (!Array.isArray(this.headers[0])) {
                header.push(this.headers)
            } else {
                header = this.headers
            }

            let thead = document.createElement('thead') 
            for (let row of header) {
                let tr = document.createElement('tr')
                for (let h of row) {
                    let rowspan = h.rowspan || '1'
                    let colspan = h.colspan || '1'
                    let th = document.createElement('th')
                    th.setAttribute('rowspan', rowspan)
                    th.setAttribute('colspan', colspan)
                    th.innerText = h.text
                    tr.appendChild(th)
                }
                thead.appendChild(tr)
            }
            this.instance.appendChild(thead)
            
            // Body 세팅
            let tbody = document.createElement('tbody')

            for (let row of data) {
                let tr = document.createElement('tr')
                for (let cellkey of this.visibleHeadProps) {
                let td = document.createElement('td')
                td.innerText = row[cellkey]
                tr.appendChild(td)
                }
                tbody.appendChild(tr)
            }
            this.instance.appendChild(tbody)
            
            // instance에 만들어진 table을 엑셀파일로 저장
            let config = { raw: true, type: 'string' }
            let ws = xlsx.utils.table_to_sheet(this.instance, config)
            let wb = xlsx.utils.book_new()

            xlsx.utils.book_append_sheet(wb, ws, 'Sheet1')
            xlsx.writeFile(wb, '성적표.xlsx')
        }
    },
    
}
</script>
<style>
    
</style>