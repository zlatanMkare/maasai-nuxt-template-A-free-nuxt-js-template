import Vuex from 'vuex'
import axios from 'axios'
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';

const http = axios.create({
	baseURL: '/',
	// cache will be enabled by default
	adapter: cacheAdapterEnhancer(axios.defaults.adapter)
});

const createStore = () => {
     return new Vuex.Store({
          state: {
               posts: [],
          },
     
          getters: {
               // posts
               posts: state => {
                    return state.posts;
               }
          },
     
          mutations: {
               SET_POSTS: function (state, payload) {
                    state.posts = payload;
               }
          },
     
          actions: {
               fetchPosts({commit}) {
                    return new Promise((resolve,reject) => {
                         http.get('https://gnews.io/api/v3/search?q=example&token=fb4cacfb4fc532eb8201c3813c579d8b')
                         .then(response=>{
                              commit('SET_POSTS', response.data.articles)
                              console.log(response.data)
                              resolve()
                         }).catch(e => {
                              console.log(e);
                              reject()
                         });  
                    })
               }
          }
     })
}

export default createStore


