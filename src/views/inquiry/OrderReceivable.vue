<template>
  <div class="bill">
    <div class="head_search">
      <h3 class="head_title">订单应收</h3>
      <!-- 传回父组件 -->
      <search @orderSearchs="fliterOrder"></search>
      <batchAudit></batchAudit>
      <batchUnAudit></batchUnAudit>
      <batchDifferences></batchDifferences>
      <batchDelete></batchDelete>
    </div>
    <div class="container">
      <el-tabs type="border-card" v-model="dataMap.activeName">
        <!--按钮-->
        <el-row>
          <!-- <btnList></btnList>-->
        </el-row>
        <el-tab-pane label="全部" name="Whole">
          <hzl-table :DataList="getLocalDataList" :height="420" :cols="colsData"></hzl-table>
        </el-tab-pane>
        <el-tab-pane label="已对账" name="Completely">
          <hzl-table :DataList="getLocalDataList" :height="420" :cols="colsData"></hzl-table>
        </el-tab-pane>
        <el-tab-pane label="部份对账" name="Part">
          <hzl-table :DataList="getLocalDataList" :height="420" :cols="dataMap.colsData"></hzl-table>
        </el-tab-pane>
        <el-tab-pane label="未对账" name="UnSettled">
          <hzl-table :DataList="getLocalDataList" :height="420" :cols="colsData"></hzl-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <hzl-page></hzl-page>
  </div>
</template>

<script setup>
// import {mapState} from 'vuex'
import moment from "moment";
// import {getOrderReceivable,getCompany, getCols} from '@/axios/api'
import search from "@/components/search/Search.vue";
import batchAudit from "@/components/filterBox/batchAudit.vue";
import batchUnAudit from "@/components/filterBox/batchUnAudit.vue";
import batchDifferences from "@/components/filterBox/batchDifferences.vue";
import batchDelete from "@/components/filterBox/batchDelete.vue";
import btnList from "@/components/btnList/btnList.vue";

const dataMap = reactive({
  loading: true,
  activeName: "Whole",
  getLocalDataList: [], //请求的数据
  colsData: [
    {
      prop: "",
      label: "",
      width: "60",
      type: "selection"
    },
    {
      prop: "billNo",
      label: "单据编号",
      width: "200"
    },
    {
      prop: "platform",
      label: "平台",
      width: "200"
    },
    {
      prop: "orderNo",
      label: "平台订单号",
      width: "250"
    },
    {
      prop: "totalAmount",
      label: "总金额",
      width: "80"
    },
    {
      prop: "status",
      label: "单据状态",
      width: "90"
    },
    {
      prop: "businessDate",
      label: "业务日期",
      width: "110"
    },
    {
      prop: "settleStatus",
      label: "对账状态",
      width: "110"
    },
    {
      prop: "settleAmount",
      label: "已对账金额",
      width: "110"
    },
    {
      prop: "unsettleAmount",
      label: "未对账金额",
      width: "110"
    },
    {
      prop: "differenceProcessingStatus",
      label: "差异处理状态",
      width: "110"
    },
    {
      prop: "differenceProcessingAmount",
      label: "差异处理金额",
      width: "110"
    },
    {
      prop: "differenceProcessingRamarks",
      label: "差异处理原因",
      width: "130"
    },
    {
      prop: "reconStatus",
      label: "退款状态",
      width: "110"
    },
    {
      prop: "unsettlementMoney",
      label: "未退款金额",
      width: "110"
    },
    {
      prop: "settlementMoney",
      label: "已退款金额",
      width: "110"
    },
    {
      prop: "orderType",
      label: "单据类型",
      width: "110",
      type: ""
    },
    {
      prop: "orderTotalAmount",
      label: "订单总金额",
      width: "110"
    },
    {
      prop: "commission",
      label: "佣金",
      width: "110"
    },
    {
      prop: "integral",
      label: "积分",
      width: "110"
    },
    {
      prop: "platformCoupon",
      label: "平台优惠卷",
      width: "110"
    },
    {
      prop: "companyCoupon",
      label: "公司优惠卷",
      width: "110"
    },
    {
      prop: "insurance",
      label: "保险",
      width: "110"
    },
    {
      prop: "freight",
      label: "运费",
      width: "110"
    },
    {
      prop: "sellerPayment",
      label: "买家支付金额",
      width: "120"
    }
  ],
  handSelectDataList: [], //选中的数据
  btnInfo: [],
  message: "",
  currentPage4: 4
});

//高级查询
const fliterOrder = value => {
  console.log(JSON.stringify(value), "这是高级查询组件传回来的...");
};

const handleSizeChange = val => {
  console.log(`每页 ${val} 条`);
};
const handleCurrentChange = val => {
  console.log(`当前页: ${val}`);
};
const handleClick = () => {
  alert("button click");
};
/*请求数据*/
// getLocalData() {
//   getOrderReceivable().then((res) => {
//     console.log(res);
//     if (res.status === 200) {
//       this.getLocalDataList = res.data.rows;
//       this.loading = false;
//     }
//   });
// },
// /*请求数据*/
// colsUpate() {
//   getCols().then((res) => {
//     console.log(res.data);
//     this.colsData = res.data;
//     this.loading = false;
//   });
// },

// getRowInfo(row) {
//   //获取点击的信息然后跳转
//   //let index = this.getLocalDataList.indexOf(row);
//   this.$store.dispatch("storeOrderListUUid", row.uuid);
//   this.$refs.OrderTable.toggleRowSelection(row);
//   this.$router.push({
//     name: "orderDetail",
//     params: { id: row.uuid },
//   });
// },
//点击行
const handleSelectedRow = row => {
  this.$refs.OrderTable.toggleRowSelection(row);
};
//当选择项发生变化时会触发该事件
const handleSelectionChange = val => {
  this.handSelectDataList = val;
};

//数格式转换
const formatTime = row => {
  //转换时间
  if (row.businessDate) {
    return moment(row.businessDate).format("YYYY-MM-DD");
  }
};
const formatStatus = row => {
  //单据状态
  return (
    (row.status === "Save" && "保存") || (row.status === "Audited" && "审核")
  );
};
const formatSettleStatus = row => {
  //对账状态
  return (
    (row.settleStatus === "UnSettled" && "未对账") ||
    (row.settleStatus === "Part" && "部分对账") ||
    (row.settleStatus === "Completely" && "完全对账")
  );
};
const formatDifferenceProcessingStatus = row => {
  //差异处理状态
  return (
    (row.differenceProcessingStatus === "Y" && "是") ||
    (row.differenceProcessingStatus === "N" && "否")
  );
};
const formatReconStatus = row => {
  //退款状态
  return (
    (row.reconStatus === "UnSettled" && "未退款") ||
    (row.reconStatus === "Part" && "部分退款") ||
    (row.reconStatus === "Completely" && "完全退款")
  );
};
const formatOrderType = row => {
  //退款状态
  return (
    (row.orderType === "0" && "平台订单") ||
    (row.orderType === "1" && "手工订单")
  );
};

// export default {
//   name: "bill",
//   components: {
//     search, //高级搜索
//     batchAudit, //批量审核框
//     batchUnAudit, //批量反审核框
//     batchDifferences, //批量差异对帐
//     batchDelete, //批量删除
//     btnList, //按钮
//   },
//   data() {
//     return {};
//   },
//   // computed: {
//   //   ...mapState({
//   //     verifyStatus:store=>store.verifyStatus,
//   //   })
//   // },
//   mounted() {
//     // this.getLocalData();
//     // this.colsUpate();
//   },
//   created() {},
//   methods: {

//   },
// };
</script>
<style scoped></style>
