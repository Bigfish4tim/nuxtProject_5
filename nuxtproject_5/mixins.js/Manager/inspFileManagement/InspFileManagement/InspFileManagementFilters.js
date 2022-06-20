export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            documentFilterText: '',
            statusFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            documentFilterTextClone: '',
            statusFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
            this.documentFilterTextClone = this.documentFilterText
            this.statusFilterTextClone = this.statusFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        // filters
        allFiltering(value) {
            if(this.allFilterText === '제목') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '작성자') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            }
        },
    },
}