<template>
     <div>
          <!-- Page header -->
          <pageheader>Our blog</pageheader>

          <b-container>
               <b-row>
                    <b-col class="my-6 post" md="4" v-for="post in posts" :key="post.publishedAt">
                         <b-card
                              :title="post.title"
                              :img-src="post.image"
                              img-alt="Image"
                              img-top
                              tag="article"
                              >
                              <b-card-text>
                                   {{ post.description }}
                              </b-card-text>

                              <b-button target="_blank" :href="post.url" variant="primary">Read more</b-button>
                         </b-card>
                    </b-col>
               </b-row>
          </b-container>
          
     </div>
</template>

<script>
import Pageheader from '../components/blocks/PageHeader'
import {mapGetters} from 'vuex'

export default {
     components: {
          Pageheader
     },

     computed: {
          ...mapGetters([
               'posts'
          ])
     },

     mounted () {
          this.$store.dispatch('fetchPosts');
     }
}
</script>

<style lang="scss" scoped>
     .post {
          img {
               max-height: 200px;
          }
     }
</style>