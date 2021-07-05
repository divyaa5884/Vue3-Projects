import { createRouter, createWebHistory } from 'vue-router';

import ReadLists from './components/ReadLists.vue';
import AddList from './components/AddList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/lists', component:  ReadLists},
        { path: '/add-list', component: AddList},
    ]
});
export default router;
