import Home from './compoments/main/pages/home.js';
import Page1 from './compoments/main/pages/page1.js';
import Page2 from './compoments/main/pages/page2.js';
import Page3 from './compoments/main/pages/page3.js';

export const route = [
    {
        key:1,
        url:'/',
        title:'Home',
        subtitle:'1',
        exact:true,
        component:Home
    },
    {
        key:2,
        url:'/Page1',
        title:'Page1',
        subtitle:'2',
        component:Page1
    },
    {
        key:3,
        url:'/Page2',
        title:'Page2',
        subtitle:'3',
        component:Page2
    },
    {
        key:4,
        url:'/Page3',
        title:'Page3',
        subtitle:'4',
        component:Page3
    },
]