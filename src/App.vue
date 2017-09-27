<template>
  <div id="app" style="background-color:#315ea5">
    <b-navbar  class="navbar" toggleable="md" type="dark" variant="info">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand  router-link v-bind:to="'/'">MooseBeat</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item  router-link v-bind:to="'/artist'">Artist</b-nav-item>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

         

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item router-link v-bind:to="'/profile'">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>  
        </b-nav>

      </b-collapse>
    </b-navbar>
    <nav id="Nav" class="navbar navbar-expand-lg navbar navbar-inverse bg-primary fixed-top">

      <div class="container">

        <div>
          <router-link class="navbar-brand" v-bind:to="'/'">MooseBeat</router-link>
        </div>

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