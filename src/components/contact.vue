<template>
  <div class="center">

    
  <b-card-group style="width: 1040px;">
    <b-card
     text-variant="white"
     overlay="true" 
     img-src="https://images.squarespace-cdn.com/content/v1/53e43c86e4b0e9902e0be236/1487697157510-662ZESNNIJFSUGEU7D0A/ke17ZwdGBToddI8pDm48kJUlZr2Ql5GtSKWrQpjur5t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfNdxJhjhuaNor070w_QAc94zjGLGXCa1tSmDVMXf8RUVhMJRmnnhuU1v2M8fLFyJw/_DFA3999-Edit.jpg" img-alt="Image" 
     >

      
      <b-container class="bv-example-row">
        <b-row><b-col></b-col> </b-row>
        <b-row class="mb-5"> </b-row>
        <b-row class="mb-5"></b-row>
        <b-row class="mb-5"></b-row>
        <b-row class="mb-1 h5">
          <b-col md = "4"> </b-col>
          <b-col cols="auto"><b-icon-geo> </b-icon-geo></b-col>
          <b-col cols="auto"> Address </b-col>
        </b-row>
        
        <b-row class="mb-0">
          <b-col md = "5"> </b-col>
          <b-col cols="auto"> <p>Strada Dorobantilor, nr.37</p></b-col>
        </b-row>

        <b-row class="mb-1 h5">
          <b-col md = "4"> </b-col>
          <b-col cols="auto"  ><b-icon-phone> </b-icon-phone></b-col>
          <b-col cols="auto">Telephone</b-col>
        </b-row>

        <b-row class="mb-3">
          <b-col md = "5"> </b-col>
          <b-col cols="auto" class="green"> +40736910257</b-col>
        </b-row>

        <b-row class="mb-1 h5">
          <b-col md = "4"> </b-col>
          <b-col cols="auto"  ><b-icon-envelope> </b-icon-envelope></b-col>
          <b-col cols="auto" >Email</b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col md = "5"> </b-col>
          <b-col cols="auto" class="green"> rusrenato@gmail.com</b-col>
        </b-row>

      </b-container>

     <b-card-text>
      
    </b-card-text>
    </b-card>

    <b-card title="Send me a message" align="center">
      
      <div>
        <div>
            <b-input-group>
              <b-form-input v-model="text" placeholder= "Enter your email" size="lg" class="md-2" ></b-form-input>
            </b-input-group>

            <div class="mt-2 mb-4">
              <b-form-textarea
                id="textarea-rows"
                placeholder="Your text..."
                rows="8"
                size="lg"
              ></b-form-textarea>
            </div>
        </div>
      </div>

     <b-button size="lg" pill variant="info">Send message</b-button>

    </b-card>
  </b-card-group>
</div>

   

</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    }
  }
</script>

<style scoped>
.center{
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

p {
  color: gray;
}

.green {
  color: #009933;
}


</style>
