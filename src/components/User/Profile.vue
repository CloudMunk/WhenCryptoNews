<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h1>Welcome to your profile!</h1>
                <v-layout class="mt-4 mb-4">
                    <v-avatar class="mb-3 mt-3">
                    <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                    >
                    </v-avatar>
                    <h3 class="ml-3 mt-4">Your Name here</h3>
                </v-layout>
                <v-card> 
                    <v-card class="pb-3 pt-2">
                        <v-layout>
                            <v-flex xs3 sm3 md3 lg3 xl3>
                                <h2 class="pl-3 mb-2">Articles Published</h2>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>Title of article</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>Date Published</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>Last edited</h3>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs3 sm3 md3 lg3 xl3 >
                                <h3 class="pl-3">Your name here</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>This is a title</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>14/05-2020</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>17/05-2020</h3>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs3 sm3 md3 lg3 xl3>
                                <h3 class="pl-3">Your name here</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>This is a title</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>14/05-2020</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>17/05-2020</h3>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs3 sm3 md3 lg3 xl3>
                                <h3 class="pl-3">Your name here</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>This is a title</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>14/05-2020</h3>
                            </v-flex>
                            <v-flex class="mt-1" xs3 sm3 md3 lg3 xl3>
                                <h3>17/05-2020</h3>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    
                </v-card>
                <v-btn v-if="userIsCreator" to="/createArticles/new" color="primary" class="mt-4">Create Article</v-btn>
                <v-btn v-if="userIsCreator" to="/createArticles/new" color="primary" class="mt-4">Edit Profile</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    computed: {
        userIsAuthenticated () {
            return this.$store.getters.user !== 0 && this.$store.getters.user !== undefined
        },
        userIsCreator () {
            if (!this.userIsAuthenticated) {
                return false
            } 
            return this.$store.getters.user.id == 'hZtMxe18ItXirTI8Wxvm2C3bfpe2'
        }
    }
}
</script>

<!-- <v-simple-table dark>
    <thead>
        <tr>
            <th class="ml-5 mr-2">Articles Published</th>
            <th class="ml-2 mr-2">Title of article</th>
            <th class="ml-2 mr-2">Date Published</th>
            <th class="ml-2 mr-2">Last edited</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name of Author</td>
            <td>Title of article</td>
            <td> 14/05-2020</td>
            <td>17/05-2020</td>
        </tr>
    </tbody>
</v-simple-table>   -->