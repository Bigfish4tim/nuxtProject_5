export default {
    data() {
        return {
            
        }
    },
    methods: {
        // filters
        wiimFiltering(value) {
            if (!this.filterDate) {
                return true;
            }
            if (this.dateFilterText === '위임일') {
                if (value <= this.filterDate[1] && value >= this.filterDate[0]) {
                    console.log(this.filterDate[0] + this.filterDate[1])
                    return value
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

            return value == this.departmentFilterText
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