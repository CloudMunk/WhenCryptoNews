<template>

<!-- Push articles a bit down -->
    <v-container>
        <v-layout wrap>
            <v-flex xs12 sm12 md7 lg7 xl7>
                <h1>Contact Us</h1>
                <v-divider
                    class="mt-2"
                    horizontal
                >
                </v-divider>
                <h2 class="mt-4">Contact us</h2>
                <p class="mt-3">
                    For general enquiries, business opportunitites, to become a writer, or for advertising opportunitites please 
                    contact us through <strong> whencryptonews@gmail.com</strong>
                </p>
                
                    
           
            </v-flex>
         
                                        <!-- CARDS -->
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
            <v-flex xs12 sm4 md4 lg4 xl4 ml-5>
                <twitter-component></twitter-component>
            </v-flex>
        </v-layout>
        <!-- <v-layout>
            <v-flex xs12 sm4 md4 lg4 xl4 ml-5>
                <twitter-component></twitter-component>
            </v-flex>
        </v-layout> -->
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
        this.$store.dispatch('loadArticles'),
        window.twttr = (function(d, s, id) {
        console.log('Fired Twitter contact created');
            var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function(f) {
            t._e.push(f);
            };
            return t;
        }(document, "script", "twitter-wjs"));
        console.log('Finished Twitter contact created');
    }
}
</script>

<style scoped>
.line {
    width: 55%;
}
.textDeco {
    text-decoration: none;
}
</style>