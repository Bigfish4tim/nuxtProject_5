export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            speciesFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            bunryucountFilterText: '',
            closingResultFilterText: '',
            standardFilterText: '',
            departsortFilterText: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            speciesFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            bunryucountFilterTextClone: '',
            closingResultFilterTextClone: '',
            standardFilterTextClone: '',
            departsortFilterTextClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
            this.speciesFilterTextClone = this.speciesFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.closingResultFilterTextClone = this.closingResultFilterText
            this.dayFilterTextClone = this.dayFilterText
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