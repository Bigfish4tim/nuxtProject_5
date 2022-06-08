export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            speciesFilterText: '',
            subspeciesFilterText: '',
            surveyFilterText: '',
            accidentTypeFilterText: '',
            departmentFilterText: '',
            additionalFilterText: '',
            lookupFilterText: '',
            
            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            speciesFilterTextClone: '',
            subspeciesFilterTextClone: '',
            surveyFilterTextClone: '',
            accidentTypeFilterTextClone: '',
            departmentFilterTextClone: '',
            additionalFilterTextClone: '',
            lookupFilterTextClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText 
            this.filterDateClone = this.filterDate
            this.speciesFilterTextClone = this.speciesFilterText
            this.subspeciesFilterTextClone = this.subspeciesFilterText
            this.surveyFilterTextClone = this.surveyFilterText
            this.accidentTypeFilterTextClone = this.accidentTypeFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.additionalFilterTextClone = this.additionalFilterText
            this.lookupFilterTextClone = this.lookupFilterText
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