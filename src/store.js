import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
// import { isContext } from 'vm';
// import { get } from 'http';
import axios from 'axios'
// import Twitter from 'twitter';

// API-Key:b4e9c545626241cfb2d2e86dbe7d8a71

// var client = new Twitter({
//   consumer_key: '4xvCKo7iKVAm83nKJoGMWfr7D',
//   consumer_secret: 'V9UNaUN5sLcZPM06aJJZn3EEfcCKpksBpoRA7qTZvJrM644D7n',
//   access_token_key: '26432386-UVmhngKETlaeZmjveCgtSj1cBEoz4kqXcydh3sNC3',
//   access_token_secret: 'cla7JmogbXA6LOlFNQycGxudigaFlQRVRVNIwWJ7wMlQN'
// });


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadHeadlines: [],
    loadCoins: [],
    loadedArticles: [],
    user: [],
    login: false,
    bitcoin: {},
    ethereum: {},
    daps: {},
    flamelinkArticles: [],
  },
  mutations: {
    setFlamelinkArticles(state, payload) {
      state.flamelinkArticles = payload
    },
    setLoadedArticles(state, payload) {
      state.loadedArticles = payload
    },
    createArticle(state, payload) {
      state.loadedArticles.push(payload)
    },
    updateArticle (state, payload) {
      const article = state.loadedArticles.find(article => {
        return article.id === payload.id
      })
      if (payload.title) {
        article.title = payload.title
      }
      if (payload.content) {
        article.content = payload.content
      }
    },
    SET_ARTICLES(state, loadedArticles) {
      state.loadedArticles = loadedArticles
    },
    setUser (state, payload) {
      state.user = payload
    },
    SET_BTC(state, loadBitcoinPrice) {
      state.bitcoin = loadBitcoinPrice
    },
    SET_ETH(state, loadEthereumPrice) {
      state.ethereum = loadEthereumPrice
    },
    SET_DAPS(state, loadDAPS){
      state.daps = loadDAPS
    }
  },
  getters: {
    loadedArticlesTwo(state) {
      console.log('loadedArticlesTwo inside store fired');
      return (articleId) => {
        return state.loadedArticles.find((article) => {
          return article.id === articleId;
        })
      }
    },
    bitcoin: state => state.bitcoin,
    ethereum: state => state.ethereum,
    daps: state => state.daps,
    user (state) {
      return state.user
    }
    // getArticles() {
    //   return this.state.loadedArticles
    // }
  },
  actions: {
    loadBitcoin(context) {
      axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true', {
        // This is for Loading Bitocin price plus change in percantage per 24/hrs
      })
      .then((response) => {
        context.commit('SET_BTC', response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    },
    loadEthereum(context) {
      axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true', {
        // This is for Loading Ethereum price plus change in percantage per 24/hrs
      })
      .then((response) => {
        context.commit('SET_ETH', response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    },
    loadDAPS(context) {
      axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=daps-token&vs_currencies=usd&include_24hr_change=true', {
        // This is for Loading DAPS price plus change in percantage per 24/hrs
      })
      .then((response) => {
        context.commit('SET_DAPS', response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    },
    loadAllArticlesFlamelink() {
      app.content.get('articles')
        .then(articles => console.log('All the articles posts:', articles),  
          commit('setFlamelinkArticles', payload)
        )
        .catch(error => console.error('Something went wrong while retrieving all the content. Details:', error));

    },
    loadArticles ({commit}) {
      // Loads all articles once
      firebase.database().ref('articles').once('value')
      .then((data) => {
        const articles = []
        const obj = data.val()
        for (let key in obj) {
          articles.push({
            id: key,
            title: obj[key].title,
            author: obj[key].author,
            imageUrl: obj[key].imageUrl,
            header: obj[key].header,
            content: obj[key].content,
            date: obj[key].date,
            creatorId: obj[key].creatorId
          })
        }
        console.log(articles)
        commit('setLoadedArticles', articles.reverse())
      })
      .catch((error) => {
        console.log(error)
      })
    },
    createArticle({commit}, payload) {
      // Basic article structure
      const article = {
        title: payload.title,
        author: payload.author,
        header: payload.header,
        content: payload.content,
        date: payload.date.toISOString(),
        creatorId: this.getters.user.id
      }
      // console.log('This is the creatorId & user uid ' + article.creatorId + ' ' + this.getters.user.id)
      let imageUrl
      let key
      firebase.database().ref('articles').push(article)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          // Uploads image
          const fileName = payload.image.name
          const ext = fileName.slice(fileName.lastIndexOf('.'))
          return firebase.storage().ref('articles/' + key + ext).put(payload.image)
        })
        .then(fileData => {  
          // Updates specific image to article
          imageUrl = fileData.ref.getDownloadURL().then(downloadURL =>  { 
             imageUrl = downloadURL
             console.log('This is the downloadURL ' + downloadURL + 'and this is the imageUrl' + imageUrl)
             return firebase.database().ref('articles').child(key).update({imageUrl: imageUrl})
          })  
        })
        .then(() => {
          // Then we commit this to our local store
          commit('createArticle', {
            ...article,
            imageUrl: imageUrl,
            id: key
          })
        })
      .catch((error) => {
        console.log(error)
      })
    },
    updateArticleData ({commit}, payload) {
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.content) {
        updateObj.content = payload.content
      }
      firebase.database().ref('articles').child(payload.id).update(updateObj)
        .then(() => {
          commit('updateArticle', payload)
        })
        .catch(error => {
          console.log(error)
        })
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            writtenArticles: []
          }
          console.log('New user created ' + payload)
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            writtenArticles: []
          }
          console.log('User signed in')
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    },
    autoSignIn({commit}, payload) {
      commit('setUser', {id: payload.uid, writtenArticles: []})
      console.log('User auto logged in')
    },
    logOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      console.log('Logged out in store as well')
    },
    allArticles(state) {
      // console.log('inside all articles' + loadedArticles);
      return state.loadedArticles.reverse();
    },
    // loadedArticle(state) {
    //   console.log('This is the loadedarticles' + state.loadedArticles)
    //   return state.loadedArticles.slice(0, 3)
    //   // -2, 0 is what I want to display
    // },
    loadedArticles(state) {
      console.log('loadedArticles inside store fired');
      return (articleId) => {
        return state.loadedArticles.find((article) => {
          return article.id === articleId;
        })
      }
    },
    
  },
})