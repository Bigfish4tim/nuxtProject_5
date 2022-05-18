export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            statusFilterText: '',
            paidFilterText: '',
            vacationstatusFilterText: '',
            signstatusFilterText: '',
            departmentFilterText: '',
            workstatusFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            statusFilterTextClone: '',
            paidFilterTextClone: '',
            vacationstatusFilterTextClone: '',
            signstatusFilterTextClone: '',
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
            this.statusFilterTextClone = this.statusFilterText
            this.paidFilterTextClone = this.paidFilterText
            this.vacationstatusFilterTextClone = this.vacationstatusFilterText
            this.signstatusFilterTextClone = this.signstatusFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.workstatusFilterTextClone = this.workstatusFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        // filters
    },
}