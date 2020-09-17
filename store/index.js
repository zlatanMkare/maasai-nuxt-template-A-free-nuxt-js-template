import Vuex from 'vuex'
import axios from 'axios'
import config from './config'
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
                         http.get('https://gnews.io/api/v3/search?q=example&token=' + config.token)
                         .then(response=>{
                              commit('SET_POSTS', response.data.articles)
                              resolve()
                         }).catch(e => {
                              reject()
                         });  
                    })
               }
          }
     })
}

export default createStore


