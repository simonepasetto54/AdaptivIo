import { createRouter, createWebHistory } from "vue-router";
import IdeaShopping from "../common/platform/IdeaShopping/component/IdeaShopping.vue"
import JobAndJoy from "../common/platform/JobAndJoy/component/JobAndJoy.vue"
import ChoosePlatform from "../common/components/ChoosePlatform.vue";
import Login from "../common/components/Login.vue"

const routes = [
  { 
    path: "/", 
    component: ChoosePlatform
  },
  {
     path: "/ideashopping", 
     component: IdeaShopping,
     props: { fFam: 'poppinFont' }
  },
  {
    path: "/jobandjoy",
    component: JobAndJoy,
    props: { fFam: 'montserratFont' }
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
