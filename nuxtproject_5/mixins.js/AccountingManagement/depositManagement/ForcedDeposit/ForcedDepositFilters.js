export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            speciesFilterText: '',
            statusFilterText: '',
            bunryu1FilterText: '',
            speciesFilterText: '',
            companyFilterText: '',
            companyListText: '',
            departmentFilterText: '',
            bunryu2FilterText: '',
            depositFilterText: '',
            accountFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            accountingFilterTextSearch: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            speciesFilterTextClone: '',
            statusFilterTextClone: '',
            bunryu1FilterTextClone: '',
            speciesFilterTextClone: '',
            companyFilterTextClone: '',
            companyListTextClone: '',
            departmentFilterTextClone: '',
            bunryu2FilterTextClone: '',
            depositFilterTextClone: '',
            accountFilterTextClone: '',
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
            this.statusFilterTextClone = this.statusFilterText 
            this.bunryu1FilterTextClone = this.bunryu1FilterText 
            this.companyFilterTextClone = this.companyFilterText 
            this.companyListTextClone = this.companyListText 
            this.departmentFilterTextClone = this.departmentFilterText 
            this.bunryu2FilterTextClone = this.bunryu2FilterText 
            this.depositFilterTextClone = this.depositFilterText
            this.accountFilterTextClone = this.accountFilterText
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
        statusFiltering(value) {
            if(!this.statusFilterTextClone) {
                return true
            }

            if(this.statusFilterTextClone === '종결') {
                return value === '종결'
            } else {
                return value === this.statusFilterTextClone
            }
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
            } else if(this.allFilterText === '조사자') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '담당자(보)') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '조사/사고지') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '보고서번호') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '접수번호') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '사고번호') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '담당부서(보)') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '증권번호') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '피해자(물)') {
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