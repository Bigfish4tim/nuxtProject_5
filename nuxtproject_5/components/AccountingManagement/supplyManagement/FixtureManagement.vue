<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="statusFilter"
                v-model="statusFilterText"
                label="-상태-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="FixtureItemFilter"
                v-model="FixtureItemFilterText"
                label="-상태-"
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
                :items="allFilter"
                v-model="allFilterText"
                label="-전체검색-"
                ></v-select>
            </v-col>
            <v-col>
                <v-text-field
                v-model="allFilterTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            hide-default-header
            :search="allFilterTextSearchClone"
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
            <template v-slot:body.append="{ items }">
                <tr class="bottombody">
                    <td colspan="8" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.FixturePrice).reduce(sumReducer, '') }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import FixtureManagementFilters from "../../../mixins.js/AccountingManagement/supplyManagement/FixtureManagement/FixtureManagementFilters"
import FixtureManagementList from "../../../mixins.js/AccountingManagement/supplyManagement/FixtureManagement/FixtureManagementList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        FixtureManagementFilters,
        FixtureManagementList,
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
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '품목',
                    align: 'center',
                    value: 'consumableItem',
                    width: '140px',
                },
                {
                    text: '관리번호',
                    align: 'center',
                    value: 'manageNumber',
                    width: '140px',
                },
                {
                    text: '품명',
                    align: 'center',
                    value: 'fixtureName',
                    width: '140px',
                },
                {
                    text: '일련번호',
                    align: 'center',
                    value: 'serialNumber',
                    width: '140px',
                },
                {
                    text: '구매부서',
                    align: 'center',
                    value: 'fixtureTeam',
                    width: '140px',
                },
                {
                    text: '구매일자',
                    align: 'center',
                    value: 'FixturepurchaseDate',
                    width: '140px',
                },
                {
                    text: '구매금액',
                    align: 'center',
                    value: 'FixturePrice',
                    width: '140px',
                },
                {
                    text: '구매부서',
                    align: 'center',
                    value: 'fixtureTeam',
                    width: '140px',
                },
                {
                    text: '사용자',
                    align: 'center',
                    value: 'fixtureUser',
                    width: '140px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'fixtureNote',
                    width: '140px',
                },
                {
                    text: '폐기일자',
                    align: 'center',
                    value: 'disposalDate',
                    width: '140px',
                },
                {
                    text: '폐기사유',
                    align: 'center',
                    value: 'disposalReason',
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