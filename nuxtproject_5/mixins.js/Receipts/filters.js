export default {
    data() {
        return {
            dateFilterText: '',
            speciesFilterText: '',
            statusFilterText: '',
            bunryu1FilterText: '',
            companyFilterText: '',
            companyListText: '',
            departmentFilterText: '',
            bunryu2FilterText: '',
            allFilterText: '',
            allFilterTextSearch: '',
            filterMenu: false,
        }
    },
    methods: {
        searchEvt() {
            var aa = this.speciesFilterText
        },
        // filters
        wiimFiltering(value) {
            if (!this.filterDate) {
                return true;
            }
            if (this.dateFilterText === '위임일') {
                if (value <= this.filterDate[1] && value >= this.filterDate[0]) {
                    console.log(this.filterDate[0] + this.filterDate[1])
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
            if(!this.speciesFilterText) {
                return true
            }
            if (this.speciesFilterText === '1종') {
                return value == 1
            } else {
                return value == 4
            }
        },
        teamfiltering(value) {
            if(!this.departmentFilterText) {
                return true
            }

            return value == this.departmentFilterText.trim()
        },
        statusFiltering(value) {
            if(!this.statusFilterText) {
                return true
            }

            if(this.statusFilterText === '(접수/진행)') {
                return value === '접수' || '진행'
            } else if(this.statusFilterText === '(상신/검토)') {
                return value === '상신' || '검토'
            } else if(this.statusFilterText === '(걸재/종결)') {
                return value === '결재' || '종결'
            } else if(this.statusFilterText === '(종결/마감)') {
                return value === '종결' || '마감'
            } else if(this.statusFilterText === '(전체/정상)') {
                return value === '전체' || '정상'
            } else {
                return value === this.statusFilterText
            }
        },
        allFiltering(value) {
            if(this.allFilterText === '피보험자') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else if(this.allFilterText === '계약자') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else if(this.allFilterText === '조사자') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else if(this.allFilterText === '담당자(보)') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else if(this.allFilterText === '조사/사고지') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else if(this.allFilterText === '보고서번호') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else if(this.allFilterText === '접수번호') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else if(this.allFilterText === '사고번호') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else if(this.allFilterText === '담당부서(보)') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else if(this.allFilterText === '증권번호') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else if(this.allFilterText === '피해자(물)') {
                if(!this.allFilterText) {
                    return true
                }

                return value === this.allFilterTextSearch
            } else {
                return true
            }
        },
        nameFilter(value) {
            // If this filter has no value we just skip the entire filter.
            if (!this.dessertFilterValue) {
                return true;
            }

            if (this.dateFilterText === '위임일') {
                return value
            } else if (this.dateFilterText === '접수일') {
                return value
            } else if (this.dateFilterText === '종결일') {
                return value
            } else if (this.dateFilterText === '발행일') {
                return value
            } else if (this.dateFilterText === '입금일') {
                return value
            } else if (this.dateFilterText === '최초실적일') {
                return value
            } else {
                return true
            }

        },
    },
}