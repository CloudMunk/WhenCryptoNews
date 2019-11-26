<template>
  <v-container> 
   <v-layout wrap>
     <v-flex xs12 sm12 md6 lg6 xl6>

                              <!-- MAKE WALLET GUIDE CRYPTOCURRENCY WALLET -->
         <h1 class="mt-3">Bitcoin & Cryptocurrency Guides</h1>
           <v-card
              class="card mt-5"
              max-width="400"
            >
              <v-img
                class="white--text"
                height="200px"
                src="https://i.imgur.com/gqGaSdy.png"
              >
              </v-img>
            <v-card-title>
              <div>
                <h3 class="white--text">Bitocoin 101</h3>
              </div>
            </v-card-title>
              <v-card-actions>
                <router-link :to="'/bitcoin'" class="textDeco">
                  <v-btn
                    text
                    flat
                    color="orange"
                  >
                    Read More
                  </v-btn>
                </router-link>
              </v-card-actions>
          </v-card>
          <!------------ Ethereum ----------------->
          <v-card
              class="card mt-5"
              max-width="400"
            >
              <v-img
                class="white--text"
                height="200px"
                src="https://i.imgur.com/H66ebKd.png"
              >
               
              </v-img>
            <v-card-title>
              <div>
                <h3 class="white--text">Ethereum 101</h3>
              </div>
            </v-card-title>
              <v-card-actions>
                <router-link :to="'/ethereum'" class="textDeco">
                  <v-btn
                    text
                    flat
                    color="orange"
                  >
                    Read More
                  </v-btn>
                </router-link>
              </v-card-actions>
          </v-card>
     </v-flex>
     <v-flex xs12 sm12 md6 lg6 xl6>
         <h1 class="mt-5">History</h1>
         <!------------- History of Money -------------->
         <v-card
              class="card mt-3"
              max-width="400"
            >
              <v-img
                class="white--text"
                height="200px"
                src="https://i.imgur.com/lazG5SX.png"
              >
             
              </v-img>
            <v-card-title>
              <div>
                <h3 class="white--text">Before & after DAPS Goes live</h3>
              </div>
            </v-card-title>
              <v-card-actions>
                <router-link :to="'/history'" class="textDeco">
                  <v-btn
                    text
                    flat
                    color="orange"
                  >
                    Read More
                  </v-btn>
                </router-link>
              </v-card-actions>
          </v-card>
         <!----------- Crypto Currencies 101 --------------->
            <v-card
              class="card mt-5"
              max-width="400"
            >
              <v-img
                class="white--text"
                height="200px"
                src="https://i.imgur.com/Sal84K3.png"
              >
               
              </v-img>
            <v-card-title>
              <div>
                <h3 class="white--text"> Privacy & The Battles that lie ahead</h3>
              </div>
            </v-card-title>
              <v-card-actions>
                <router-link :to="'/cryptos'" class="textDeco">
                  <v-btn
                    text
                    flat
                    color="orange"
                  >
                    Read More
                  </v-btn>
                </router-link>
              </v-card-actions>
          </v-card>
     </v-flex>
   </v-layout>
  </v-container>
</template>

<script>


  export default {
    components: {
        
    }
  }
</script>

<style scoped>
.textDeco {
  text-decoration: none;
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
</style>