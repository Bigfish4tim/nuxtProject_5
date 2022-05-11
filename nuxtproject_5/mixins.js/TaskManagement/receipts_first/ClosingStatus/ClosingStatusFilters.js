export default {
    data() {
        return {
            departmentFilterText: '',
            filterDate: [(new Date(new Date().getFullYear(), new Date().getMonth(), 2)).toISOString().substr(0, 10), (new Date(Date.now())).toISOString().substr(0, 10)],
            

            departmentFilterTextClone: '',
            filterDateClone: [(new Date(new Date().getFullYear(), new Date().getMonth(), 2)).toISOString().substr(0, 10), (new Date(Date.now())).toISOString().substr(0, 10)],
        }
    },
    methods: {
        searchEvt() {
            this.departmentFilterTextClone = this.departmentFilterText
            this.filterDateClone = this.filterDate
        },
    },
}