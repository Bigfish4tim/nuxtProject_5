export default {
    data() {
        return {
            deletebunryuFilterText: '',
            
            //search clone data
            deletebunryuFilterTextClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.deletebunryuFilterTextClone = this.deletebunryuFilterText
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