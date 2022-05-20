export default {
    data() {
        return {
            statusFilterText: '',
            FixtureItemFilterText: '',
            departmentFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            //search clone data
            statusFilterTextClone: '',
            FixtureItemFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.statusFilterTextClone = this.statusFilterText
            this.FixtureItemFilterTextClone = this.FixtureItemFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        // filters
    },
}