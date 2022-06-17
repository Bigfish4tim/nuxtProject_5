<template>
    <div>
        <v-row>
            <v-col>
                <v-btn>병원/가관추가</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="1">
                <v-select
                :items="hospitalstatusFilter"
                v-model="hospitalstatusFilterText"
                label="-상태-"
                ></v-select>
            </v-col>
            <v-col>
                <div>시/도 : </div>
            </v-col>
            <v-col md="1">
                <v-select
                :items="sidoFilter"
                v-model="sidoFilterText"
                label="-시도-"
                ></v-select>
            </v-col>
            <v-col>
                <div>구/군/동 : </div>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="addressFilterText"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-select
                :items="allFilter"
                v-model="allFilterText"
                label="-전체검색-"
                ></v-select>
            </v-col>
            <v-col md="1">
                <v-text-field
                v-model="allFilterTextSearch"
                ></v-text-field>
            </v-col>
            <v-col md="1">
                <v-btn>검색</v-btn>
            </v-col>
        </v-row>
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
import HospitalInformationFilters from "../../../mixins.js/Manager/diseaseAdminCode/HospitalInformation/HospitalInformationFilters"
import HospitalInformationList from "../../../mixins.js/Manager/diseaseAdminCode/HospitalInformation/HospitalInformationList"
import Resizable from "../../../mixins.js/Resizable"
import ExcelDownloader from "../../../mixins.js/ExcelDownloader"

export default {
    mixins: [
        Resizable,
        ExcelDownloader,
        HospitalInformationFilters,
        HospitalInformationList,
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
                    value: 'documentStatus',
                    width: '140px',
                },
                {
                    text: '지역(시도)',
                    align: 'center',
                    value: 'regionSido',
                    width: '140px',
                },
                {
                    text: '지역(구군)',
                    align: 'center',
                    value: 'regiongugun',
                    width: '140px',
                },
                {
                    text: '병원/기관명',
                    align: 'center',
                    value: 'hospitalName',
                    width: '140px',
                },
                {
                    text: '전화번호',
                    align: 'center',
                    value: 'phoneNum',
                    width: '140px',
                },
                {
                    text: 'FAX번호',
                    align: 'center',
                    value: 'FAXNum',
                    width: '140px',
                },
                {
                    text: '기관 및 주치의특성(성향)',
                    align: 'center',
                    value: 'hospitalCharacteristic',
                    width: '140px',
                },
                {
                    text: '진료기록/서류 발급정보',
                    align: 'center',
                    value: 'medicalRecords',
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
    },
}
</script>
<style>
    
</style>