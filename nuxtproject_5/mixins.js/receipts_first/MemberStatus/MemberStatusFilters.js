export default {
    data() {
        return {
            departmentFilterText: '',

            departmentFilterTextClone: '',
        }
    },
    methods: {
        searchEvt() {
            this.departmentFilterTextClone = this.departmentFilterText
        }
    },
}