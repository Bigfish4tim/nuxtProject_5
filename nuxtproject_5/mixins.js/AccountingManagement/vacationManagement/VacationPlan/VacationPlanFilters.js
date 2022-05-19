export default {
    data() {
        return {
            statusFilterText: '',
            departmentFilterText: '',
            workstatusFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            //search clone data
            statusFilterTextClone: '',
            departmentFilterTextClone: '',
            workstatusFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.statusFilterTextClone = this.statusFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.workstatusFilterTextClone = this.workstatusFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        // filters
    },
}