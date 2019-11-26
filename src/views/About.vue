<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-card>
                    <h1 class="mt-5 ml-2 pt-3 pl-3 pr-3">About When Crypto News</h1>
                    <p class="mt-2 ml-2 pl-3 pr-3">
                        Founded in 2019, When Crypto News is looking to become the leading independent digital media 
                        resource covering a wide range of news on blockchain technology, crypto assets, 
                        emerging fintech trends as well as exposing scammers and hacks in the space. 
                        Each day we work to deliver the most relavent and accurate up-to-date news from 
                        both the decentralized and centralized worlds.
                    </p>
                    <p class="mt-2 ml-2 pl-3 pr-3">
                        Our editorial content is based on our passion to deliver unbiased news, in-depth analytics, 
                        comprehensive and insightful opinion pieces, as well as regular 
                        reports on the social transformation that digital currencies bring.
                    </p>
                    <p class="mt-2 ml-2 pl-3 pr-3">
                        We believe that the decentralized world will grow exponentially, becoming an integral part of 
                        our daily lives. We work every day to help educate our readers and raise awareness of the intricacies 
                        and advantages offered in today’s digital revolution.
                    </p>
                    <p class="mt-2 ml-2 pl-3 pr-3">
                        With technology breakthroughs now occurring in fields such as AI, VR, nanotech, quantum computing, 
                        and an increasing number of businesses, entrepreneurs and consumers adopting blockchain technology 
                        in everyday life, we aim to inform, educate, and share valuable information with our readers.
                    </p>
                    <v-divider
                        horizontal
                        inset
                        class="dividerWidth mt-4 mb-4"
                    >
                    </v-divider>
                    <h2 class="mt-3 ml-2 pl-3 pr-3">Get in Touch</h2>
                    <p class="mt-2 ml-2 pb-3 pl-3 pr-3">
                        To get in touch with us please send an e-mail to <strong>whencryptonews@gmail.com</strong>
                    </p>
                </v-card>
                <v-card class="mt-5">
                    <h2 class="ml-3 pt-3 pl-3 pr-3">Our Team</h2>
                    <p class="ml-3 mt-2 pb-3 pl-3 pr-3">
                        We are currently working on expanding and bringing on bright and knowledgeable individuals
                        from the crypto industry. We are looking to be hiring team members from all over the world,
                        and will be offering remote positions only, with payment taking place in crypto currency only.
                        We maintain this 
                        truth: our prerogative, our purpose, our life blood, is the art of truth-telling.
                    </p>
                </v-card>
            </v-flex>
            
        </v-layout>
        <v-layout wrap>
            <v-flex xs7>
                <h1 class="mb-3 underLine">The Team</h1>
                <v-card
                    class="card"
                    max-width="400"
                >
                    <v-img
                        src="https://i.imgur.com/uUPUt2R.jpg"
                        height="200px"
                    >
                    </v-img>
                    <v-card-text
                        class="white--text"
                    >
                        <h2>CEO & Founder</h2>
                        <h3 class="mt-1">Anestis G. Finstad</h3>
                        <p class="mt-2"> Coder | Writer | Entrepreneur </p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4 lg4 xl4 
                class="ml-5"  
            > 
            <h3 class="mt-5 ml-5">Recent Articles</h3>
                <v-divider
                    horizontal
                    class="line ml-3"
                >
                </v-divider>
                <v-list class="mt-2">
                    <v-list-item-group>
                        <v-list-item
                            v-for="article in allArticles.slice(0, 4)"
                            :key="article.id"
                            class="mb-2 mt-2"
                        >
                        <router-link :to="'/article/' + article.id" class="textDeco">
                            <v-card
                                class="mx-auto mt-2 mb-2"
                                max-width="300"
                            >
                            <v-layout row>
                                <v-img 
                                    class="img" 
                                    v-bind:src="article.imageUrl" 
                                    height="auto"
                                    width="80px"
                                >
                                </v-img>
                                <v-card-title primary-title>
                                        <h5>{{ article.title }}</h5>
                                </v-card-title>
                            </v-layout>
                            </v-card>
                        </router-link>
                        
                        </v-list-item>
                    </v-list-item-group>   
                </v-list> 
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
        allArticles () {
          return this.$store.state.loadedArticles;
      },
    },
    mounted () {
        this.$store.dispatch('loadArticles')
    }
}
</script>

<style scoped>
.underLine {
    text-decoration: underline;
}
.card {
    /* margin-right: 10px;
    margin-left: 10px;
    margin-top: 30px;
    margin-bottom: 20px; */
    -webkit-box-shadow: 6px 7px 5px 0px rgba(166,163,166,1);
    -moz-box-shadow: 6px 7px 5px 0px rgba(166,163,166,1);
    box-shadow: 6px 7px 5px 0px rgb(20, 20, 20);
    background-color: #162937;
}
.dividerWidth {
    width: 85%;
}
</style>