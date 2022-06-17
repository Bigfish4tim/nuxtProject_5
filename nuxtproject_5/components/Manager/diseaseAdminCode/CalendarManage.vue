<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="sidoFilter"
                v-model="sidoFilterText"
                label="-시도-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="gugunFilter"
                v-model="gugunFilterText"
                label="-구/군-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="allFilterTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>사고지역추가</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn>업로드</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="allFilterTextSearchClone"
            hide-default-header
            :items-per-page="100"
            :footer-props="{
                'items-per-page-options': [10, 50, 100]
            }"
        >
            <template v-slot:body.prepend="headers">
                <tr class="topbody">
                    <td
                        v-for="(header, i) in headers.headers"
                        :key="i"
                        class="topbody_data"
                        style="text-align: center;"
                    >
                        {{ header.text }}
                    </td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import AccidentAreaFilters from "../../../mixins.js/Manager/diseaseAdminCode/AccidentArea/AccidentAreaFilters"
import AccidentAreaList from "../../../mixins.js/Manager/diseaseAdminCode/AccidentArea/AccidentAreaList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        AccidentAreaFilters,
        AccidentAreaList,
    ],
    data() {
        return {
            filterMenu: false,

            items: [],
        }
    },
    computed: {
        headers() {
            return [
                {
                    text: '기능',
                    align: 'center',
                    value: 'function',
                    width: '140px',
                },
                {
                    text: '시도',
                    align: 'center',
                    value: 'accidentSido',
                    width: '140px',
                },
                {
                    text: '구군',
                    align: 'center',
                    value: 'accidentgugun',
                    width: '140px',
                },
            ]
        },
        filterdateRange () {
            console.log(this.filterDate)
            return this.filterDate.join(' ~ ')
        },
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