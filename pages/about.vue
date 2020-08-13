<template>
     <div>
          <!-- Page header -->
          <pageheader>About Us</pageheader>

          <!-- Section About -->
          <rightBlock  class="mt-6" image-src="/pic_1.jpg">
               <template v-slot:title>
                    <h3 class="title">Simple but powerful</h3>
               </template>
               <template v-slot:p>
                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
               </template>
          </rightBlock>

          <div class="my-8"></div>

          <!-- Section testimonials -->
          <testimonials></testimonials>

          <div class="my-7"></div>

          <!-- Section Countdown -->
          <countdown></countdown>
     </div>
</template>

<script>
import Pageheader from '../components/blocks/PageHeader'
import rightBlock from '../components/blocks/content/rightBlock'
import leftBlock from '../components/blocks/content/leftBlock'
import testimonials from '../components/blocks/Testimonials'
import countdown from '../components/Countdown'

export default {
     components: {
          Pageheader,
          rightBlock,
          leftBlock,
          testimonials,
          countdown
     }
}
</script>

<style lang="scss" scoped>
     
</style>