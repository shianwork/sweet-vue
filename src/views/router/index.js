import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../login/LoginPage.vue'
import RegisterPage from '../login/RegisterPage.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
