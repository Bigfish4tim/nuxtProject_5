<template>
    <div>
        <v-row>
            <v-col>
                <v-btn>글쓰기</v-btn>
            </v-col>
            <v-col>
                <v-btn>환경설정</v-btn>
            </v-col>
            <v-col>
                <div>선택사항 처리 : </div>
            </v-col>
            <v-col>
                <v-btn>팝업공지해제</v-btn>
            </v-col>
            <v-col>
                <div>자료이동 : </div>
            </v-col>
            <v-col>
                <v-select
                :items="boardFilter"
                v-model="boardFilterText"
                label="-게시판선택-"
                ></v-select>
            </v-col>
            <v-col>
                <v-btn>자료이동</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="1">
                <div>
                    작성일 : 
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
                :items="businessFilter"
                v-model="businessFilterText"
                label="-사업부-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="popupFilter"
                v-model="popupFilterText"
                label="-팝업-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="allFilter"
                v-model="allFilterText"
                label="-전체검색-"
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
import PropertyCompensationFilters from "../../../mixins.js/Community/propertyCompensation/PropertyCompensation/PropertyCompensationFilters"
import PropertyCompensationList from "../../../mixins.js/Community/propertyCompensation/PropertyCompensation/PropertyCompensationList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        PropertyCompensationFilters,
        PropertyCompensationList,
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
                    text: '보낸사람',
                    align: 'center',
                    value: 'memoReceiver',
                    width: '140px',
                },
                {
                    text: '제목',
                    align: 'center',
                    value: 'memoTitle',
                    width: '420px',
                },
                {
                    text: '받은날짜',
                    align: 'center',
                    value: 'memoReceivedDate',
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