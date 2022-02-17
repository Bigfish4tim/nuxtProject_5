export default {
    data() {
        return {
            departmentFilterText: '',
            filterDate: [(new Date(new Date().getFullYear(), new Date().getMonth(), 2)).toISOString().substr(0, 10), (new Date(Date.now())).toISOString().substr(0, 10)],
            name: '',

            departmentFilterTextClone: '',
            filterDateClone: [(new Date(new Date().getFullYear(), new Date().getMonth(), 2)).toISOString().substr(0, 10), (new Date(Date.now())).toISOString().substr(0, 10)],
            nameClone: '',
        }
    },
    methods: {
        searchEvt() {
            this.departmentFilterTextClone = this.departmentFilterText
            this.filterDateClone = this.filterDate
            this.nameClone = this.name
        },
        departmentFiltering(value) {
            if(!this.departmentFilterTextClone) {
                return true
            }

            return value === this.departmentFilterTextClone
        },

    },
}