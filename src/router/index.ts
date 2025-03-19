import { defineAsyncComponent } from "vue";
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    meta: {
      title: "登陆",
    },
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/home",
    // 使用defineAsyncComponent进行懒加载
    component: defineAsyncComponent(() => import("@/views/home/index.vue")),
    meta: {
      title: "自述文件",
    },
    children: [
      {
        //我的账户
        path: "/chart",
        component: defineAsyncComponent(() => import("@/views/chart/index.vue")),
        meta: {
          title: "我的账户",
        },
      },
      /**
       * inquiry 单据查询
       * **/
      {
        //订单应收
        path: "/orderReceivable",
        component: defineAsyncComponent(() => import("@/views/inquiry/OrderReceivable.vue")),
        meta: {
          title: "应收单据",
        },
      },
      {
        //交易流水
        path: "/transactionFlow",
        component: defineAsyncComponent(() => import("@/views/inquiry/TransactionFlow.vue")) ,
        meta: {
          title: "交易流水",
        },
      },
      {
        //系统对账单
        path: "/systemStatement",
        component: defineAsyncComponent(() => import("@/views/inquiry/SystemStatement.vue")),
        meta: {
          title: "系统对账单",
        },
      },
      {
        //银行流水
        path: "/bankFlow",
        component: defineAsyncComponent( () => import("@/views/inquiry/BankFlow.vue")),
        meta: {
          title: "银行流水",
        },
      },
      {
        path: "/orderDetail/:id",
        component: defineAsyncComponent( () => import("@/views/inquiry/children/orderDetail.vue")),
        name: "orderDetail",
        meta: {
          title: "订单详情",
        },
      },
      {
        path: "/orderAdd",
        component: defineAsyncComponent( () => import("@/views/inquiry/children/orderAdd.vue")),
        meta: {
          title: "订单新增",
        },
      },
      /**
       * verifyPlatform 对账平台
       * **/
      {
        path: "/verifyAutomate",
        component: defineAsyncComponent(() => import("@/views/verifyPlatform/verifyAutomate.vue")),
        meta: {
          title: "自动对账",
        },
      },
      {
        //对账平台
        path: "/verifyReceivables",
        component: defineAsyncComponent(() => import("@/views/verifyPlatform/VerifyReceivables.vue")),
        meta: {
          title: "收款对账",
        },
      },
      {
        //银行对账
        path: "/verifyBankStatement",
        component: defineAsyncComponent(() =>
          import("@/views/verifyPlatform/VerifyBankStatement.vue")),
        meta: {
          title: "银行对账",
        },
      },

      /**
       * verifyRecord 对账记录
       * **/
      {
        //银行对账单记录
        path: "/verifyReceivablesRecord",
        component:defineAsyncComponent( () =>
          import("@/views/verifyRecord/VerifyReceivablesRecord.vue")),
        meta: {
          title: "收款对账记录",
        },
      },
      {
        //银行对账单记录
        path: "/verifyBankStatementRecord",
        component:defineAsyncComponent( () =>
          import("@/views/verifyRecord/VerifyBankStatementRecord.vue")),
        meta: {
          title: "银行对账记录",
        },
      },
      /**
       * reportForms报表
       * **/
      {
        //订单执行汇总表
        path: "/orderSummary",
        component: defineAsyncComponent(() => import("@/views/reportForms/OrderSummary.vue")),
        meta: {
          title: "订单执行汇总表",
        },
      },
      {
        //收款对账余额表
        path: "/receivablesBalance",
        component: defineAsyncComponent( () => import("@/views/reportForms/ReceivablesBalance.vue")),
        meta: {
          title: "收款对账余额表",
        },
      },
      {
        path: "/Upload",
        component:defineAsyncComponent( () => import("@/views/upload/upload.vue")),
        meta: {
          title: "文件上传",
        },
      },
      /**
       * 设置
       * */
      {
        path: "/Structure",
        component:defineAsyncComponent( () => import("@/views/set/structure.vue")),
        meta: {
          title: "组织架构",
        },
      },
      //修改密码
      {
        path: "/UpdatePWD",
        component: defineAsyncComponent(() => import("@/views/set/updatePWD.vue")),
        meta: {
          title: "修改密码",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
