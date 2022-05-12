<template>
    <div>
        <div v-if="listFilterText === '일자별지급'">
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
                    목록: 
                </v-col>
                <v-col md="1">
                    <v-select
                    :items="listFilter"
                    v-model="listFilterText"
                    ></v-select>
                </v-col>
                <v-col md="1">
                    조사자:
                </v-col>
                <v-col md="1">
                    <v-text-field
                    v-model="allFilterTextSearch"
                    ></v-text-field>
                </v-col>
                <v-col md="1">
                    <v-btn @click="excelDownload">엑셀다운</v-btn>
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
                <template v-slot:body.append="{ items }">
                    <tr class="bottombody">
                        <td colspan="2" style="text-align: center;">소계</td>
                        <td>{{ items.map(item => item.cases).reduce(sumReducer, '') }}</td>
                        <td>{{ items.map(item => item.bills).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                        <td></td>
                        <td></td>
                        
                        <!-- <td>{{ items.map(item => item.calories).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => item.fat).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => item.carbs).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => item.protein).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => parseInt(item.iron)).reduce((prev, curr) => prev + curr, 0) + '%'}}</td> -->
                    </tr>
                </template>
            </v-data-table>
        </div>
        <div v-if="listFilterText === '경비상세내역'">
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
                    :items="paymentFilter"
                    v-model="paymentFilterText"
                    label="- 지급여부 -"
                    ></v-select>
                </v-col>
                <v-col md="1">
                    <v-select
                    :items="searchFilter"
                    v-model="searchFilterText"
                    label="-검색-"
                    ></v-select>
                </v-col>
                <v-col md="2">
                    <v-text-field
                    v-model="searchText"
                    ></v-text-field>
                </v-col>
                <v-col md="1">
                    목록: 
                </v-col>
                <v-col md="1">
                    <v-select
                    :items="listFilter"
                    v-model="listFilterText"
                    ></v-select>
                </v-col>
                <v-col md="1">
                    조사자:
                </v-col>
                <v-col md="1">
                    <v-text-field
                    v-model="allFilterTextSearch"
                    ></v-text-field>
                </v-col>
                <v-col md="1">
                    <v-btn @click="Resize">엑셀다운</v-btn>
                </v-col>
            </v-row>
            <v-data-table
                :headers="headers2"
                :items="items"
                :search="allFilterTextSearchClone"
                hide-default-header
                :items-per-page="100"
                :footer-props="{
                    'items-per-page-options': [10, 50, 100]
                }"
            >
                <template v-slot:body.prepend="headers">
                    <tr class="topbody2">
                        <td
                            v-for="(header, i) in headers.headers"
                            :key="i"
                            class="topbody_data2"
                            style="text-align: center;"
                        >
                            {{ header.text }}
                        </td>
                    </tr>
                </template>
                <template v-slot:body.append="{ items }">
                    <tr class="bottombody">
                        <td colspan="3" style="text-align: center;">소계</td>
                        <td>{{ items.map(item => item.bills).reduce(sumReducer, '') }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                        <!-- <td>{{ items.map(item => item.calories).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => item.fat).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => item.carbs).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => item.protein).reduce((prev, curr) => prev + curr, 0) }}</td>
                        <td>{{ items.map(item => parseInt(item.iron)).reduce((prev, curr) => prev + curr, 0) + '%'}}</td> -->
                    </tr>
                </template>
            </v-data-table>
        </div>
    </div>
</template>
<script>
import ExpensePaymentFilters from "../../../mixins.js/TaskManagement/member_first/ExpensePayment/ExpensePaymentFilters"
import ExpensePaymentList from "../../../mixins.js/TaskManagement/member_first/ExpensePayment/ExpensePaymentList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        ExpensePaymentList,
        ExpensePaymentFilters,
    ],
    updated() {
        console.log('resizable function mounted..../////')

        var tables = document.getElementsByTagName('table');
        console.log('//// tables /////')
        console.log(tables)
        console.log(tables[0])

        // var sizerow = tables.getElementsByTagName('tr')[0],
        // sizecols = sizerow ? sizerow.children : undefined

        // for(var i=0; i<header_tds.length; i++) {
        //     sizecols[i].style.width = this.headers[i].width
        // }

        for(var i=0; i<tables.length; i++) {
            this.resizableGrid(tables[i]);
        }

        if(this.listFilterText === '일자별지급') {
            this.sizeInitialize('topbody_data')
        }
        else if(this.listFilterText === '경비상세내역') {
            this.sizeInitialize2('topbody_data2')
        }
    },
    data() {
        return {
            filterMenu: false,

            items: [],    
            items2: [],

            listFilterText: '일자별지급',
            // listFilterText: '경비상세내역',
        }
    },
    watch: {
        // listFilterText: function(newVal, oldVal) {
        //     if(newVal === '경비상세내역') {
        //         var tables = document.getElementsByTagName('table');
        //         console.log('//// tables /////')
        //         console.log(tables)

        //         for(var i=0; i<tables.length; i++) {
        //             this.resizableGrid(tables[i]);
        //         }


        //         var tds = document.getElementsByClassName('topbody_data2')[0]
        //         var tds2 = document.getElementsByClassName('topbody_data')[0]
        //         console.log('/////start/////')
        //         console.log(tds)
        //         console.log(tds2)
        //         console.log(tds2[10])
        //         // console.log(tds2.parentNode.parentNode.parentNode)

        //         // this.resizableGrid(tds2.parentNode.parentNode.parentNode)

        //         // this.sizeInitialize('topbody_data')
        //     }
        //     else if(newVal === '일자별지급') {
        //         var tables = document.getElementsByTagName('table');
        //         console.log('//// tables /////')
        //         console.log(tables)

        //         for(var i=0; i<tables.length; i++) {
        //             this.resizableGrid(tables[i]);
        //         }

        //         var tds = document.getElementsByClassName('topbody_data')

        //         console.log('////// start //////')
        //         console.log(tds)
        //         console.log(tds[8])
        //         console.log(tds.item(8))
        //         // this.resizableGrid(tds.parentNode.parentNode)
        //         // console.log(tds.parentNode.parentNode)

        //         // this.sizeInitialize('topbody_data2')
        //     }
        // }
    },
    computed: {
        headers() {
            return [
                {
                    text: '지급일자',
                    align: 'center',
                    value: 'payment_date',
                    width: '130px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '130px',
                },
                {
                    text: '건수',
                    align: 'center',
                    value: 'cases',
                    width: '130px',
                },
                {
                    text: '금액',
                    align: 'center',
                    value: 'bills',
                    width: '130px',
                },
                {
                    text: '처리자',
                    align: 'center',
                    value: 'charger',
                    width: '130px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'note',
                    width: '130px',
                },
            ]
        },
        headers2() {
            return [
                {
                    text: '지급일자',
                    align: 'center',
                    value: 'payment_date',
                    width: '130px',
                },
                {
                    text: '지급',
                    align: 'center',
                    value: 'paymentState',
                    width: '130px',
                },
                {
                    text: '계정',
                    align: 'center',
                    value: 'paymentSpecies',
                    width: '130px',
                },
                {
                    text: '금액',
                    align: 'center',
                    value: 'bills',
                    width: '130px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '130px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '130px',
                },      
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
                    width: '130px',
                },          
                {
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '130px',
                },      
                {
                    text: '계약자',
                    align: 'center',
                    value: 'contractor',
                    width: '130px',
                },       
                {
                    text: '처리자',
                    align: 'center',
                    value: 'charger',
                    width: '130px',
                },
                {
                    text: '비고',
                    align: 'center',
                    value: 'note',
                    width: '130px',
                },
            ]
        },
        filterdateRange () {
            console.log(this.filterDate)
            return this.filterDate.join(' ~ ')
        },
    },
    // watch: {
    //     listFilterText: function(newVal, oldVal) {
    //         if(newVal === '경비상세내역') {
    //             this.Resize()
    //         }
    //     }
    // },
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
        Rendering(cond) {
            this.renderCondition = cond
        },
        Resize() {
            var con = document.getElementsByClassName('topbody2')[0]
            console.log(con)
            var son = con.parentNode.parentNode
            console.log(son)
            this.resizableGrid(son)
        },
        sizeInitialize2(ClassName) {
            var header_tds = document.getElementsByClassName(ClassName)

            console.log('//////// header_tds ///////')
            console.log(header_tds)

            for(var i=0; i<header_tds.length; i++) {
                header_tds[i].style.width = this.headers2[i].width
            }
        },
    },
}
</script>
<style>
    
</style>