import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    validations: {
        // name: { required, maxLength: maxLength(10) },
        // email: { required, email },
        // select: { required },
        // checkbox: {
        //     checked (val) {
        //     return val
        //     },
        // },
        // 4th form rules
        form: {
            manager: { required },
            wiimDate: { required },
            sagoNum: { required },
            department: { required },
            insured: { required },
            contractor: { required },
            bunryu1: { required },
            bunryu2: { required },
            sagoDate: { required },
            estimatedLoss: { required },
        },
        // 1st form rules
        form2: {
            manager: { required },
            wiimDate: { required },
            sagoNum: { required },
            department: { required },
            receptionClass: { required },
            surveyClass: { required },
            bunryu1: { required },
            bunryu2: { required },
            sagoDate: { required },
            contractor: { required },
        },
    },

    data() {
        return {

        }
      },

    computed: {
        // 4th form Errors
        formmanagerErrors() {
            const errors = []
            if (!this.$v.form.manager.$dirty) return errors
            !this.$v.form.manager.required && errors.push('You must agree to continue!')
            return errors
        },
        formwiimDateErrors() {
            const errors = []
            if (!this.$v.form.wiimDate.$dirty) return errors
            !this.$v.form.wiimDate.required && errors.push('You must agree to continue!')
            return errors
        },
        formsagoNumErrors() {
            const errors = []
            if (!this.$v.form.sagoNum.$dirty) return errors
            !this.$v.form.sagoNum.required && errors.push('You must agree to continue!')
            return errors
        },
        formdepartmentErrors() {
            const errors = []
            if (!this.$v.form.department.$dirty) return errors
            !this.$v.form.department.required && errors.push('You must agree to continue!')
            return errors
        },
        forminsuredErrors() {
            const errors = []
            if (!this.$v.form.insured.$dirty) return errors
            !this.$v.form.insured.required && errors.push('You must agree to continue!')
            return errors
        },
        formcontractorErrors() {
            const errors = []
            if (!this.$v.form.contractor.$dirty) return errors
            !this.$v.form.contractor.required && errors.push('You must agree to continue!')
            return errors
        },
        formbunryu1Errors() {
            const errors = []
            if (!this.$v.form.bunryu1.$dirty) return errors
            !this.$v.form.bunryu1.required && errors.push('You must agree to continue!')
            return errors
        },
        formbunryu2Errors() {
            const errors = []
            if (!this.$v.form.bunryu2.$dirty) return errors
            !this.$v.form.bunryu2.required && errors.push('You must agree to continue!')
            return errors
        },
        formsagoDateErrors() {
            const errors = []
            if (!this.$v.form.sagoDate.$dirty) return errors
            !this.$v.form.sagoDate.required && errors.push('You must agree to continue!')
            return errors
        },
        formestimatedLossErrors() {
            const errors = []
            if (!this.$v.form.estimatedLoss.$dirty) return errors
            !this.$v.form.estimatedLoss.required && errors.push('You must agree to continue!')
            return errors
        },
        // 1st form Errors
        form2managerErrors() {
            const errors = []
            if (!this.$v.form2.manager.$dirty) return errors
            !this.$v.form2.manager.required && errors.push('You must agree to continue!')
            return errors
        },
        form2wiimDateErrors() {
            const errors = []
            if (!this.$v.form2.wiimDate.$dirty) return errors
            !this.$v.form2.wiimDate.required && errors.push('You must agree to continue!')
            return errors
        },
        form2sagoNumErrors() {
            const errors = []
            if (!this.$v.form2.sagoNum.$dirty) return errors
            !this.$v.form2.sagoNum.required && errors.push('You must agree to continue!')
            return errors
        },
        form2departmentErrors() {
            const errors = []
            if (!this.$v.form2.department.$dirty) return errors
            !this.$v.form2.department.required && errors.push('You must agree to continue!')
            return errors
        },
        form2receptionClassErrors() {
            const errors = []
            if (!this.$v.form2.receptionClass.$dirty) return errors
            !this.$v.form2.receptionClass.required && errors.push('You must agree to continue!')
            return errors
        },
        form2surveyClassErrors() {
            const errors = []
            if (!this.$v.form2.surveyClass.$dirty) return errors
            !this.$v.form2.surveyClass.required && errors.push('You must agree to continue!')
            return errors
        },
        form2bunryu1Errors() {
            const errors = []
            if (!this.$v.form2.bunryu1.$dirty) return errors
            !this.$v.form2.bunryu1.required && errors.push('You must agree to continue!')
            return errors
        },
        form2bunryu2Errors() {
            const errors = []
            if (!this.$v.form2.bunryu2.$dirty) return errors
            !this.$v.form2.bunryu2.required && errors.push('You must agree to continue!')
            return errors
        },
        form2sagoDateErrors() {
            const errors = []
            if (!this.$v.form2.sagoDate.$dirty) return errors
            !this.$v.form2.sagoDate.required && errors.push('You must agree to continue!')
            return errors
        },
        form2contractorErrors() {
            const errors = []
            if (!this.$v.form2.contractor.$dirty) return errors
            !this.$v.form2.contractor.required && errors.push('You must agree to continue!')
            return errors
        },
        //
        // checkboxErrors () {
        //     const errors = []
        //     if (!this.$v.checkbox.$dirty) return errors
        //     !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        //     return errors
        // },
        // selectErrors () {
        //     const errors = []
        //     if (!this.$v.select.$dirty) return errors
        //     !this.$v.select.required && errors.push('Item is required')
        //     return errors
        // },
        // nameErrors () {
        //     const errors = []
        //     if (!this.$v.name.$dirty) return errors
        //     !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        //     !this.$v.name.required && errors.push('Name is required.')
        //     return errors
        // },
        // emailErrors () {
        //     const errors = []
        //     if (!this.$v.email.$dirty) return errors
        //     !this.$v.email.email && errors.push('Must be valid e-mail')
        //     !this.$v.email.required && errors.push('E-mail is required')
        //     return errors
        // },
    },

    methods: {
        submit () {
            this.$v.$touch()
        },
        clear () {
            this.$v.$reset()
        },
    },
}