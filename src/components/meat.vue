<template>
  <b-card no-block>
    <b-tabs>
      <b-tab title="Tab 1">
        Tab 1 Contents
      </b-tab>
      <b-tab title="Tab 2">
        Tab 2 Contents <b-button href = "static/monka.jpg" size="md">Boop</b-button>
      </b-tab>
      <b-tab title="Tab 3">
      Monkas
      </b-tab>
    </b-tabs>
  </b-card>
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