export default {
    data() {
        return {
            communicationStateFilterText: '',
            speciesFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterTextSearch: '',

            communicationStateFilterTextClone: '',
            speciesFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            this.communicationStateFilterTextClone = this.communicationStateFilterText
            this.speciesFilterTextClone = this.speciesFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        communicationStateFiltering(value) {
            if(!this.communicationStateFilterTextClone) {
                return true
            }

            return value === this.communicationStateFilterTextClone
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

            return value === this.companyFilterTextClone
        },
        departmentFiltering(value) {
            if(!this.departmentFilterTextClone) {
                return true
            }

            return value === this.departmentFilterTextClone.trim()
        }
    },
}