<template>
    <div>
        <v-row>
            <v-col md="1" :key="componentKey2">
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
                    @click="openDialog('create2')"
                    >
                    접수하기
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="text-h5">조사접수(1종)</span>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="oneform">
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
                                                        :error-messages="form2managerErrors"
                                                        required
                                                        @input="$v.form2.manager.$touch()"
                                                        @blur="$v.form2.manager.$touch()"
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
                                                        v-model="form2.bunryu1"
                                                        ></v-select>
                                                    </td>
                                                    <td>
                                                        <v-select
                                                        :items="bunryuList"
                                                        label="- 소분류 -"
                                                        v-model="form2.bunryu2"
                                                        ></v-select>
                                                    </td>
                                                </tr>
                                            </td>
                                            <td>
                                                <v-menu
                                                    ref="accidentMenu"
                                                    v-model="accidentMenu"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="form2.sagodate"
                                                    transition="scale-transition"
                                                    offset-y
                                                    min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="form2.sagodate"
                                                        label="사고일자"
                                                        prepend-icon="mdi-calendar"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                    v-model="form2.sagodate"
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
                                                        @click="$refs.accidentMenu.save(form2.sagodate)"
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
                                                v-model="form2.contractor"
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                label="연락처(계)"
                                                v-model="form2.phoneCon"
                                                ></v-text-field>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <v-text-field
                                                label="피보험자"
                                                v-model="form2.insured"
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                label="연락처(피)"
                                                v-model="form2.phoneIns"
                                                ></v-text-field>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <v-text-field
                                                label="피해자(물)"
                                                v-model="form2.victim"
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                label="사고장소"
                                                v-model="form2.location"
                                                ></v-text-field>
                                            </td>
                                            <td colspan="2" rowspan="4">
                                                <v-textarea
                                                label="조사요구 및 지시사항"
                                                height="240px"
                                                v-model="form2.requestDetail"
                                                ></v-textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <v-text-field
                                                label="추정손해액"
                                                v-model="form2.estimatedLoss"
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
                                                v-model="form2.categoryInsur"
                                                ></v-select>
                                            </td>
                                            <td>
                                                <v-text-field
                                                label="의뢰사유"
                                                v-model="form2.reason"
                                                ></v-text-field>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <v-file-input
                                                    v-model="form2.files"
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
                                                        +{{ form2.files.length - 2 }} File(s)
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
                                                v-model="form2.insurType1"
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                v-model="form2.stockNum1"
                                                ></v-text-field>
                                            </td>
                                            <td colspan="2">
                                                <v-menu
                                                    ref="contractMenu21"
                                                    v-model="contractMenu21"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="form2.contractDate1"
                                                    transition="scale-transition"
                                                    offset-y
                                                    min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="form2.contractdateRange1"
                                                        label="보험기간"
                                                        prepend-icon="mdi-calendar"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                    v-model="form2.contractDate1"
                                                    no-title
                                                    scrollable
                                                    locale="ko-KR"
                                                    range
                                                    >
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        text
                                                        color="primary"
                                                        @click="contractMenu21 = false"
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                        text
                                                        color="primary"
                                                        @click="$refs.contractMenu21.save(form2.contractDate1)"
                                                    >
                                                        OK
                                                    </v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </td>
                                            <td>
                                                <v-text-field
                                                v-model="form2.subcontractor1"
                                                ></v-text-field>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <v-text-field
                                                v-model="form2.insurType2"
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                v-model="form2.stockNum2"
                                                ></v-text-field>
                                            </td>
                                            <td colspan="2">
                                                <v-menu
                                                    ref="contractMenu22"
                                                    v-model="contractMenu22"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="form2.contractDate2"
                                                    transition="scale-transition"
                                                    offset-y
                                                    min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="form2.contractdateRange2"
                                                        label="보험기간"
                                                        prepend-icon="mdi-calendar"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                    v-model="form2.contractDate2"
                                                    no-title
                                                    scrollable
                                                    locale="ko-KR"
                                                    range
                                                    >
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        text
                                                        color="primary"
                                                        @click="contractMenu22 = false"
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                        text
                                                        color="primary"
                                                        @click="$refs.contractMenu22.save(form2.contractDate2)"
                                                    >
                                                        OK
                                                    </v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </td>
                                            <td>
                                                <v-text-field
                                                v-model="form2.subcontractor2"
                                                ></v-text-field>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <v-text-field
                                                v-model="form2.insurType3"
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                v-model="form2.stockNum3"
                                                ></v-text-field>
                                            </td>
                                            <td colspan="2">
                                                <v-menu
                                                    ref="contractMenu23"
                                                    v-model="contractMenu23"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="form2.contractDate3"
                                                    transition="scale-transition"
                                                    offset-y
                                                    min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="form2.contractdateRange3"
                                                        label="보험기간"
                                                        prepend-icon="mdi-calendar"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                    v-model="form2.contractDate3"
                                                    no-title
                                                    scrollable
                                                    locale="ko-KR"
                                                    range
                                                    >
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        text
                                                        color="primary"
                                                        @click="contractMenu23 = false"
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                        text
                                                        color="primary"
                                                        @click="$refs.contractMenu23.save(form2.contractDate3)"
                                                    >
                                                        OK
                                                    </v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </td>
                                            <td>
                                                <v-text-field
                                                v-model="form2.subcontractor3"
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
                                                v-model="form2.contAdress"
                                                ></v-text-field>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <v-text-field
                                                label="취급사무소"
                                                v-model="form2.office"
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
                        v-if="mode === 'create2'"
                        color="blue darken-1"
                        text
                        @click="[dialog = false, create('create2')]"
                    >
                        Save
                    </v-btn>
                    <v-btn
                        v-else
                        color="blue darken-1"
                        text
                        @click="[dialog = false, update()]"
                    >
                        Update
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-col>
            <v-col md="1">
                <v-btn @click="excelDownload">엑셀다운</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="2">
                <v-menu
                    ref="filterMenu"
                    v-model="filterMenu"
                    :close-on-content-click="false"
                    :return-value.sync="filterDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="filterdateRange"
                        label="보험기간"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="filterDate"
                    no-title
                    scrollable
                    locale="ko-KR"
                    range
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="filterMenu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.filterMenu.save(filterDate)"
                    >
                        OK
                    </v-btn>
                    </v-date-picker>
                </v-menu>
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
                :items="companyList"
                v-model="companyListText"
                label="-센터/지사"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="speciesFilter"
                v-model="speciesFilterText"
                label="-보종-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-select
                :items="statusFilter"
                v-model="statusFilterText"
                label="-상태-"
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
                :items="bunryu2Filter"
                v-model="bunryu2FilterText"
                label="-건분류-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="allFilterTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-btn @click="searchEvt">검색</v-btn>
            </v-col>
            <v-col md="1">
                <v-select
                :items="bunryu1Filter"
                v-model="bunryu1FilterText"
                label="-분류(보)-"
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="1">

            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="allFilterTextSearchClone"
            item-key="name"
            class="datatable"
            hide-default-header
            :items-per-page="100"
            :footer-props="{
                'items-per-page-options': [10, 50, 100]
            }"
            @dblclick:row=showRowInfo
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
                    <td colspan="25" style="text-align: center;">소계</td>
                    <td>{{ items.map(item => item.estimatedLoss).reduce(sumReducer, '') }}</td>
                    <td>{{ items.map(item => item.deposit_amount).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.invoice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.basic_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.surcharge).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.incentive).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.daily_expenses).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.transportation_cost).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.paperwork_fee).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.medical_advice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.legal_advice).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.etc).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td>{{ items.map(item => item.expenses).reduce((prev, curr) => Number(prev) + Number(curr), 0) }}</td>
                    <td colspan="4"></td>
                    <!-- <td>{{ items.map(item => item.calories).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.fat).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.carbs).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => item.protein).reduce((prev, curr) => prev + curr, 0) }}</td>
                    <td>{{ items.map(item => parseInt(item.iron)).reduce((prev, curr) => prev + curr, 0) + '%'}}</td> -->
                </tr>
            </template>
            <template #item.function="{ item }">
                <v-card-actions>
                    <v-btn x-small @click="openDialog('update', item)">수정</v-btn>
                    <v-btn x-small @click="remove(item)">삭제</v-btn>
                </v-card-actions>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import Resizable from "../../../mixins.js/Resizable"
import Vuelidate from "../../../mixins.js/Vuelidate"
import crud from "../../../mixins.js/crud"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"
import ReceiptsList from "../../../mixins.js/TaskManagement/receipts_first/Receipts/ReceiptsList"
import ReceiptsFilters from "../../../mixins.js/TaskManagement/receipts_first/Receipts/ReceiptsFilters"

import $ from 'jquery'

const clonedeep = require("lodash.clonedeep")

// import { validationMixin } from 'vuelidate'
// import { required } from 'vuelidate/lib/validators'

export default {
    mixins: [
        Resizable,
        Vuelidate,
        crud,
        ExcelDownloader,
        ReceiptsList,
        ReceiptsFilters,
    ],
    mounted() {
        this.sizeInitialize()
        // this.formInit = this.cloneObject(this.form)
        // this.formInit2 = this.cloneObject(this.form2)
        // this.formInit = this.cloneObject(this.form)
        
        console.log(this.formInit)
    },
    data() {
        return {
            dialog: false,
            dialog2: false,
            menu: false,
            menu2: false,
            valid: false,
            form2: {
                id: '',
                species: 1,
                manager: '',
                insurName: '',
                jisa: '',
                buseo: '',
                wiimDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
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
                sagodate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                contractor: '',
                phoneCon: '',
                insured: '',
                phoneIns: '',
                victim: '',
                location: '',
                requestDetail: '',
                estimatedLoss: '',
                categoryInsur: '',
                reason: '',
                files: [],
                insurType1: '',
                insurType2: '',
                insurType3: '',
                stockNum1: '',
                stockNum2: '',
                stockNum3: '',
                contractDate1: ['',''],
                contractDate2: ['',''],
                contractDate3: ['',''],
                contractdateRange1: '',
                contractdateRange2: '',
                contractdateRange3: '',
                subcontractor1: '',
                subcontractor2: '',
                subcontractor3: '',
                contAdress: '',
                office: '',
                createAt: '',
            },
            formInit: {},
            formInit2: {},
            wiim_1Menu: false,
            gugun: '',
            sido: '',
            
            contractMenu21: false,
            contractMenu22: false,
            contractMenu23: false,
            filterDate: [],
            contractDate1: [],
            contractDate2: [],
            contractDate3: [],
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            
            bunryu1: '',
            bunryu2: '',
            accidentMenu: false,

            componentKey: 0,
            componentKey2: 100,
            renderComponent: true,
        }
    },
    methods: {
        forceRerender() {
            console.log('rerender//////////')
            this.componentKey += 1;
            console.log(this.componentKey)

            // this.renderComponent = false;

            // this.$nextTick(() => {
            // // Adding the component back in
            // this.renderComponent = true;
            // });
        },
        forceRerender2() {
            console.log('rerender//////////')
            this.componentKey2 += 1;
            console.log(this.componentKey2)
        },
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
        submit () {
            this.$v.$touch()
        },
        clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
        },
        refresh() {
            console.log('button click!')
            // window.location.reload()
            console.log(window.location)

            // window.document.getElementById('tttest').location.reload()
            console.log(window.document.getElementById('tttest'))
            $("#tttest").load(window.location.href + " #tttest");
        },
        sumMoney(prev, curr) {
            numprev = Number(prev.replace(",", ""))
            numcurr = Number(curr.replace(",", ""))
        },
        dongil() {
            this.form.contractor = this.form.insured
        },
        showRowInfo (event, { item } ) {
            // console.log('item//')
            // console.log(item)

            this.openDialog('update', item)
        },
    },
    computed: {
        headers () {
            return [
                {
                    text: '기능',
                    align: 'center',
                    value: 'function',
                    width: '140px',
                },
                {
                    text: '보고서번호',
                    align: 'left',
                    value: 'reportNum',
                    width: '150px',
                },
                {
                    text: '구분',
                    align: 'center',
                    value: 'division',
                    width: '60px',
                },
                {
                    text: '종',
                    align: 'center',
                    value: 'species',
                    width: '40px',
                    filter: this.speciesFiltering
                },
                {
                    text: 'P',
                    align: 'center',
                    value: 'p',
                    width: '40px',
                },
                {
                    text: 'M',
                    align: 'center',
                    value: 'm',
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
                    filter: this.statusFiltering
                },
                {
                    text: '위임일자',
                    align: 'center',
                    value: 'wiimDate',
                    width: '110px',
                    filter: this.wiimFiltering,
                },
                {
                    text: '종결일자',
                    align: 'center',
                    value: 'endate',
                    width: '110px',
                },
                {
                    text: '경과',
                    align: 'center',
                    value: 'lapse',
                    width: '110px',
                },
                {
                    text: '보험사',
                    align: 'center',
                    value: 'insurName',
                    width: '110px',
                },
                {
                    text: '계약자',
                    align: 'center',
                    value: 'contractor',
                    width: '110px',
                },
                {
                    text: '보험종목',
                    align: 'center',
                    value: 'insurType1',
                    width: '160px',
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
                    text: '증권번호',
                    align: 'center',
                    value: 'stockNum1',
                    width: '130px',
                },
                {
                    text: '조사팀',
                    align: 'center',
                    value: 'team',
                    width: '140px',
                    filter: this.teamfiltering
                },
                {
                    text: '조사자',
                    align: 'center',
                    value: 'chargeName',
                    width: '110px',
                },
                {
                    text: '담당자(보)',
                    align: 'center',
                    value: 'manager',
                    width: '110px',
                },
                {
                    text: '분류',
                    align: 'center',
                    value: 'bunryu1',
                    width: '110px',
                },
                {
                    text: '사고유형',
                    align: 'center',
                    value: 'bunryu2',
                    width: '140px',
                },
                {
                    text: '사고일자',
                    align: 'center',
                    value: 'sagodate',
                    width: '140px',
                },
                {
                    text: '조사지역',
                    align: 'center',
                    value: 'location',
                    width: '150px',
                },
                {
                    text: '피보험자',
                    align: 'center',
                    value: 'insured',
                    width: '110px',
                },
                {
                    text: '추산금액',
                    align: 'center',
                    value: 'estimatedLoss',
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
                    value: 'buseo',
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
                    value: 'insurName',
                    width: '130px',
                },
            ]
        },
        filterdateRange () {
            console.log(this.filterDate)
            return this.filterDate.join(' ~ ')
        }
    },
    watch: {
        'form.jumin1': function(val, old) {
            if(val.length == 6 && this.mode === 'create') {
                var f = document.getElementsByName('jumin2')
                f[0].focus()
            }
        },
        'form.sido': function(newVal, oldVal) {
            this.CityList = this.City[newVal]
        },
        'form.gugun': function(newVal, oldVal) {
            this.form.location = this.form.sido + ' ' + this.form.gugun
        },
        'form2.bunryu1': function(newVal, oldVal) {
            this.bunryuList = this.accidentType2[newVal]
        },
        'form2.bunryu2': function(newVal, oldVal) {
            this.form2.bunryu2 = newVal
        },
        'form.contractDate1': function(newVal, oldVal) {
            this.form.contractdateRange1 = newVal
        },
        'form.contractDate2': function(newVal, oldVal) {
            this.form.contractdateRange2 = newVal
        },
        'form.contractDate3': function(newVal, oldVal) {
            this.form.contractdateRange3 = newVal
        },
        'form2.contractDate1': function(newVal, oldVal) {
            this.form2.contractdateRange1 = newVal
        },
        'form2.contractDate2': function(newVal, oldVal) {
            this.form2.contractdateRange2 = newVal
        },
        'form2.contractDate3': function(newVal, oldVal) {
            this.form2.contractdateRange3 = newVal
        },
        companyFilterText: function(newVal, oldVal) {
            this.companyList = this.companyFilter2[newVal]
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/Datatable.scss';
@import '@/assets/ModalFont.scss';
    
</style>