export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
        },
        // filters
    },
}