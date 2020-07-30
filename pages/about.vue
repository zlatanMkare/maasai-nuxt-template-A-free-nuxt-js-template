<template>
     <div>
          <!-- Page header -->
          <pageheader>
               <h1 class="title">About Us</h1>
          </pageheader>

          <!-- Section About -->
          <rightBlock  class="mt-6 mb-6" image-src="https://colorlib.com/preview/theme/mosaic/images/bg_1.jpg">
               <template v-slot:title>
                    <h3 class="title">Simple but powerful</h3>
               </template>
               <template v-slot:p>
                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
               </template>
          </rightBlock>

          <!-- Section testimonials -->
          <testimonials></testimonials>

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