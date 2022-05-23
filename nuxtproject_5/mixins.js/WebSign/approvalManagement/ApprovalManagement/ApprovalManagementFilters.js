export default {
    data() {
        return {
            approvalFilterText: '',
            signstatusFilterText: '',
            departmentFilterText: '',
            approvalEtcFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            //search clone data
            approvalFilterTextClone: '',
            signstatusFilterTextClone: '',
            departmentFilterTextClone: '',
            approvalEtcFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.approvalFilterTextClone = this.approvalFilterText
            this.signstatusFilterTextClone = this.signstatusFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.approvalEtcFilterTextClone = this.approvalEtcFilterText
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