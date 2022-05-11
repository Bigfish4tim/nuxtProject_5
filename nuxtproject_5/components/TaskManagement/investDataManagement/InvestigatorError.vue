<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="dateFilter"
                v-model="dateFilterText"
                label="-기간-"
                ></v-select>
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
                :items="statusFilter"
                v-model="statusFilterText"
                label="-상태-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="extraoptionFilter"
                v-model="extraoptionFilterText"
                label="-추가옵션-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
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
import InvestigatorErrorFilters from "../../../mixins.js/TaskManagement/investDataManagement/InvestigatorError/InvestigatorErrorFilters"
import InvestigatorErrorList from "../../../mixins.js/TaskManagement/investDataManagement/InvestigatorError/InvestigatorErrorList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        InvestigatorErrorFilters,
        InvestigatorErrorList,
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
                    text: '보종',
                    align: 'center',
                    value: 'species',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '정/동',
                    align: 'center',
                    value: 'jungdong',
                    width: '140px',
                },
                {
                    text: '멤버수',
                    align: 'center',
                    value: 'numberOfMember',
                    width: '140px',
                },
                {
                    text: '배분율',
                    align: 'center',
                    value: 'distributionRate',
                    width: '140px',
                },
                {
                    text: '정',
                    align: 'center',
                    value: 'charge',
                    width: '140px',
                },
                {
                    text: '정(율)',
                    align: 'center',
                    value: 'chargeRate',
                    width: '140px',
                },
                {
                    text: '부',
                    align: 'center',
                    value: 'deputy',
                    width: '140px',
                },
                {
                    text: '부(율)',
                    align: 'center',
                    value: 'deputyRate',
                    width: '140px',
                },
                {
                    text: '지원',
                    align: 'center',
                    value: 'support',
                    width: '140px',
                },
                {
                    text: '지원(율)',
                    align: 'center',
                    value: 'supportRate',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
                    width: '140px',
                },
                {
                    text: '조사자(M)',
                    align: 'center',
                    value: 'chargeNameM',
                    width: '140px',
                },
                {
                    text: '조사자(U)',
                    align: 'center',
                    value: 'chargeNameU',
                    width: '140px',
                },
                {
                    text: '위임일',
                    align: 'center',
                    value: 'wiimDate',
                    width: '110px',
                },
                {
                    text: '종결일',
                    align: 'center',
                    value: 'endate',
                    width: '140px',
                },
            ]
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