<template>
     <div data-aos="fade-in"
     data-aos-delay="50"
     data-aos-duration="5000"
     data-aos-easing="ease-in-sine">
          <b-container>
               <b-row>
                    <b-col md="4">
                         <h4 class="title">Testimonials</h4>
                         <p>Even the all powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </b-col>

                    <b-col md="8">
                         <b-row>
                              <b-col md="5" v-for="person in persons" :key="person.name" class="text-center testimonial">
                                   <b-img rounded="circle" thumbnail fluid :src="person.img" width="150"></b-img>
                                   <p class="mt-3">{{ person.testimonial }}</p>
                                   <strong>{{ person.name }}</strong>
                                   <br>
                                   <small>{{ person.position }}</small>
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
               persons: [
                    {
                         name: 'John Doe',
                         position: 'Executive Director',
                         testimonial: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                         img: 'https://colorlib.com/preview/theme/mosaic/images/person_1.jpg'
                    },
                    {
                         name: 'Gareth Smith',
                         position: 'System Analyst',
                         testimonial: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                         img: 'https://colorlib.com/preview/theme/mosaic/images/person_2.jpg'
                    },
                    // {
                    //      name: 'Denzel Stark',
                    //      position: 'Landscape designer',
                    //      testimonial: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                    //      img: 'https://colorlib.com/preview/theme/mosaic/images/person_3.jpg'
                    // }
               ]
               
          }
     }
}
</script>

<style lang="scss">
     .testimonial {
          padding: 20px;
          border-radius: 5px;
          cursor: pointer;
          margin: 10px;
          background: #f9fdf5;
     }
</style>