<template>
    <div>
        <v-row>
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
                ></v-select>
            </v-col>
            <v-col md="2">
                <v-text-field></v-text-field>
            </v-col>
            <v-col md="1">
                <div>
                    경과일: 
                </div>
            </v-col>
            <v-col md="1">
                <v-text-field></v-text-field>
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
import ReportList from '../../mixins.js/ProgressReport/ReportList'
import ExcelDownloader from '../../mixins.js/ExcelDownloader'

export default {
    mixins: [
        Resizable,
        ReportList,
        ExcelDownloader,
    ],
    data() {
        return {
            items: [],

            speciesFilterText: '',
            statusFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterText: '',
        }
    },
    computed: {
        headers() {
            return [
                {
                    text: '기능',
                    align: 'center',
                    value: 'fuction',
                    width: '140px',
                },
                {
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '140px',
                },
                {
                    text: '조사팀',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'chargeName',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '추산보험금',
                    align: 'center',
                    value: 'estimatedLoss',
                    width: '140px',
                },
                {
                    text: '위임일자',
                    align: 'center',
                    value: 'wiimDate',
                    width: '140px',
                },
                {
                    text: '수정일자',
                    align: 'center',
                    value: 'modifiedDate',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '경과(C)',
                    align: 'center',
                    value: 'lapsec',
                    width: '140px',
                },
                {
                    text: '경과(W)',
                    align: 'center',
                    value: 'lapseW',
                    width: '140px',
                },
                {
                    text: '진행내용',
                    align: 'center',
                    value: 'progressContent',
                    width: '140px',
                },
                {
                    text: '사고번호',
                    align: 'center',
                    value: 'sagoNum',
                    width: '140px',
                },
                {
                    text: '예상지급액',
                    align: 'center',
                    value: 'expectedPayment',
                    width: '140px',
                },
                {
                    text: '예상종결일',
                    align: 'center',
                    value: 'expectedEndate',
                    width: '140px',
                },
            ]
        }
    },
}
</script>
<style lang="scss">
@import '@/assets/Datatable.scss';

</style>