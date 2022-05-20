export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            processFilterText: '',
            documentClassificationFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            processFilterTextClone: '',
            documentClassificationFilterTextClone: '',
            companyFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
            this.processFilterTextClone = this.processFilterText
            this.documentClassificationFilterTextClone = this.documentClassificationFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        // filters
    },
}