const clonedeep = require("lodash.clonedeep")

export default {
    data() {
        return {
            mode: 'create',
            // dialog: false,
            // form: {},
            // formInit: {},
            // form2: {},
            // formInit2: {},
            selectedItem: null,
        }
    },
    mounted() {
        console.log('/////crud function mounted...')
        // this.formInit = this.cloneObject(this.form)
        // this.formInit2 = this.cloneObject(this.form2)
        this.formInit = clonedeep(this.form)
        this.formInit2 = clonedeep(this.form2)
        this.read()
    },
    methods: {
        onScroll(e) {
            e.target.scrollTop = 0
        },
        openDialog(mode, sel) {
            this.mode = mode
            if (mode === 'create') {
                // this.form = this.cloneObject(this.formInit)
                // var scroll = document.getElementById('scroll-target')
                // var scroll = document.getElementsByClassName('v-dialog v-dialog--active v-dialog--persistent')
                // var scroll2 = document.getElementsByClassName('v-dialog__content v-dialog__content--active')
                // var scroll3 = document.getElementsByClassName('v-card v-sheet theme--light')
                // var scroll4 = document.getElementsByClassName('v-dialog--active')
                // var ssc = document.getElementById('sssccrr')
                // console.log(scroll)
                // console.log(scroll2)
                // console.log(scroll3)
                // console.log(scroll4)
                // console.log(ssc)
                // scroll.scrollTop = 0
                // scroll4.scrollTop = 0
                console.log('create 1 /////')

                this.$v.$reset()
                this.form = clonedeep(this.formInit)
            } else if(mode === 'create2') {
                
                console.log('create 2 /////')
                this.$v.$reset()
                this.form2 = clonedeep(this.formInit2)
            } else if(mode === 'update' && sel.species == 4) {
                // this.form.title = sel.title
                // this.form.content = sel.content
                // this.form = this.cloneObject(sel)
                this.form = clonedeep(sel)
                this.selectedItem = sel
                this.dialog = true
            } else {
                this.form2 = clonedeep(sel)
                this.selectedItem = sel
                this.dialog2 = true
            }
        },
        async create(mode) {
            if (mode === 'create') {
                const item = Object.assign(this.form)
                item.createAt = new Date().toLocaleString()
                item.id = this.items.length + 1
                // // firestore db
                // await this.$db.collection('boards').add(item)

                await this.$rdb.ref('users/' + item.id).set(item)

                this.dialog = false
            } else {
                const item = Object.assign(this.form2)
                item.createAt = new Date().toLocaleString()
                item.id = this.items.length + 1
                // // firestore db
                // await this.$db.collection('boards').add(item)

                await this.$rdb.ref('users/' + item.id).set(item)

                this.dialog = false
            }
            
            await this.read()
        },
        async read() {
            // const s = await this.$db.collection('boards').get()
            // this.items = []
            // s.forEach(d => {
            //     const r = d.data()
            //     const item = {
            //         id: d.id,
            //         createAt: r.createAt.toDate().toLocaleString(),
            //         title: r.title,
            //         content: r.content
            //     }
            //     this.items.push(item)
            // })

            const sn = await this.$rdb.ref('users/').get()
            this.items = []
            sn.forEach(d => {
                const ro = d.val()
                // const item = {
                //     id: ro.id,
                //     createAt: ro.createAt,
                //     title: ro.title,
                //     content: ro.content
                // }
                const item = Object.assign(ro)
                this.items.push(item)
            })
        },
        async update() {
            // await this.$db.collection('boards').doc(this.selectedItem.id).update(this.form)
            // const b = {
            //     id: this.selectedItem.id,
            //     createAt: this.selectedItem.createAt,
            //     title: this.form.title,
            //     content: this.form.content
            // }
            if (this.selectedItem.species == 4) {
                const b = Object.assign(this.form)
                b.createAt = this.selectedItem.createAt
                b.id = this.selectedItem.id
                await this.$rdb.ref('users/' + this.selectedItem.id).update(b)
                this.dialog = false
            } else {
                const b = Object.assign(this.form2)
                b.createAt = this.selectedItem.createAt
                b.id = this.selectedItem.id
                await this.$rdb.ref('users/' + this.selectedItem.id).update(b)
                this.dialog = false
            }
            await this.read()
        },
        async remove(p) {
            // await this.$db.collection('boards').doc(p.id).delete()

            await this.$rdb.ref('users/' + p.id).remove()

            await this.read()
        },
    },
}