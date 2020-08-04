<template>
     <div data-aos="fade-in"
     data-aos-delay="50"
     data-aos-duration="5000"
     data-aos-easing="ease-in-cubic">
          <b-container>
               <b-row align-items-center>
                    <b-col md="6">
                         <b-img :src="imageSrc" fluid></b-img>
                    </b-col>
                    <b-col md="6" class="py-3 px-5">
                         <slot name="title"></slot>
                         <slot name="p"></slot>
                         <slot name="button"></slot>
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