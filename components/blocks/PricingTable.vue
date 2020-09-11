<template>
     <div>
          <b-container>
               <b-row>
                    <b-col cols="6">
                         <h2 class="title">{{ title }}</h2>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                    </b-col>
                    <b-col>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolore ipsa tempore nihil eum voluptas labore officia, veniam pariatur minus dolorum! Vel dolorem recusandae alias officia exercitationem fugit, tempora animi?</p>
                    </b-col>
               </b-row>

               <b-row>
                    <b-col cols="12" class="text-center mt-5">
                         <b-form-group>
                              <b-form-radio-group
                              id="btn-radios"
                              v-model="selected"
                              :options="options"
                              button-variant="outline-primary"
                              buttons
                              name="radios-btn"
                              ></b-form-radio-group>
                         </b-form-group>
                    </b-col>
               </b-row>

               <b-row class="mt-2 mb-5 pricing">
                    <b-col md="4" class="price text-center">
                         <h2>Starter $0/m</h2>
                         <p class="text-uppercase">Up and running quicker</p>
                         <ul class="list-unstyled">
                              <li>Free resources</li>
                              <li>Great template</li>
                              <li>Awesome components</li>
                              <li>Easy to get started</li>
                         </ul>
                         <b-button variant="primary">Get started for free</b-button>
                    </b-col>
                    <b-col md="4" class="price text-center">
                         <h2>Standard $39/m</h2>
                         <p class="text-uppercase">Great for mid-level users</p>
                         <ul class="list-unstyled">
                              <li>Free resources</li>
                              <li>Great template</li>
                              <li>Awesome components</li>
                              <li>Easy to get started</li>
                         </ul>
                         <b-button variant="primary">Start a 30 day free trial</b-button>
                    </b-col>
                    <b-col md="4" class="price text-center">
                         <h2>Premium $89/m</h2>
                         <p class="text-uppercase">Only the best for the pro's</p>
                         <ul class="list-unstyled">
                              <li>Free resources</li>
                              <li>Great template</li>
                              <li>Awesome components</li>
                              <li>Easy to get started</li>
                         </ul>
                         <b-button variant="primary">Contact us</b-button>
                    </b-col>
               </b-row>

          </b-container>
     </div>
</template>

<script>
export default {
     data () {
          return {
               title: 'Transparent pricing',
               selected: 'monthly',
               options: [
                    { text: 'Monthly', value: 'monthly' },
                    { text: 'Yearly', value: 'yearly' }
               ],
               pricing: {
                    monthly: {
                         free: {
                              plan: 'Starter $0/m',
                              slogan: 'Up and running quicker',
                              benefits: {
                                   0: 'Free resources',
                                   1: 'Great template',
                                   2: 'Awesome components',
                                   3: 'Easy to get started'
                              },
                              btnText: 'Get started for free'
                         },
                         medium: {
                              plan: 'Standard $39/m',
                              slogan: 'Great for mid-level users',
                              benefits: {
                                   0: 'Free resources',
                                   1: 'Great template',
                                   2: 'Awesome components',
                                   3: 'Easy to get started'
                              },
                              btnText: 'Start a 30 day free trial'
                         },
                         proffesional: {
                              plan: 'Premium $89/m',
                              slogan: 'Only the best for the pro',
                              benefits: {
                                   0: 'Free resources',
                                   1: 'Great template',
                                   2: 'Awesome components',
                                   3: 'Easy to get started'
                              },
                              btnText: 'Contact us'
                         }
                    },
                    yearly: {
                         free: {
                              plan: 'Starter $0/m',
                              slogan: 'Up and running quicker',
                              benefits: {
                                   0: 'Free resources',
                                   1: 'Great template',
                                   2: 'Awesome components',
                                   3: 'Easy to get started'
                              },
                              btnText: 'Get started for free'
                         },
                         medium: {
                              plan: 'Standard $99/m',
                              slogan: 'Save upto 50%',
                              benefits: {
                                   0: 'Free resources',
                                   1: 'Great template',
                                   2: 'Awesome components',
                                   3: 'Easy to get started'
                              },
                              btnText: 'Start a 30 day free trial'
                         },
                         proffesional: {
                              plan: 'Premium $189/m',
                              slogan: 'Save upto 50%',
                              benefits: {
                                   0: 'Free resources',
                                   1: 'Great template',
                                   2: 'Awesome components',
                                   3: 'Easy to get started'
                              },
                              btnText: 'Contact us'
                         }
                    }
               }
          }
     }
}
</script>

<style lang="scss" scoped>
     .pricing {
          .price {
               background: #f5f5f5;
               border-radius: 5px;
               padding: 30px;
               p {
                    font-size: 12px;
               }
               li {
                    padding: 10px 0;
               }
          }
     }
</style>