<template>
     <div>
          <div id="footer">
               <b-container>
                    <b-row>
                         <b-col md="4">
                              <h4 class="mb-2">Maasai.</h4>
                              <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                         </b-col>
                         <b-col md="3" offset-md="1">
                              <h5 class="mb-2">Links</h5>
                              <div>
                                   <p>Home</p>
                                   <p>About</p>
                                   <p>Services</p>
                                   <p>Contact</p>
                                   <p>Blog</p>
                              </div>
                         </b-col>
                         <b-col md="4">
                              <h5 class="mb-2">Newsletter</h5>
                              <p>Far far away, behind the word mountains, far from the countries.</p>
                              <!-- form -->
                              <b-form>
                                   <b-form-group>
                                        <b-form-input
                                        placeholder="Enter your email">
                                        </b-form-input>
                                   </b-form-group>
                                   <b-button block type="submit" variant="primary">Submit</b-button>
                              </b-form>
                         </b-col>
                    </b-row>
               </b-container>
          </div>
          <div id="copyright">
               <b-container>
                    <b-row>
                         <b-col class="text-center">
                              <p class="mt-3">Copyright ©2020 All rights reserved | Maasai. A vue template.</p>
                         </b-col>
                    </b-row>
               </b-container>
          </div>
     </div>
</template>

<script>
export default {
     
}
</script>

<style lang="scss">
     #footer {
          font-size: 14px;
          background: #141313;
          padding: 6em 0;
          color: #ffffff;
          p {
               color: #ffffff !important;
          }
          .form-control {
               color: #495057;
               background: #181818;
               border: 1px solid rgba(206, 212, 218, .2);
          }
     }
     #copyright {
          background: #000;
          p {
               font-size: 13px;
               color: #ffffff;
          }
     }
</style>