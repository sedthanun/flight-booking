import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged  } from "firebase/auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/",component: () => import("../views/Home.vue")},
        {path: "/sign-in",component: () => import("../views/SignIn.vue")},
        {path: "/register",component: () => import("../views/Register.vue")},
        {path: "/booking",
        component: () => import("../views/Booking.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    ],
})

const getCurrentUser = () =>{
    return new Promise((resolve, reject) => {
        const removeListener= onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};
router.beforeEach(async (to, from, next) => {
    if(to.matched.some((record) => record.meta.requiresAuth)) {
        if(await getCurrentUser()) {
            next();
        }else{
            // alert("กรุณาลงทะเบียนก่อน !");
            next("/");
        }
    }else {
        next();
    }
});


export default router;