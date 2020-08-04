<template>
     <div>
          <b-container>
               <b-row>
                    <b-col md="6">
                         <div data-aos="fade-in"
                         data-aos-delay="50"
                         data-aos-duration="5000"
                         data-aos-easing="ease-in-cubic">
                              <h2 class="title">
                                   Let's work together!
                              </h2>
                              <p>Ask us anything or just say hi..</p>
                              <div class="my-5"></div>
                              <div class="d-flex mb-5">
                                   <b-icon font-scale="2" variant="primary" class="pr-2" icon="telephone-fill"></b-icon>
                                   <h3>+45 88 88 99 99</h3>
                              </div>
                              <div class="d-flex mb-5">
                                   <b-icon font-scale="2" variant="primary" class="pr-2" icon="envelope-fill"></b-icon>
                                   <h3>info@maasai.com</h3> 
                              </div>
                              <div class="d-flex mb-5">
                                   <b-icon font-scale="2" variant="primary" class="pr-2" icon="geo-alt"></b-icon>
                                   <h3>Copenhagen, Denmark</h3> 
                              </div>
                         </div>
                    </b-col>
                    <b-col md="6">
                         <div data-aos="fade-in"
                         data-aos-delay="100"
                         data-aos-duration="6000"
                         data-aos-easing="ease-in-cubic">
                              <div class="contact-form py-5 px-5">
                                   <b-form>
                                        <b-form-group id="input-group-2" label="Your Name:" label-for="input-name">
                                             <b-form-input
                                                  id="input-name"
                                                  required
                                                  placeholder="Enter your name"
                                             ></b-form-input>
                                        </b-form-group>

                                        <b-form-group id="input-group-1" label="Email address:" label-for="input-email" description="We'll never share your email with anyone else.">
                                             <b-form-input
                                                  id="input-email"
                                                  type="email"
                                                  required
                                                  placeholder="Enter your email"
                                             ></b-form-input>
                                        </b-form-group>

                                        <b-form-group id="input-group-3" label="Your Phone:" label-for="input-phone">
                                             <b-form-input
                                                  id="input-phone"
                                                  required
                                                  placeholder="Enter your phone number"
                                             ></b-form-input>
                                        </b-form-group>

                                        <b-form-group id="input-group-4" label="Your Message:" label-for="textarea">
                                             <b-form-textarea
                                                  id="textarea"
                                                  placeholder="Write your message here..."
                                                  rows="3"
                                                  max-rows="6"
                                             ></b-form-textarea>
                                        </b-form-group>

                                        <b-button type="submit" size="lg" block variant="primary">Submit</b-button>
                                   </b-form>
                              </div>
                         </div>
                    </b-col>
               </b-row>
          </b-container>
     </div>
</template>

<script>
export default {
     
}
</script>

<style lang="scss" scoped>
     .contact-form {
          border-radius: 5px;
          background: #f9fdf5;
          box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.12);
     }
</style>