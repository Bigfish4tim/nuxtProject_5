<template>
    <v-container>
        <v-card>
            <v-card-title>
                crud test
            </v-card-title>
            <v-data-table 
            :headers="headers" 
            :items="items" 
            class="elevattion-10" 
            >
                <!-- <template #items="props">
                    <td>{{ props.item.id }}</td>
                    <td>{{ props.item.createAt }}</td>
                    <td>{{ props.item.title }}</td>
                    <td>{{ props.item.content }}</td>
                    <td>
                        <v-btn outline fab small @click="openDialog('update', props.item)"
                            ><v-icon>facebook</v-icon>
                        </v-btn>
                        <v-btn outline fab small @click="remove"><v-icon>delete</v-icon></v-btn>
                    </td>
                </template> -->
                <template #item.title="{ item }">
                    <v-card-actions>
                        <v-card-text class="cursor_pointer" @click="openDialog('update', item)">
                            {{ item.title }}
                        </v-card-text>               
                    </v-card-actions>
                </template>
                <template #item.actions="{ item }">
                    <v-card-actions>
                        <v-btn outlined fab small @click="openDialog('update', item)"><v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                        <v-btn outlined fab small @click="remove(item)"><v-icon>mdi-delete</v-icon></v-btn>
                    </v-card-actions>
                </template>
            </v-data-table>
            <v-card-actions>
                <v-spacer />
                <v-btn @click="openDialog('create')">글쓰기</v-btn>
            </v-card-actions>
            <v-dialog v-model="dialog">
                <v-card>
                    <v-card-title>작성 및 수정</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="form.title" label="title"></v-text-field>
                            <v-textarea v-model="form.content"></v-textarea>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn v-if="mode === 'create'" @click="create">작성</v-btn>
                        <v-btn v-else @click="update">수정</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
    </v-container>
</template>

<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
<script>
export default {
    data() {
        return {
            dialog: false,
            mode: 'create',
            form: {
                id: '',
                createAt: '',
                title: '',
                content: '',
            },
            form2: {},
            headers: [
                { value: 'id', text: 'id' },
                { value: 'createAt', text: '작성 날짜' },
                { value: 'title', text: '제목' },
                { value: 'content', text: '내용' },
                { value: 'actions', text: '기능' },
            ],
            items: [],
            selectedItem: null,
        }
    },
    mounted() {

        this.form2 = this.cloneObject(this.form)
        console.log('/////crud function mounted...')

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
                // this.form.title = ''
                // this.form.content = ''
                this.form = this.cloneObject(this.form2)
                console.log(this.form2)
                console.log(this.form)
            } else {
                this.form = this.cloneObject(sel)
                // this.form.title = sel.title
                // this.form.content = sel.content
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
                // const item = {
                //     id: ro.id,
                //     createAt: ro.createAt,
                //     title: ro.title,
                //     content: ro.content
                // }
                const item = Object.assign(ro)
                console.log('/////d////')
                console.log(d)
                console.log('/////ro////')
                console.log(ro)
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
            const b = Object.assign(this.form)
            b.createAt = this.selectedItem.createAt
            b.id = this.selectedItem.id
            await this.$rdb.ref('users/' + this.selectedItem.id).update(b)
            this.dialog = false
            await this.read()
        },
        async remove(p) {
            // await this.$db.collection('boards').doc(p.id).delete()

            await this.$rdb.ref('users/' + p.id).remove()

            await this.read()
        },
        handleClick() {
            console.log('click!!')
        }
        // function: writeNewPost(uid, username, picture, title, body) {
        //     // A post entry.
        //     var postData = {
        //         author: username,
        //         uid: uid,
        //         body: body,
        //         title: title,
        //         starCount: 0,
        //         authorPic: picture
        //     };

        //     // Get a key for a new Post.
        //     var newPostKey = firebase.database().ref().child('posts').push().key;

        //     // Write the new post's data simultaneously in the posts list and the user's post list.
        //     var updates = {};
        //     updates['/posts/' + newPostKey] = postData;
        //     updates['/user-posts/' + uid + '/' + newPostKey] = postData;

        //     return firebase.database().ref().update(updates);
        // }
    }
}
</script>
<style lang="scss">
@import '@/assets/Datatable.scss';

    * {
        text-transform: none !important; 
    } 

    .cursor_pointer {
        cursor: pointer;
    }

</style>