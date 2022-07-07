<template>
    <div class="editmarket">
        <div id="editmarket">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="编号" prop="id" required>
                    <el-input v-model="ruleForm.id"></el-input>
                </el-form-item>
                <el-form-item label="优惠券面额" prop="deno" placeholder="请输入优惠券面额">
                    <el-input v-model="ruleForm.deno"></el-input>
                </el-form-item>
                <el-form-item label="使用条件" prop="condition" placeholder="请输入优惠券使用条件">
                    <el-input v-model="ruleForm.condition"></el-input>
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
                    <el-button type="primary" style="margin-left;:10px" @click="submitForm(ruleForm)">确定</el-button>
                    <el-button @click="resetForm(ruleForm)">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { editVoucheer, seeVoucher } from '../../../api/coupon.js'
export default {
    name: 'Addmarket',
    data() {
        return {
            ruleForm: {
                id: '',
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
            },
            isShowSpu: false,
            rules: {
                deno: [
                    { required: true, message: '优惠券面额', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '优惠券名称', trigger: 'blur' },
                ],
                condition: [
                    { required: true, message: '输入优惠券使用条件', trigger: 'change' }
                ],
            }
        }
    },
    methods: {
        submitForm() {
            this.ruleForm.start.date1 = new Date(this.ruleForm.start.date1).getTime();
            this.ruleForm.start.date2 = new Date(this.ruleForm.start.date2).getTime();
            this.ruleForm.end.date1 = new Date(this.ruleForm.end.date1).getTime();
            this.ruleForm.end.date2 = new Date(this.ruleForm.end.date2).getTime();
            let id = this.ruleForm.id;
            let deno = this.ruleForm.deno;
            let condition = this.ruleForm.condition;
            let name = this.ruleForm.name;
            let start_time = this.ruleForm.start.date1;
            let end_time = this.ruleForm.end.date1
            editVoucheer({ id, deno, condition, name, start_time, end_time }).then(res => {
                if (res.data.code == 200) {
                    this.$router.push({
                        path: "/market/marketCoupon",
                    });
                }
            }).catch(err => {
                console.log(err);
                console.log("编辑失败");
            })
        },
        resetForm() {
            this.$router.go(-1);
        }
    },
    created() {
        let id = this.$route.query.id
        seeVoucher({ id }).then(res => {
            // console.log(res.data.res);
            this.ruleForm.id = id
            this.ruleForm.deno = res.data.res[0].deno
            this.ruleForm.condition = res.data.res[0].condition
            this.ruleForm.name = res.data.res[0].name
            this.ruleForm.start.date1 = res.data.res[0].start_time
            this.ruleForm.start.date2 = res.data.res[0].start_time
            this.ruleForm.end.date1 = res.data.res[0].end_time
            this.ruleForm.end.date2 = res.data.res[0].end_time
        }).catch(err => {
            console.log('失败', err);
        })
    }
}
</script>

<style scoped>
* {
    cursor: pointer;
}

.editmarket {
    height: 455px;
    width: 80%;
    margin: 20px auto;
    border: 1px solid rgb(223, 213, 213);
}

#editmarket {
    width: 90%;
    height: 295px;
    margin: 0 auto;
    padding: 20px;
}
</style>