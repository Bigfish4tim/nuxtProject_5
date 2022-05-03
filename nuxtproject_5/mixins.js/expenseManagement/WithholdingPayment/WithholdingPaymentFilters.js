export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            statusFilterText: '',
            speciesFilterText: '',
            companyFilterText: '',
            companyListText: '',
            departmentFilterText: '',
            itemFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',

            dateFilterTextClone: '',
            filterDateClone: [],
            statusFilterTextClone: '',
            speciesFilterTextClone: '',
            companyFilterTextClone: '',
            companyListTextClone: '',
            departmentFilterTextClone: '',
            itemFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
            this.speciesFilterTextClone = this.speciesFilterText
            this.statusFilterTextClone = this.statusFilterText
            this.companyFilterTextClone = this.companyFilterText 
            this.companyListTextClone = this.companyListText 
            this.departmentFilterTextClone = this.departmentFilterText 
            this.itemFilterTextClone = this.itemFilterText
            this.allFilterTextClone = this.allFilterText 
            this.allFilterTextSearchClone = this.allFilterTextSearch 

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
        companyFiltering(value) {
            if(!this.companyFilterTextClone) {
                return true
            }

            return value === this.companyFilterTextClone
        },
        teamfiltering(value) {
            if(!this.departmentFilterTextClone) {
                return true
            }

            return value === this.departmentFilterTextClone.trim()
        },
        itemFiltering(value) {

        },
        allFiltering(value) {
            if(this.allFilterText === '피보험자') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '계약자') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '보고서번호') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '사고번호') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else {
                return true
            }
        },
    },
}