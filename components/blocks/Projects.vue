<template>
     <div data-aos="fade-in"
     data-aos-delay="50"
     data-aos-duration="5000"
     data-aos-easing="ease-in-sine">
          <b-container>
               <b-row>
                    <b-col md="4">
                         <h4 class="title">Projects</h4>
                         <p>Some of the work we've done</p>
                    </b-col>
                    <b-col md="8">
                         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </b-col>
               </b-row>

               <b-row class="my-5">
                    <b-col class="my-3" cols="12" md="4" v-for="project in projects" :key="project.id">
                         <div class="project">
                              <b-img :src="project.img" fluid></b-img> 
                              <div class="description">
                                   <h4 class="text-uppercase title">{{ project.title }}</h4>
                                   <p>{{ project.description }}</p>
                              </div>
                         </div>
                    </b-col>
               </b-row>
          </b-container>
     </div>
</template>

<script>

export default {
     data () {
          return {
               projects: [
                    {
                         id: 1,
                         img: '/pic_1.jpg',
                         title: 'Interior Design',
                         description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    },
                    {
                         id: 2,
                         img: '/pic_3.png',
                         title: 'Exterior Design',
                         description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    },
                    {
                         id: 3,
                         img: '/pic_4.jpg',
                         title: 'Office Design',
                         description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    },
                    {
                         id: 4,
                         img: '/pic_3.png',
                         title: 'Interior Design',
                         description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    },
                    {
                         id: 5,
                         img: '/pic_4.jpg',
                         title: 'Exterior Design',
                         description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    },
                    {
                         id: 6,
                         img: '/pic_3.png',
                         title: 'Office Design',
                         description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
                    }
               ]
          }
     }
}
</script>

<style lang="scss" scoped>
     .project {
          position: relative;
          cursor: pointer;
          overflow: hidden;

          img {
               max-height: 400px;
               min-height: 400px;
          }

          .description {
               position: absolute;
               bottom: 0;
               padding: 10px 15px;
               opacity: 0;
               .title {
                    font-size: 16px;
                    color: #ffffff;
                    font-weight: 500;
               }
               p {
                    font-size: 14px;
                    color: #ffffff;
               }
          }

          &:before {
               content: '';
               position: absolute;
               height: 100%;
               width: 100%;
               top: 0;
               left: 0;
               background-color: #2b2c59;
               opacity: 0;
               transition: opacity 0.3s ease-in-out;   
          }

          &:hover {
               &:before {
                    opacity: .75;
               }
               &:after {
                    opacity: 0.6;
               }
               .description {
                    opacity: 1;
                    -moz-transition: all .3s ease;
                    -o-transition: all .3s ease;
                    -webkit-transition: all .3s ease;
                    -ms-transition: all .3s ease;
                    transition: all .3s ease;
               }
          }
     }
</style>