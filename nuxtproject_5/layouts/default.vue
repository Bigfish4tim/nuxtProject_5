<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :absolute="!fixed"
      app
    >
      <v-list>

        <!-- ////////// -->
        <!-- 그룹 리스트 -->
        <!-- ////////// -->

        <v-list-group
          v-for="(item, i) in items2"
          :key="i"
          v-model="item.active"
          :prepend-icon="item.action"
          :value="true"
          no-action
        >
          <template #activator>
            <v-list-item-title v-text="item.menutitle"></v-list-item-title>
          </template>

          <v-list-item
            v-for="child in item.subitems"
            :key="child.title"
            :to="child.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="child.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- ////////// -->
        <!-- 단순 리스트 -->
        <!-- ////////// -->

        <!-- <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="barTitle" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="fixed"
      app
      elevation=6
    >
      <VueFooter/>
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
    </v-footer>
  </v-app>
</template>

<script>
import VueFooter from "~/components/vueFooter.vue"
export default {
    components: { VueFooter },
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            isactive: true,
            items2: [
                {
                  action: "mdi-ticket",
                  menutitle: "test tap",
                  subitems: [
                    {
                      icon: "mdi-apps",
                      title: "Welcome",
                      to: "/"
                    },
                    {
                        icon: "mdi-chart-bubble",
                        title: "Inspire",
                        to: "/inspire"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "Test",
                        to: "/test"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "crud",
                        to: "/crud"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "Main",
                        to: "/mainpage"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "freetest",
                        to: "/freetest"
                    },
                  ],
                },
                {
                  action: 'mdi-ticket',
                  menutitle: '업무관리',
                  subitems: [
                    {
                        icon: "mdi-mouse-off",
                        title: "조사접수",
                        to: "/TaskManagement/investReception"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "손해사정관리",
                        to: "/TaskManagement/businessManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "조사관리(팀장)",
                        to: "/TaskManagement/investManage_leader"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "조사관리(조사자)",
                        to: "/TaskManagement/investManage_member"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "1종접수",
                        to: "/TaskManagement/receipts_first"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "1종팀장",
                        to: "/TaskManagement/leader_first"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "1종조사자",
                        to: "/TaskManagement/member_first"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "조사자료관리",
                        to: "/TaskManagement/investDataManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "실적처리",
                        to: "/TaskManagement/resultProcessing"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "회사일정표",
                        to: "/TaskManagement/schedule"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "일정관리",
                        to: "/TaskManagement/scheduleManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "마감처리",
                        to: "/TaskManagement/deadlineProcess"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "인보이스리스트",
                        to: "/TaskManagement/invoiceList"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "진행보고검색",
                        to: "/TaskManagement/progressReportSearch"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "경비관리",
                        to: "/TaskManagement/expenseManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "SMS전송",
                        to: "/businessManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "업무일지",
                        to: "/businessManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "미결관리(4종)",
                        to: "/TaskManagement/pendingManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "미결관리(1종)",
                        to: "/TaskManagement/pendingManagement_1"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "민원관리",
                        to: "/TaskManagement/complaintsManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "보험사기 적발관리",
                        to: "/TaskManagement/insuranceFraud"
                    },
                  ],
                },
                {
                  action: 'mdi-ticket',
                  menutitle: '메모관리',
                  subitems: [
                    {
                        icon: "mdi-mouse-off",
                        title: "받은메모함",
                        to: "/MemoManagement/receivedMemoBox"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "보낸메모함",
                        to: "/MemoManagement/sentMemoBox"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "임시보관함",
                        to: "/MemoManagement/tempMemoBox"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "삭제메모함",
                        to: "/MemoManagement/deletedMemoBox"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "메모함관리",
                        to: "/MemoManagement/memoManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "개인보관함",
                        to: "/MemoManagement/personalMemoBox"
                    },
                  ],
                },
                {
                  action: 'mdi-ticket',
                  menutitle: '전자결제',
                  subitems: [
                    {
                        icon: "mdi-mouse-off",
                        title: "받은결재함",
                        to: "/WebSign/receivedApprovalBox"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "보낸결재함",
                        to: "/WebSign/sentApprovalBox"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "임시보관함",
                        to: "/WebSign/tempApprovalBox"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "결재삭제함",
                        to: "/WebSign/deletedApprovalBox"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "전자결제관리",
                        to: "/WebSign/approvalManagement"
                    },
                  ],
                },
                {
                  action: 'mdi-ticket',
                  menutitle: '회계관리',
                  subitems: [
                    {
                        icon: "mdi-mouse-off",
                        title: "입금관리",
                        to: "/AccountingManagement/depositManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "입금조회",
                        to: "/AccountingManagement/depositInquiry"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "계산서관리",
                        to: "/AccountingManagement/billManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "회계일반",
                        to: "/AccountingManagement/generalAccounting"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "휴가관리",
                        to: "/AccountingManagement/vacationManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "급여데이터",
                        to: "/AccountingManagement/salaryData"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "공문관리",
                        to: "/AccountingManagement/documentManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "비품/소모품관리",
                        to: "/AccountingManagement/supplyManagement"
                    },
                  ],
                },
                {
                  action: 'mdi-ticket',
                  menutitle: '자료실',
                  subitems: [
                    {
                        icon: "mdi-mouse-off",
                        title: "전사자료실",
                        to: "/referenceRoom"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "부서자료실",
                        to: "/referenceRoom"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "개인자료실",
                        to: "/referenceRoom"
                    },
                  ],
                },
                {
                  action: 'mdi-ticket',
                  menutitle: '커뮤니티',
                  subitems: [
                    {
                        icon: "mdi-mouse-off",
                        title: "공지사항",
                        to: "/Community/announcement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "인보험공문",
                        to: "/Community/insuranceOfficialNotice"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "재물배상공문",
                        to: "/Community/propertyCompensation"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "업무참고자료",
                        to: "/Community/businessReference"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "업무양식",
                        to: "/Community/bussinessForm"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "조사참고자료",
                        to: "/Community/researchReference"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "개인정보보호",
                        to: "/Community/privacy"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "정보보안",
                        to: "/Community/informationSecurity"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "계약관리",
                        to: "/Community/contractManagement"
                    },
                  ],
                },
                {
                  action: 'mdi-ticket',
                  menutitle: '통계',
                  subitems: [
                    {
                        icon: "mdi-mouse-off",
                        title: "기본통계",
                        to: "/Statistics/basicStatistics"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "실적현황",
                        to: "/Statistics/performanceStatus"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "기타통계",
                        to: "/Statistics/etcStatistics"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "지점별통계",
                        to: "/Statistics/branchStatistics"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "보험사자료요청",
                        to: "/Statistics/insurDataRequest"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "1종통계",
                        to: "/Statistics"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "인보험통계",
                        to: "/Statistics"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "업무지정통계",
                        to: "/Statistics"
                    },
                  ],
                },
                {
                  action: 'mdi-ticket',
                  menutitle: '마이페이지',
                  subitems: [
                    {
                        icon: "mdi-mouse-off",
                        title: "개인정보변경",
                        to: "/MyPage/privacyChange"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "총무조회",
                        to: "/MyPage/generalAffairsLookup"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "실적통계(그래프)",
                        to: "/MyPage"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "개발자메뉴",
                        to: "/MyPage"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "테스트(1종팀원)",
                        to: "/MyPage"
                    },
                  ],
                },
                {
                  action: 'mdi-ticket',
                  menutitle: '관리자',
                  subitems: [
                    {
                        icon: "mdi-mouse-off",
                        title: "시스템정보",
                        to: "/Manager/systemInformation"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "사용자관리",
                        to: "/Manager/userManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "사원관리",
                        to: "/Manager/memberManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "보험사정보",
                        to: "/Manager/companyInformation"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "결재양식관리",
                        to: "/Manager/approvalFormManage"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "질병/행정코드",
                        to: "/Manager/diseaseAdminCode"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "코드관리",
                        to: "/Manager/codeManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "프로그램관리",
                        to: "/Manager/programManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "조사파일관리",
                        to: "/Manager/inspFileManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "로그관리",
                        to: "/Manager/logManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "접근IP관리",
                        to: "/Manager/accessIPManagement"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "정책설정",
                        to: "/Manager/policySetting"
                    },
                    {
                        icon: "mdi-mouse-off",
                        title: "개발자메뉴",
                        to: "/Manager/devMenu"
                    },
                  ],
                },
            ],
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/"
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "Test",
                    to: "/test"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "crud",
                    to: "/crud"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "Main",
                    to: "/mainpage"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "업무관리",
                    to: "/businessManagement"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "메모관리",
                    to: "/memoManagement"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "전자결제",
                    to: "/webSign"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "회계관리",
                    to: "/accountingManagement"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "자료실",
                    to: "/referenceRoom"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "커뮤니티",
                    to: "/community"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "통계",
                    to: "/statistics"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "마이페이지",
                    to: "/myPage"
                },
                {
                    icon: "mdi-mouse-off",
                    title: "관리자",
                    to: "/manager"
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            barTitle: "Vuetify.js"
        };
    }
}
</script>
