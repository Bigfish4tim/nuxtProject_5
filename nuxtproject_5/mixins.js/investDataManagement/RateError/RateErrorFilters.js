export default {
    data() {
        return {
            speciesFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterTextSearch: '',
            
            speciesFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            this.speciesFilterTextClone = this.speciesFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
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