<template>
    <div class="register">
        <div>

            <!-- Modal Component -->
            <b-modal id="regform" ref="regform" title="Submit your account information" @ok="handleOk" @shown="clearData">
                <form @submit.stop.prevent="handleSubmit">
                    <b-form-input type="text" value="" placeholder="Enter your name" v-model="username"></b-form-input>
                    <b-form-input type="password" placeholder="Enter your password" v-model="password"></b-form-input>
                    <b-form-input type="password" placeholder="Re-enter your password" v-model="rePass"></b-form-input>
                </form>
            </b-modal>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {

    name: 'register',

    data: {
        username: '',
        password: '',
        rePass: '',

    },
    methods: {
        clearData() {
            this.username = '';
            this.password = '';
            this.rePass = '';

        },
        handleOk(e) {
            e.cancel();
            if (!this.username) {
                alert('Please enter your name');
            }
            else if (!this.password) {
                alert('Please enter your password');
            }
            else if (!this.rePass) {
                alert('Please re enter your password');
            }
            else if (this.password != this.rePass) {
                alert('Your passwords do not match');
            }

            else if (this.password.length < 5) {
                alert('Your password must be atleast 5 characters long');
            }

            else {
                this.handleSubmit()

            }
        },
        handleSubmit() {

            alert(this.username);
            axios.get(`/api/user/create/` + this.username + `/` + this.password, {

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