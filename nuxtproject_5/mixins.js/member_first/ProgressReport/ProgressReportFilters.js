export default {
    data() {
        return {
            statusFilterText: '',
            companyFilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            lapseSearch: '',

            statusFilterTextClone: '',
            companyFilterTextClone: '',
            allFilterTextClone: '',
            allFilterTextSearchClone: '',
            lapseSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            this.statusFilterTextClone = this.statusFilterText
            this.companyFilterTextClone = this.companyFilterText
            this.allFilterTextClone = this.allFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
            this.lapseSearchClone = this.lapseSearch
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
        companyFiltering(value) {
            if(!this.companyFilterTextClone) {
                return true
            }

            return value === this.companyFilterTextClone
        },
        lapseFiltering(value) {
            if(!this.lapseSearchClone) {
                return true
            }

            return value > this.lapseSearchClone
        }
    },
}