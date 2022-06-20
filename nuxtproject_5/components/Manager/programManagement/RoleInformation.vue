<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="groupFilter"
                v-model="groupFilterText"
                label="-그룹-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="statusFilter"
                v-model="statusFilterText"
                label="-상태-"
                ></v-select>
            </v-col>
            <v-col>
                <div>업데이트여부 : </div>
            </v-col>
            <v-col md="1">
                <v-select
                :items="updateFilter"
                v-model="updateFilterText"
                label="-업데이트-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
            <v-col>
                <div>프로그램추가</div>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="codenameFilterText"
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
import ProgramFilters from "../../../mixins.js/Manager/programManagement/Program/ProgramFilters"
import ProgramList from "../../../mixins.js/Manager/programManagement/Program/ProgramList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        ProgramFilters,
        ProgramList,
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
                    text: '수정',
                    align: 'center',
                    value: 'correction',
                    width: '140px',
                },
                {
                    text: '코드',
                    align: 'center',
                    value: 'programCode',
                    width: '140px',
                },
                {
                    text: '프로그램명',
                    align: 'center',
                    value: 'programName',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'programStatus',
                    width: '140px',
                },
                {
                    text: 'VER',
                    align: 'center',
                    value: 'programVersion',
                    width: '140px',
                },
                {
                    text: '그룹',
                    align: 'center',
                    value: 'programGroup',
                    width: '140px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'programbunryu',
                    width: '140px',
                },
                {
                    text: 'UP/DOWN',
                    align: 'center',
                    value: 'programUPDOWN',
                    width: '140px',
                },
                {
                    text: '경로',
                    align: 'center',
                    value: 'programRoute',
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