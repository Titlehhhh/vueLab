import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '@/views/Todo.vue'
import AboutView from '@/views/About.vue'
import RatingView from "@/views/Rating.vue";

const routes = [
    { path: '/', name: 'todo', component: TodoView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/rating', name: 'rating', component: RatingView },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router