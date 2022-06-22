export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            IPFilterText: '',
            securityFilterText: '',
            permissionFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            IPFilterTextClone: '',
            securityFilterTextClone: '',
            permissionFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
            this.IPFilterTextClone = this.IPFilterText
            this.securityFilterTextClone = this.securityFilterText
            this.permissionFilterTextClone = this.permissionFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        // filters
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