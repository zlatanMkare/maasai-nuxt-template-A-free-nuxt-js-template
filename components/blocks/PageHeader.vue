<template>
     <div id="page-header">
          <b-container class="py-5">
               <header class="title">
                    <slot></slot>
               </header>
          </b-container>
     </div>
</template>

<script>
export default {
     name: 'pageheader'
}
</script>

<style lang="scss" scoped>
     #page-header {
          background: #2b2c59;
          .title {
               color: #ffffff;
          }
     }
</style>