export default {
    data() {
        return {
            statusFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',

            statusFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            this.statusFilterTextClone = this.statusFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        statusFiltering(value) {
            if(!this.statusFilterTextClone) {
                return true
            }

            return value === this.statusFilterTextClone
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