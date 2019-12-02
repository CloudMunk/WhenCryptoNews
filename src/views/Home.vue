<template>

 <v-container  >
   <v-layout >
     <v-flex xs12 sm12 md12 lg12 xl12>
      <v-carousel
          cycle
          height="500"
          hide-delimiter-background
          show-arrows-on-hover
        >
            <v-carousel-item
              v-for="article in allArticles.slice(0, 3)"
              :key="article.id"
              :src="article.imageUrl" 
                           
            >
            <router-link :to="'/article/' + article.id" class="carouselItemLink">
              <v-flex
                align-self="end"
              >
                <h1 class="display-1 white--text box">{{ article.title }}</h1>
                <div class="testButton">
                  <!-- <v-btn :to="'/article/' + article.id" class="btnColor" color="orange">Read More</v-btn> -->
                </div>        
              </v-flex>
            </router-link>
            </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12 sm12 md3 lg3 xl3>

      </v-flex>
   </v-layout>
                               <!-- SPONSORED ARTICLES/PRESS RELEASES -->
  <v-layout class="mt-4">
    <h2>Press Releases</h2>
  </v-layout>
   <v-layout class="mt-2 mb-3" wrap>
      
      <v-flex xs12 sm12 md6 lg6 xl6 row>
        
          <v-card 
            min-width="100%" 
            class="pb-2"
          >
          <router-link :to="'/article/' + allArticles[0].id" class="textDeco">
            <v-flex>
              <v-img
                height="90px"
                min-width="100px !important"
                max-width="100px !important"
                :src="allArticles[0].imageUrl"
              >
              </v-img>
              <v-card-title>
                <h4 class="black--text">
                  {{ allArticles[0].title }}
                </h4>
              </v-card-title>    
            </v-flex>
          </router-link>
          </v-card>     
      </v-flex>
     
      <v-flex xs12 sm12 md6 lg6 xl6>
          <v-card 
            min-width="100%" 
            class="pb-2"
          >
          <router-link :to="'/article/' + allArticles[1].id" class="textDeco">
            <v-flex>
              <v-img 
                :src="allArticles[1].imageUrl"
                height="90px"
                max-width="100px"
              >
              </v-img>
              <v-card-title>
                <h4 class="black--text">
                  {{ allArticles[1].title }}
                </h4>
              </v-card-title> 
            </v-flex>
          </router-link>
          </v-card>
      </v-flex>

   </v-layout>
                          <!-- SECTION CARD AND LIST RECENT ARTICLES -->
   <v-layout wrap  justify-space-between>
     <v-flex xs12 sm12 md7 lg7 xl7
      v-for="article in allArticles.slice(3, 4)"
      :key="article.id"
      class="mt-5"
     >
     <v-layout column>
      <v-layout column>
        <h2>Editors Pick</h2>
          <v-divider
              horizontal
              class="lineEditors mt-2 mb-3"
          >
          </v-divider>
      </v-layout>
      <v-layout>
       <v-card>
         <v-img 
         aspect-ratio="2"
         v-bind:src="article.imageUrl"
         > 
          <v-layout class="mainCardtitle">
              <v-card-title primary-title>
                <h1  class="white--text">{{ article.title }}</h1>
              </v-card-title>
            <v-card-actions>
                <v-btn :to="'/article/' + article.id" flat color="orange">Read More</v-btn>
              </v-card-actions>
            </v-layout> 
         </v-img>
       </v-card>
      </v-layout>
      </v-layout>
     </v-flex>
     <v-flex xs12 sm12 md4 lg4 xl4 class="mt-5 flexColumn">
                <v-layout column>
                  <h3>Recent Articles</h3>
                    <v-divider
                        horizontal
                        class="line"
                    >
                    </v-divider>
                </v-layout>
                <v-layout>
                  <v-list >
                      <v-list-item-group>
                          <v-list-item
                              v-for="article in allArticles.slice(4, 9)"
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
                </v-layout>
            </v-flex>
      <!-- <v-flex xs12 sm4 md4 lg4 xl4>
        <twitter-component></twitter-component>
     </v-flex>   -->
   </v-layout> 
   <v-layout class="mt-5">
      <v-divider class="mt-3 mb-5"></v-divider>
  </v-layout>
   
                  <!-- SECTION OF CARDS BENEATH EDITORS PICK  -->
   <v-layout wrap justify-space-between reverse class="mb-5">
     
                        <!--      CARDS       -->
      <v-flex  xs12 sm12 md4 lg4 xl4 
         class="maxHeight mb-4 mt-5 mb-2"
         v-for="article in allArticles.slice(1, 7)" 
         :key="article.id"
         justify-start
      >
        <v-card 
          class="card mt-3 mb-3 pb-3" 
          min-height="auto"  
        >
              <v-img 
                class="img" 
                v-bind:src="article.imageUrl" 
              >
              </v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="mb-0 whiteText textSizeCards">{{ article.title }}</h3>
              </div>
            </v-card-title>
            <v-card-title>
              <div>
                <h5 class="grey--text">Published: {{ article.date }}</h5>
              </div>
              </v-card-title>
              <v-card-title>
              <div>
                <h5 class="grey--text">By: {{ article.author }}</h5>
              </div>
            </v-card-title>
            <v-card-actions>
             
              <v-btn :to="'/article/' + article.id" flat color="orange">Read More</v-btn>
            </v-card-actions>
          </v-card>
      </v-flex>
   </v-layout>

                          <!-- LIST OF ARTICLES BIG SCREENS (MD AND UP) -->
  <v-layout class="mt-4">
      <v-divider class="mt-3 mb-5"></v-divider>
  </v-layout>
   <v-layout class="hidden-sm-and-down">
      <v-flex xs12 sm12 md8 lg8 xl8>
        <v-list>
          <v-list-item-group>
              <v-list-item
                  v-for="article in allArticles.slice(0, 5)"
                  :key="article.id"
                  class="mb-2 mt-2"
              >
              <router-link :to="'/article/' + article.id" class="textDeco">
                  <v-card
                      class="mx-auto mt-2 mb-2"
                      max-width="900"
                  >
                  <v-layout row>
                      <v-img 
                          class="img" 
                          v-bind:src="article.imageUrl" 
                          max-height="200px"
                          min-width="260px"
                          max-width="260px"
                      >
                      </v-img>
                      <v-card-title primary-title >
                              <h4>{{ article.title }}</h4>
                      </v-card-title>
                  </v-layout>
                  </v-card>
              </router-link>
            </v-list-item>
          </v-list-item-group>   
        </v-list>
      </v-flex>
      <v-flex xs12 sm12 md4 lg4 xl4 column class="ml-5">
        <v-layout column>
          <h2>Follow us on social media</h2>
          <v-divider
            horizontal
            class="mt-2 mb-4"
          >
          </v-divider>
                                    <!-- FOLLOW US FACEBOOK CARD  -->
          <a href="https://www.facebook.com/When-Crypto-News-113815890008127" target="_blank" class="textDeco">
            <v-card
              class="cardBackgroundImage mt-2"
              height="100px"
            >
              <v-layout row class="centerThem">
                <v-icon class="white--text ml-3 mt-4 pl-3 pt-2 zheIcon" large>fab fa-facebook-square</v-icon>
                <h3 class="ml-4 mt-4 white--text rubik pt-3"><strong>FACEBOOK</strong></h3>
              </v-layout>
            </v-card>
          </a>
                                    <!-- FOLLOW US TWITTER CARD  -->
          <a href="https://twitter.com/WhenCryptoNews" target="_blank" class="textDeco">
            <v-card
              class="cardBackgroundImage mt-2"
              height="100px"
            >
              <v-layout row class="centerThem">
                <v-icon class="white--text ml-3 mt-4 pl-3 pt-2 zheIcon" large>fab fa-twitter</v-icon>
                <h3 class="ml-4 mt-4 white--text rubik pt-3"><strong>TWITTER</strong></h3>
              </v-layout>
            </v-card>
          </a>
                                    <!-- FOLLOW US YOUTUBE CARD  -->
          <a href="https://www.youtube.com/channel/UCc-jzO1qH7GiHmYyBvptukg?view_as=subscriber" target="_blank" class="textDeco">
            <v-card
              class="youTubeIcon mt-2"
              height="100px"
            >
              <v-layout row class="centerThem">
                <v-icon class="white--text ml-3 mt-4 pl-3 pt-2 zheIcon" large>fab fa-youtube</v-icon>
                <h3 class="ml-4 mt-4 white--text rubik pt-3"><strong>YOUTUBE</strong></h3>
              </v-layout>
            </v-card>
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
                  <!-- LIST OF ARTICLES SMALL SCREENS (MD AND DOWN) -->
    <v-layout class="hidden-md-and-up" wrap>
      <v-flex xs12 sm12 md8 lg8 xl8>
        <v-list>
          <v-list-item-group>
              <v-list-item
                  v-for="article in allArticles.slice(0, 5)"
                  :key="article.id"
                  class="mb-2 mt-2"
              >
              <router-link :to="'/article/' + article.id" class="textDeco">
                  <v-card
                      class="mx-auto mt-2 mb-2"
                      max-width="900"
                      max-height="150px"
                  >
                  <v-layout row>
                      <v-img 
                          class="img" 
                          v-bind:src="article.imageUrl" 
                          max-height="150px"
                          min-width="150px"
                          max-width="150px"
                      >
                      </v-img>
                      <v-card-title primary-title >
                              <h4>{{ article.title }}</h4>
                      </v-card-title>
                  </v-layout>
                  </v-card>
              </router-link>
            </v-list-item>
          </v-list-item-group>   
        </v-list>
      </v-flex>
      <v-flex xs12 sm12 md4 lg4 xl4 column class="ml-2 mr-3">
        <v-layout column>
          <h2>Follow us on social media</h2>
          <v-divider
            horizontal
            class="mt-2 mb-4"
          >
          </v-divider>
                                    <!-- FOLLOW US FACEBOOK CARD  -->
          <a href="https://www.facebook.com/When-Crypto-News-113815890008127" target="_blank" class="textDeco">
            <v-card
              class="cardBackgroundImage mt-2"
              height="100px"
              width="320px"
            >
              <v-layout row class="centerThem">
                <v-icon class="white--text ml-3 mt-4 pl-3 pt-2 zheIcon" large>fab fa-facebook-square</v-icon>
                <h3 class="ml-4 mt-4 white--text rubik pt-3"><strong>FACEBOOK</strong></h3>
              </v-layout>
            </v-card>
          </a>
                                    <!-- FOLLOW US TWITTER CARD  -->
          <a href="https://twitter.com/WhenCryptoNews" target="_blank" class="textDeco">
            <v-card
              class="cardBackgroundImage mt-2"
              height="100px"
              width="320px"
            >
              <v-layout row class="centerThem">
                <v-icon class="white--text ml-3 mt-4 pl-3 pt-2 zheIcon" large>fab fa-twitter</v-icon>
                <h3 class="ml-4 mt-4 white--text rubik pt-3"><strong>TWITTER</strong></h3>
              </v-layout>
            </v-card>
          </a>
                                    <!-- FOLLOW US YOUTUBE CARD  -->
          <a href="https://www.youtube.com/channel/UCc-jzO1qH7GiHmYyBvptukg?view_as=subscriber" target="_blank" class="textDeco">
            <v-card
              class="youTubeIcon mt-2"
              height="100px"
              width="320px"
            >
              <v-layout row class="centerThem">
                <v-icon class="white--text ml-3 mt-4 pl-3 pt-2 zheIcon" large>fab fa-youtube</v-icon>
                <h3 class="ml-4 mt-4 white--text rubik pt-3"><strong>YOUTUBE</strong></h3>
              </v-layout>
            </v-card>
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
 </v-container>

 
</template>

<script>
// import Adsense from 'vue-google-adsense/dist/Adsense.min.js'
import { get } from 'lodash'
// import PageTitle from "@/components/PageTitle.vue";

  export default { 
    data () {
      articles = []
    },
      components: {
        // PageTitle
        // articles
    }, 
    computed: {
      // ...mapState(['loadedArticles']),
      allArticles () {
          return this.$store.state.loadAllArticlesFlamelink;
      }
      // firstArticleReversed () {
      //   return this.allArticles;
      // }
    },
    created () {  
    },
    mounted () {
      this.$store.dispatch('loadArticles')
      this.$flamelinkApp.content.get('articles', articlesData => {
        
         this.articles = get(articlesData, "pageTitle", "")
      })
    },
    
  }  
</script>


<style scoped>
.cardBackgroundImage:hover .zheIcon {
  transform: scale(1.4);
}
.youTubeIcon:hover .zheIcon {
  transform: scale(1.4);
}
.youTubeIcon {
  background: -moz-linear-gradient(0deg, rgba(255,110,110,1) 0%, rgba(255,11,11,1) 90%, rgba(255,0,0,1) 100%);
  background: -webkit-linear-gradient(0deg, rgba(255,110,110,1) 0%, rgba(255,11,11,1) 90%, rgba(255,0,0,1) 100%);
  background: -o-linear-gradient(0deg, rgba(255,110,110,1) 0%, rgba(255,11,11,1) 90%, rgba(255,0,0,1) 100%);
  background: -ms-linear-gradient(0deg, rgba(255,110,110,1) 0%, rgba(255,11,11,1) 90%, rgba(255,0,0,1) 100%);
  background: linear-gradient(90deg, rgba(255,110,110,1) 0%, rgba(255,11,11,1) 90%, rgba(255,0,0,1) 100%);
}
.rubik {
  font-family: 'Rubik', sans-serif;
}
.cardBackgroundImage {
  background: linear-gradient(284.63deg, #5C9BD6 20.72%, #2171BB 99.49%);
}
.flexColumn {
  display: flex;
  flex-direction: column;
}
.line {
    width: 75%;
}
.lineEditors {
  width: 100%;
}
.textDeco {
  text-decoration: none !important;
}
.flex {
  display: flex;
  align-items: flex-start;
  /* max-height: 90px; */
}
.carouselItemLink {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100% - 50px);
  z-index: 10;
  text-decoration: none;
}
.btnColor {
  color: black;
}
.testButton {
  position: absolute;
  bottom: 0;
  z-index: 1;
  bottom: 50px;
  right: 0;
}
  .box {
    background-color: rgba(0, 0, 0, 0.7);
    font-family: 'Roboto Condensed','sans-serif' !important;
  }
  /* .marginTop {
    margin-top: 63px !important;
  } */
  .img {
     height: 150px;
  }
  .card {
    width: 275px;
    height: auto;
    /* margin-right: 10px;
    margin-left: 10px;
    margin-top: 30px;
    margin-bottom: 20px; */
    -webkit-box-shadow: 6px 7px 5px 0px rgba(166,163,166,1);
    -moz-box-shadow: 6px 7px 5px 0px rgba(166,163,166,1);
    box-shadow: 6px 7px 5px 0px rgb(20, 20, 20);
    background-color: #162937;
  }
  .whiteText {
    color: white;
  }
  .textCoolor {
  color: #4FE2FD !important;
  
}
  .textColor {
  color: rgb(29, 161, 242)  !important;
  text-decoration: underline black;
}
.column {
  width: 50%;
}
.mainCardtitle {
  margin-top: 400px;
  background-color: black;
  width: auto;
}
.textSizeCards {
  font-size: 1.2rem;
}
.maxHeight {
  max-height: 420px;
}
.maxTopHeight {
  max-height: 500px;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
/* .foldBackground {
background: rgb(125,185,232) !important; 
background: -moz-linear-gradient(top,  rgba(125,185,232,1) 0%, rgba(32,124,202,1) 2%, rgba(0,21,34,1) 100%) !important; 
background: -webkit-linear-gradient(top,  rgba(125,185,232,1) 0%,rgba(32,124,202,1) 2%,rgba(0,21,34,1) 100%) !important; 
background: linear-gradient(to bottom,  rgba(125,185,232,1) 0%,rgba(32,124,202,1) 2%,rgba(0,21,34,1) 100%) !important; 
} */
</style>

