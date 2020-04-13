<template>

<div class="test">

<div>
  <b-card no-body class="overflow-hidden" style="max-width: 640px;" bg-variant="dark" text-variant="white">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://i.ibb.co/hZjvGd7/profile-pic.jpg" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Rus Renato">
         <div>
            <b-dropdown
              split
              split-variant="outline-light"
              variant="light"
              text="Tehnologii de interes"
              class="m-2"
            >
              <b-dropdown-item href="#">Java</b-dropdown-item>
              <b-dropdown-item href="#">Kotlin</b-dropdown-item>
              <b-dropdown-item href="#">Python</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
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
      
    }
  }
}
</script>

<style scoped>
.test {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
