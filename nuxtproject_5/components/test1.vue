<template>
    <div>
        <v-row>
            <v-col>
                <v-btn>개인정보삭제정책추가</v-btn>
            </v-col>
            <v-col>
                <v-btn>개인정보삭제실행</v-btn>
            </v-col>
            <v-col>
                <v-btn>소급처리(수동)</v-btn>
            </v-col>
        </v-row>
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
                :items="companyFilter"
                v-model="companyFilterText"
                label="-보험사-"
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
            <template #header="{ }">
                <thead class="topbody">
                    <tr>
                        <td
                            v-for="(h,i) in headers" 
                            :key="i" 
                            class="topbody_data" 
                            :rowspan="h.children?1:2" 
                            :colspan="h.children?h.children.length:1"
                        >
                            {{ h.text }}
                        </td>
                    </tr>
                    <tr>
                        <td 
                            v-for="(h1,i1) in getSubHeader(headers)" 
                            :key="i1" 
                            class=""
                        >
                            {{ h1.text }}
                        </td>
                    </tr>
                </thead>
            </template>
            <template #item="props">
                <tr>
                    <td v-for="(c,ci) in getRows(props.item)" :key="ci">
                        {{ c }}
                    </td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import PrivacyDeletePolicyFilters from "../../../mixins.js/Manager/policySetting/PrivacyDeletePolicy/PrivacyDeletePolicyFilters"
import PrivacyDeletePolicyList from "../../../mixins.js/Manager/policySetting/PrivacyDeletePolicy/PrivacyDeletePolicyList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        PrivacyDeletePolicyFilters,
        PrivacyDeletePolicyList,
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
                    value: 'privacyStatus',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '보종',
                    align: 'center',
                    value: 'privacySpecies',
                    width: '140px',
                },
                {
                    text: '미입금제외',
                    align: 'center',
                    value: 'nonDeposit',
                    width: '140px',
                },
                {
                    text: '강제삭제',
                    align: 'center',
                    value: 'forcedDelete',
                    width: '140px',
                },
                {
                    text: '취소건삭제',
                    align: 'center',
                    value: 'cancelDelete',
                    width: '140px',
                },
                {
                    text: '개인정보삭제 정책',
                    align: 'center',
                    value: 'privacyDeletePolicy',
                    width: '840px',
                    divider: true,
                    children: [
                        {
                            text: '사용',
                            align: 'center',
                            value: 'privacyDeletePolicy_usage',
                            width: '140px',
                        },
                        {
                            text: '기준',
                            align: 'center',
                            value: 'privacyDeletePolicy_standard',
                            width: '140px',
                        },
                        {
                            text: '날짜기준',
                            align: 'center',
                            value: 'privacyDeletePolicy_datestandard',
                            width: '140px',
                        },
                        {
                            text: '경과일',
                            align: 'center',
                            value: 'privacyDeletePolicy_lapse',
                            width: '140px',
                        },
                        {
                            text: '삭제자료',
                            align: 'center',
                            value: 'privacyDeletePolicy_deleteData',
                            width: '140px',
                        },
                        {
                            text: '마스킹자료',
                            align: 'center',
                            value: 'privacyDeletePolicy_maskedData',
                            width: '140px',
                        },
                        {
                            text: '처리수',
                            align: 'center',
                            value: 'fileDeletePolicy_count',
                            width: '140px',
                        },
                        {
                            text: '재처리건',
                            align: 'center',
                            value: 'fileDeletePolicy_reprocess',
                            width: '140px',
                        },
                        {
                            text: '2차',
                            align: 'center',
                            value: 'fileDeletePolicy_2nd',
                            width: '140px',
                        },
                        {
                            text: '3차',
                            align: 'center',
                            value: 'fileDeletePolicy_3rd',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '첨부파일삭제 정책',
                    align: 'center',
                    value: 'fileDeletePolicy',
                    width: '840px',
                    divider: true,
                    children: [
                        {
                            text: '사용',
                            align: 'center',
                            value: 'fileDeletePolicy_usage',
                            width: '140px',
                        },
                        {
                            text: '기준',
                            align: 'center',
                            value: 'fileDeletePolicy_standard',
                            width: '140px',
                        },
                        {
                            text: '날짜기준',
                            align: 'center',
                            value: 'fileDeletePolicy_datestandard',
                            width: '140px',
                        },
                        {
                            text: '경과일',
                            align: 'center',
                            value: 'fileDeletePolicy_lapse',
                            width: '140px',
                        },
                        {
                            text: '삭제자료',
                            align: 'center',
                            value: 'fileDeletePolicy_deleteData',
                            width: '140px',
                        },
                    ],
                },
                {
                    text: '메모',
                    align: 'center',
                    value: 'PrivacyDeletePolicy_note',
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
        getMainHeader(headers) {
            return headers.filter((i) => i.children);
        },
        getSubHeader(headers) {
            let result = [];

            headers
                .filter((i) => i.children)
                .forEach((v) => {
                    result = result.concat(v.children);
                });
            return result;
        },
        getRows(rows) {
            const result = {};
            _.forEach(rows, (i, key) => {
                if (i.children) {
                _.forEach(i.children, (i1, key1) => {
                    result["c" + key1] = i1;
                });
                } else result[key] = i;
            });
            return result;
        },
    },
}
</script>
<style>
    
</style>