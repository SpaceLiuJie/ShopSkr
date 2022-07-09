<template>
  <div style="margin-top: 50px">
    <el-form
      :model="value"
      ref="productAttrForm"
      label-width="120px"
      style="width: 720px"
      size="small"
    >
      <el-form-item label="商品规格：">
        <el-card shadow="never" class="cardBg">
          <div
            v-for="(item, index) in selectProductParam"
            :key="index"
            class="littleMarginTop"
          >
            <div>
              {{ item.name }}：
              <div>
                <el-checkbox-group v-model="checkProductAttr[index]">
                  <div
                    v-for="(item, idx) in selectProductAttr[index]"
                    style="display: inline-block"
                    class="littleMarginLeft"
                    :key="idx"
                  >
                    <el-checkbox :label="item"></el-checkbox>
                    <el-button
                      :disabled="isActive"
                      type="text"
                      class="littleMarginLeft"
                      @click="handleRemoveProductAttrValue(index, idx)"
                      >删除</el-button
                    >
                  </div>
                </el-checkbox-group>
              </div>
            </div>
            <el-input
              style="width: 160px; margin-left: 10px"
              v-model="param[index]"
            ></el-input>
            <el-button
              :disabled="isActive"
              class="littleMarginLeft"
              @click="handleAddProductAttrValue(index)"
              >增加</el-button
            >
          </div>
        </el-card>

        <!-- table -->
        <el-table
          style="width: 100%; margin-top: 20px"
          border
          :data="skuParamList"
        >
          <el-table-column
            v-for="(item, index) in selectProductParam"
            :key="index"
            :label="item.name"
            align="center"
          >
            <template slot-scope="scope">
              {{ scope.row.param[index] }}
            </template>
          </el-table-column>
          <el-table-column label="销售价格" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.price"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="商品库存" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.stock"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="handleRemoveProductSku(scope.$index, scope.row)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button
          :disabled="isActive"
          type="primary"
          style="margin-top: 20px"
          @click="handleRefreshProductSkuList"
          >刷新列表</el-button
        >
      </el-form-item>

      <el-form-item label="商品相册：">
        <el-upload
          action="http://127.0.0.1:3000/upload/upload"
          list-type="picture-card"
          :limit="4"
          :on-exceed="handleExceed"
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

      <!-- <el-form-item label="规格参数">
        <el-tabs v-model="activeHtmlName" type="card">
          <el-tab-pane label="电脑端详情" name="pc">
            <tinymce :width="595" :height="300" v-model="detailHtml"></tinymce>
          </el-tab-pane>
          <el-tab-pane label="移动端详情" name="mobile">
            <tinymce
              :width="595"
              :height="300"
              v-model="detailMobileHtml"
            ></tinymce>
          </el-tab-pane>
        </el-tabs>
      </el-form-item> -->

      <el-form-item style="text-align: center">
        <el-button size="medium" @click="handlePrev"
          >上一步，填写商品信息</el-button
        >
        <el-button type="primary" size="medium" @click="handleFinishCommit"
          >完成，提交商品</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "productAdd",
  data() {
    return {
      value: {
        name: "", // 商品名
        description: "", //介绍描述
        price: "",
        brandName: "", // 品牌
      },
      fileList:[],
      isActive: false,
      selectProductParam: [],
      checkProductAttr: [],
      selectProductAttr: [],
      param: [],
      skuParamList: [],
      selectProductParam: [],
      dialogImageUrl: "", // 地址图片
      dialogVisible: false, // 图片对话框
      activeHtmlName: "", // 电脑端详情的html
      detailMobileHtml: "", //移动端详情的html
    };
  },
  methods: {
    handleRemoveProductAttrValue(index, idx) {},
    handleAddProductAttrValue(index) {},
    // 库存删除
    handleRemoveProductSku(index, row) {},
    // 刷新列表
    handleRefreshProductSkuList() {},
    // 返回上一步
    handlePrev() {},
    // 提交
    handleFinishCommit() {},
    handleExceed(){},
    handleRemove(){},
    handle_success(){},
  },
  created() {
    
  },
};
</script>

<style lang="less" scoped>
.cardBg {
  background: #f8f9fc;
}
.paramInput {
  width: 250px;
}
.paramInputLabel {
  display: inline-block;
  width: 100px;
  text-align: right;
  padding-right: 10px;
}
.littleMarginTop {
  margin-top: 10px;
}
.littleMarginLeft {
  margin-left: 10px;
}
</style>
