import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'], resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const Gift = resolve => require(['@/views/Gift.vue'], resolve)
const My = resolve => require(['@/views/My.vue'], resolve)
const Member = resolve => require(['@/views/Member.vue'], resolve)
const Alldetail = resolve => require(['@/views/Alldetail.vue'], resolve)
const Address = resolve => require(['@/views/Address.vue'], resolve)
const Addaddress = resolve => require(['@/views/Addaddress.vue'], resolve)


export default new Router({
    routes: [{
        path: '/',
        name: '首页',
        component: Index
    }, {
        path: '/category/羚羊咖啡',
        name: '分类页',
        // redirect: '/category/all',
        component: Category,
        children: [{
            path: '/category/:tab',
            component: CategoryMain
        }]
    }, {
        path: '/car',
        name: '购物车页',
        component: Car
    }, {
        path: '/car/pay',
        name: '支付页',
        component: Pay
    }, {
        path: '/user',
        name: '用户页',
        component: User,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录才能进入的
        },
    }, {
        path: '/gift',
        name: '礼券',
        component: Gift,
    }, {
        path: '/my',
        name: '个人信息',
        component: My,
    }, {
        path: '/member',
        name: '会员权益',
        component: Member,
    }, {
        path: '/detail',
        name: '详情页',
        component: Detail
    }, {
        path: '/address',
        name: '我的地址',
        component: Address
    }, {
        path: '/addAddress',
        name: '添加地址',
        component: Addaddress
    }, {
        path: '/alldetail',
        name: '我的订单',
        component: Alldetail
    }, {
        path: '/search',
        name: '搜索页',
        component: Search
    }, {
        path: '/login',
        name: '登录页',
        component: Login
    }]
})