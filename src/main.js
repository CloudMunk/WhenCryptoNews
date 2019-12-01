import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import router from './router'
import store from './store'
import EditArticlesDetailsDialog from './components/Articles/Edit/EditArticleDetailsDialog.vue'
import VueAnalytics from 'vue-analytics'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify/lib'
import Ads from 'vue-google-adsense'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import twitterComponent from './components/Articles/Twitter.vue'

// flamelink
import flamelink from 'flamelink/app'
import 'flamelink/content'
import 'flamelink/storage'

// Google Adsense for Vue
Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

// Slider
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
Vue.component('app-edit-articles-dialog', EditArticlesDetailsDialog)
Vue.component('twitter-component', twitterComponent)

Vue.use(Vuetify, {
  iconfont: 'fa'
})

// Adds Google Analytics to Platform and also auto follows routes
Vue.use(VueAnalytics, {
  id: 'UA-144983280-1',
  router
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCIes13A_FjKuBw0BpIM50XFI6zXTFGl7M',
      authDomain: 'when-crypto-news.firebaseapp.com',
      databaseURL: 'https://when-crypto-news.firebaseio.com',
      projectId: 'when-crypto-news',
      storageBucket: 'gs://when-crypto-news.appspot.com',
      messagingSenderId: '687590004878',
      appId: '1:687590004878:web:099f168b50b203b3'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    flamelink({
      firebaseApp,
      env: 'production', // optional, defaults to `production`
      locale: 'en-US', // optional, defaults to `en-US`
      dbType: 'rtdb' // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
    })
  },
  plugins: [
    { src: '~/plugins/vue-google-adsense', ssr: false }
  ]
}).$mount('#app')

 const firebaseApp = firebase.initializeApp(firebaseConfig);

// const app = flamelink({ firebaseApp });






// export default db;

// var config = {
//   apiKey: "AIzaSyCIes13A_FjKuBw0BpIM50XFI6zXTFGl7M",
//   authDomain: "when-crypto-news.firebaseapp.com",
//   databaseURL: "https://when-crypto-news.firebaseio.com",
//   projectId: "when-crypto-news",
//   storageBucket: "when-crypto-news.appspot.com",
//   messagingSenderId: "687590004878",
//   appId: "1:687590004878:web:099f168b50b203b3"
// };
// firebase.initializeApp(config);
// const db = firebase.firestore();