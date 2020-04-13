<template>
<div>
    <div class="md-2">
      <b-card title="Detectarea activitatilor pe baza senzorilor telefoanelor mobile">
        <b-progress :max="max" height="2rem" >
          <b-progress-bar :value="value" show-progress animated >
            Progress: <strong>{{ value.toFixed(2) }} / {{ max }}</strong>
          </b-progress-bar>
        </b-progress>
      </b-card>
    </div>

    <div class="md-2">
      <b-card title="Obiective principale">
        <b-list-group>
          <b-list-group-item href="#" :variant="ar[0]" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
               <p class="text-muted h4">
                    <b-button size="sm" class="mb-2 mr-2" @click="changeVariant4('success',0)" :variant="ar2[0]">
                      <b-icon icon="check-box"></b-icon> 
                    </b-button>

                    <b-button size="sm" class="mb-2 mr-2" @click="changeVariant4('warning',0)" :variant="ar2[0]">
                      <b-icon icon="clock"></b-icon> 
                    </b-button>

                    <b-button size="sm" class="mb-2 " @click="changeVariant4('danger',0)" :variant="ar2[0]">
                      <b-icon icon="gear-fill"></b-icon> 
                    </b-button>
                  </p>
            </div>
            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>
          </b-list-group-item>

          <b-list-group-item href="#" :variant="ar[1]" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
               <p class="text-muted h4">
                    <b-button size="sm" class="mb-2 mr-2" @click="changeVariant4('success',1)" :variant="ar2[1]">
                      <b-icon icon="check-box"></b-icon> 
                    </b-button>

                    <b-button size="sm" class="mb-2 mr-2" @click="changeVariant4('warning',1)" :variant="ar2[1]">
                      <b-icon icon="clock"></b-icon> 
                    </b-button>

                    <b-button size="sm" class="mb-2 " @click="changeVariant4('danger',1)" :variant="ar2[1]">
                      <b-icon icon="gear-fill"></b-icon> 
                    </b-button>
                  </p>
            </div>

            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>

          <b-list-group-item :variant="ar[2]" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Disabled List group item</h5>
                   <p class="text-muted h4">
                    <b-button size="sm" class="mb-2 mr-2" @click="changeVariant4('success',2)" :variant="ar2[2]">
                      <b-icon icon="check-box"></b-icon> 
                    </b-button>

                    <b-button size="sm" class="mb-2 mr-2" @click="changeVariant4('warning',2)" :variant="ar2[2]">
                      <b-icon icon="clock"></b-icon> 
                    </b-button>

                    <b-button size="sm" class="mb-2 " @click="changeVariant4('danger',2)" :variant="ar2[2]">
                      <b-icon icon="gear-fill"></b-icon> 
                    </b-button>
                  </p>
                  

                </div>

                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>

                <small class="text-muted">Donec id elit non mi porta.</small>
              </b-list-group-item>
          
          <b-list-group-item  :variant="ar[3]" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Disabled List group item</h5>
                  <p class="text-muted h4">
                    <b-button size="sm" class="mb-2 mr-2" @click="changeVariant4('success',3)" :variant="ar2[3]">
                      <b-icon icon="check-box"></b-icon> 
                    </b-button>

                    <b-button size="sm" class="mb-2 mr-2" @click="changeVariant4('warning',3)" :variant="ar2[3]">
                      <b-icon icon="clock"></b-icon> 
                    </b-button>

                    <b-button size="sm" class="mb-2 " @click="changeVariant4('danger',3)" :variant="ar2[3]">
                      <b-icon icon="gear-fill"></b-icon> 
                    </b-button>
                  </p>
                </div>

                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>

                <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>

          <b-list-group-item  :variant="ar[4]" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Disabled List group item</h5>
                  <p class="text-muted h4">
                    <b-button size="sm" class="mb-2 mr-2" @click="changeVariant4('success',4)" :variant="ar2[4]">
                      <b-icon icon="check-box"></b-icon> 
                    </b-button>

                    <b-button size="sm" class="mb-2 mr-2" @click="changeVariant4('warning',4)" :variant="ar2[4]">
                      <b-icon icon="clock"></b-icon> 
                    </b-button>

                    <b-button size="sm" class="mb-2 " @click="changeVariant4('danger',4)" :variant="ar2[4]">
                      <b-icon icon="gear-fill"></b-icon> 
                    </b-button>
                  </p>
                </div>

                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </p>

                <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>

          </b-list-group>
      </b-card>
    </div>

</div>

</template>

<script>



export default {
  components:{
   
  },
  data () {
    return {
       value: 50,
       max: 100,
       ar : ["success","success","warning","danger","danger"],
       ar2: ["outline-success","outline-success","outline-warning","outline-danger","outline-danger"],
    }
  },
  methods: {
    changeVariant4(variant,nr) {
      console.log(this.ar[nr]);
      var oldVariant = this.ar[nr];
      this.ar[nr] = variant;
      this.ar2[nr] = "outline-" + variant;
      console.log(this.ar[3]);
      this.changeProgBar(oldVariant, variant);
    },
    changeProgBar(oldVariant, newVariant) {
      if(oldVariant == "success" && newVariant == "warning"){
        this.value -= 10;
      } else if(oldVariant == "success" && newVariant == "danger") {
        this.value -= 20;
      } else if(oldVariant == 'warning' && newVariant == 'success') {
        this.value += 10;
      } else if(oldVariant == 'warning' && newVariant == 'danger') {
        this.value -= 10;
      } else if(oldVariant == 'danger' && newVariant == 'success') {
        this.value += 20;
      } else if(oldVariant == 'danger' && newVariant == 'warning') {
        this.value += 10;
      }
    }
  }
}
</script>

<style scoped>

</style>
