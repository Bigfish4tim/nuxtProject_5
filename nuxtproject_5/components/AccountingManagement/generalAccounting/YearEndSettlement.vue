<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
    mixins: [
        
    ],
    data() {
        return {
            filterMenu: false,

            items: [],
        }
    },
    computed: {

    },
    methods: {
        sumReducer(prev, curr) {

            if(prev === '') {
                var intprev = 0
            } else {
                var intprev = parseInt(prev.replace(/,/g , ''))
            }

            if(curr === '') {
                var intcurr = 0
            } else {
                var intcurr = parseInt(curr.replace(/,/g , ''))
            }
            var sum = intprev + intcurr
            
            return sum.toLocaleString('ko-KR')
        },
    },
}
</script>
<style>
    
</style>