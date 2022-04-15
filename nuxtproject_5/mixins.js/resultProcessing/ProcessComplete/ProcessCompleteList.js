export default {
    data() {
        return {
            dateFilter: [
                '종결일',
                '위임일',
                '발행일',
                '입금일',
                '실적일',
            ],
            speciesFilter: [
                '1종',
                '4종',
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
            departmentFilter: [
                '경영지원',
                '1종사업부',
                '  서울본사',
                '    차량팀',
                '    재물팀',
                '    배상팀',
                '    북부팀',
                '    배상2팀',
                '    정책보험팀',
                '    누수팀',
                '  남부지사',
                '  서면심사',
                '    KB서면심사',
                '  수원지사',
                '  강원지사',
                '  대전지사',
                '  대전지사2',
                '  전주지사',
                '  광주지사',
                '  대구지사',
                '  대구지사2',
                '  대구지사3',
                '  부산지사',
                '인보험본부',
                '  서울1팀',
                '  서울2팀',
                '  인천팀',
                '  수원팀',
                '  강원팀',
                '  대전팀',
                '  전주팀',
                '  광주팀',
                '  대구팀',
                '  부산팀',
                '정보입력',
                '  대전정보입력팀',
            ],
            allFilter: [
                '계약자',
                '피보험자',
                '조사자',
                '담당자(보)',
                '조사/사고지',
                '보고서번호',
                '접수번호',
                '사고번호',
            ],
        }
    },
    computed: {
        
    },
}