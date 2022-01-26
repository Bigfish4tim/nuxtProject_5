<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items"
        >    
        </v-data-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [],
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
}
</script>
<style>
    
</style>