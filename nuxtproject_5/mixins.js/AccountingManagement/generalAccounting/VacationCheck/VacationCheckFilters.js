export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            departmentFilterText: '',
            workstatusFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            departmentFilterTextClone: '',
            workstatusFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
            this.departmentFilterTextClone = this.departmentFilterText
            this.workstatusFilterTextClone = this.workstatusFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        // filters
    },
}