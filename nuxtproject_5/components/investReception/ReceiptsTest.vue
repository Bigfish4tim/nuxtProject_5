<template>
    <div>
        <v-row justify="center">
            <v-dialog
            v-model="dialog"
            persistent
            max-width="1200px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="white"
                v-bind="attrs"
                v-on="on"
                >
                Open Dialog
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-card-title>
                            <span class="text-h5">일반사항</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="사업종"
                                            v-model="form.testname"
                                            :rules="testRules"
                                            required
                                            ></v-text-field>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="담당자(보)"
                                            v-model="form.manager"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="보험사/지부"
                                            v-model="form.insurName"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <v-text-field
                                                    label="지사"
                                                    v-model="form.jisa"
                                                    ></v-text-field>
                                                </td>
                                                <td>
                                                    <v-text-field
                                                    label="부서"
                                                    v-model="form.buseo"
                                                    ></v-text-field>
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="보고서번호"
                                            v-model="form.reportNum"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-menu
                                                ref="menu"
                                                v-model="menu"
                                                :close-on-content-click="false"
                                                :return-value.sync="form.wiimDate"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="form.wiimDate"
                                                    label="위임일자"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="form.wiimDate"
                                                no-title
                                                scrollable
                                                locale="ko-KR"
                                                >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="menu = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.menu.save(form.wiimDate)"
                                                >
                                                    OK
                                                </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </td>
                                        <td colspan="2">
                                            <v-text-field
                                            label="사고번호"
                                            v-model="form.sagoNum"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <!-- 체크사항 -->
                                            <tr>
                                                <td>체크사항</td>
                                                <td>
                                                    <v-checkbox
                                                    color="red"
                                                    value="red"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span style="color:red">유의</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>           
                                                <td>
                                                    <v-checkbox
                                                    color="indigo"
                                                    value="indigo"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span style="color:blue">지정건</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-select
                                            :items="departmentList"
                                            label="- 수주부서 -"
                                            ></v-select>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="경영지원"
                                            v-model="form.business"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="조사자"
                                            v-model="form.investigator"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <tr>
                                                <td style="width:360px">SMS전송</td>
                                                <td>
                                                    <v-checkbox
                                                    color="indigo"
                                                    value="indigo"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span>담당</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                                <td>
                                                    <v-checkbox
                                                    color="indigo"
                                                    value="indigo"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span>팀장</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                                <td>
                                                    <v-checkbox
                                                    color="indigo"
                                                    value="indigo"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span>보험</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                                <v-text-field
                                                label="SMS전송"
                                                ></v-text-field>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-card-title>
                            <span class="text-h5">피보험자정보(사고정보)</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="피보험자"
                                            v-model="form.insured"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <v-text-field
                                                    v-model="form.jumin1"
                                                    label="생년월일"
                                                    :maxlength="6"
                                                    ></v-text-field>
                                                </td>
                                                <td> - </td>
                                                <td>
                                                    <v-text-field
                                                    name="jumin2"
                                                    :maxlength="1"
                                                    style="width: 20px;"
                                                    v-model="form.jumin2"
                                                    ></v-text-field>
                                                </td>
                                                <td>******</td>
                                            </tr>
                                        </td>
                                        <td>
                                            <v-select
                                            :items="insurerRate"
                                            label="- 보험사등급 -"
                                            ></v-select>
                                        </td>
                                        <td>
                                            <v-select
                                            :items="ourRate"
                                            label="- 당사등급 -"
                                            ></v-select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <tr>
                                                <td>
                                                    <v-text-field
                                                    label="계약자"
                                                    v-model="form.contractor"
                                                    ></v-text-field>
                                                </td>
                                                <td>
                                                    <v-btn>동일</v-btn>
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="휴대폰(피)"
                                            v-model="form.phoneNum"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-select
                                            :items="categoryInsur"
                                            label="- 보험종목구분 -"
                                            ></v-select>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="의뢰사유"
                                            v-model="form.reason"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <tr>
                                                <td style="text-align:center;">사고유형</td>
                                                <td>
                                                    <v-select
                                                    :items="categoryDis1"
                                                    label="- 대분류 -"
                                                    ></v-select>
                                                </td>
                                                <td>
                                                    <v-select
                                                    :items="categoryDis2"
                                                    label="- 소분류 -"
                                                    ></v-select>
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <v-menu
                                                ref="menu2"
                                                v-model="menu2"
                                                :close-on-content-click="false"
                                                :return-value.sync="form.accidentDate"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="form.accidentDate"
                                                    label="사고일자"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="form.accidentDate"
                                                no-title
                                                scrollable
                                                locale="ko-KR"
                                                >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="menu2 = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.menu2.save(form.accidentDate)"
                                                >
                                                    OK
                                                </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="피해물"
                                            v-model="form.damaged"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="장애지급률"
                                            v-model="form.payRate"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="추산금액"
                                            v-model="form.estimatedAmount"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="피해자"
                                            v-model="form.victim"
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2" rowspan="4">
                                            <v-textarea
                                            label="사고내용"
                                            height="240px"
                                            v-model="form.accidentDetails"
                                            ></v-textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <tr>
                                                <td style="width:50px">사지역</td>
                                                <td style="width:70px">
                                                    <v-select
                                                    :items="Province"
                                                    label="- 시도 -"
                                                    v-model="sido"
                                                    ></v-select>
                                                </td>
                                                <td>
                                                    <v-select
                                                    :items="CityList"
                                                    label="- 구군 -"
                                                    v-model="gugun"
                                                    ></v-select>
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="직업"
                                            v-model="form.job"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <tr>
                                                <td style="margin-right:10px">나이 외</td>
                                                <td class="ageText">
                                                    <v-text-field
                                                    v-model="form.age"
                                                    ></v-text-field>
                                                </td>
                                                <td>세</td>
                                                <td>
                                                    <v-checkbox
                                                    color="indigo"
                                                    value="indigo"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span>모럴건</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="진단명"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="진단명"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2" rowspan="4">
                                            <v-textarea
                                            label="조사요구 및 지시사항"
                                            height="240px"
                                            v-model="form.requestDetail"
                                            ></v-textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="진단명"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <v-text-field
                                            label="청구병원"
                                            v-model="form.hospital"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <v-file-input
                                                v-model="form.files"
                                                color="deep-purple accent-4"
                                                counter
                                                label="첨부파일"
                                                multiple
                                                placeholder="Select your files"
                                                prepend-icon="mdi-paperclip"
                                                :show-size="1000"
                                            >
                                                <template v-slot:selection="{ index, text }">
                                                <v-chip
                                                    v-if="index < 2"
                                                    color="deep-purple accent-4"
                                                    dark
                                                    label
                                                    small
                                                >
                                                    {{ text }}
                                                </v-chip>

                                                <span
                                                    v-else-if="index === 2"
                                                    class="text-overline grey--text text--darken-3 mx-2"
                                                >
                                                    +{{ form.files.length - 2 }} File(s)
                                                </span>
                                                </template>
                                            </v-file-input>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-card-title>
                            <span class="text-h5">계약사항</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <thead>
                                    <tr>
                                        <th colspan="2">
                                            보험종목
                                        </th>
                                        <th>
                                            증권번호
                                        </th>
                                        <th colspan="2" style="width:270px">보험기간</th>
                                        <th>계약자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2">
                                            <v-menu
                                                ref="contractMenu1"
                                                v-model="contractMenu1"
                                                :close-on-content-click="false"
                                                :return-value.sync="contractDate1"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="contractdateRange1"
                                                    label="보험기간"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="contractDate1"
                                                no-title
                                                scrollable
                                                locale="ko-KR"
                                                range
                                                >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="contractMenu1 = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.contractMenu1.save(contractDate1)"
                                                >
                                                    OK
                                                </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2">
                                            <v-menu
                                                ref="contractMenu2"
                                                v-model="contractMenu2"
                                                :close-on-content-click="false"
                                                :return-value.sync="contractDate2"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="contractdateRange2"
                                                    label="보험기간"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="contractDate2"
                                                no-title
                                                scrollable
                                                locale="ko-KR"
                                                range
                                                >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="contractMenu2 = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.contractMenu2.save(contractDate2)"
                                                >
                                                    OK
                                                </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2">
                                            <v-menu
                                                ref="contractMenu3"
                                                v-model="contractMenu3"
                                                :close-on-content-click="false"
                                                :return-value.sync="contractDate3"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="contractdateRange3"
                                                    label="보험기간"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="contractDate3"
                                                no-title
                                                scrollable
                                                locale="ko-KR"
                                                range
                                                >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="contractMenu3 = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.contractMenu3.save(contractDate3)"
                                                >
                                                    OK
                                                </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-card-title>
                            <span class="text-h5">농협추가사항</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="계약자주소"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="취급사무소"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="2"
                                >
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                    Close
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                    Save
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
        <v-row justify="center">
            <v-dialog
            v-model="dialog2"
            persistent
            max-width="1200px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="white"
                v-bind="attrs"
                v-on="on"
                >
                Open Dialog2
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="9"
                                >
                                    <v-card-title>
                                    <span class="text-h5">일반사항</span>
                                    </v-card-title>
                                    <v-simple-table class="modaltable">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <v-text-field
                                                    label="담당자(보)"
                                                    v-model="form2.manager"
                                                    ></v-text-field>
                                                </td>
                                                <td>
                                                    <v-text-field
                                                    label="보험사/지부"
                                                    v-model="form2.insurName"
                                                    ></v-text-field>
                                                </td>
                                                <td>
                                                    <tr>
                                                        <td>
                                                            <v-text-field
                                                            label="지사"
                                                            v-model="form2.jisa"
                                                            ></v-text-field>
                                                        </td>
                                                        <td>
                                                            <v-text-field
                                                            label="부서"
                                                            v-model="form2.buseo"
                                                            ></v-text-field>
                                                        </td>
                                                    </tr>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <v-menu
                                                        ref="wiim_1Menu"
                                                        v-model="wiim_1Menu"
                                                        :close-on-content-click="false"
                                                        :return-value.sync="form2.wiimDate"
                                                        transition="scale-transition"
                                                        offset-y
                                                        min-width="auto"
                                                    >
                                                        <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="form2.wiimDate"
                                                            label="위임일자"
                                                            prepend-icon="mdi-calendar"
                                                            readonly
                                                            v-bind="attrs"
                                                            v-on="on"
                                                        ></v-text-field>
                                                        </template>
                                                        <v-date-picker
                                                        v-model="form2.wiimDate"
                                                        no-title
                                                        scrollable
                                                        locale="ko-KR"
                                                        >
                                                        <v-spacer></v-spacer>
                                                        <v-btn
                                                            text
                                                            color="primary"
                                                            @click="wiim_1Menu = false"
                                                        >
                                                            Cancel
                                                        </v-btn>
                                                        <v-btn
                                                            text
                                                            color="primary"
                                                            @click="$refs.wiim_1Menu.save(form2.wiimDate)"
                                                        >
                                                            OK
                                                        </v-btn>
                                                        </v-date-picker>
                                                    </v-menu>
                                                </td>
                                                <td>
                                                    <v-text-field
                                                    label="사고번호"
                                                    v-model="form2.sagoNum"
                                                    ></v-text-field>
                                                </td>
                                                <td>
                                                    <v-text-field
                                                    label="보고서번호"
                                                    v-model="form2.reportNum"
                                                    ></v-text-field>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <tr>
                                                        <td>추가건</td>
                                                        <td>
                                                            <v-checkbox
                                                            color="indigo"
                                                            value="indigo"
                                                            hide-details
                                                            style="margin-bottom: 20px;"
                                                            >
                                                                <template #label>
                                                                    <span>추가건</span>
                                                                </template>
                                                            </v-checkbox>
                                                        </td>
                                                    </tr>
                                                </td>
                                                <td>
                                                    <v-select
                                                    :items="departmentList"
                                                    label="- 수주부서 -"
                                                    v-model="form2.department"
                                                    ></v-select>
                                                </td>
                                                <td>
                                                    <v-text-field
                                                    label="조사팀"
                                                    v-model="form2.team"
                                                    ></v-text-field>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <tr>
                                                        <td style="width:360px">SMS전송</td>
                                                        <td>
                                                            <v-checkbox
                                                            color="indigo"
                                                            value="indigo"
                                                            hide-details
                                                            style="margin-bottom: 20px;"
                                                            >
                                                                <template #label>
                                                                    <span>조사자</span>
                                                                </template>
                                                            </v-checkbox>
                                                        </td>
                                                        <td>
                                                            <v-checkbox
                                                            color="indigo"
                                                            value="indigo"
                                                            hide-details
                                                            style="margin-bottom: 20px;"
                                                            >
                                                                <template #label>
                                                                    <span>팀장</span>
                                                                </template>
                                                            </v-checkbox>
                                                        </td>
                                                        <td>
                                                            <v-checkbox
                                                            color="indigo"
                                                            value="indigo"
                                                            hide-details
                                                            style="margin-bottom: 20px;"
                                                            >
                                                                <template #label>
                                                                    <span>담당(보)</span>
                                                                </template>
                                                            </v-checkbox>
                                                        </td>
                                                        <v-text-field
                                                        label="SMS전송"
                                                        ></v-text-field>
                                                    </tr>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="3"
                                >
                                    <v-card-title>
                                    <span class="text-h5">조사자
                                        <v-btn @click="addInvestigator" small>추가</v-btn>
                                    </span>
                                    </v-card-title>
                                    <v-simple-table 
                                    class="modaltable"
                                    height="300px"
                                    >
                                        <tbody>
                                            <tr>
                                                <td id="investigators">
                                                    <tr>
                                                        <td>
                                                            <v-btn small>삭제</v-btn>
                                                        </td>
                                                        <td>
                                                            <v-text-field
                                                            v-model="form2.chargeName"
                                                            ></v-text-field>
                                                        </td>
                                                        <td>
                                                            <v-select
                                                            :items="charge"
                                                            v-model="form2.chargeSelect"
                                                            ></v-select>
                                                        </td>
                                                        <td>
                                                            <v-text-field
                                                            v-model="form2.chargeRate"
                                                            ></v-text-field>
                                                        </td>
                                                    </tr>
                                                    <tr v-for="(investigator, i) in form2.investigatorCount" :key="i">
                                                        <td>
                                                            <v-btn small>삭제</v-btn>
                                                        </td>
                                                        <td>
                                                            <v-text-field
                                                            v-model="form2.investigatorName[investigator]"
                                                            ></v-text-field>
                                                        </td>
                                                        <td>
                                                            <v-select
                                                            :items="vice"
                                                            v-model="form2.investigatorSelect[investigator]"
                                                            ></v-select>
                                                        </td>
                                                        <td>
                                                            <v-text-field
                                                            v-model="form2.investigatorRate[investigator]"
                                                            ></v-text-field>
                                                        </td>
                                                    </tr>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-col>
                            </v-row>
                            <v-card-title>
                            <span class="text-h5">사고정보</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <v-select
                                            :items="reception"
                                            label="- 접수분류 -"
                                            v-model="form2.receptionClass"
                                            ></v-select>
                                        </td>
                                        <td>
                                            <v-select
                                            :items="survey"
                                            label="- 조사분류 -"
                                            v-model="form2.surveyClass"
                                            ></v-select>
                                        </td>
                                        <td colspan="2" rowspan="4">
                                            <v-textarea
                                            label="사고내용"
                                            height="240px"
                                            v-model="form2.accidentDetails"
                                            ></v-textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <tr>
                                                <td style="width:70px">사고유형</td>
                                                <td style="width:70px">
                                                    <v-select
                                                    :items="accidentType1"
                                                    label="- 대분류 -"
                                                    v-model="bunryu1"
                                                    ></v-select>
                                                </td>
                                                <td>
                                                    <v-select
                                                    :items="bunryuList"
                                                    label="- 소분류 -"
                                                    v-model="bunryu2"
                                                    ></v-select>
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <v-menu
                                                ref="accidentMenu"
                                                v-model="accidentMenu"
                                                :close-on-content-click="false"
                                                :return-value.sync="sagodate"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="sagodate"
                                                    label="사고일자"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="sagodate"
                                                no-title
                                                scrollable
                                                locale="ko-KR"
                                                >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="accidentMenu = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.accidentMenu.save(sagodate)"
                                                >
                                                    OK
                                                </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="계약자"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="연락처(계)"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="피보험자"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="연락처(피)"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="피해자(물)"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="사고장소"
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2" rowspan="4">
                                            <v-textarea
                                            label="조사요구 및 지시사항"
                                            height="240px"
                                            v-model="form.requestDetail"
                                            ></v-textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="추정손해액"
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>Moral</td>
                                                <td>
                                                    <v-checkbox
                                                    color="indigo"
                                                    value="indigo"
                                                    hide-details
                                                    style="margin-bottom: 20px;"
                                                    >
                                                        <template #label>
                                                            <span>모럴조사건</span>
                                                        </template>
                                                    </v-checkbox>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-select
                                            :items="categoryInsurance"
                                            label="- 보험종목구분 -"
                                            ></v-select>
                                        </td>
                                        <td>
                                            <v-text-field
                                            label="의뢰사유"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <v-file-input
                                                v-model="form.files"
                                                color="deep-purple accent-4"
                                                counter
                                                label="첨부파일"
                                                multiple
                                                placeholder="Select your files"
                                                prepend-icon="mdi-paperclip"
                                                :show-size="1000"
                                            >
                                                <template v-slot:selection="{ index, text }">
                                                <v-chip
                                                    v-if="index < 2"
                                                    color="deep-purple accent-4"
                                                    dark
                                                    label
                                                    small
                                                >
                                                    {{ text }}
                                                </v-chip>

                                                <span
                                                    v-else-if="index === 2"
                                                    class="text-overline grey--text text--darken-3 mx-2"
                                                >
                                                    +{{ form.files.length - 2 }} File(s)
                                                </span>
                                                </template>
                                            </v-file-input>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-card-title>
                            <span class="text-h5">계약사항</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <thead>
                                    <tr>
                                        <th colspan="2">
                                            보험종목
                                        </th>
                                        <th>
                                            증권번호
                                        </th>
                                        <th colspan="2" style="width:270px">보험기간</th>
                                        <th>계약자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2">
                                            <v-menu
                                                ref="contractMenu1"
                                                v-model="contractMenu1"
                                                :close-on-content-click="false"
                                                :return-value.sync="contractDate1"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="contractdateRange1"
                                                    label="보험기간"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="contractDate1"
                                                no-title
                                                scrollable
                                                locale="ko-KR"
                                                range
                                                >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="contractMenu1 = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.contractMenu1.save(contractDate1)"
                                                >
                                                    OK
                                                </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2">
                                            <v-menu
                                                ref="contractMenu2"
                                                v-model="contractMenu2"
                                                :close-on-content-click="false"
                                                :return-value.sync="contractDate2"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="contractdateRange2"
                                                    label="보험기간"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="contractDate2"
                                                no-title
                                                scrollable
                                                locale="ko-KR"
                                                range
                                                >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="contractMenu2 = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.contractMenu2.save(contractDate2)"
                                                >
                                                    OK
                                                </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                        <td colspan="2">
                                            <v-menu
                                                ref="contractMenu3"
                                                v-model="contractMenu3"
                                                :close-on-content-click="false"
                                                :return-value.sync="contractDate3"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="contractdateRange3"
                                                    label="보험기간"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="contractDate3"
                                                no-title
                                                scrollable
                                                locale="ko-KR"
                                                range
                                                >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="contractMenu3 = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.contractMenu3.save(contractDate3)"
                                                >
                                                    OK
                                                </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </td>
                                        <td>
                                            <v-text-field
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-card-title>
                            <span class="text-h5">농협추가사항</span>
                            </v-card-title>
                            <v-simple-table class="modaltable">
                                <tbody>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="계약자주소"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <v-text-field
                                            label="취급사무소"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="2"
                                >
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog2 = false"
                >
                    Close
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog2 = false"
                >
                    Save
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
        <div>asdasd</div>
        <v-data-table
            :headers="headers"
            :items="items"
            item-key="name"
            class="datatable"
            hide-default-header
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
            <template v-slot:body.append="{ items }">
                <tr class="bottombody">
                    <td colspan="24" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.estimated_amount).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.deposit_amount).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.invoice).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.basic_fee).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.surcharge).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.incentive).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.daily_expenses).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.transportation_cost).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.paperwork_fee).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.medical_advice).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.legal_advice).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.etc).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.expenses).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td colspan="6"></td>
                    <td>{{ items.map(item => item.estimated_amount).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.cut).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.payment).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td colspan="2"></td>
                    <!-- <td>{{ items.map(item => item.calories).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.fat).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.carbs).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.protein).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => parseInt(item.iron)).reduce((prev, curr) => prev + curr, 0) + '%'}}</td> -->
                </tr>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import Resizable from "../../mixins.js/Resizable"
import ReceiptsList from "../../mixins.js/ReceiptsList"

export default {
    mixins: [
        Resizable,
        ReceiptsList,
    ],
    mounted() {
        this.sizeInitialize()
    },
    data() {
        return {
            dialog: false,
            dialog2: false,
            menu: false,
            menu2: false,
            valid: false,
            form: {
                testname: '인보험',
                manager: '',
                insurName: '',
                jisa: '',
                buseo: '',
                reportNum: '',
                wiimDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                sagoNum: '',
                business: '',
                investigator: '',
                insured: '',
                jumin1: '',
                jumin2: '',
                contractor: '',
                phoneNum: '',
                reason: '',
                accidentDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                damaged: '',
                payRate: '',
                estimatedAmount: '',
                victim: '',
                accidentDetails: '',
                sido: '',
                gugun: '',
                job: '',
                age: '',
                requestDetail: '',
                hospital: '',
                files: [],
            },
            form2: {
                manager: '',
                insurName: '',
                jisa: '',
                buseo: '',
                wiimDate: '',
                sagoNum: '',
                reportNum: '',
                department: '',
                team: '',
                chargeName: '',
                chargeSelect: '',
                chargeRate: '',
                investigatorCount: [ 'invest0' ],
                investigatorName: { invest0: '' },
                investigatorSelect: { invest0: '' },
                investigatorRate: { invest0: '' },
                receptionClass: '',
                surveyClass: '',
                accidentDetails: '',
                bunryu1: '',
                bunryu2: '',
            },
            
            wiim_1Menu: false,
            gugun: '',
            sido: '',
            contractMenu1: false,
            contractMenu2: false,
            contractMenu3: false,
            contractDate1: [],
            contractDate2: [],
            contractDate3: [],
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            
            bunryu1: '',
            bunryu2: '',
            accidentMenu: false,
            sagodate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        }
    },
    methods: {
        timestamp() {
            console.log('asdas')
            var time = new Date()
            time.setHours(time.getHours() + 9)
            return time.toISOString().replace('T', ' ').substring(0, 19)
        },
        sizeInitialize() {
            var header_tds = document.getElementsByClassName('topbody_data')
            console.log(header_tds)

            for(var i=0; i<header_tds.length; i++) {
                header_tds[i].style.width = this.headers[i].width
            }
        },
        addInvestigator() {
            
            var key = 'invest' + this.form2.investigatorCount.length
            
            this.form2.investigatorCount.push(key)

            this.form2.investigatorName[key] = ''
            this.form2.investigatorSelect[key] = ''
            this.form2.investigatorRate[key] = ''

            console.log(this.form2.investigatorCount)
        },
        // moveFocus(num,fromform,toform){
        //     var str = fromform.value.length;
        //     if(str == num) {
        //         toform.focus();
        //     }   
        // }
    },
    computed: {
        headers () {
            return [
                {
                    text: '기능',
                    align: 'center',
                    value: 'function',
                    width: '100px',
                },
                {
                    text: '보고서번호',
                    align: 'left',
                    value: 'report_number',
                    width: '150px',
                },
                {
                    text: '종',
                    align: 'center',
                    value: 'species',
                    width: '40px',
                },
                {
                    text: 'M',
                    align: 'center',
                    value: 'm',
                    width: '40px',
                },
                {
                    text: 'C',
                    align: 'center',
                    value: 'c',
                    width: '40px',
                },
                {
                    text: 'E',
                    align: 'center',
                    value: 'e',
                    width: '40px',
                },
                {
                    text: '상태',
                    align: 'center',
                    value: 'status',
                    width: '80px',
                },
                {
                    text: '손감',
                    align: 'center',
                    value: 'songam',
                    width: '80px',
                },
                {
                    text: '위임일자',
                    align: 'center',
                    value: 'mandate',
                    width: '110px',
                },
                {
                    text: '종결일자',
                    align: 'center',
                    value: 'endate',
                    width: '110px',
                },
                {
                    text: '발행일자',
                    align: 'center',
                    value: 'setdate',
                    width: '110px',
                },
                {
                    text: '입금일자',
                    align: 'center',
                    value: 'depodate',
                    width: '110px',
                },
                {
                    text: '사정결과',
                    align: 'center',
                    value: 'result',
                    width: '110px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'companies',
                    width: '110px',
                },
                {
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '110px',
                },
                {
                    text: '계약자',
                    align: 'center',
                    value: 'contractor',
                    width: '110px',
                },
                {
                    text: '팀',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'investigator',
                    width: '110px',
                },
                {
                    text: '담당자',
                    align: 'center',
                    value: 'manager',
                    width: '110px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'classification',
                    width: '110px',
                },
                {
                    text: '사고유형',
                    align: 'center',
                    value: 'accident_type',
                    width: '140px',
                },
                {
                    text: '사고일자',
                    align: 'center',
                    value: 'accident_date',
                    width: '140px',
                },
                {
                    text: '조사지역',
                    align: 'center',
                    value: 'survey_area',
                    width: '150px',
                },
                {
                    text: '피해자',
                    align: 'center',
                    value: 'victim',
                    width: '140px',
                },
                {
                    text: '추산금액',
                    align: 'center',
                    value: 'estimated_amount',
                    width: '120px',
                },
                {
                    text: '입금액',
                    align: 'center',
                    value: 'deposit_amount',
                    width: '120px',
                },
                {
                    text: '인보이스',
                    align: 'center',
                    value: 'invoice',
                    width: '120px',
                },
                {
                    text: '기본료',
                    align: 'center',
                    value: 'basic_fee',
                    width: '130px',
                },
                {
                    text: '추가료',
                    align: 'center',
                    value: 'surcharge',
                    width: '130px',
                },
                {
                    text: '인센티브',
                    align: 'center',
                    value: 'incentive',
                    width: '130px',
                },
                {
                    text: '일비',
                    align: 'center',
                    value: 'daily_expenses',
                    width: '130px',
                },
                {
                    text: '교통비',
                    align: 'center',
                    value: 'transportation_cost',
                    width: '130px',
                },
                {
                    text: '서류비',
                    align: 'center',
                    value: 'paperwork_fee',
                    width: '130px',
                },
                {
                    text: '의료자문',
                    align: 'center',
                    value: 'medical_advice',
                    width: '130px',
                },
                {
                    text: '법률자문',
                    align: 'center',
                    value: 'legal_advice',
                    width: '130px',
                },
                {
                    text: '기타',
                    align: 'center',
                    value: 'etc',
                    width: '130px',
                },
                {
                    text: '경비',
                    align: 'center',
                    value: 'expenses',
                    width: '130px',
                },
                {
                    text: '부서',
                    align: 'center',
                    value: 'department',
                    width: '130px',
                },
                {
                    text: '보험종목',
                    align: 'center',
                    value: 'insurance_type',
                    width: '160px',
                },
                {
                    text: '증권번호',
                    align: 'center',
                    value: 'stock_number',
                    width: '130px',
                },
                {
                    text: '수정자',
                    align: 'center',
                    value: 'modifier',
                    width: '110px',
                },
                {
                    text: '코드(보)',
                    align: 'center',
                    value: 'code',
                    width: '100px',
                },
                {
                    text: '보험사명',
                    align: 'center',
                    value: 'insurance_company_name',
                    width: '130px',
                },
                {
                    text: '추산금액',
                    align: 'center',
                    value: 'estimated_amount',
                    width: '130px',
                },
                {
                    text: '삭감액',
                    align: 'center',
                    value: 'cut',
                    width: '130px',
                },
                {
                    text: '지급액',
                    align: 'center',
                    value: 'payment',
                    width: '130px',
                },
                {
                    text: '등록일시',
                    align: 'center',
                    value: 'registration_date',
                    width: '190px',
                },
                {
                    text: '처리기일',
                    align: 'center',
                    value: 'processing_date',
                    width: '160px',
                }
            ]
        },
        contractdateRange1 () {
            return this.contractDate1.join(' ~ ')
        },
        contractdateRange2 () {
            return this.contractDate2.join(' ~ ')
        },
        contractdateRange3 () {
            return this.contractDate3.join(' ~ ')
        },
    },
    watch: {
        jumin (val, old) {
            if(val.length == 6) {
                var f = document.getElementsByName('jumin2')
                f[0].focus()
            }
        },
        sido: function(newVal, oldVal) {
            this.CityList = this.City[newVal]
            this.form.sido = this.sido
        },
        gugun: function(newVal, oldVal) {
            this.form.gugun = newVal
        },
        bunryu1: function(newVal, oldVal) {
            this.bunryuList = this.accidentType2[newVal]
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/Datatable.scss';
@import '@/assets/ModalFont.scss';
    
</style>