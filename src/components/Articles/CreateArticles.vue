<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm4>
                <h1>Create a new Article</h1>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <form @submit.prevent="onCreateArticle">
                    <v-layout xs12 sm6 offset-sm3>
                        <v-textarea
                            name="title"
                            label="Title"
                            id="title"
                            v-model="title"
                            required
                        >
                        </v-textarea>
                    </v-layout>
                    <v-layout xs12 sm6 offset-sm3>
                        <v-textarea
                            name="author"
                            label="Author"
                            id="author"
                            v-model="author"
                            required
                        >
                        </v-textarea>
                    </v-layout>
                    <v-layout xs12 sm6 offset-sm3>
                        <v-btn 
                            @click="onPickFile" 
                            raised 
                            color="#39585E" 
                            class="txtColor"
                        >
                            Upload Image
                        </v-btn>
                        <input 
                            type="file" 
                            style="display: none" 
                            ref="fileInput" 
                            accept="image/*"
                            @change="onFilePicked"
                        >
                    </v-layout>
                    <v-layout xs12 sm6 offset-sm3>
                        <img :src="imageUrl" height="200px" >
                    </v-layout>
                    <v-layout xs12 sm6 offset-sm3>
                        <v-textarea
                            name="header"
                            label="Header"
                            id="header"
                            v-model="header"
                            required
                        >
                        </v-textarea>
                    </v-layout>
                    <br>
                    <v-layout xs12 sm6 offset-sm3>
                        <quill-editor   
                            v-model="content"
                            ref="myQuillEditor"
                            id="content"
                            label="Content"
                            name="content"
                        >
                        </quill-editor>
                        <!-- <v-textarea
                            name="content"
                            label="Content"
                            id="content"
                            v-model="content"
                            multi-line
                            required
                            class="editable"
                        >
                        </v-textarea> -->
                    </v-layout>
                    <v-layout row xs12 sm6>
                        <v-btn
                            type="submit"
                            class="primary" 
                            :disabled="!formIsValid"
                        >
                            Create Article
                        </v-btn>
                    </v-layout>
                    
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
        components: {
        quillEditor
    },
    data () {
        return {
            title: '',
            author: '',
            imageUrl: '',
            header: '',
            content: '',
            date: new Date(),
            image: null
        }
    },
    computed: {
        // Checks if all the data is valid in the form
        formIsValid() {
            return this.title !== '' && 
            this.author !== '' && 
            this.imageUrl !== '' && 
            this.header !== '' && 
            this.content !== ''
        },
        editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods: {
        onCreateArticle() {
            if(!this.formIsValid) {
                return
            }
            if(!this.image) {
                return
            }
            const articleData = {
                title: this.title,
                author: this.author,
                image: this.image,
                header: this.header,
                content: this.content,
                date: new Date()
            }
            this.$store.dispatch('createArticle', articleData)
            this.$router.push('/')
        },
        onPickFile () {
            // Clicks the button hidden in the DOM on behalf of the v-btn button
            this.$refs.fileInput.click()
        },
        onFilePicked (event) {
            const files = event.target.files
            let filename = files[0].name;
            if (filename.lastIndexOf('.') <= 0){
                return alert('Please add a valid file!')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        },
        onEditorBlur(quill) {
        console.log('editor blur!', quill)
        },
        onEditorFocus(quill) {
            console.log('editor focus!', quill)
        },
        onEditorReady(quill) {
            console.log('editor ready!', quill)
        },
        onEditorChange({ quill, html, text }) {
            console.log('editor change!', quill, html, text)
            this.content = html
        }  
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
    }
}
</script>

<style>
.txtColor {
  color: #4FE2FD !important;
}
</style>
