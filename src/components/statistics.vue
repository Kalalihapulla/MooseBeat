<template>
    <div class="statistics">
        <br>
        <p>Most added first</p>
      
            <ul>
                <li v-for="data in albumData" v-bind:key="data">
                  
                        Title: {{data.title}} Artist: {{data.artist}} Times added: {{data.added}}
                    
                    
                </li>
            </ul>
       
        

        <br>

       

    </div>
</template>
<script>
import axios from 'axios';

export default {

    name: 'statistics',
    data() {
        return {
            albumData: '',
        }
    },
    created: function() {

        axios.get("/api/albums/get/all")
            .then((response) => {

                this.albumData = response.data;

            })
            .catch(function(error) {
                alert(error);
            });


    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}



a {
    color: #42b983;
}
</style>