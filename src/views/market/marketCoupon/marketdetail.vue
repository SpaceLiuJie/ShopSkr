<template>
    <div class="marketTable">
        <el-table :data="tableData" border style="width: 100%;margin-top: 20px;">
            <el-table-column prop="name" align="center" label="优惠券名称">
            </el-table-column>
            <el-table-column prop="type" align="center" label="优惠券类型">
            </el-table-column>
            <el-table-column prop="shop" align="center" label="可使用商品">
            </el-table-column>
            <el-table-column prop="condition" align="center" label="使用条件">
            </el-table-column>
            <el-table-column prop="deno" align="center" label="面值">
            </el-table-column>
            <el-table-column prop="status" align="center" label="状态">
            </el-table-column>
            <el-table-column prop="start_time" align="center" label="开始时间">
            </el-table-column>
            <el-table-column prop="end_time" align="center" label="结束时间">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { seeVoucher } from '../../../api/coupon.js'
export default {
    name: 'marketDetail',
    data() {
        return {
            tableData: [
                {
                    name: '',
                    type: '',
                    shop: '',
                    condition: '',
                    deno: '',
                    status: '',
                    start_time: '',
                    end_time: '',
                },
            ],
            startTime: '',
            endTime: '',
        }
    },
    methods: {
        selectDetail() {
            let id = this.$route.query.id
            seeVoucher({ id }).then(res => {
                // console.log(res, '+++++++++++----------++++++++++');
                if (res.data.code == 200) {
                    this.tableData = res.data.res;
                    for (let i = 0; i < this.tableData.length; i++) {
                        this.startTime = this.tableData[i].start_time;
                        this.endTime = this.tableData[i].end_time;
                        this.startTime = new Date(this.startTime).getTime();
                        this.endTime = new Date(this.endTime).getTime();
                        this.tableData[i].type = "全场赠券";
                        this.tableData[i].shop = "全场使用";
                    }
                    if (this.endTime - this.startTime > 0) {
                        for (let j = 0; j < this.tableData.length; j++) {
                            this.tableData[j].status = "未过期";
                        }
                    } else {
                        for (let k = 0; k < this.tableData.length; k++) {
                            this.tableData[k].status = "已过期";
                        }
                    }
                    // console.log(res, "查看优惠券详情成功");
                }
            }).catch(err => {
                console.log(err, "查看优惠券详情失败");
            });
        }
    },
    created() {
        this.selectDetail()
    }
}
</script>

<style scoped>
* {
    cursor: pointer;
}
</style>