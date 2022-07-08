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
                <el-form-item label="产品id" required>
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
                    <el-button type="primary" style="margin-left;:10px" @click="submitForm(ruleForm)">立即创建</el-button>
                    <el-button @click="resetForm(ruleForm)">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { addVoucher, getVoucher } from '../../../api/coupon.js'
import { formatDate } from "@/utils/date";
import { mapGetters } from 'vuex'
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
        submitForm(formName) {
            this.ruleForm.start.date1 = new Date(this.ruleForm.start.date1).getTime();
            this.ruleForm.start.date2 = new Date(this.ruleForm.start.date2).getTime();
            // console.log(this.ruleForm.start.date2);
            this.ruleForm.end.date1 = new Date(this.ruleForm.end.date1).getTime();
            this.ruleForm.end.date2 = new Date(this.ruleForm.end.date2).getTime();
            // console.log(this.ruleForm.end.date2);
            let store_id = this.storeInfo.id;
            // console.log(formName);
            let spu_id = this.ruleForm.spu_id;
            let start_time = this.ruleForm.start.date1;
            let end_time = this.ruleForm.end.date1;
            addVoucher({
                store_id,
                spu_id,
                start_time,
                end_time,
                deno: this.ruleForm.deno,
                condition: this.ruleForm.condition,
                name: this.ruleForm.name,
            }).then(res => {
                console.log(res,'++++++++++++++++++++++++++++++++++++++++++++++++++++');
                if (res.data.code == 401) {
                    console.log("入参不符");
                    this.$message({
                        message: '入参不符',
                        type: 'error'
                    });
                }
                if (res.data.code == 200) {
                    console.log(res, "添加优惠券成功啦");
                    this.$router.push({
                        path: "/market/marketCoupon",
                    });
                }
            }).catch(err => {
                console.log(err, "添加优惠券失败");
                this.$message({
                    showClose: true,
                    message: '添加优惠券失败',
                    type: 'error'
                });
            });
        },
        resetForm() {
            this.$router.go(-1);
        },
        formatDate(time) {
            if (time == null || time === "") {
                return "";
            }
            let data = new Date(time);
            return formatDate(data, "yyyy-MM-dd hh:mm:ss");
        }
    },
    created() {

    },
    computed: {
        ...mapGetters([
            'storeInfo'
        ])
    },
}

</script>

<style scoped>
* {
    cursor: pointer;
}

.addmarket {
    height: 455px;
    width: 80%;
    margin: 20px auto;
    border: 1px solid rgb(223, 213, 213);
}

#addmarket {
    width: 90%;
    height: 295px;
    margin: 0 auto;
    padding: 20px;
}
</style>