<template>
    <div>
        <v-row>
            <v-col>
                <v-btn>IP등록</v-btn>
            </v-col>
            <v-col>
                <v-btn>IP삭제</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="1">
                <div>IP검색 : </div>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="IPFilterText"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-select
                :items="securityFilter"
                v-model="securityFilterText"
                label="-보안-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="permissionFilter"
                v-model="permissionFilterText"
                label="-허가-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="allFilterTextSearch"
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
import AccessIPManagementFilters from "../../../mixins.js/Manager/accessIPManagement/AccessIPManagement/AccessIPManagementFilters"
import AccessIPManagementList from "../../../mixins.js/Manager/accessIPManagement/AccessIPManagement/AccessIPManagementList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        AccessIPManagementFilters,
        AccessIPManagementList,
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
                    text: 'IP',
                    align: 'center',
                    value: 'accessIP',
                    width: '140px',
                },
                {
                    text: '보안접속',
                    align: 'center',
                    value: 'securityAccess',
                    width: '140px',
                },
                {
                    text: '내부여부',
                    align: 'center',
                    value: 'accessinout',
                    width: '140px',
                },
                {
                    text: '허가여부',
                    align: 'center',
                    value: 'acceseepermission',
                    width: '140px',
                },
                {
                    text: '등록일',
                    align: 'center',
                    value: 'accessDate',
                    width: '140px',
                },
                {
                    text: '사용일',
                    align: 'center',
                    value: 'accessUsageDate',
                    width: '140px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'access_note',
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