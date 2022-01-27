<template>
    <div>
        <v-row>
            <v-col md="1" :key="componentKey">
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
                label="-전체검색-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-text-field
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
        </v-row>
        <v-btn @click="forceRerender">render</v-btn>
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
import RequestList from "../../mixins.js/RequestChange/RequestList"

export default {
    mixins: [
        Resizable,
        RequestList,
    ],
    data() {
        return {
            items: [],
            statusFilterText: '',
            companyFilterText: '',
            departmentFilterText: '',
            allFilterText: '',

            componentKey: 0,
        }
    },
    computed: {
        headers () {
            return [
                {
                    text: '확인',
                    align: 'center',
                    value: 'check',
                    width: '140px',
                },
                {
                    text: '취소',
                    align: 'center',
                    value: 'cancel',
                    width: '140px',
                },
                {
                    text: '처리상태',
                    align: 'center',
                    value: 'processState',
                    width: '140px',
                },
                {
                    text: '요청일',
                    align: 'center',
                    value: 'requestDate',
                    width: '140px',
                },
                {
                    text: '처리일',
                    align: 'center',
                    value: 'processDate',
                    width: '140px',
                },
                {
                    text: '요청사항',
                    align: 'center',
                    value: 'request',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
                    width: '140px',
                },
                {
                    text: '조사상태',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '계약자',
                    align: 'center',
                    value: 'contractor',
                    width: '140px',
                },
                {
                    text: '피보험자',
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
                    text: '요청자',
                    align: 'center',
                    value: 'requester',
                    width: '140px',
                },
                {
                    text: '요청내용',
                    align: 'center',
                    value: 'requestDetails',
                    width: '140px',
                },
                {
                    text: '처리자',
                    align: 'center',
                    value: 'manager',
                    width: '140px',
                },
                {
                    text: '처리내용',
                    align: 'center',
                    value: 'processingDetails',
                    width: '140px',
                },
            ]
        },
    },
    methods: {
        forceRerender() {
            console.log('rerender//////////')
            this.componentKey += 1;
            console.log(this.componentKey)
        }
    },
}
</script>
<style lang="scss">
@import '@/assets/Datatable.scss';

</style>