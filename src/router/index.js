import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('../views/Personal.vue'),
    children: [
      {
        path: '',
        name: 'Myacount',
        component: () => import('../views/personals/Myacount.vue'),
        children: [
          {
            path: '',
            name: 'Myacount',
            component: () => import('../views/personals/Account/Acccenter.vue')
          },
          {
            path: '/personal/myacount/password',
            name: 'Changepassword',
            component: () => import('../views/personals/Account/Changepassword.vue')
          },
          {
            path: '/personal/myacount/setting',
            name: 'Setting',
            component: () => import('../views/personals/Account/Setting.vue')
          },
        ]
      },
      {
        path: '/personal/guarantee',
        name: 'Guarantee',
        component: () => import('../views/personals/Guarantee.vue'),//我的担保
        children: [
          {
            path: '',
            name: 'All',
            component: () => import('../views/personals/Guarantee/All.vue')//全部
          },
          {
            path: '/personal/Guarantee/acccepted',
            name: 'Acccepted',
            component: () => import('../views/personals/Guarantee/Acccepted.vue')//已受理
          },
          {
            path: '/personal/Guarantee/notaccept',
            name: 'Notaccept',
            component: () => import('../views/personals/Guarantee/Notaccept.vue')//未受理
          },
          {
            path: '/personal/Guarantee/hrejected',
            name: 'Hrejected',
            component: () => import('../views/personals/Guarantee/Hrejected.vue')//已拒单
          },
        ]
      },
      {
        path: '/personal/online',
        name: 'Online',
        component: () => import('../views/personals/Online.vue'),//在线充值
        children: [
          {
            path: '',
            name: 'Offline',
            component: () => import('../views/personals/Online/Offline.vue')//线下充值
          },
          {
            path: '/personal/online/opayment',
            name: 'Opayment',
            component: () => import('../views/personals/Online/Opayment.vue')//线下充值
          },
        ]
      },
      {
        path: '/personal/recharge',
        name: 'Recharge',
        component: () => import('../views/personals/Recharge.vue'),//充值记录
        children: [
          {
            path: '',
            name: 'Sales',
            component: () => import('../views/personals/Recharges/Sales.vue')//线下充值
          },
          {
            path: '/personal/recharge/store',
            name: 'Store',
            component: () => import('../views/personals/Recharges/Store.vue')//线下充值
          },
        ]
      },
      {
        path: '/personal/withdrawal',
        name: 'Withdrawal',
        component: () => import('../views/personals/Withdrawal.vue')//余额提现
      },
      {
        path: '/personal/record',
        name: 'Record',
        component: () => import('../views/personals/Record.vue'),//提现记录
        children: [
          {
            path: '',
            name: 'Withdbrok',
            component: () => import('../views/personals/Withdrawal/Withdbrok.vue')//经纪人提现
          },
          {
            path: '/personal/record/helpwith',
            name: 'Helpwith',
            component: () => import('../views/personals/Withdrawal/Helpwith.vue')//自助提现
          },
        ]
      },
      {
        path: '/personal/billing',
        name: 'Billing',
        component: () => import('../views/personals/Billing.vue')//账务明细
      },
      {
        path: '/personal/message',
        name: 'Message',
        component: () => import('../views/personals/Message.vue'),//消息中心
        children: [
          {
            path: '',
            name: 'Mynew',
            component: () => import('../views/personals/Message/Mynew.vue')//我的消息
          },
          {
            path: '/personal/message/inform',
            name: 'Inform',
            component: () => import('../views/personals/Message/Inform.vue')//公告通知
          },
        ]
      },
      {
        path: '/personal/order',
        name: 'Order',
        component: () => import('../views/personals/Order.vue')//我的订单
      },
    ]
  },
  {
    path: '/subpage',
    name: 'Subpage',
    component: () => import('../views/Secondary/Subpage/Index.vue')
  },
  {
    path: '/newmedia',
    name: 'Newmedia',
    component: () => import('../views/Secondary/Newmedia/Index.vue')
  },
  {
    path: '/trading',
    name: 'Trading',
    component: () => import('../views/Secondary/Trading/Index.vue')
  },
  {
    path: '/domainname',
    name: 'Domainname',
    component: () => import('../views/Secondary/Domainname/Index.vue')
  },
  {
    path: '/onlinetrading',
    name: 'Onlinetrading',
    component: () => import('../views/Secondary/Onlinetrading/Index.vue')
  },
  {
    path: '/latestnews',
    name: 'Latestnews',
    component: () => import('../views/Secondary/Latestnews/Index.vue')
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('../views/Secondary/Support/Index.vue')
  },
  {
    path: '/aboutus',
    name: 'Aboutus',
    component: () => import('../views/Secondary/Aboutus/Index.vue'),
    children: [
      {
        path: '',
        name: 'Aboutues',
        component: () => import('../views/Secondary/Aboutus/Aboutues/Index.vue')
      },
      {
        path: '/aboutus/joinus',
        name: 'Joinus',
        component: () => import('../views/Secondary/Aboutus/Aboutues/Joinus.vue')
      },
      {
        path: '/aboutus/loking',
        name: 'Loking',
        component: () => import('../views/Secondary/Aboutus/Aboutues/Loking.vue')
      },
      {
        path: '/aboutus/business',
        name: 'Business',
        component: () => import('../views/Secondary/Aboutus/Aboutues/Business.vue')
      },
    ]
  },
  {
    path: '/consignment',
    name: 'Consignment',
    component: () => import('../views/Secondary/Consignment/Index.vue'),
    children: [

    ]
  },
  {
    path: '/boking',
    name: 'Boking',
    component: () => import('../views/Boking.vue')
  },
  {
    path: '/consignment/details',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/subpage/details1',
    name: 'Details1',
    component: () => import('../views/Details1.vue')
  },
  {
    path: '/newmedia/details2',
    name: 'Details2',
    component: () => import('../views/Details2.vue')
  },
  {
    path: '/trading/details3',
    name: 'Details3',
    component: () => import('../views/Details3.vue')
  },
  {
    path: '/domainname/details4',
    name: 'Details4',
    component: () => import('../views/Details4.vue')
  },
  {
    path: '/onlinetrading/details5',
    name: 'Details5',
    component: () => import('../views/Details5.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/Forget.vue')
  },
  {
    path: '/latestnews/centent',
    name: 'Centent',
    component: () => import('../views/xiangqingye.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
