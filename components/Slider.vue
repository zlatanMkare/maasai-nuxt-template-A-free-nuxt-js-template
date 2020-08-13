<template>
     <div class="container">
          <b-carousel
               id="carousel-1"
               v-model="slide"
               :interval="4000"
               indicators
               background="#fff"
               img-width="1024"
               img-height="480"
               @sliding-start="onSlideStart"
               @sliding-end="onSlideEnd"
          >
               <!-- Text slides with image -->
               <b-carousel-slide
                    caption="We love modern design"
                    text="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    img-src="/pic_3.png"
               >
                    <b-button pill variant='primary' size="lg" to="#projects">Read More</b-button>
               </b-carousel-slide>

               <!-- Text slides with image -->
               <b-carousel-slide
                    caption="We create amazing designs"
                    text="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    img-src="/pic_1.jpg"
               >
                    <b-button pill variant='primary' size="lg" to="#projects">Read More</b-button>
               </b-carousel-slide> 
          </b-carousel>
          </div>
</template>

<script>
import { gsap } from "gsap"

export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },

    mounted () {
         gsap.fromTo('.carousel-caption',{opacity:0, y: 15 }, {opacity: 1 , y: 0 , duration: .55 });
    }
  }
</script>

<style lang="scss">
     #carousel-1 {
          img {
               width: 65% !important;
               float: right !important;
               min-height: 50vh;
               height: 700px;
          }
          .carousel-caption {
                   position: absolute;
                    width: 50% !important;
                    left: 0;
                    top: 20%;
                    z-index: 10;
                    padding-top: 20px;
                    text-align: left;
               h3 {
                    font-size: 60px;
                    color: #2a2b59;
                    line-height: 1.5;
                    font-weight: 900;
               }
               p {
                    font-size: 18px;
                    line-height: 1.5;
                    font-weight: 300;
                    color: rgba(73, 74, 113, 0.8);
               }
          }
          .carousel-indicators {
               li {
                    background-color: #000 !important;
               }
          }
     }

     @media (max-width: 480px) {
          #carousel-1 {
               img {
                    width: 100% !important;
               }
               .carousel-caption {
                    width: 100% !important;
                    padding: 15px;
                    h3 {
                         font-size: 50px;
                    }
               }
          }
     }
     
</style>