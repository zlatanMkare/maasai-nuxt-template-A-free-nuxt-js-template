<template>
     <div data-aos="fade-in"
     data-aos-delay="50"
     data-aos-duration="5000"
     data-aos-easing="linear">
          <b-container>
               <b-row>
                    <b-col md="4">
                         <h4 class="title">Our services</h4>
                         <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </b-col>

                    <b-col md="8">
                         <b-row>
                              <b-col md="5" class="box" v-for="service in services" :key="service.title">
                                   <b-icon class="mb-3" font-scale="3" :icon="service.icon" variant="primary"></b-icon>
                                   <h4 class="my-3 text-uppercase">{{ service.title }}</h4>
                                   <p>{{ service.description }}</p>
                              </b-col>
                         </b-row>
                    </b-col>
               </b-row>
          </b-container>
     </div>
</template>

<script>
export default {
     data () {
          return {
               services: [
                    {
                         icon: 'crop',
                         title: 'Design',
                         description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
                    },
                    {
                         icon: 'diamond',
                         title: 'Industrial Design',
                         description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
                    },
                    {
                         icon: 'door-open',
                         title: 'Interior Design',
                         description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
                    },
                    {
                         icon: 'heart',
                         title: 'Renovation',
                         description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
                    }
               ]
          }
     }
}
</script>

<style lang="scss">
     .box {
          background: #fff;
          padding: 20px;
          border-radius: 5px;
          margin: 10px;
          color: #292a59;
          box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.12);
          h4 {
               font-size: 20px;
          }
     }
</style>