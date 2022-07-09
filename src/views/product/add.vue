<template>
  <div>
    <!-- <product-info></product-info> -->
    <!-- <product-add></product-add> -->
    <product-all></product-all>
  </div>
</template>

<script>
import productInfo from './components/productInfo.vue'
import productAdd from './components/productAdd.vue'
import productAll from './components/productAll.vue'
export default {
    name:'addProduct',
    components:{
        productInfo,
        productAdd,
        productAll
    }
}
</script>

<style>

</style>
