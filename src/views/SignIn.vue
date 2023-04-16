<template lang="">
  <div class="fullscreen d-flex justify-content-center align-items-center mb-5">
    <div
      class="form-wrapper overflow-hidden d-flex justify-content-center shadow rounded-3"
    >
      <div class="left rounded position-relative">
        <div class="form-content">
          <h2 class="text-primary">Sign-In/ เข้าสู่ระบบ</h2>

          <SigninForm />

          <div class="mb-3">
            <p>
              <a href="/user">ลืมรหัสผ่าน</a> ยังไม่ได้เป็นสมาชิก
              <router-link to="/register">Sign Up</router-link>
            </p>
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
  components: {
    SigninForm,
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
    },
  },
};
</script>
<style></style>
