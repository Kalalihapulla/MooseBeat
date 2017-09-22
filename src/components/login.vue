<template>
    <div class="login">
        <div>

            <!-- Modal Component -->
            <b-modal id="logform" ref="logform" title="Login" @ok="handleOk" @shown="clearData">
                <form @submit.stop.prevent="handleLogin">
                    <b-form-input type="text" value="" placeholder="Enter your username" v-model="username"></b-form-input>
                    <b-form-input type="password" placeholder="Enter your password" v-model="password"></b-form-input>
                </form>
            </b-modal>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {

    name: 'login',

    data: {
        username: '',
        password: ''     

    },
    methods: {
        clearData() {
            this.username = '';
            this.password = '';  

        },
        handleOk(e) {
            e.cancel();
            if (!this.username) {
                alert('Please enter your name');
            }
            else if (!this.password) {
                alert('Please enter your password');
            }
            else {
                this.handleLogin()

            }
        },
        handleLogin() {

            alert("Boop!");
            axios.get(`/api/user/create/` + this.username + `/` + this.password, {
            
            })
                .then(response => { })
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