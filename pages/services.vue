<template>
     <div>
          <!-- Page header -->
          <pageheader>What we offer</pageheader>

          <!-- Section Services -->
          <services class="mt-6"></services>

          <!-- Section Projects -->
          <projects class="my-8"></projects>
     </div>
</template>

<script>
import Pageheader from '../components/blocks/PageHeader'
import Services from '../components/blocks/Services'
import Countdown from '../components/blocks/Countdown'
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