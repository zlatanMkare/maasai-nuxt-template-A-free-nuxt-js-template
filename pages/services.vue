<template>
     <div>
          <!-- Page header -->
          <pageheader>
               <h1 class="title">What we offer</h1>
          </pageheader>

          <!-- Section Services -->
          <services></services>

          <!-- Section Projects -->
          <projects class="my-8"></projects>
     </div>
</template>

<script>
import Pageheader from '../components/blocks/PageHeader'
import Services from '../components/Services'
import Countdown from '../components/Countdown'
import Projects from '../components/blocks/Projects'

export default {
     components: {
          Pageheader,
          Services,
          Countdown,
          Projects
     }
}
</script>

<style lang="scss" scoped>
     
</style>