export default {
    data() {
        return {
            statusFilterText: '',
            departmentFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            //search clone data
            statusFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.statusFilterTextClone = this.statusFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        // filters
    },
}