import router from "./router";

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = "vue 即时通讯";
    }
    next();
});
