<template>
  <div>
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          style="float: right; margin-top: 35px"
          type="primary"
          size="small"
          @click="handleSearchList()"
          >查询结果</el-button
        >
        <el-button
          style="float: right; margin-top: 35px; margin-right: 15px"
          @click="handleResetSearch()"
          size="small"
          >重置</el-button
        >
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input
              style="width: 200px"
              v-model="keyword"
              placeholder="商品名称"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!-- 数据列表  添加 -->
    <div>
      <el-card class="filter-container" shadow="never">
        <i class="el-icon-tickets"></i>
        <span>数据列表</span>
        <el-button
          style="float: right; width: 80px"
          type="primary"
          size="small"
          @click="addShopCerent"
          >添加</el-button
        >
      </el-card>
    </div>
    <!-- 商品信息 -->
    <div class="table-container">
      <el-table ref="productTable" :data="list" style="width: 100%" border>
        <el-table-column
          type="selection"
          width="60"
          align="center"
        ></el-table-column>
        <el-table-column label="编号" width="90" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="商品图片" width="180" align="center">
          <template slot-scope="scope">
            <img style="height: 80px" :src="scope.row.img" />
          </template>
        </el-table-column>
        <el-table-column label="商品名称" align="center">
          <template slot-scope="scope">
            <p>{{ scope.row.title }}</p>
          </template>
        </el-table-column>
        <el-table-column label="价格" width="120" align="center">
          <template slot-scope="scope">
            <p>￥{{ scope.row.price }}</p>
          </template>
        </el-table-column>
        <el-table-column label="SKU库存" width="120" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="handleShowSkuEditDialog(scope.$index, scope.row)"
              circle
            ></el-button>
          </template>
        </el-table-column>
        <el-table-column label="销量" width="120" align="center">
          <template>1200</template>
        </el-table-column>
        <el-table-column label="操作" width="260" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleShop(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              @click="handleAddCoupon(scope.$index, scope.row)"
              >添加优惠券</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click.native.prevent="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 修改库存的显示与隐藏 -->
    <el-dialog title="产品信息" :visible.sync="dialogVisible" width="40%">
      <el-table style="width: 100%; margin-top: 10px" :data="stockList" border>
        <el-table-column label="销售价格" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.price" disabled></el-input>
          </template>
        </el-table-column>
        <el-table-column label="商品库存" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.stock" disabled></el-input>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getShopList,
  getSearchList,
  getShopData,
  deleteSpuShop,
  deleteSkuShop,
} from "@/api/shopList.js";
export default {
  name: "productList",
  data() {
    return {
      keyword: "", //搜索关键词
      list: [], // 商品列表
      dialogVisible: false, // 库存显示隐藏
      stockList: [], //库存详情
    };
  },
  methods: {
    // 查询
    handleSearchList() {
      let data = {
        keyword: this.keyword,
      };
      getSearchList(data).then((data) => {
        let data1 = data.data.data;
        // console.log(data1);
        this.list = data1;
      });
    },
    // 重置
    handleResetSearch() {
      this.keyword = "";
      this.getShopList();
    },
    // 添加商品
    addShopCerent() {
      this.$router.push("/product/addProduct");
    },
    // 库存修改
    handleShowSkuEditDialog(index, row) {
      this.dialogVisible = true;
      // console.log(row);
      // this.stockList = row
      let spu_id = row.id;
      this.getShopData(spu_id);
    },
    //库存修改中 获取详细商品信息
    getShopData(spu_id) {
      let data = {
        spu_id: spu_id,
      };
      getShopData(data)
        .then((data) => {
          // console.log(data);
          let data2 = data.data.data;
          this.stockList = JSON.parse(JSON.stringify(data2));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 商品修改
    handleShop(index, row) {
      // this.shopId = row.id;
      // console.log(row.id);
      this.$store.dispatch('product/getRow',row.id);
      console.log(row);
      this.$router.push({
        path: "/product/addProduct",
        query: {
          id: row.id,
        },
      });
    },
    // 添加优惠卷
    handleAddCoupon() {
      // this.$router.push('/market/addCoupon')
    },
    // 商品删除
    handleDelete(index, row) {
      let data1 = {
        id: row.id,
      };
      let data2 = {
        spu_id: row.id,
      };
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.list.splice(index, 1);
          deleteSpuShop(data1)
            .then((data) => {
              // console.log(data);
            })
            .then(() => {
              deleteSkuShop(data2)
                .then((res) => {
                  // console.log(res);
                  this.$message({
                    type: "success",
                    message: "删除成功!",
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 获取商品列表
    getShopList() {
      // 假数据  商店id
      let data = {
        store_id: 1,
      };
      getShopList(data).then((data) => {
        // console.log(data.data.data);
        this.list = data.data.data;
      });
    },
  },
  created() {
    this.getShopList();
  },
};
</script>

<style lang="less" scoped>
.filter-container {
  margin: 15px 0;
}
</style>




