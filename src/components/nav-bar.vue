<template>
  <div>
    <div>
      <b-navbar type="dark" variant="info">
        <b-navbar-nav>
            <b-nav-item><router-link to = "/" class="route">Acasa <b-icon-house-fill></b-icon-house-fill></router-link></b-nav-item>
            <b-nav-item @click="disableNewBadge"><router-link to = "/noutati" class="route" >Noutati <b-badge v-show="showNew" variant="danger">New</b-badge> <b-icon-bell-fill v-show="!showNew"></b-icon-bell-fill></router-link></b-nav-item>
            <b-nav-item><router-link to = "/profil" class="route">Profil student <b-icon-person-fill></b-icon-person-fill></router-link></b-nav-item>
            <b-nav-item><router-link to = "/contact" class="route">Contact <b-icon-envelope-fill></b-icon-envelope-fill></router-link></b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showNew : true,
      }
    },
    methods: {
        disableNewBadge() {
          this.showNew = false;
        }
    },
  }
</script>

<style>
.nav-link .nav-item:hover{
  text-decoration: none;
  color : lightblue;
}
.route{
  color: lightblue;
}
.router-link-exact-active {
  text-decoration: none;
  color :white;
  font-weight: bolder;
}

.router-link-exact-active:hover {
  color:white;
}

.route:hover{
  color:white;
}


</style>
