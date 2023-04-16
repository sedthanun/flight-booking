<template>
<header class="shadow">
  <div class="wrapper">
    <div id="header">
      <nav>
        <ul class="menu">
    
          <li class="logo"><router-link to="/">Online Flight Booking System <i class="bi bi-airplane-fill"></i></router-link></li>
          <li class="item" v-if="isLoggedin"><router-link to="/booking">จองตั๋ว</router-link></li>
          <li class="sign-out"><button
      @click="handleSignOut"
      v-if="isLoggedin"
      class="btn btn-outline-primary"
    >
      Sign Out
    </button></li>
        </ul>
      </nav>
    </div>
  </div>
</header>



<router-view />

 


</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";
const isLoggedin = ref(false);
let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedin.value = true;
    } else {
      isLoggedin.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style>
header{

  background: #f0f0f0;
  
}

#header{
  padding: 1rem 0;
 
}

* {
  margin: 0;
  font-family: "IBM Plex Sans Thai", sans-serif;

}
.fullscreen {
  /* background:green; */
  display: flex;
  width: 100%;
  height: 100vh;
}
.wrapper {
  /* background: yellow; */
  width: 100%;
  max-width: calc(1024px + 2px);
  padding: 0 16px;
  margin: auto;
  box-sizing: border-box;
}

h2 {
  font-weight: lighter;
}

.left {
  background-color: white;
  /* border-radius: 10px; */
  /* box-shadow: 0px 0px 20px rgba(128, 128, 128, 0.6); */
  padding: 1.5rem;
  min-width: 480px;
  min-height: 536px;
  border-radius: 10px 0px 0px 10px;
}
.right {
  /* background: rgb(46, 194, 241);
  background: linear-gradient(
    0deg,
    rgba(46, 194, 241, 1) 0%,
    rgba(52, 103, 203, 1) 100%
  ); */
  /* border-radius: 10px; */
  /* box-shadow: 0px 0px 20px rgba(128, 128, 128, 0.6); */
  padding: 1.5em;
  min-width: 480px;
  min-height: 536px;
  /* border-radius: 0px 10px 10px 0px; */
}
.logo {
  padding: 0.5rem;
}
.gradient {
  background: rgb(46, 194, 241);
  background: linear-gradient(
    0deg,
    rgba(46, 194, 241, 1) 0%,
    rgba(52, 103, 203, 1) 100%
  );
}
.btn {
  font-family: "Noto Sans Thai", sans-serif !important;
  font-size: 1.2rem !important;
}
ul {
  list-style-type: none;
}
nav{
  padding: 5px 20px;
}

.menu{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.menu li{
  font-size: 1.3rem;
  padding: 0 0 0 1em;
  white-space: nowrap;
}

.item a{
  text-decoration: none;
  font-size: 25px;
}


.logo a{
  text-decoration: none;
  font-size: 27px;
}

.logo{
  flex: 1;
}










</style>
