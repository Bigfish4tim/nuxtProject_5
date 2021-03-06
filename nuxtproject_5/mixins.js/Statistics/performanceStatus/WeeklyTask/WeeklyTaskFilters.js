export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            speciesFilterText: '',
            lookupFilterText: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            speciesFilterTextClone: '',
            lookupFilterTextClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
            this.speciesFilterTextClone = this.speciesFilterText
            this.lookupFilterTextClone = this.lookupFilterText
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