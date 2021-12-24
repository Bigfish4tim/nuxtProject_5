<template>
    <div>
        <table id="tableId">
            <thead>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>Size</th>
                    <th>File</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>10Mb</td>
                    <td>C:\Users\BrainBell\Desktop\Empty\abc.txt</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>


export default {
    mounted() {
        var tables = document.getElementsByTagName('table');

        for (var i=0; i < tables.length; i++) {
            this.resizableGrid(tables[i]);
        }
    },
    methods: {
        resizableGrid(table) {
            var row = table.getElementsByTagName('tr')[0],
            cols = row ? row.children : undefined;
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

<style>
*{box-sizing: border-box;}
table{border-collapse:collapse;}
td,th{padding:5px 15px;text-align:left;}
table,th,td{border:1px solid #000;}
</style>