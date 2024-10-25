import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../pages/LoginPage.vue';
import DashBoard from '../pages/DashBoard.vue';
import UserList from '../components/users/UserList.vue';
const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
    meta: { requiresAuth: true },
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList,
    meta: { requiresAuth: true }  // Only show if authenticated
  }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');  // Dummy auth check
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'LoginPage' });
  } else {
    next();
  }
});

export default router;
