export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            speciesFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            accountingFilterTextSearch: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            speciesFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
            accountingFilterTextSearchClone: '',
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
            this.allFilterTextClone = this.allFilterText 
            this.allFilterTextSearchClone = this.allFilterTextSearch 
            this.accountingFilterTextSearchClone = this.accountingFilterTextSearch
        },
        // filters
        wiimFiltering(value) {
            if (!this.filterDateClone) {
                return true;
            }
            if (this.dateFilterTextClone === '위임일') {
                if (value <= this.filterDateClone[1] && value >= this.filterDateClone[0]) {
                    console.log(this.filterDateClone[0] + this.filterDateClone[1])
                    console.log('on action')
                    return value
                } else {
                    console.log('non action')
                    // return true
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
        teamfiltering(value) {
            if(!this.departmentFilterTextClone) {
                return true
            }

            return value === this.departmentFilterTextClone.trim()
        },
    },
}