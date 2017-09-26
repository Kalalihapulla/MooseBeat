<template>
    <div class="review">
 
    </div>
</template>
<script>
import axios from 'axios';
export default {

    name: 'review',

    data: {
      

    },
    methods: {
        
        handleSubmit() {

            
            axios.get(`/reviews/get/`+ , {

            })
                .then(response => {
                   this.$router.push({ path: '/' });
                 })
                .catch(e => {
                    this.errors.push(e)
                })

            this.clearData();
            this.$refs.modal1.hide()
        },

    }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>