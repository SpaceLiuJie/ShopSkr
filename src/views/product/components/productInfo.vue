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
          action="http://127.0.0.1:3000/upload/upload"
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
import {
  getCatName,
  getCateGory,
  getBrand,
  getStorBrands,
  getBrands,
  addSpu,
  getSpu,
  getBrandName,
} from "@/api/shopList.js";
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
    getBrand() {
      // store_id  category_id
      let data = {
        store_id: 1,
      };
      getBrand(data).then((data) => {
        console.log(data);
      });
    },
    // 添加品牌
    addNewBrand() {
      this.$confirm("添加新的商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("跳转品牌页面");
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
      console.log(file);
      this.dialogImageUrl = file.photoPath;
      this.dialogVisible = true;
    },
    // 文件列表溢出文件时的钩子
    handleRemove(file, fileList) {
      this.dialogImageUrl = [];
    },
    // 文件上传成功的钩子
    handle_success(res) {
      // console.log(res);
      this.dialogImageUrl = "http://127.0.0.1:3000" + res.photoPath;
    },
    getBrands(){
       getBrands({ store_id: 1 }).then((res) => {
        console.log(res);
        let brandArr = res.data.data;
        for (let i = 0; i < brandArr.length; i++) {
          this.brandOptions.push({
            label: `${brandArr[i].name}`,
            value: `${brandArr[i].name}`,
          });
        }
      });
    },
     
    // 下一步跳转
    handleNext(formName) {
      // console.log(formName);
      // console.log(this.value);

      const nameIndex = this.$refs["calssOption"].inputValue.indexOf("/");
      const name = this.$refs["calssOption"].inputValue.substring(
        nameIndex + 2
      );
      // console.log(this.$refs["calssOption"].inputValue);
      // title && store_id && spec && price && is_special
      const data = {
        title: this.value.name,
        brand: "安踏",
        store_id: 1,
        spec: name,
        img: this.dialogImageUrl,
        price: this.value.price,
        special_price: 222,
        is_special: 1,
        brand: this.value.brandName,
        sub_title: this.value.description,
      };
      // console.log(data);
      addSpu(data)
        .then((res) => {
          console.log("添加成功", res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$emit("nextStep");
    },
  },
  created() {
    console.log(this.$route.query.id);
    if (this.$route.query.id) {
      // this.isActive = true;
     
      this.getCateList();
      getCatName({ id: this.$route.query.id })
        .then((res) => {
          console.log(res.data.data);
          // this.selectProductCateValue = this.res.data.data.parent_name;
          let id = res.data.data[0].id;
          let catParentName = res.data.data[0].parent_name;
          console.log(catParentName);
          console.log(id);
          for (let i = 0; i < this.productCateOptions.length; i++) {
            if (this.productCateOptions[i].label == catParentName) {
              this.selectProductCateValue[0] = this.productCateOptions[i].value;
              break;
            }
          }

          this.getProductCateList();
          this.selectProductCateValue.push(`${id}`);
          // console.log(this.productCateOptions,this.selectProductCateValue)
          this.updateCategoryId(this.selectProductCateValue[1]);
          // 获取品牌名
          getStorBrands({ store_id: this.storeInfo.id, category_id: 1 }).then(
            (res) => {
              console.log(res);
              let brandArr = res.data.data;
              this.brandOptions = [];
              for (let i = 0; i < brandArr.length; i++) {
                this.brandOptions.push({
                  label: `${brandArr[i].name}`,
                  value: `${brandArr[i].name}`,
                });
              }
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
      getSpu({ id: this.$route.query.id }).then((res) => {
        console.log(res.data.data[0]);
        let message = res.data.data[0];
        this.value.name = message.title;
        this.dialogImageUrl = message.img;
        this.fileList.push({
          url: message.img,
        });
        this.value.description = message.sub_title;
        this.value.price = message.price;
      });
      getBrandName({ id: this.$route.query.id })
        .then((res) => {
          console.log(res.data.data);
          this.value.brandName = res.data.data[0].name;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.handleCateChange();
      this.getCateList();
      this.getBrand();
      // 获取品牌
    this.getBrands();
    }
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
