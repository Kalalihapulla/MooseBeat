<template>
  <div id="app">
    
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            
          <div class="container">
            <a class="navbar-brand" href="#">MooseBeat</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <router-link class="nav-link" v-bind:to="'/moose'">Moose</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" v-bind:to="'/'">Meat</router-link>
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
export default {
  name: 'app',

}

</script>

<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>