<template>
  <div class="app-container">
  
    <el-card class="operate-container" shadow="never" style="margin-top: 20px">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button class="btn-add" size="mini" @click="addBrand">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="brandTable" :data="list"    style="width: 100%" border>
        <el-table-column label="id" width="100" align="center" >
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="LOGO" width="150" align="center">
          <template slot-scope="scope"
            ><img style="height: 80px" :src="scope.row.image"
          /></template>
        </el-table-column>
        <el-table-column label="品牌名称" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="品牌首字母" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.letter }}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleUpdate(scope.$index, scope.row)"
              >更新
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {
  getBrands,
  deleteBrand,
  updataBrand,
  searchBrand,
} from "../../../api/barnd.js";
import { mapGetters } from 'vuex'

export default {
  name: "brandList",
  data() {
    return {
      
      store_id: '',
      keyword: "",
      list:[],
      
    };
  },
  computed:{
    ...mapGetters(['storeInfo'])
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      getBrands({ store_id: this.storeInfo.id }).then((response) => {
        this.list = response.data.data;
        console.log(this.list);
      });
    },
    handleUpdate(index, row) {
      this.$router.push({
        path: "/product/updateBrand",
        query: { name: row.name },
      });
    },
    handleDelete(index, row) {
      this.$confirm("是否要删除该品牌", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        deleteBrand({ id: row.id }).then((response) => {
          this.$message({
            message: "删除成功",
            type: "success",
            duration: 1000,
          });
          this.getList();
        });
      });
    },
 
  
   
    
    addBrand() {
      this.$router.push({ path: "/product/addBrand" });
    },
  },
};     
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
//操作栏样式
.operate-container {
  margin-top: 20px;
}

.operate-container .btn-add {
  float: right;
}

//表格栏样式
.table-container {
  margin-top: 20px;
}

//批量操作栏样式
.batch-operate-container {
  display: inline-block;
  margin-top: 20px;
}

//分页栏样式
.pagination-container {
  display: inline-block;
    
  margin-top: 20px;
}

//添加、更新表单样式
.form-container {
  position: absolute;
  left: 0;
  right: 0;
  width: 720px;
  padding: 35px 35px 15px 35px;
  margin: 20px auto;
}
</style>