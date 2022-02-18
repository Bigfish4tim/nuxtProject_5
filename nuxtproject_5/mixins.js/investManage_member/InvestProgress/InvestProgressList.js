export default {
    data() {
        return {
            dateFilter: [
                '위임일',
                '접수일',
                '종결일',
                '실적일',
                '발행일',
                '입금일',
            ],
            bunryu1Filter: [
                '유의계약건',
                '재조사건',
                '보험사지정건',
            ],
            companyFilter: [
                '교육시설',
                '기타보험사',
                '농협생명',
                '농협손보',
                '더케이손보',
                '롯데손보',
                '메리츠',
                '삼성화재',
                '새마을',
                '수협',
                '신협',
                '한국해운',
                '한화손보',
                '현대해상',
                '화물공제',
                '흥국화재',
                'AIG손보',
                'AJ바이크',
                'AXA',
                'DB손보',
                'KB손보',
                'KB손사',
                'LIG손보엔설팅',
                'MG손보',
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
            bunryu2Filter: [
                '유의계약건',
                '재조사건',
                '지정건(보)',
                '금일이관건',
                '추가건제외',
                '추가건만',
                '모랄건',
            ],
            allFilter: [
                '계약자',
                '조사자',
                '담당자(보)',
                '조사/사고지',
                '보고서번호',
                '접수번호',
                '사고번호',
                '담당부서(보)',
                '증권번호',
                '피해자(물)',
            ],
        }
    },
    computed: {
        
    },
}