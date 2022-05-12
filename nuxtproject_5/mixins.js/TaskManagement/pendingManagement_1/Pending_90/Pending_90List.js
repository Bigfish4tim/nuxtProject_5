export default {
    data() {
        return {
            dateFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            managerTextSearch: '',
            chargeNameTextSearch: '',

            dateFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            managerTextSearchClone: '',
            chargeNameTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.managerTextSearchClone = this.managerTextSearch
            this.chargeNameTextSearchClone = this.chargeNameTextSearch
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
    },
}