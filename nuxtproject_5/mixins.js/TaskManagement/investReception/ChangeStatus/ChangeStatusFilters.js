export default {
    data() {
        return {
            speciesFilterText: '',
            dateFilterText: '',
            companyFilterText: '',
            statusFilterText: '',
            departmentFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            filterDate: [],

            speciesFilterTextClone: '',
            dateFilterTextClone: '',
            companyFilterTextClone: '',
            statusFilterTextClone: '',
            departmentFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
            filterDateClone: [],
        }
    },
    methods: {
        searchEvt() {
            this.speciesFilterTextClone = this.speciesFilterText
            this.dateFilterTextClone = this.dateFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.statusFilterTextClone = this.statusFilterText
            this.departmentFilterTextClone = this.departmentFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
            this.filterDateClone = this.filterDate
        },
        speciesFiltering(value) {
            if(!this.speciesFilterTextClone) {
                return true
            }
            if (this.speciesFilterTextClone === '1종') {
                return value == 1
            } else {
                return value == 4
            }
        },
        dateFiltering(value) {
            if(!this.dateFilterTextClone) {
                return true
            }
            if(this.dateFilterTextClone === '변경일') {
                if (value <= this.filterDateClone[1] && value >= this.filterDateClone[0]) {
                    return value
                }
            } else {
                return true
            }
        },
        companyFiltering(value) {
            if(!this.companyFilterTextClone) {
                return true
            }

            return value === this.companyFilterTextClone
        },
        statusFiltering(value) {
            if(!this.statusFilterTextClone) {
                return true
            }

            if(this.statusFilterTextClone === '(접수/진행)') {
                return value === '접수' || '진행'
            } else if(this.statusFilterTextClone === '(상신/검토)') {
                return value === '상신' || '검토'
            } else if(this.statusFilterTextClone === '(걸재/종결)') {
                return value === '결재' || '종결'
            } else if(this.statusFilterTextClone === '(종결/마감)') {
                return value === '종결' || '마감'
            } else if(this.statusFilterTextClone === '(전체/정상)') {
                return value === '전체' || '정상'
            } else {
                return value === this.statusFilterTextClone
            }
        },
        departmentFiltering(value) {
            if(!this.departmentFilterTextClone) {
                return true
            }

            return value === this.departmentFilterTextClone.trim()
        },
    },
}