<template>
     <div id="countdown">
          <b-container>
               <b-row class="pt-7 pb-7">
                    <b-col md="3" class="text-center">
                         <h4 class="title">{{years}}</h4>
                         <span>Years of experience</span>
                    </b-col>
                    <b-col md="3" class="text-center">
                         <h4 class="title">{{clients}}</h4>
                         <span>Happy clients</span>
                    </b-col>
                    <b-col md="3" class="text-center">
                         <h4 class="title">{{projects}}</h4>
                         <span>Finished projects</span>
                    </b-col>
                    <b-col md="3" class="text-center">
                         <h4 class="title">{{days}}</h4>
                         <span>Working days</span>
                    </b-col>
               </b-row>
          </b-container>
     </div>
</template>

<script>
export default {
     name: 'countdown',
     
     data () {
          return {
               years: 18,
               clients: 302,
               projects: 500,
               days: 790
          }
     }
}
</script>

<style lang="scss">
     #countdown {
          background: #292a59;
          h4, span {
               color: #ffffff;
          }
     }
</style>