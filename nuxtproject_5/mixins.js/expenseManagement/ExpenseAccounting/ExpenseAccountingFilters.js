export default {
    data() {
        return {
            filterDate: [],
            departmentFilterText: '',

            //search clone data
            filterDateClone: [],
            departmentFilterTextClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.filterDateClone = this.filterDate
            this.departmentFilterTextClone = this.departmentFilterText
        },
        // filters
        teamfiltering(value) {
            if(!this.departmentFilterTextClone) {
                return true
            }

            return value === this.departmentFilterTextClone.trim()
        },
    },
}