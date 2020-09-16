<template>
    <div>
      <!-- Slider -->
      <slider></slider>

      <!-- Section About -->
      <rightBlock class="my-8" image-src="/pic_4.jpg">
         <template v-slot:title>
            <h3 class="title">About Maasai</h3>
        </template>
        <template v-slot:p>
            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
            <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious.</p>
        </template>
        <template v-slot:button>
             <b-button pill variant='primary' to="/about" size="lg">Learn More</b-button>
        </template>
      </rightBlock>

      <!-- Section Projects -->
      <projects id="projects" class="my-8"></projects>

      <!-- Section Countdown -->
      <countdown class="my-8"></countdown>

      <!-- Section Services -->
      <services class="my-8"></services>

      <!-- Content Block -->
      <rightBlock class="my-8" image-src="/pic_3.png">
         <template v-slot:title>
            <h3 class="title">Simple enough</h3>
        </template>
        <template v-slot:p>
            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
            <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
        </template>
      </rightBlock>

      <!-- Section testimonials -->
      <testimonials class="my-8"></testimonials>

      <pricing-table class="my-8"></pricing-table>
      
    </div>
</template>

<script>
import slider from '../components/blocks/Slider'
import countdown from '../components/blocks/Countdown'
import services from '../components/blocks/Services'
import testimonials from '../components/blocks/Testimonials'
import rightBlock from '../components/blocks/content/rightBlock'
import leftBlock from '../components/blocks/content/leftBlock'
import projects from '../components/blocks/Projects'
import pricingTable from '../components/blocks/PricingTable'

export default {
    components: {
      slider,
      countdown,
      services,
      testimonials,
      rightBlock,
      leftBlock,
      projects,
      pricingTable
    }
}
</script>

<style lang="scss">
  
</style>
