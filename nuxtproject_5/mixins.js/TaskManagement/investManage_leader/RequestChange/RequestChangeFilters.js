export default {
    data() {
        return {
            processStatusFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            processStatusFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            this.processStatusFilterTextClone = this.processStatusFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        processStateFiltering(value) {
            if(!this.processStatusFilterTextClone) {
                return true
            }

            return value === this.processStatusFilterTextClone
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