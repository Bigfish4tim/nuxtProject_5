export default {
    data() {
        return {
            dataFilterText: '',
            filterDate: [],
            allFilterTextSearch: '',

            dataFilterTextClone: '',
            filterDateClone: [],
            allFilterTextSearchClone: '',
        }
    },
    methods: {
        PaymentFiltering(value) {
            if (!this.filterDateClone) {
                return true;
            }
            if (this.dateFilterTextClone === '지급일자') {
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
    },
}