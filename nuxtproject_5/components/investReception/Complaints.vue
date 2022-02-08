<template>
    <div>
        <v-row>
            <v-col md="1">
                <v-select
                :items="dateFilter"
                v-model="dateFilterText"
                label="-일자-"
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
                :items="companyFilter"
                v-model="companyFilterText"
                label="-보험사-"
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
import ComplaintsList from "../../mixins.js/Complaints/ComplaintsList"
import filters from "../../mixins.js/Complaints/filters"
import Resizable from "../../mixins.js/Resizable"

export default {
    mixins: [
        ComplaintsList,
        filters,
        Resizable,
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
                    text: '민원일자',
                    align: 'center',
                    value: 'complaintDate',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '사고자',
                    align: 'center',
                    value: 'insured',
                    width: '140px',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '민원분류',
                    align: 'center',
                    value: 'complaintClassification',
                    width: '140px',
                },
                {
                    text: '민원내용',
                    align: 'center',
                    value: 'complaintContent',
                    width: '140px',
                },
                {
                    text: '처리일자',
                    align: 'center',
                    value: 'processDate',
                    width: '140px',
                },
                {
                    text: '민원결과',
                    align: 'center',
                    value: 'complaintResult',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
                    width: '140px',
                },
                {
                    text: '진행',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '접수일자',
                    align: 'center',
                    value: 'receiptDate',
                    width: '140px',
                },
                {
                    text: '종결일자',
                    align: 'center',
                    value: 'endate',
                    width: '140px',
                },
                {
                    text: '전송일자',
                    align: 'center',
                    value: 'transmissionDate',
                    width: '140px',
                },
                {
                    text: '팀',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '사고장소',
                    align: 'center',
                    value: 'location',
                    width: '140px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'bunryu1',
                    width: '140px',
                },
                {
                    text: '사고일자',
                    align: 'center',
                    value: 'sagodate',
                    width: '140px',
                },
                {
                    text: '의뢰일자',
                    align: 'center',
                    value: 'wiimDate',
                    width: '140px',
                },
                {
                    text: '청구금액',
                    align: 'center',
                    value: 'bill',
                    width: '140px',
                },
            ]
        },
        filterdateRange () {
            console.log(this.filterDate)
            return this.filterDate.join(' ~ ')
        },
    },
}
</script>
<style>
    
</style>