<template>

  <v-app class="backgroundColor" >
    <v-content v-show="sideNav == false">
     <router-view></router-view>
    </v-content>
    <v-navigation-drawer 
      v-model="sideNav" 
      class="bgColor" 
      dark
    >
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon class="iconColor">
                {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="textColor">
                {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile 
          v-if="userIsAuthenticated" 
          @click="onLogout"
        >
            <v-list-tile-action>
              <v-icon class="iconColor"> exit_to_app </v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="textColor"> 
              Logout 
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar color="#143035" app height="120px">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-md-and-up"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title>
                         <!-- The Logo -->
        <router-link to="/" tag="span" class="textColor">
          <img src="https://i.imgur.com/euqAhDQ.png" class="marginL" height="76px" width="auto">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-card
            class="mt-4 mr-3"
            max-width="200"
            tile
            flat
            color="#143035"
          >
            <h4 class="coinColor">Bitcoin</h4>
           <h4 class="white--text">$ {{ loadBitcoin ? loadBitcoin.bitcoin.usd : '0'}}</h4>
           <h4 :class="[loadBitcoin.bitcoin.usd_24h_change > 0 ? 'green--text' : 'red--text']">{{ loadBitcoin.bitcoin.usd_24h_change.toFixed(4) + '%' }}</h4>
        </v-card>
        <v-divider vertical class="whiteDivide" inset>
        </v-divider>
        <v-card
            class=" mr-3 ml-3 mt-4"
            max-width="200"
            tile
            flat
            color="#143035"
          >
            <h4 class="coinColor">Ethereum</h4>
           <h4 class="white--text">$ {{ loadEthereum ? loadEthereum.ethereum.usd : '0' }}</h4>
           <h4 :class="[loadEthereum.ethereum.usd_24h_change > 0 ? 'green--text' : 'red--text']">{{ loadEthereum.ethereum.usd_24h_change.toFixed(4) + '%' }}</h4>
        </v-card>
        <v-divider vertical class="whiteDivide" inset>
        </v-divider>
        <v-card
            class="mx-auto mr-3 ml-3 "
            max-width="200"
            tile
            flat
            color="#143035"
          >
            <h4 class="coinColor mr-5 mt-4">DAPS</h4>
           <h4 class="white--text">$ {{ loadDaps ? loadDaps['daps-token'].usd : '0' }}</h4>
           <h4 :class="[loadDaps['daps-token'].usd_24h_change > 0 ? 'green--text' : 'red--text']">{{ loadDaps['daps-token'].usd_24h_change.toFixed(4) + '%' }}</h4>
        </v-card>
         <v-divider vertical class="whiteDivide" inset>
        </v-divider>
        <v-btn 
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          class="buttonColor"
        >
        <v-icon left dark>{{ item.menu  }}</v-icon>
         <h4>{{ item.title }}</h4>
        </v-btn>
        <v-btn 
          flat
          class="textColor"
          v-if="userIsAuthenticated"
          @click="onLogout"
        >
        <v-icon left dark> exit_to_app </v-icon> 
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    

                            <!-- Footer -->
    <v-footer color="#143035" height="auto" class="mt-5" absolute>
      <cookie-law theme="dark-lime"></cookie-law>
      <v-layout>
        <v-flex xs2>
          <!-- <router-link :to="'jobs'" class="textDeco">
            <v-btn flat small class="textColor" ></v-btn>
          </router-link> -->
        </v-flex>
        <v-flex xs3>
          <router-link :to="'about'" class="textDeco">
            <v-btn flat small class="textColor" >About Us</v-btn>
          </router-link>
        </v-flex>
        <v-flex xs3>
          <router-link :to="'/contact'" class="textDeco">
            <v-btn flat small class="textColor">Contact Us</v-btn>
          </router-link>
        </v-flex>
        
        <v-flex xs3>
          <router-link :to="'/press'" class="textDeco">
            <v-btn flat small class="textColor">Submit Press Release</v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import CookieLaw from 'vue-cookie-law'

export default {
  name: 'App',
  components: {
    CookieLaw
  },
  data () {
    return {
      sideNav: false,
    }
  },
  computed: {
    loadBitcoin() {
      const bitcoin = this.$store.getters.bitcoin;

      if (!bitcoin) return null;

      return bitcoin;
    },
    loadEthereum() {
      const ethereum = this.$store.getters.ethereum;

      if (!ethereum) return null;

      return ethereum;
    },
    loadDaps() {
      const daps = this.$store.getters.daps;

      if (!daps) return null;

      return daps;
    },
    menuItems () {
      console.log('menuItems triggered')
      let menuItems =  [
        { icon: 'supervisor_account', title: 'Scams & Hacks', link: '/hacks' },
        { icon: 'book', title: 'Press Releases', link: '/market' },
        { icon: 'person', title: 'Profile', link: '/profile' },
        // { icon: 'face', title: 'Sign Up', link: '/signup' },
        // { icon: 'lock_open', title: 'Sign In', link: '/signin' }
      ]
      if (!this.userIsAuthenticated) {
        console.log('User was authenticated Menu Loaded')
        menuItems = [
          { icon: 'supervisor_account', title: 'Scams & Hacks', link: '/hacks' },
          // { icon: 'book', title: 'Press Releases', link: '/market' },
          { icon: 'book', title: 'Guides', link: '/guides' },
          // { icon: 'person', title: 'Profile', link: '/profile' },
          // { icon: 'face', title: 'Sign Up', link: '/signup' },
          // { icon: 'lock_open', title: 'Sign In', link: '/signin' }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      console.log('Inside userIsAuthenticated')
      return  this.$store.getters.user.uid !== null && this.$store.getters.user.uid !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logOut')
      console.log('has been logged out')
    }
  },
  created () {  
      this.$store.dispatch('loadBitcoin'),
      this.$store.dispatch('loadEthereum'),
      this.$store.dispatch('loadDAPS')
  },
  mounted () {
      
    }, 
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');


h1 {
  font-family: "Roboto Condensed", sans-serif;
}
h2 {
  font-family: "Roboto Condensed", sans-serif;
}
h3 {
  font-family: "Roboto Condensed", sans-serif;
}
h4 {
  font-family: "Roboto Condensed", sans-serif;
}
h5 {
  font-family: "Roboto Condensed", sans-serif;
}
h6 {
  font-family: "Roboto Condensed", sans-serif;
}
p {
  font-family: "Playfair Display", sans-serif;
}
.buttonColor {
  color: #FFC74B !important;
}
/* .hamburger {
  color: white;
} */
.whiteDivide {
  border-color: #4FE2FD !important;
  height: 70px !important;
  margin-top: 25px !important;
}
.marginL {
  margin-left:40px;
}
.textSize {
  font-size: 1rem;
}
.redColor {
  color: red;
}
.whiteColor {
  color: white;
}
.textColor {
  color: #4FE2FD !important;
  
}
.coinColor {
  color: #FFC74B;
}
.textDeco {
  text-decoration: none;
}
.backgroundColor {
  background-color: rgb(255, 255, 255);
}
.bgColor {
  background-color: #143035 !important;
  color: white !important;
}
.iconColor {
  color: rgb(245, 163, 56) !important;
}
.v-toolbar__content .v-btn .v-btn__content .v-icon {
  color: rgb(245, 163, 56);
}

/* #255E69; */
</style>

<!-- <v-toolbar color="#143035" app>
      <v-container>
        <v-layout row>
            <v-flex>
              <router-link to="/" class="textDeco">
                <h2 class="textColor textSize">When Crypto News</h2>
              </router-link>
            </v-flex>
          <v-spacer></v-spacer>
          <v-flex>
            
            
            
            <v-toolbar-items>
                <v-btn to='/scams' flat small class="textColor navButtons">Scams & Hacks</v-btn>
                <v-btn to='/hacks' flat small class="textColor navButtons">Scams & Hacks</v-btn>
                <v-btn to='/market' flat small class="textColor navButtons">Press Releases</v-btn>
                <v-spacer></v-spacer>
                <v-btn to='/profile' flat small class="textColor navButtons">Profile</v-btn>
                <v-btn to='/signIn' flat small class="textColor navButtons">Sign In</v-btn>
                <v-btn to='/signUp' flat small class="textColor navButtons">Sign Up</v-btn>
            </v-toolbar-items>
          </v-flex>
        </v-layout>
      </v-container>
    </v-toolbar> -->