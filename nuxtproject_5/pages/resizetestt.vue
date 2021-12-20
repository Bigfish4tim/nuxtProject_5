<template>
    <div>
        <v-app>
            <v-data-table :headers="headers" :items="desserts"
                            sort-by="calories" 
                            disable-sort
                            v-sortable-table="{onEnd:sortTheHeadersAndUpdateTheKey}"
                            :key="anIncreasingNumber" >

            </v-data-table>
        </v-app>
    </div>
</template>

<script>
// Add back the sortHandle class if it gets stripped away by external code
// function watchClass(targetNode, classToWatch) {
//   let lastClassState = targetNode.classList.contains(classToWatch);
//   const observer = new MutationObserver((mutationsList) => {
//     for (let i = 0; i < mutationsList.length; i++) {
//       const mutation = mutationsList[i];
//       if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
//         const currentClassState = mutation.target.classList.contains(classToWatch);
//         if (lastClassState !== currentClassState) {
//           lastClassState = currentClassState;
//           if (!currentClassState) {
//             mutation.target.classList.add('sortHandle');
//           }
//         }
//       }
//     }
//   });
//   observer.observe(targetNode, { attributes: true });
// }

export default {
  data: () => ({
    anIncreasingNumber: 1,
    dialog: false,
    headers: [
      { text: 'Dessert (100g serving)', value: 'name' },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Actions', value: 'action', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: { name: '', calories: 0, fat: 0, carbs: 0, protein: 0 },
    defaultItem: { name: '', calories: 0, fat: 0, carbs: 0, protein: 0 },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.initialize();
  },

  methods: {
    initialize () {
      this.desserts = [
        { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
        { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
        { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0 },
      ]
    },

    sortTheHeadersAndUpdateTheKey(evt) {
      const headersTmp = this.headers;
      const oldIndex = evt.oldIndex;
      const newIndex = evt.newIndex;
      if (newIndex >= headersTmp.length) {
        let k = newIndex - headersTmp.length + 1;
        while (k--) {
          headersTmp.push(undefined);
        }
      }
      headersTmp.splice(newIndex, 0, headersTmp.splice(oldIndex, 1)[0]);
      this.table = headersTmp;
      this.anIncreasingNumber += 1;
    },
    
    getTableToResize(){
            
            var tables = document.getElementsByTagName('table');
            for (var i=0; i<tables.length;i++){
                this.resizableGrid(tables[i]);
            }
    },

    resizableGrid(table) {

        var row = table.getElementsByTagName('tr')[0],
        cols = row ? row.children : undefined;
        
        if (!cols) return;
        
        
        table.style.overflow = 'hidden';
        
        var tableHeight = table.offsetHeight;
        
        for (var i=0;i<cols.length;i++){
            var div = createDiv(tableHeight);
            cols[i].appendChild(div);
            cols[i].style.position = 'relative';
            setListeners(div);
        }

        function setListeners(div){
            var pageX,curCol,nxtCol,curColWidth,nxtColWidth;

            div.addEventListener('mousedown', function (e) {
                curCol = e.target.parentElement;
                nxtCol = curCol.nextElementSibling;
                pageX = e.pageX; 
                
                var padding = paddingDiff(curCol);
                
                curColWidth = curCol.offsetWidth - padding;
                if (nxtCol)
                    nxtColWidth = nxtCol.offsetWidth - padding;
            });

            div.addEventListener('mouseover', function (e) {
                e.target.style.borderRight = '2px solid #0000ff';
            })

            div.addEventListener('mouseout', function (e) {
                e.target.style.borderRight = '';
            })

            document.addEventListener('mousemove', function (e) {
            if (curCol) {
                var diffX = e.pageX - pageX;
            
                if (nxtCol)
                    nxtCol.style.width = (nxtColWidth - (diffX))+'px';

                curCol.style.width = (curColWidth + diffX)+'px';
            }
            });

            document.addEventListener('mouseup', function () { 
                curCol = undefined;
                nxtCol = undefined;
                pageX = undefined;
                nxtColWidth = undefined;
                curColWidth = undefined
            });
        }
        
        function createDiv(height){
            var div = document.createElement('div');
            div.style.top = 0;
            div.style.right = 0;
            div.style.width = '2px';
            div.style.position = 'absolute';
            div.style.cursor = 'col-resize';
            div.style.userSelect = 'none';
            div.style.height = height + 'px';
            div.style.background = 'blue';
            return div;
        }
        
        function paddingDiff(col){
        
            if (getStyleVal(col,'box-sizing') == 'border-box'){
                return 0;
            }
            
            var padLeft = getStyleVal(col,'padding-left');
            var padRight = getStyleVal(col,'padding-right');
            return (parseInt(padLeft) + parseInt(padRight));

        }

        function getStyleVal(elm,css){
            return (window.getComputedStyle(elm, null).getPropertyValue(css))
        }
    },
    watchClass(targetNode, classToWatch) {
        let lastClassState = targetNode.classList.contains(classToWatch);
        const observer = new MutationObserver((mutationsList) => {
            for (let i = 0; i < mutationsList.length; i++) {
            const mutation = mutationsList[i];
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const currentClassState = mutation.target.classList.contains(classToWatch);
                if (lastClassState !== currentClassState) {
                lastClassState = currentClassState;
                if (!currentClassState) {
                    mutation.target.classList.add('sortHandle');
                }
                }
            }
            }
        });
        observer.observe(targetNode, { attributes: true });
    }
    
  },
  directives: {
    'sortable-table': {
      inserted: (el, binding) => {
        el.querySelectorAll('th').forEach((draggableEl) => {
          // Need a class watcher because sorting v-data-table rows asc/desc removes the sortHandle class
          this.watchClass(draggableEl, 'sortHandle');
          draggableEl.classList.add('sortHandle');
        });
        Sortable.create(el.querySelector('tr'), binding.value ? { ...binding.value, handle: '.sortHandle' } : {});
      },
    },
  },
  mounted() {
    this.getTableToResize();
  },

}
</script>
