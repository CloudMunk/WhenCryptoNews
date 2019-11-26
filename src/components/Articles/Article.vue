<template>
<div>
    <v-flex xs12 sm12 md12 lg12 xl12>
            <v-img
                v-bind:src="article.imageUrl"
                fluid
                aspect-ratio="1"
                class="hidden-md-and-up"
            >
            </v-img>
            <v-img
                v-bind:src="article.imageUrl"
                fluid
                aspect-ratio="3"
                class="hidden-sm-and-down"
            >
            </v-img>
    </v-flex>
    <v-container>
        <v-layout wrap>
            <v-card
                class="fixingCard ml-5 mr-2 hidden-md-and-up"
            >
                <v-img
                  src="https://i.imgur.com/35LUxG6.png"
                  height="170px"
                  min-width="330px"
                  class="imageCont"
                >
                    <v-card-title>
                        <h2 class="mt-3 white--text blackBg pl-2 pr-2 pt-3">{{ article.title }}</h2>
                    </v-card-title>
                </v-img>
            </v-card>
            <v-card
                class="fixingCard ml-5 hidden-sm-and-down"
            >
                <v-img
                  src="https://i.imgur.com/35LUxG6.png"
                  height="14em"
                  max-width="100%"
                  min-width="790px"
                  class="imageCont"
                  
                >
                    <v-card-title>
                        <h1 class="mt-3 white--text blackBg pl-2 pr-2 pt-3">{{ article.title }}</h1>
                    </v-card-title>
                </v-img>
            </v-card>
        </v-layout>
        <v-layout>
            <v-flex xs12 class="marginTop">
                <v-card color="rgb(0,0,0,0)">
                        <v-card-title>
                          <h2> {{ article.header }} </h2>  
                        </v-card-title>
                        <v-card-actions>
                            <v-layout >
                                <v-flex xs2 class="socialButtons">
                                    <v-btn flat target="_blank" :href="myLink">
                                        <v-icon class="blue--text">fab fa-twitter</v-icon>  
                                    </v-btn>
                                    <!-- <h4>Share On Twitter</h4> -->
                                </v-flex>
                                <v-flex xs2 class="socialButtons">
                                    <v-btn flat target="_blank" :href="myLinkFB">
                                        <v-icon class="blue--text">fab fa-facebook-square</v-icon>
                                    </v-btn>
                                </v-flex>
                                <v-flex xs2 class="socialButtons">
                                    <v-btn flat target="_blank" :href="myLinkLinkD">
                                        <v-icon class="blue--text">fab fa-linkedin</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-layout>   
                        </v-card-actions>
                        <v-card-text>
                            <h3>Author: {{ article.author }}</h3>
                            <h5 class="mt-1">Published: {{ article.date }}</h5>
                            <br>
                            <p v-html="rawHtml"> {{ rawHtml=article.content }} </p>
                            <p v-html="rawHtml"></p>
                        </v-card-text>
                        <!-- Only shows this template if user is creator -->
                <template v-if="userIsCreator">
                    <v-spacer></v-spacer>
                    <app-edit-articles-dialog :article="article"></app-edit-articles-dialog>   
                </template>
                </v-card>
                
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
      article () {
         return this.$store.getters.loadedArticlesTwo(this.id);
      },
      userIsAuthenticated () {
          return this.$store.getters.user !== 0 && this.$store.getters.user !== undefined
      },
      userIsCreator () {
          if (!this.userIsAuthenticated) {
              return false
          } 
          return this.$store.getters.user.id == this.article.creatorId || this.$store.getters.user.id == 'hZtMxe18ItXirTI8Wxvm2C3bfpe2'
      },
      myLink () {
          return `http://twitter.com/intent/tweet?status=${this.article.title}+https://www.whencryptonews.com/article/${this.article.id}`    
      },
      myLinkFB () {
          return `http://www.facebook.com/share.php?u=https://www.whencryptonews.com/article/${this.article.id}&title=${this.article.title}`
      },
      myLinkLinkD () {
          return `http://www.linkedin.com/shareArticle?mini=true&url=https://www.whencryptonews.com/article/${this.article.id}&title=${this.article.title}&source=[SOURCE/DOMAIN]`
      }
    },
    created () {
        this.$store.dispatch('loadArticles')
        this.$store.getters.loadedArticlesTwo(this.id)
    }
}
//   const article = this.$store.getters.loadedArticlesTwo(this.id);
//   if (!article) {
//       return null;
//   } 
//   return article
// Source Sans Pro
// Raleway
// Roboto Condensed
</script>


<style scoped>
.socialButtons {
    flex-basis: 1% !important;
}
.blackBg {
    background-color: black;
}
.textAbsolute {
    position: absolute;
}
.imageCont {
    position: relative;
    mix-blend-mode: darken;
    /* background-size: cover; */
    background-color: #19213a;
    object-fit: cover;
}
.marginTop {
    margin-top: -80px;
}
.fixingCard {
    top: -115px;
    right: 50px;
}
/* .imageWidth {
    background: cover;
    width: 100%;
} */
</style>


