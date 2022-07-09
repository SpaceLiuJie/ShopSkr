<template>
  <div>
    <product-info v-if="showStatus[0]" @nextStep="nextStep"></product-info>

    <product-add v-if="showStatus[1]"></product-add>
  </div>
</template>

<script>
import productAdd from "./productAdd.vue";
import productInfo from "./productInfo.vue";
export default {
  components: {
    productAdd,
    productInfo,
  },
  name: "productAll",
  data() {
    return {
      active: 0,
      showStatus: [true, false],
    };
  },
  methods: {
     hideAll(){
      for (let i = 0; i < this.showStatus.length; i++){
        this.showStatus[i] = false;
      }
    },
    nextStep() {
      if (this.active < this.showStatus.length - 1) {
        console.log("开始进入下一页");
        this.active++;
        this.hideAll();
        this.showStatus[this.active] = true;
        // let arr = this.showStatus
        this.showStatus = [...this.showStatus];
      }
    },
  },
};
</script>

<style></style>
