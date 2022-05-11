export default {
    data() {
        return {
            bunryuFilterText: '',

            bunryuFilterTextClone: '',
        }
    },
    methods: {
        searchEvt() {
            this.bunryuFilterTextClone = this.bunryuFilterText
        }
    },
}