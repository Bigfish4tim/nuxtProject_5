<template>
    <div>
        <v-row>
            <v-col md="1">
                <div>
                    기간 : 
                </div>
            </v-col>
            <v-col md="2">
                <v-menu
                    ref="filterMenu"
                    v-model="filterMenu"
                    :close-on-content-click="false"
                    :return-value.sync="filterDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="filterdateRange"
                        label="보험기간"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker 
                    v-model="filterDate"
                    no-title
                    scrollable
                    locale="ko-KR"
                    range
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="filterMenu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.filterMenu.save(filterDate)"
                    >
                        OK
                    </v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
            <v-col md="1">
                <v-select
                :items="speciesFilter"
                v-model="speciesFilterText"
                label="-보종-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="subspeciesFilter"
                v-model="subspeciesFilterText"
                label="-부보종-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="surveyFilter"
                v-model="surveyFilterText"
                label="-조사분류-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="accidentTypeFilter"
                v-model="accidentTypeFilterText"
                label="-사고유형-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="departmentFilter"
                v-model="departmentFilterText"
                label="-부서-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="lookupFilter"
                v-model="lookupFilterText"
                label="-조회건-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
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
import OfficeClosingStatusFilters from "../../../mixins.js/Statistics/performanceStatus/OfficeClosingStatus/OfficeClosingStatusFilters"
import OfficeClosingStatusList from "../../../mixins.js/Statistics/performanceStatus/OfficeClosingStatus/OfficeClosingStatusList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        OfficeClosingStatusFilters,
        OfficeClosingStatusList,
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
                    text: '부서명',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '총종결건',
                    align: 'center',
                    value: 'totalClosingCount',
                    width: '140px',
                },
                {
                    text: '면책건',
                    align: 'center',
                    value: 'indemnificationCount',
                    width: '140px',
                },
                {
                    text: '면책율(%)',
                    align: 'center',
                    value: 'indemnificationRate',
                    width: '140px',
                },
                {
                    text: '추산금액',
                    align: 'center',
                    value: 'totalEstimatedAmount',
                    width: '140px',
                },
                {
                    text: '면책금액',
                    align: 'center',
                    value: 'indemnificationAmount',
                    width: '130px',
                },
                {
                    text: '면책율(%)',
                    align: 'center',
                    value: 'indemnificationRate',
                    width: '130px',
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