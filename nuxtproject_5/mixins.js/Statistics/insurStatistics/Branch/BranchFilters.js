export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            companyFilterText: '',
            departmentFilterText: '',
            departstandardFilterText: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            departstandardFilterTextClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.departstandardFilterTextClone = this.departstandardFilterText
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