<template lang="">
  <div class="fullscreen d-flex justify-content-center align-items-center mb-5">
    <div
      class="form-wrapper overflow-hidden d-flex justify-content-center shadow rounded-3"
    >
      <div class="left rounded position-relative">
        <div class="form-content">
          <h2 class="text-primary">Online Flight Booking System</h2>
          <h2 class="text-primary mb-5">ระบบจองตั๋วเครื่องบินออนไลน์</h2>
          <div class="d-grid gap-2 mb-5">
            <button @click="$router.push('/register')" type="button" class="btn btn-primary text-light">ลงทะเบียน</button>
          </div>
          <div class="d-grid gap-2 mb-5">
            <button @click="$router.push('/sign-in')" type="button" class="btn btn-primary text-light">เข้าสู่ระบบ</button>
          </div>
        </div>
        <div class="logo position-absolute bottom-0 start-0">
          <img src="/src/assets/itlog.png" alt="" srcset="" />
        </div>
      </div>
      <div class="right gradient"></div>
    </div>
  </div>
</template>

<script>
import SigninForm from "../components/SigninForm.vue";
export default {
  name: "SignIn",
  components: {},
};
</script>
<style>


</style>
