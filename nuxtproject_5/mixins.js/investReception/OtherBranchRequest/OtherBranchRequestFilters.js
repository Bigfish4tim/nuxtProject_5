export default {
    data() {
        return {
            dateFilterText: '',
            statusFilterText: '',
            processFilterText: '',
            requestDepartmentFilterText: '',
            processDepartmentFilterText: '',
            nameFilterText: '',
            filterDate: [],
            nameFilterTextSearch: '',

            dateFilterTextClone: '',
            statusFilterTextClone: '',
            processFilterTextClone: '',
            requestDepartmentFilterTextClone: '',
            processDepartmentFilterTextClone: '',
            nameFilterTextClone: '',
            filterDateClone: [],
            nameFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            this.dateFilterTextClone = this.dateFilterText
            this.statusFilterTextClone = this.statusFilterText
            this.processFilterTextClone = this.processFilterText
            this.requestDepartmentFilterTextClone = this.requestDepartmentFilterText
            this.processDepartmentFilterTextClone = this.processDepartmentFilterText
            this.nameFilterTextClone = this.nameFilterText
            this.filterDateClone = this.filterDateClone
            this.nameFilterTextSearchClone = this.nameFilterTextSearch
        },
        dateFiltering(value) {
            if(!this.dateFilterTextClone) {
                return true
            }
            if(this.dateFilterTextClone === '의뢰일자') {
                if(value <= this.filterDateClone[1] && value >= this.filterDateClone[0]) {
                    return value
                }
            } else {
                return true
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
        processFiltering(value) {
            if(!this.processFilterTextClone) {
                return true
            }

            return value === this.processFilterTextClone
        },
        requestDepartmentFiltering(value) {
            if(!this.requestDepartmentFilterTextClone) {
                return true
            }

            return value === this.requestDepartmentFilterTextClone.trim()
        },
        processDepartmentFiltering(value) {
            if(!this.processDepartmentFilterTextClone) {
                return true
            }

            return value === this.processDepartmentFilterTextClone.trim()
        },
    },
}