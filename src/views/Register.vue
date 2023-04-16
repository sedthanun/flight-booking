<template lang="">
    <div class="d-flex justify-content-center align-items-center mb-5">
      <div class="form-wrapper overflow-hidden d-flex justify-content-center shadow rounded-3 mt-5">
        <div class="left rounded position-relative">
         
          <div class="form-content">
            <h2 class="text-primary">Sign Up/ ลงทะเบียน</h2>
            <RegisterForm />
            
          </div>
          <!-- <div class="logo position-absolute bottom-0 start-0">
              <img src="src/assets/itlog.png" alt="" srcset="">
          </div> -->
        </div>
        <div class="right bg-primary"></div>
      </div>
    </div>

  </template>
 
  
  <script>
import RegisterForm from '../components/RegisterForm.vue';

  export default {
    name: "SignIn",
    components: {
      RegisterForm,
    },
  };
  </script>
  <style>
  
  
  </style>
  