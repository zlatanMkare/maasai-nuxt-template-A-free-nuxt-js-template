<template>
     <div>
          <!-- Page header -->
          <pageheader>Our blog</pageheader>

          <b-container>
               <b-row>
                    <b-col v-if="posts.length == 0" cols="12" class="text-center my-5">
                         <b-spinner variant="primary" large label="Spinning"></b-spinner>
                    </b-col>
                    <b-col v-else class="my-3 post" md="4" v-for="post in posts" :key="post.publishedAt">
                         <b-card
                              :title="post.title"
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