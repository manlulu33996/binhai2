import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import App from '.././App'
const NoticeList      = () => import('@/components/NoticeList'); //通知列表
const NewsList      = () => import('@/components/NewsList');    //新闻列表
const ExchangeList      = () => import('@/components/ExchangeList');    //交流列表
Vue.use(Router)

// 区分线上环境，配置不同路由base路径
let routeBasePath 	= process.env.NODE_ENV=='development' ? '' : '/mobile/dist/';
export default new Router({
  base:routeBasePath,
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/NoticeList',
      name: 'NoticeList',
      component: NoticeList
    },
    {
      path: '/NewsList',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/ExchangeList',
      name: 'ExchangeList',
      component: ExchangeList
    }
  ]
})
