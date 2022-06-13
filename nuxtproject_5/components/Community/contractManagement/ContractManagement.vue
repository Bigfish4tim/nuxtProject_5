<template>
    <div>
        <v-row>
            <v-col>
                <v-btn>새로고침</v-btn>
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
import ContractManagementFilters from "../../../mixins.js/Community/contractManagement/ContractManagement/ContractManagementFilters"
import ContractManagementList from "../../../mixins.js/Community/contractManagement/ContractManagement/ContractManagementList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        ContractManagementFilters,
        ContractManagementList,
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
                    text: '순번',
                    align: 'center',
                    value: 'contractIndex',
                    width: '140px',
                },
                {
                    text: '보험사명',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '보종',
                    align: 'center',
                    value: 'species',
                    width: '140px',
                },
                {
                    text: '계약명',
                    align: 'center',
                    value: 'contractName',
                    width: '140px',
                },
                {
                    text: '계약기간',
                    align: 'center',
                    value: 'contractDateRange',
                    width: '140px',
                },
                {
                    text: '계약일자',
                    align: 'center',
                    value: 'contractDate',
                    width: '140px',
                },
                {
                    text: '자동갱신여부',
                    align: 'center',
                    value: 'autoRenewal',
                    width: '140px',
                },
                {
                    text: '갱신기준일',
                    align: 'center',
                    value: 'renewalStandardDate',
                    width: '140px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'contract_note',
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