<template>
  <div id="sidebar-left">
    <el-menu
      :collapse="collapse"
      class="el-menu-vertical-demo"
      background-color="#24292e"
      text-color="#fff"
      active-text-color="#fff"
      unique-opened
      router
    >
      <template v-for="item in dataMap.sidebarInfo">
        <el-sub-menu :index="item.index" :key="item.index" v-if="item.subNav">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group>
            <!--<template slot="title">分组一</template>-->
            <el-menu-item
              :index="list.index"
              v-for="list in item.subNav"
              :key="list.index"
            >{{ list.title }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item :index="item.index" :key="item.index" v-else>
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import i18n from "@/locales/index";
import { reactive } from "vue";

const t = i18n.global.t;
// const menuHome = { name: t('menus.home') }

const dataMap = reactive({
  indexPath: [], //保存点击过的页面路由信息
  sidebarInfo: [
    //左侧导航条信息
    {
      icon: "el-icon-setting",
      index: "chart",
      title: t("account")
    },
    /**
     * inquiry 原始单据
     * **/
    {
      icon: "el-icon-tickets",
      index: "1",
      title: t("invoice"),
      subNav: [
        {
          index: "/orderReceivable",
          title: "应收单据"
        },
        {
          index: "/transactionFlow",
          title: "交易流水"
        },
        {
          index: "/systemStatement",
          title: "系统对账单"
        },
        {
          index: "/bankFlow",
          title: "银行流水"
        }
      ]
    },
    /**
     * verifyPlatform 对账平台
     * **/
    {
      icon: "el-icon-date",
      index: "2",
      title: t("reconciliation"),
      subNav: [
        {
          index: "/verifyReceivables",
          title: "收款对账"
        },
        {
          index: "/verifyAutomate",
          title: "自动对账"
        },
        {
          index: "/verifyBankStatement",
          title: "银行对账"
        }
      ]
    },
    /**
     * verifyRecord 对账记录
     * **/
    {
      icon: "el-icon-goods",
      title: t("record"),
      index: "3",
      subNav: [
        {
          index: "/verifyReceivablesRecord",
          title: "收款记录"
        },
        {
          index: "/verifyBankStatementRecord",
          title: "银行记录"
        }
      ]
    },
    /**
     * reportForms报表
     * **/
    {
      icon: "el-icon-star-off",
      title: t("report"),
      index: "4",
      subNav: [
        {
          index: "/OrderSummary",
          title: "订单执行总表"
        },
        {
          index: "/ReceivablesBalance",
          title: "收款对账余额表"
        }
      ]
    },
    {
      icon: "el-icon-more",
      title: t("setting"),
      index: "5",
      subNav: [
        {
          index: "/Structure",
          title: "平台管理"
        },
        {
          index: "/UpdatePWD",
          title: "修改密码"
        }
      ]
    }
  ]
});
</script>


<style scoped></style>
