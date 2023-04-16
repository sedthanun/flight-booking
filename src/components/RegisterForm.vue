<template lang="">
  <form @submit.prevent="checkLogin" class="needs-validation" novalidate>
  <div class="mb-3">
    <label class="form-label">ชื่อ-สกุล</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="mb-3">
    <label class="form-label">วัน/เดือน/ปี/เกิด</label>
    <input type="date" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="mb-3">
    <label class="form-label">เพศ</label>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault1">
        ชาย
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
       
      />
      <label class="form-check-label" for="flexRadioDefault2">
        หญิง
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
      />
      <label class="form-check-label" for="flexRadioDefault2">
        เพศทางเลือก
      </label>
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">สัญชาติ</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="mb-3">
    <label class="form-label">หมายเลขบัตรประจำตัวประชาชน</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="mb-3">
    <label class="form-label">หมายเลขพาสปอร์ต</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="mb-3">
    <label class="form-label">ที่อยู่</label>
    <input type="textarea" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="mb-3">
    <label class="form-label">เบอร์โทรศัพท์</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="mb-3">
    <label class="form-label">Email</label>
    <input
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      v-model="email"
    />
  </div>
  <div class="mb-5">
    <label class="form-label">Password</label>
    <input
      type="password"
      class="form-control"
      id="exampleFormControlInput1"
      v-model="password"
    />
  </div>
  <div class="d-grid gap-2 mb-1">
    <button @click="register" type="submit" class="btn gradient text-light">
      ลงทะเบียน
    </button>
  </div>
</form>
</template>
<script>
export default {
  name: "RegisterForm",
  methods:{
    checkLogin(){
      console.log("Registered Successfully");
    }
  }
};
</script>
<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const username = ref("");
const date = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully Registered");
      router.push("/booking");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/booking");
    })
    .catch((error) => {
      //handle error
    });
};
</script>

<style lang=""></style>
