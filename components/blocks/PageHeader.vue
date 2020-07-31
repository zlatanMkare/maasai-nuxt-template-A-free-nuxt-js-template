<template>
     <div id="page-header">
          <b-container class="py-5">
               <header>
                    <h2 class="page-title">
                         <slot></slot>
                    </h2>
               </header>
          </b-container>
     </div>
</template>

<script>
import { gsap } from "gsap"

export default {
     name: 'pageheader',

     mounted () {
          gsap.fromTo('.page-title',{opacity:0, y: 15 }, {opacity: 1 , y: 0 , duration: .45 });
     }
}
</script>

<style lang="scss" scoped>
     #page-header {
          background: #2b2c59;
          .page-title {
               color: #ffffff !important;
               font-size: 40px;
               line-height: 1.5;
               font-weight: 900;
          }
     }
</style>