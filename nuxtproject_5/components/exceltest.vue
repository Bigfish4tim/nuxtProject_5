<template>
    <div>
        <v-btn @click="excelDownload">excel</v-btn>
    </div>
</template>
<script>
import xlsx from 'xlsx'

export default {
    data() {
        return {
            visibleHeadProps: [],
            instance: undefined,
            
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
            ]
        }
    },
    methods: {
        excelDownload() {
            let options = {
                header: this.header,
                headProps: 'header'
            }
        
            this.excelExport(this.excelList, options)
        },
        excelExport(data, options) {
            // data row별 header에 바인딩 될 매핑값 설정
            let headProps = []
            if (Array.isArray(options.headProps)) {
                headProps = options.headProps
            } else if (options.headProps === 'header') {
                for (let h of this.header) {
                    headProps.push(h.key)
                }
            } else {
                headProps = Object.keys(data[0])
            }
            this.visibleHeadProps = headProps
            
            this.instance = document.createElement('table')
            
            // Header 세팅
            let header = []
            if (!Array.isArray(this.header[0])) {
                header.push(this.header)
            } else {
                header = this.header
            }

            let thead = document.createElement('thead')
            for (let row of header) {
                let tr = document.createElement('tr')
                console.log('///// header ///////')
                console.log(header)
                console.log('////// row ///////')
                console.log(row)
                for (let h of row) {
                    console.log('////// h ///////')
                    console.log(h)
                    let rowspan = h.rowspan || '1'
                    let colspan = h.colspan || '1'
                    let th = document.createElement('th')
                    th.setAttribute('rowspan', rowspan)
                    th.setAttribute('colspan', colspan)
                    th.innerText = h.name
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
    }
}
</script>
<style>
    
</style>