import xlsx from 'xlsx'

export default {
    mounted() {
        console.log('excel downloader mounted.....//////')
    },
    methods: {
        excelDownload() {
            let options = {
                header: this.headers,
                headProps: 'header'
            }

            var tables = document.getElementsByTagName('table')
            
            let config = { raw: true, type: 'string' }
            let ws = xlsx.utils.table_to_sheet(tables[0], config)
            let wb = xlsx.utils.book_new()

            let title = '조사접수_접수사항_' + new Date() + '.xlsx'

            xlsx.utils.book_append_sheet(wb, ws, 'Sheet1')
            // xlsx.writeFile(wb, '성적표.xlsx')
            xlsx.writeFile(wb, title)

            
        },
        makeExcelFile5 () {
            const workBook = Xlsx.utils.book_new()
            const workSheet = Xlsx.utils.json_to_sheet(this.data1) // 데이터 경로 this.desserts 써야 함
            Xlsx.utils.book_append_sheet(workBook, workSheet, 'example')
            Xlsx.writeFile(workBook, 'example.xlsx')
        }
    },
}