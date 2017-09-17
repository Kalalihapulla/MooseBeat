<template>
 <header class="intro-header">
        <div class="container">
          <div class="intro-message">
            <h1>MooseBajs</h1>
            <h3>A Template by Start Bootstrap</h3>
            <a href=".\static\img\monka.jpg">www</a>
            <br>
            <router-link v-bind:to="'/moose'">Meat</router-link>
            <hr class="intro-divider">
            <ul class="list-inline intro-social-buttons">
              <li class="list-inline-item">
                <a href="#" class="btn btn-secondary btn-lg">
                  <i class="fa fa-twitter fa-fw"></i>
                  <span class="network-name">Twitter</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn btn-secondary btn-lg">
                  <i class="fa fa-github fa-fw"></i>
                  <span class="network-name">Github</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn btn-secondary btn-lg">
                  <i class="fa fa-linkedin fa-fw"></i>
                  <span class="network-name">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      
</template>

<script>

export default {
  name: 'meat'
}
</script>
<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>