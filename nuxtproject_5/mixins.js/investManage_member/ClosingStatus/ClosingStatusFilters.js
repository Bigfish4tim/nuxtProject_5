export default {
    data() {
        return {
            yearsFilterText: '',
            chargeFilterTextSearch: '',

            yearsFilterTextClone: '',
            chargeFilterTextSearchClone: '',
        }
    },
    methods: {
        searchEvt() {
            console.log('click event')
            this.yearsFilterTextClone = this.yearsFilterText
            this.chargeFilterTextSearchClone = this.chargeFilterTextSearch
        },
        //filters
        yearsFiltering(value) {
            if(!this.yearsFilterTextClone) {
                return true
            }
            
            return value == Number(this.yearsFilterTextClone.replace(" 년", ""))
        }
    },
}