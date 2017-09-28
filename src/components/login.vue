<template>
    <div class="login">
        <div class ="center_div">
            <form action="/login" method="post">
                <div class="form-group">
                    <label for="user"><b>Username</b></label>
                    <input id ="user" type="text" class="form-control" name="username">
                </div>
                <div class="form-group">
                    <label for="password"><b>Password</b></label>
                    <input id="password"type="password" class="form-control" name="password">
                </div>

                <button type="submit" class="btn btn-warning btn-lg">Login</button>
            </form>
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


            axios.post(`/login`, {
                username: this.username,
                password: this.password

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
.center_div{
    margin: 0 auto;
    width:40% /* value of your choice which suits your alignment */
}
</style>