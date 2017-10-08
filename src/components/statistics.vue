<template>
    <div id="tableBg">
        <h1>Most popular albums</h1>

        <table class="table table-responsive table-striped table-hover">

            <!-- center headers, fix logout, fix review sizes -->
            <thead>
                <tr>
                    <th>Times added</th>
                    <th>Album title</th>
                    <th>Artist</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="data in albumData" v-bind:key="data">
                    <td>{{data.added}}</td>
                    <td>{{data.title}}</td>
                    <td>{{data.artist}}</td>

                </tr>

            </tbody>
        </table>

    </div>
</template>
<script>
import axios from 'axios';

export default {

    name: 'statistics',
    data() {
        return {
            albumData: '',
            tablePos: 0,

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
h1 {
    font-weight: normal;
    color: black;
    margin: auto;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
}

h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}



a {
    color: #871ca5;
}

.statistics {
    color: white;
}

thead {
    display: table-header-group;
}

#tableBg {
    height: 80%;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    background: whitesmoke;
    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 4px solid #be45e0;
   
}

th {
  text-align: center;
  font-size: 1.5em;
}
</style>