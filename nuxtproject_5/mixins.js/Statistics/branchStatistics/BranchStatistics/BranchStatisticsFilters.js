export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            departmentFilterText: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            departmentFilterTextClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDateClone
            this.departmentFilterTextClone = this.departmentFilterText
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