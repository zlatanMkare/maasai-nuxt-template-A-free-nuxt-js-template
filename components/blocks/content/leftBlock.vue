<template>
     <div>
          <b-container>
               <b-row align-items-center>
                    <b-col md="6" class="py-3 px-3">
                         <slot name="title"></slot>
                         <slot name="p"></slot>
                         <slot name="button"></slot>
                    </b-col>
                    <b-col md="6">
                         <b-img :src="imageSrc" fluid></b-img>
                    </b-col>
               </b-row>
          </b-container>
     </div>
</template>

<script>

export default {
       props: {
            imageSrc: String
       }
}
</script>

<style lang="scss" scoped>

</style>