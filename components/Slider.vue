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
                    img-src="https://colorlib.com/preview/theme/mosaic/images/bg_2.jpg"
               >
                    <b-button pill variant='primary' size="lg" to="#projects">Read More</b-button>
               </b-carousel-slide>

               <!-- Text slides with image -->
               <b-carousel-slide
                    caption="We create amazing designs"
                    text="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    img-src="https://colorlib.com/preview/theme/mosaic/images/bg_2.jpg"
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
         gsap.fromTo('.carousel-caption',{opacity:0, x: -15 }, {opacity: 1 , x: 0 , duration: .85 });
    }
  }
</script>

<style lang="scss">
     #carousel-1 {
          img {
               width: 65% !important;
               float: right !important;
               min-height: 50vh;
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
                    color: #494a71;
                    opacity: 80%;
               }
          }
          .carousel-indicators {
               li {
                    background-color: #000 !important;
               }
          }
     }
     
</style>