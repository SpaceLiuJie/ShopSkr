<template>
  <div class="info" style="margin-top: 50px">
    <el-form
      :model="value"
      :rules="rules"
      ref="productInfoForm"
      label-width="120px"
      style="width: 600px"
      size="small"
    >
      <!-- 分类 -->
      <el-form-item label="产品分类：" prop="productCategoryId">
        <el-cascader
          :disabled="isActive"
          :options="productCateOptions"
          v-model="selectProductCateValue"
          @change="handleCateChange"
          ref="calssOption"
        ></el-cascader>
      </el-form-item>
      <!-- 名称 -->
      <el-form-item label="产品名称：" prop="name">
        <el-input :disabled="isActive" v-model="value.name"></el-input>
      </el-form-item>
      <!-- 品牌 -->
      <el-form-item label="产品品牌：" prop="brandName">
        <el-select
          :disabled="isActive"
          v-model="value.brandName"
          placeholder="请选择品牌"
        >
          <el-option
            label="添加新品牌"
            :value="newBrand"
            @click.native="addNewBrand"
          ></el-option>
          <el-option
            v-for="(item, index) in brandOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- 图片 -->
      <el-form-item label="产品图片：">
        <el-upload
          :disabled="isActive"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :limit="1"
          :on-preview="handlePictureCardPreview"
          :file-list="fileList"
          :on-remove="handleRemove"
          :on-success="handle_success"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <!-- 产品介绍 -->
      <el-form-item label="产品介绍：">
        <el-input
          :disabled="isActive"
          :autosize="true"
          v-model="value.description"
          type="textarea"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <!-- 产品售价 -->
      <el-form-item label="产品售价：">
        <el-input :disabled="isActive" v-model="value.price"></el-input>
      </el-form-item>
      <!-- 下一步 -->
      <el-form-item style="text-align: center">
        <el-button
          type="primary"
          size="medium"
          @click="handleNext('productInfoForm')"
          >下一步，填写商品属性</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getCatName, getCateGory,getBrand } from "@/api/shopList.js";
export default {
  name: "productInfo",
  data() {
    return {
      dialogVisible: false, // 图片对话框
      fileList: [], // 上传的文件列表
      dialogImageUrl: "", // 选择图片存放地址
      newBrand: "",
      brandOptions: [], //选择品牌
      value: {
        name: "", // 商品名
        description: "", //介绍描述
        price: "",
        brandName: "", // 品牌
      },
      rules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        brandName: [
          { required: true, message: "请输入商品品牌", trigger: "blur" },
        ],
      },
      isActive: false,
      selectProductCateValue: [], // 所选择的类型
      productCateOptions: [
        //
        {
          value: "shumajiadian",
          label: "数码家电",
          children: [],
        },
        {
          value: "jujiashenghuo",
          label: "居家生活",
          children: [],
        },
        {
          value: "fushi",
          label: "服饰",
          children: [],
        },
        {
          value: "meishi",
          label: "美食",
          children: [],
        },
        {
          value: "gehuqignjie",
          label: "个护清洁",
          children: [],
        },
        {
          value: "shoushizhubao",
          label: "首饰珠宝",
          children: [],
        },
      ],
    };
  },
  methods: {
    // 获取产品分类
    getCateList() {
      for (let i = 0; i < this.productCateOptions.length; i++) {
        let message = { parent_name: "" };
        message.parent_name = this.productCateOptions[i].label;
        getCateGory(message)
          .then((res) => {
            //   console.log(res);
            let titleName = res.data.data;
            for (let k = 0; k < titleName.length; k++) {
              // console.log(titleName[i])
              this.productCateOptions[i].children.push({
                value: `${titleName[k].id}`,
                label: `${titleName[k].name}`,
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // 切换分类
    handleCateChange() {},
    // 获取商店品牌
    getBrand(){
        // store_id  category_id
        let data = {
            store_id:1,
        }
        getBrand(data).then(data=>{
            console.log(data);
        })
    },
    // 添加品牌
    addNewBrand() {
      this.$confirm("添加新的商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
            console.log('跳转品牌页面');
        //   this.$router.push({
        //     path: "/product/addBrand",
        //   });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 文件已上传时的钩子
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 文件列表溢出文件时的钩子
    handleRemove(file, fileList) {
      this.dialogImageUrl = [];
    },
    // 文件上传成功的钩子
    handle_success(res) {
      console.log(res);
      console.log(res.files);
      this.dialogImageUrl = res.files;
    },
    // 下一步跳转
    handleNext(formName) {},
  },
  created() {
    this.handleCateChange();
    this.getCateList();
    this.getBrand();
  },
};
</script>

<style lang="less" scoped>
.el-form {
  margin: 0 auto;
  border: 1px solid #000;
  padding: 35px 35px 15px 35px;
  margin: 20px auto;
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  border-radius: 4px;
  overflow: hidden;
}
</style>
