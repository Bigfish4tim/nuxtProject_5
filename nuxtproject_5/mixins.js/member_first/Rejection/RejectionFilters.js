export default {
    data() {
        return {
            dateFilterText: '',
            bunryu1FilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            statusFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            filterDate: [],
            
            dateFilterTextClone: '',
            bunryu1FilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            statusFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
            filterDateClone: [],
        }
    },
    methods: {
        searchEvt() {
            this.dateFilterTextClone = this.dateFilterText
            this.bunryu1FilterTextClone = this.bunryu1FilterText
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.statusFilterTextClone = this.statusFilterText
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