<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <v-btn fab accent slot="activator">
            <v-icon>edit</v-icon>
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-tile>Edit Article</v-card-tile>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-textarea
                            name="title"
                            label="Title"
                            v-model="editedTitle"
                            id="title"
                            required
                        >
                        </v-textarea>
                        </v-card-text>
                        <v-textarea
                            name="content"
                            label="Content"
                            v-model="editedContent"
                            id="content"
                            multi-line
                            required
                        >
                        </v-textarea>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-btn 
                                flat
                                class="blue--text darken1"
                                @click="editDialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn 
                                flat 
                                class="blue--text darken1"
                                @click="onSaveChanges"
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['article'],
    data () {
        return {
            editDialog: false,
            editedTitle: this.article.title,
            editedContent: this.article.content
        }
    },
    methods: {
        onSaveChanges () {
            if (this.editedTitle.trim() === '' || this.editedContent.trim() === '') {
                return
            }
            this.editDialog = false
            this.$store.dispatch('updateArticleData', {
                id: this.article.id,
                title: this.editedTitle,
                content: this.editedContent
            })
        }
    }
}
</script>
