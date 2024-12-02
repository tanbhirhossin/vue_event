<template>
    <div class="container-xxl py-5">
      <div class="row justify-content-center">
        <div class="col-6">
          <h2 class="text-center text-primary mb-4">Login</h2>
          <form method="post" class="border p-4 bg-light rounded">
            <div class="mb-3">
              <label htmlFor="contact_number" class="form-label text-primary">Phone</label>
              <input type="text" class="form-control" id="contact_number" name="contact_number"
                v-model="formData.contact_number" placeholder="Email"/>
            </div>
            
            <div class="mb-3">
              <label htmlFor="password" class="form-label text-primary">Password </label>
              <input type="password" class="form-control" id="password" name="password"
               v-model="formData.password" placeholder="Enter a password"/>
            </div>
            <button type="button" @click="login" class="btn btn-primary w-100"> Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import DataService from "../services/DataService";
    import router from '@/router';
  export default {
    name: "Login",
    data() {
      return {
        formData: {
          contact_number: "",
          password: "",
        },
      };
    },
    methods: {
      login() {
        var data = {
          contact_number: this.formData.contact_number,
          password: this.formData.password
        };
        DataService.login(data)
        .then(response => {
          console.log(response.data.data.token)
          if (response.data.data.token) {
            sessionStorage.setItem('uid', response.data.data.token);
            sessionStorage.setItem('userName', JSON.stringify(response.data.data.data));
          } else
            alert(response.data.error)
            
            router.push({ name: 'home' });
            window.location.href='/';
        })
        .catch(e => {
          console.log(e);
        });
      }
    },
  };
</script>
  
 <style scoped>
  .container {
    max-width: 400px;
    margin: 0 auto;
  }
  .text-center {
    text-align: center;
  }
  </style>