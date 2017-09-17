<template>
    <div class="register">
        <div>

            <!-- Modal Component -->
            <b-modal id="regform"
                ref="regform"
                title="Submit your account information" 
                @ok="handleOk" 
                @shown="clearData">
                <form @submit.stop.prevent="handleSubmit">
                    <b-form-input type="text" value="" placeholder="Enter your name" v-model="name"></b-form-input>
                    <b-form-input type="password" placeholder="Enter your password" v-model="pass"></b-form-input>
                    <b-form-input type="password" placeholder="Re-enter your password" v-model="rePass"></b-form-input>
                </form>
            </b-modal>
        </div>
        </div>
</template>
<script>

export default {
    name: 'register',

    data: {
        name: '',
        pass: '',
        rePass: '',

    },
    methods: {
        clearData() {
            this.name = '';
            this.pass = '';
            this.rePass = '';

        },
        handleOk(e) {
            e.cancel();
            if (!this.name) {
                alert('Please enter your name');
            } 
            else if (!this.pass) {
                alert('Please enter your password');
            }
            else if (!this.rePass) {
                alert('Please re enter your password');
            }
            else if (this.pass != this.rePass) {
                alert('Your passwords do not match');
            }

            else if (this.pass.length < 5) {
                alert('Your password must be atleast 5 characters long');
            }

            else {
                this.handleSubmit()
                
            }
        },
        handleSubmit() {
           
           alert(this.name);

            this.clearData();
            this.$refs.modal1.hide()
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>