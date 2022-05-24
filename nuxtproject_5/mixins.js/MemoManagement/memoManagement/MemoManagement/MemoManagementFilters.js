export default {
    data() {
        return {
            deletebunryuFilterText: '',
            deletewhetherFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            //search clone data
            deletebunryuFilterTextClone: '',
            deletewhetherFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.deletebunryuFilterTextClone = this.deletebunryuFilterText
            this.deletewhetherFilterTextClone = this.deletewhetherFilterText
            this.allFilterTextClone = this.allFilterText 
            this.allFilterTextSearchClone = this.allFilterTextSearch 
        },
        // filters
        teamfiltering(value) {
            if(!this.departmentFilterTextClone) {
                return true
            }

            return value === this.departmentFilterTextClone.trim()
        },
        allFiltering(value) {
            if(this.allFilterText === '제목') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            } else if(this.allFilterText === '작성자') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearchClone
            }
        },
    },
}