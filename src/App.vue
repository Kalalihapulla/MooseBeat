<template>
  <div id="app">

    <div class="home-wrapper">
      <div class="home-back">
        <img class="back-img" src="/static/img/background-home.jpg" style="width:100%">
        
        <img class="logo-img" src="/static/img/logo_and_name/logo/icon1-trans.png" style="top:calc(5px + 10vw)">
        <img class="logo-img" src="/static/img/logo_and_name/name/name1-purple.png" style="top:calc(70px + 25vw)">        
        <button class="but1" style="top:calc(150px + 30vw)">Explore Our Platform
          
        </button>
        
        <h1 class="slogan">Keep listen to music!</h1>
      </div>
      
    </div>
    
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">

      <div class="container">

        <div>
          <router-link class="navbar-brand" v-bind:to="'/'">
            <img src="/static/img/logo_and_name/logo/icon1-white.png" style="width:auto; height:30px" class="d-inline-block align-top" >
            <img src="/static/img/logo_and_name/name/name1-white.png" style="width:auto; height:30px" class="d-inline-block align-top" >
          </router-link>

        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>

        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item" >
              <router-link class="nav-link" v-bind:to="'/statistics'">Statistics</router-link>
            </li>
            <li class="nav-item" v-if="this.username != null">
              <router-link class="nav-link owo" v-bind:to="'/profile/'+ username">Profile {{username}}</router-link>
            </li>
            <li class="nav-item" v-if="this.username != null">

              <a class="nav-link" href="/logout">Logout!</a>

            </li>

            <li class="nav-item owo" v-else>
              <router-link class="nav-link" v-bind:to="'/login'">Login</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <section class="info">
      <div>
        <div>
          <div class="row">
            <div class="col-sm-6 col-md-6" style="max-width:100vw">
              <h2>
                            What is MooseBeat?
              </h2>
              <div>
                <h3>
                     Music database / community
                </h3>
                <p>
                                There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection.
                </p>
              </div>
              <div>
                <h3>
                     Features
                </h3>
                <p>
                    Song recognition, mobile application, music recommendation algorithm, overall information about the music, user reviews, adding your own music, connection with music service providers such as Spotify, YouTube and Soundcloud and more to come
                </p>
              </div>
              <div>
                <h3>
                      All deveices friendly
                </h3>
                <p>
                      The product provides independent services for both smart devices and web usage that can be easily connected and used together for the maximum music experience.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-md-6">
              <img src="/static/img/Screenshot.png" style="max-width:45vw">
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
                
        <div class="container" style="border-top:1px solid grey;">
            <div class="row text-center">   
                <div class="col-lg-6 col-lg-offset-3">
                      <ul class="menu">
                                 
                             <li>
                                <a href="#">Home</a>
                              </li>
                                   
                              <li>
                                 <a href="#">About</a>
                              </li>
                                   
                              <li>
                                <a href="#">Blog</a>
                              </li>
                                   
                              <li>
                                 <a href="#">Gallery</a>
                              </li>
                                   
                              <li>
                                <a href="#">Contact</a>
                             </li>
                   
                        </ul>
                </div>
            </div>
        </div>

        <div class="copyright">
         <div class="container">
           
             <div class="row text-center">
              <p>Copyright © 2017 All rights reserved</p>
             </div>
             
         </div>
        </div>
        
    </footer>
      
   

    <!-- the router outlet, where all matched components would ber viewed -->

    <!--  <router-link v-bind:to="'/about'">About</router-link> -->

    
<!--    <div id="render">
      <router-view></router-view>
    </div>  -->    

  </div>
</template>


<script>
import register from './components/register.vue'
import axios from 'axios';
export default {
  name: 'app',
  components: {
    register
  },
  data() {
    return {
      username: null,



    }
  },
  created: function() {

    axios.get("/api/user/get/")
      .then((response) => {
        this.username = response.data;
      })
      .catch(function(error) {

      });
  },

}

</script>

<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">   

body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
}

.logo-img {
  position: absolute;
  right: 15%;  
  width: calc(100px + 10vw);
  height: auto;
  max-width: 300px;
}

.slogan {
  position: absolute;  
  left: 5%;
  top: 15%;
  font-size: calc(40px + 5vw);
  max-width: 10px;
  color: white;
}

.but1 {
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  position: absolute;  
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  color: #9C27B0;
  border-radius: 12px;
  border: 2px solid #9C27B0;
  cursor: pointer;
  width: calc(130px + 15vw);
  font-size: calc(12px + 1vw);
  right: 12vw; 
}

.but1:hover {
  background-color: #9C27B0;
  color: white;
}

.info{
  padding-top: 5vw;
  width: 100%;
  position: absolute;
  top: 55vw;
  background-color: #F9F9F9;
}

.navbar {   
  background-color:  transparent;  
  border-bottom-style: solid;
  border-bottom-color: rgb(239, 241, 242);
  border-bottom-width: 0;
  box-shadow: none;
}
.navbar:hover {
  display: block;  
  background-color: #9C27B0;  
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  transition-delay: initial;
}

.home-back { 
  position: absolute;
  width: 100%;
  height: auto;
}

.home-wrapper {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
}


.navbar .navbar-brand {
  color: #ecf0f1;
}

.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
  color: #a7dff4;
}

.navbar .navbar-text {
  color: #ecf0f1;
}

.navbar .navbar-nav .nav-link {
  color: #ecf0f1;
  border-radius: .25rem;
  margin: 0 0.25em;
}

.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
  color: #a7dff4;
}

.navbar .navbar-nav .nav-item.active .nav-link,
.navbar .navbar-nav .nav-item.active .nav-link:hover,
.navbar .navbar-nav .nav-item.active .nav-link:focus,
.navbar .navbar-nav .nav-item.show .nav-link,
.navbar .navbar-nav .nav-item.show .nav-link:hover,
.navbar .navbar-nav .nav-item.show .nav-link:focus {
  color: #a7dff4;
  background-color: #0091c5;
}

.navbar .navbar-toggle {
  border-color: #0091c5;
}

.navbar .navbar-toggle:hover,
.navbar .navbar-toggle:focus {
  background-color: #0091c5;
}

.navbar .navbar-toggle .navbar-toggler-icon {
  color: #ecf0f1;
}

.navbar .navbar-collapse,
.navbar .navbar-form {
  border-color: #ecf0f1;
}

.navbar .navbar-link {
  color: #ecf0f1;
}

.navbar .navbar-link:hover {
  color: #a7dff4;
}

@media (max-width: 575px) {
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #a7dff4;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #a7dff4;
    background-color: #0091c5;
  }
}

@media (max-width: 767px) {
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #a7dff4;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #a7dff4;
    background-color: #0091c5;
  }
}

@media (max-width: 991px) {
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #a7dff4;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #a7dff4;
    background-color: #0091c5;
  }
}

@media (max-width: 1199px) {
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #a7dff4;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #a7dff4;
    background-color: #0091c5;
  }
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {
  color: #ecf0f1;
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {
  color: #a7dff4;
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {
  color: #a7dff4;
  background-color: #0091c5;
}

footer{
  position: absolute;
  top: 100vw;
  padding: 4rem 0;
  margin-top: 4rem;
  font-size: 85%;
  text-align: center;
  background-color: #9C27B0;
  width: 100%;
  font-color: white;
}

footer ul{
    list-style:none;
    margin:0 auto;
    display:inline-block;
    padding-top:50px;
}

footer ul li{
    float:left;
}

footer ul li a{
  color:#b1aca1;
    padding:20px;
}

footer ul li a:hover{
  color:#7dabdb;
  text-decoration:none;
}

.footer-top{
  padding-bottom:50px;
}

.footer-top .fa{
    font-size:18px;
    color: #FFF;
    padding-right:10px;
}

.footer-top a{
    color:#FFF;
    text-decoration:none;
}

.footer-top .col-lg-2:hover .fa , .footer-top .col-lg-2:hover a{
    color:#7dabdb;
}

.copyright{
    background-color:#f0f0f0;
}

.copyright p{
  font-size:12px;
  padding:15px 0 10px 0;
}

#render {}


/* .owo {

  color: black;
} */
</style>