export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            standardFilterText: '',
            workstatusFilterText: '',
            departmentFilterText: '',
            securityrankFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            etcFilterText: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            standardFilterTextClone: '',
            workstatusFilterTextClone: '',
            departmentFilterTextClone: '',
            securityrankFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
            etcFilterTextClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
            this.standardFilterTextClone = this.standardFilterText
            this.workstatusFilterTextClone = this.workstatusFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.securityrankFilterTextClone = this.securityrankFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
            this.etcFilterTextClone = this.etcFilterText
        },
        // filters
        allFiltering(value) {
            if(this.allFilterText === '제목') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '작성자') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            }
        },
    },
}