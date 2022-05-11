export default {
    data() {
        return {
            dateFilterText: '',
            filterDate: [],
            speciesFilterText: '',
            statusFilterText: '',
            extraoptionFilterText: '',
            allFilterTextSearch: '',
            filterMenu: false,

            //search clone data
            dateFilterTextClone: '',
            filterDateClone: [],
            speciesFilterTextClone: '',
            statusFilterTextClone: '',
            extraoptionFilterTextClone: '',
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.dateFilterTextClone = this.dateFilterText
            this.filterDateClone = this.filterDate
            this.speciesFilterTextClone = this.speciesFilterText
            this.statusFilterTextClone = this.statusFilterText
            this.extraoptionFilterTextClone = this.extraoptionFilterText
            this.allFilterTextSearchClone = this.allFilterTextSearch
        },
        // filters
        wiimFiltering(value) {
            if (!this.filterDateClone) {
                return true;
            }
            if (this.dateFilterTextClone === '위임일') {
                if (value <= this.filterDateClone[1] && value >= this.filterDateClone[0]) {
                    console.log(this.filterDateClone[0] + this.filterDateClone[1])
                    console.log('on action')
                    return value
                } else {
                    console.log('non action')
                    // return true
                }
            } else {
                return true;
            }
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
    },
}