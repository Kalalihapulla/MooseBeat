<template>
  <div id="app" style="background-color:#315ea5">

    <nav id="Nav" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">

      <div class="container">
        
        <div><router-link class="navbar-brand" v-bind:to="'/'">MooseBeat</router-link></div>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>

        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" v-bind:to="'/profile'">Profile</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" v-bind:to="'/artist'">Artist</router-link>
            </li>
          
          
          </ul>
        </div>
      </div>
    </nav>
    <!-- the router outlet, where all matched components would ber viewed -->

    <!--  <router-link v-bind:to="'/about'">About</router-link> -->

    <div>
      <router-view></router-view>
    </div>

    <footer>
      <div class="container">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li class="footer-menu-divider list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="#about">About</a>
          </li>
          <li class="footer-menu-divider list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="#services">Services</a>
          </li>
          <li class="footer-menu-divider list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p class="copyright text-muted small">Copyright &copy; Dead Moose Meat 2017. All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>


<script>
import register from './components/register.vue'

export default {
  name: 'app',
  components: {
    register
  }

}

</script>

<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   background: #315ea5;
  margin-top: 60px;
}

.navbar navbar-expand-lg navbar-light bg-light fixed-top {
  background: #315ea5 !important;
}
</style>