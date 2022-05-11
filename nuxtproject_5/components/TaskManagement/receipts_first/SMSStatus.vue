<template>
    <div>
        <v-row>
            <v-col md="1">
                분류:
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="bunryuFilterText"
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
            :search="bunryuFilterTextClone"
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
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"
import SMSStatusList from "../../../mixins.js/TaskManagement/receipts_first/SMSStatus/SMSStatusList"
import SMSStatusFilters from "../../../mixins.js/TaskManagement/receipts_first/SMSStatus/SMSStatusFilters"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        SMSStatusList,
        SMSStatusFilters
    ],
    mounted() {

    },
    data() {
        return {
            items: [],
        }
    },
    computed: {
        headers() {
            return [
                {
                    text: '상태',
                    align: 'center',
                    value: 'SMS_status',
                    width: '140px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'SMS_bunryu',
                    width: '140px',
                },
                {
                    text: '전송자',
                    align: 'center',
                    value: 'sender',
                    width: '140px',
                },
                {
                    text: '날짜',
                    align: 'center',
                    value: 'SMS_date',
                    width: '140px',
                },
                {
                    text: '회신번호',
                    align: 'center',
                    value: 'reply_number',
                    width: '140px',
                },
                {
                    text: '수신번호',
                    align: 'center',
                    value: 'receiving_number',
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
                    text: '담당자',
                    align: 'center',
                    value: 'manager',
                    width: '140px',
                },
                {
                    text: '발송일시',
                    align: 'center',
                    value: 'SMS_date',
                    width: '140px',
                },
            ]
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