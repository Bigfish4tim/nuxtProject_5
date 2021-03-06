export default {
    mounted() {
        console.log('resizable function mounted..../////')

        var tables = document.getElementsByTagName('table');
        console.log('//// tables /////')
        console.log(tables)
        console.log(tables[0])

        for(var i=0; i<tables.length; i++) {
            this.resizableGrid(tables[i]);
        }

        this.sizeInitialize('topbody_data')
    },
    methods: {
        resizableGrid(table) {
            var row = table.getElementsByTagName('tr')[0],
            cols = row ? row.children : undefined;

            console.log('////row ///////')
            console.log(row)
            console.log('//// cols ////')
            console.log(cols)
            console.log(cols.item(10))
            console.log('/////parents of row ////')
            console.log(row.parentNode.parentNode)

            if (!cols) return

            for (var i=0;i<cols.length;i++){
                var div = this.createDiv(row.offsetHeight); //header만 적용되도록 변경요망
                cols[i].appendChild(div);
                cols[i].style.position = 'relative';
                this.setListeners(div);
            }
        },
        createDiv(height) {
            var div = document.createElement('div');
            div.style.top = 0;
            div.style.right = 0;
            div.style.width = '3px';
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
        // 데이터 테이블 width를 header의 width와 같게 맞춰주는 함수
        sizeInitialize(ClassName) {
            var header_tds = document.getElementsByClassName(ClassName)

            console.log('//////// header_tds ///////')
            console.log(header_tds)

            for(var i=0; i<header_tds.length; i++) {
                header_tds[i].style.width = this.headers[i].width
            }
        },
    },
}