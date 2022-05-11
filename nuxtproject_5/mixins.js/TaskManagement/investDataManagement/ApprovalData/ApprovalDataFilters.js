export default {
    data() {
        return {
            communicationStateFilterText: '',
            myStateFilterText: '',
            approveDivFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            filterDate: [],
            
            communicationStateFilterTextClone: '',
            myStateFilterTextClone: '',
            approveDivFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
            filterDateClone: [],
        }
    },
    methods: {
        searchEvt() {
            this.communicationStateFilterTextClone = this.communicationStateFilterText
            this.myStateFilterTextClone = this.myStateFilterText
            this.approveDivFilterTextClone = this.approveDivFilterText
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