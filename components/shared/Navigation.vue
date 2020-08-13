<template>
     <b-navbar toggleable="lg" variant="faded" type="light">
          <div class="container">
               <b-navbar-brand class="logo">
                    <nuxt-link to="/">
                         {{title}}
                    </nuxt-link>
               </b-navbar-brand>

               <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

               <b-collapse id="nav-collapse" is-nav>
                         <!-- Right aligned nav items -->
                         <b-navbar-nav class="ml-auto nav">
                              <b-nav-item right>
                                   <nuxt-link to="/">Home</nuxt-link> 
                              </b-nav-item>
                              <b-nav-item right>
                                   <nuxt-link to="about">About</nuxt-link> 
                              </b-nav-item>
                              <b-nav-item right>
                                   <nuxt-link to="services">Services</nuxt-link> 
                              </b-nav-item>
                              <b-nav-item right>
                                   <nuxt-link to="blog">Blog</nuxt-link> 
                              </b-nav-item>
                              <b-nav-item right>
                                   <nuxt-link to="contact">Contact</nuxt-link> 
                              </b-nav-item>
                         </b-navbar-nav>
               </b-collapse>
          </div>
     </b-navbar>
</template>

<script>

export default {
     name: 'navbar',

     data () {
          return {
               title: 'Maasai.'
          }
     }
}
</script>

<style lang="scss" scoped>
     .logo {
          a {
               font-weight: 800;
               color: #2a2b59;
               text-decoration: none;
               font-size: 25px;
          }
     }

     .nav {
          a {
               font-size: 16px;
               padding-top: 1.5rem;
               padding-bottom: 1.5rem;
               padding-left: 20px;
               padding-right: 20px;
               font-weight: 400;
               color: #000;
               opacity: 1!important;
               text-decoration: none;
          }
     }

     @media (max-width: 480px) {
          .nav {
               a {
                    padding: 10px 0;
               }
          }
     }
</style>
