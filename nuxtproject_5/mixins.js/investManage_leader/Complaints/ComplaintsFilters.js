export default {
    data() {
        return {
            dateFilterText: '',
            speciesFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            filterDate: [],
            
            dateFilterTextClone: '',
            speciesFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
            filterDateClone: [],
        }
    },
    methods: {
        searchEvt() {
            this.dateFilterTextClone = this.dateFilterText
            this.speciesFilterTextClone = this.speciesFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
            this.filterDateClone = this.filterDate
        },
        dateFiltering(value) {
            if(!this.dateFilterTextClone) {
                return true
            }
            if(this.dateFilterTextClone === '발생일자') {
                if (value <= this.filterDateClone[1] && value >= this.filterDateClone[0]) {
                    return value
                } 
            } else {
                return true;
            }
        },
        speciesFiltering(value) {
            if(!this.speciesFilterTextClone) {
                return true
            }
            if (this.speciesFilterTextClone === '1종') {
                return value == 1
            } else {
                return value == 4
            }
        },
        companyFiltering(value) {
            if(!this.companyFilterTextClone) {
                return true
            }

            return value
        },
        departmentFiltering(value) {
            if(!this.departmentFilterTextClone) {
                return true
            }

            return value === this.departmentFilterTextClone.trim()
        }
    },
}