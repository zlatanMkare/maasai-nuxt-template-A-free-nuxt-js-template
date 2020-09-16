<template>
     <div>
          <b-container>
               <b-row>
                    <b-col md="6">
                         <h2 class="title">{{ title }}</h2>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                    </b-col>
                    <b-col md="6">
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
                    <div class="price text-center" v-for="(pricing, index) in this.selected" :key="index">
                         <h2>{{pricing.plan}}</h2>
                         <p class="text-uppercase">{{ pricing.slogan }}</p>
                         <ul class="list-unstyled">
                              <li v-for="benefit in pricing.benefits" :key="benefit.id">
                                   {{ benefit }}
                              </li>
                         </ul>
                         <b-button variant="primary">{{ pricing.btnText }}</b-button>
                    </div>
               </b-row>

          </b-container>
     </div>
</template>

<script>
export default {
     data () {
          return {
               title: 'Transparent pricing',
               selected: '',
               options: [
                    { 
                         text: 'Monthly',
                         value: {
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
                              standard: {
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
                              premium: {
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
                         }
                    },
                    { 
                         text: 'Yearly',
                         value: {
                              free: {
                                   plan: 'Starter $0/m',
                                   slogan: 'Free forever ever',
                                   benefits: {
                                        0: 'Free resources',
                                        1: 'Great template',
                                        2: 'Awesome components',
                                        3: 'Easy to get started'
                                   },
                                   btnText: 'Get started for free'
                              },
                              standard: {
                                   plan: 'Standard $99/m',
                                   slogan: 'Save upto 50% lifetime',
                                   benefits: {
                                        0: 'All in free version',
                                        1: 'Great template',
                                        2: 'Awesome components',
                                        3: 'Easy to get started',
                                        4: 'Plus more'
                                   },
                                   btnText: 'Start a 30 day free trial'
                              },
                              premium: {
                                   plan: 'Premium $199/m',
                                   slogan: 'An offer you cannot refuse',
                                   benefits: {
                                        0: 'All in standard version',
                                        1: 'Great template',
                                        2: 'Awesome components',
                                        3: 'Easy to get started',
                                        4: 'Lifetime maintainance'
                                   },
                                   btnText: 'I want this deal'
                              }
                         }
                    }
               ]
          }
     },

     created () {
         this.firstSelection();
     },

     methods: {
          firstSelection() {
               this.selected = this.options[1].value;
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
               margin: 10px;
               p {
                    font-size: 12px;
               }
               li {
                    padding: 10px 0;
               }
          }
     }
</style>