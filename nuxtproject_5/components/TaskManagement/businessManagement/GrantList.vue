<template>
    <div>
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

export default {
    mixins: [

    ],
    data() {
        return {
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
                    text: '보종',
                    align: 'center',
                    value: 'species',
                    width: '140px',
                },
                {
                    text: '종결',
                    align: 'center',
                    value: 'status',
                    width: '140px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'communicationState',
                    width: '140px',
                },
                {
                    text: '수신자',
                    align: 'center',
                    value: 'receiver',
                    width: '140px',
                },
                {
                    text: '수신대상',
                    align: 'center',
                    value: 'receiverState',
                    width: '140px',
                },
                {
                    text: '수신방법',
                    align: 'center',
                    value: 'receiveMethod',
                    width: '140px',
                },
                {
                    text: '번호/이메일',
                    align: 'center',
                    value: 'phoneEmail',
                    width: '140px',
                },
                {
                    text: '우편번호',
                    align: 'center',
                    value: 'address',
                    width: '140px',
                },
                {
                    text: '주소',
                    align: 'center',
                    value: 'address',
                    width: '140px',
                },
                {
                    text: '발송일자',
                    align: 'center',
                    value: 'sendDate',
                    width: '140px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'center',
                    value: 'reportNum',
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
                    text: '조사팀',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '발송처리자',
                    align: 'center',
                    value: 'sendHandler',
                    width: '140px',
                },
                {
                    text: '발송처리일',
                    align: 'center',
                    value: 'sendHandleDate',
                    width: '140px',
                },
            ]
        }
    },
    methods: {
        
    },
}
</script>
<style>
    
</style>