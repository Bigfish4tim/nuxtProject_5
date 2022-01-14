export default {
    data() {
        return {
            mode: 'create',
            dialog: false,
            form: {},
            formInit: {},
            form2: {},
            formInit2: {},
        }
    },
    mounted() {
        this.formInit = this.cloneObject(this.form)
        this.formInit2 = this.cloneObject(this.form2)
        this.read()
    },
    methods: {
        cloneObject(obj) {
            var clone = {};
            for (var key in obj) {
                if (typeof obj[key] == "object" && obj[key] != null) {
                clone[key] = cloneObject(obj[key]);
                } else {
                clone[key] = obj[key];
                }
            }
            return clone;
        },
        openDialog(mode, sel) {
            this.mode = mode
            if (mode === 'create') {
                this.form = this.cloneObject(this.formInit)
            } else {
                this.form.title = sel.title
                this.form.content = sel.content
                this.selectedItem = sel
            }
            this.dialog = true
        },
        async create() {
            const item = Object.assign(this.form)
            item.createAt = new Date().toLocaleString()
            item.id = this.items.length + 1
            // // firestore db
            // await this.$db.collection('boards').add(item)


            await this.$rdb.ref('users/' + item.id).set(item)


            this.dialog = false
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
                const item = {
                    id: ro.id,
                    createAt: ro.createAt,
                    title: ro.title,
                    content: ro.content
                }
                this.items.push(item)
            })
        },
        async update() {
            // await this.$db.collection('boards').doc(this.selectedItem.id).update(this.form)
            const b = {
                id: this.selectedItem.id,
                createAt: this.selectedItem.createAt,
                title: this.form.title,
                content: this.form.content
            }
            await this.$rdb.ref('users/' + this.selectedItem.id).update(b)
            this.dialog = false
            await this.read()
        },
        async remove(p) {
            // await this.$db.collection('boards').doc(p.id).delete()

            await this.$rdb.ref('users/' + p.id).remove()

            await this.read()
        },
    },
}