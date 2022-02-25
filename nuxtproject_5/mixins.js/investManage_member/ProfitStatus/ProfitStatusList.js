export default {
    mounted() {
        this.nowTears()
    },
    data() {
        return {
            yearsFilter: [],
        }
    },
    methods: {
        nowTears() {
            var now = new Date()
            var years = now.getFullYear()

            for(var i=years; i>2000;i--) {
                var text = i + ' 년'
                this.yearsFilter.push(text)
            }
        }
    },
}