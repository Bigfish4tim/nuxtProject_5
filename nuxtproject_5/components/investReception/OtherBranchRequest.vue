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
                :items="statusFilter"
                v-model="statusFilterText"
                label="-상태-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="processFilter"
                v-model="processFilterText"
                label="-처리상태-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="requestDepartmentFilter"
                v-model="requestDepartmentFilterText"
                label="-요청부서-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="processDepartmentFilter"
                v-model="processDepartmentFilterText"
                label="-처리부서-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="nameFilter"
                v-model="nameFilterText"
                label="-이름-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="nameFilterTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
            <v-col md="1">
                <v-btn @click="excelDownload">엑셀다운</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="nameFilterTextSearchClone"
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
import Resizable from "../../mixins.js/Resizable"
import ExcelDownloader from "../../mixins.js/ExcelDownloader"
import OtherBranchRequestFilters from "../../mixins.js/investReception/OtherBranchRequest/OtherBranchRequestFilters"
import OtherBranchRequestList from "../../mixins.js/investReception/OtherBranchRequest/OtherBranchRequestList"

export default {
    mixins: [
        OtherBranchRequestFilters,
        OtherBranchRequestList,
        Resizable,
        ExcelDownloader,
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
                    filters: this.statusFiltering,
                },
                {
                    text: '의뢰일자',
                    align: 'center',
                    value: 'orderdate',
                    width: '140px',
                    filters: this.dateFiltering,
                },
                {
                    text: '예약일자',
                    align: 'center',
                    value: 'reservationdate',
                    width: '140px',
                },
                {
                    text: '종결일자',
                    align: 'center',
                    value: 'endate',
                    width: '140px',
                },
                {
                    text: '처리부서',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                    filters: this.processDepartmentFiltering,
                },
                {
                    text: '처리자',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '요청부서',
                    align: 'center',
                    value: 'requestTeam',
                    width: '140px',
                    filters: this.requestDepartmentFiltering,
                },
                {
                    text: '요청자',
                    align: 'center',
                    value: 'requester',
                    width: '140px',
                },
                {
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '차트일비',
                    align: 'center',
                    value: 'perdiem',
                    width: '140px',
                },
                {
                    text: '교통비',
                    align: 'center',
                    value: 'transportation',
                    width: '140px',
                },
                {
                    text: '서류비',
                    align: 'center',
                    value: 'document',
                    width: '140px',
                },
                {
                    text: '조사기관',
                    align: 'center',
                    value: 'investigationagency',
                    width: '140px',
                },
                {
                    text: '조사서류',
                    align: 'center',
                    value: 'investigationdocuments',
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