export default {
    data() {
        return {
            dateFilter: [
                '위임일',
                '종결일',
                '발행일',
                '입금일',
                '실적일',
                '등록일',
            ],
            speciesFilter: [
                '1종',
                '4종',
            ],
            statusFilter: [
                '미접수',
                '미배정',
                '(접수/진행)',
                '(상신/검토)',
                '(걸재/종결)',
                '(종결/마감)',
                '(전체/정상)',
                '접수',
                '진행',
                '이관',
                '재조사',
                '반려',
                '중간',
                '검토',
                '상신',
                '종결',
                '마감',
                '전산',
                '취소',
                '반송',
                '삭제',
            ],
            extraoptionFilter: [
                '배분율있는건',
                '조사자여러명',
            ],
        }
    },
}