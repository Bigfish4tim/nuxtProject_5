export default {
    data() {
        return {
            communicationDateFilterText: '',
            speciesFilterText: '',
            communicationStateFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterTextSearch: '',
            filterDate: [],

            communicationDateFilterTextClone: '',
            speciesFilterTextClone: '',
            communicationStateFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextSearchClone: '',
            filterDateClone: [],
        }
    },
    methods: {
        searchEvt() {
            this.communicationDateFilterTextClone = this.communicationDateFilterText
            this.speciesFilterTextClone = this.speciesFilterText
            this.communicationStateFilterTextClone = this.communicationStateFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
            this.filterDateClone = this.filterDate
        },
        communicationDateFiltering(value) {
            if(!this.dateFilterTextClone) {
                return true
            }
            if(this.dateFilterTextClone === '종결일') {
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
        communicationStateFiltering(value) {
            if(!this.communicationStateFilterTextClone) {
                return true
            }

            return value === this.communicationStateFilterTextClone
        },
        companyFiltering(value) {
            if(!this.companyFilterTextClone) {
                return true
            }

            return value === this.companyFilterTextClone
        },
        departmentFiltering(value) {
            if(!this.departmentFilterTextClone) {
                return true
            }

            return value === this.departmentFilterTextClone.trim()
        },
    },
}