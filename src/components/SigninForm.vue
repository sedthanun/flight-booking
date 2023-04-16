<template lang="">
  <form class="needs-validation" @submit.prevent="checkLogin" novalidate>
      <div class="mb-3">
      <label  class="form-label"
        >Email</label
      >
      <input
        type="email"
        class="form-control "
        id="exampleFormControlInput1"
        v-model="email"
      />
    </div>
    <div class="mb-5">
      <label id="validationCustom01" class="form-label"
        >Password</label
      >
      <input
        type="password"
        class="form-control "
        id="validationCustom02"
        v-model="password" required
      />
      <div class="invalid-feedback">
        Please choose a password.
      </div>
    </div>
    <div class="d-grid gap-2 mb-1">
      <button @click="register" type="submit" class="btn gradient text-light">เข้าสู่ระบบ</button>
    </div>
  </form>

</template>

<script>
    export default {
        name: "SignInForm",
        methods:{
          checkLogin(){
            console.log("Sign-In Successfully")
          }
        }
    }
</script>

<script setup>
 import {ref} from "vue";
    import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import { useRouter } from "vue-router";
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const errMsg = ref();
    
    const register = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully Registered");
            router.push('/booking')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "อีเมลของคุณไม่ถูกต้อง";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "ไม่มีแอคเคาท์ดังกล่าว";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "รหัสผ่านที่คุณใส่อาจจะผิด";
                    break;
                default:
                    errMsg.value = "รหัสผ่านและ Username อาจจะผิด";
                    break;
            }
            alert(error.message);

        })
    
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
<style lang="">

</style>
