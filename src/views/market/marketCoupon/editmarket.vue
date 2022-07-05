<template>
    <div class="addmarket">
        <div id="addmarket">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="优惠券面额" prop="deno">
                    <el-input v-model="ruleForm.deno"></el-input>
                </el-form-item>
                <el-form-item label="使用条件" prop="condition">
                    <el-input v-model="ruleForm.condition"></el-input>
                </el-form-item>
                <el-form-item label="产品id" required v-show="isShowSpu">
                    <el-input v-model="ruleForm.spu_id"></el-input>
                </el-form-item>
                <el-form-item label="优惠券名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="开始时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.start.date1"
                                style="width: 100%;">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="选择时间" v-model="ruleForm.start.date2" style="width: 100%;">
                            </el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="结束时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.end.date1"
                                style="width: 100%;">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="选择时间" v-model="ruleForm.end.date2" style="width: 100%;">
                            </el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="margin-left;:10px" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Addmarket',
    data() {
        return {
            ruleForm: {
                deno: '',
                condition: '',
                name: '',
                start: {
                    date1: '',
                    date2: '',
                },
                end: {
                    date1: '',
                    date2: '',
                },
                spu_id: this.$route.query.spu_id,
            },
            isShowSpu: false,
            rules: {
                deno: [
                    { required: true, message: '优惠券面额' }
                ],
                name: [
                    { required: true, message: '优惠券名称', trigger: 'blur' },
                ],
                condition: [
                    { required: true, message: '输入优惠券使用条件', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
            }
        }
    },
}
</script>

<style scoped>
</style>