<template>
    <div id="home">
        <div class="app-container">
            <div class="total-layout">
                <div class="el-row" v-for="(Today_sstatistics_item, index) in Today_sstatistics" :key="index">
                    <div class="el-col" v-for="(item, index) in Today_sstatistics_item.title" :key="index">
                        <div class="total-frame">
                            <img :src="Today_sstatistics_item.imgs[index]" alt="">
                        </div>
                        <div class="total-title_value">
                            <p class="total-title">{{ Today_sstatistics_item.title[index] }}</p>
                            <p class="total-num_price">{{ Today_sstatistics_item.num_price[index] }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="statiscs-layout">
                <div class="layout-title">
                    订单统计
                </div>
                <div class="el-row">
                    <div class="el-col_left">
                        <div style="padding: 20px">
                            <div>
                                <div style="color: #909399;font-size: 14px">本月订单总数</div>
                                <div style="color: #606266;font-size: 24px;padding: 10px 0">1563</div>
                                <div>
                                    <span class="color-success" style="font-size: 14px">+3%</span>
                                    <span style="color: #C0C4CC;font-size: 14px">同比上月</span>
                                </div>
                            </div>
                            <div style="margin-top: 20px;">
                                <div style="color: #909399;font-size: 14px">本周订单总数</div>
                                <div style="color: #606266;font-size: 24px;padding: 10px 0">154</div>
                                <div>
                                    <span class="color-danger" style="font-size: 14px">-2%</span>
                                    <span style="color: #C0C4CC;font-size: 14px">同比上周</span>
                                </div>
                            </div>
                            <div style="margin-top: 20px;">
                                <div style="color: #909399;font-size: 14px">本月销售总额</div>
                                <div style="color: #606266;font-size: 24px;padding: 10px 0">4824</div>
                                <div>
                                    <span class="color-success" style="font-size: 14px">+5%</span>
                                    <span style="color: #C0C4CC;font-size: 14px">同比上月</span>
                                </div>
                            </div>
                            <div style="margin-top: 20px;">
                                <div style="color: #909399;font-size: 14px">本周销售总额</div>
                                <div style="color: #606266;font-size: 24px;padding: 10px 0">5854</div>
                                <div>
                                    <span class="color-danger" style="font-size: 14px">-4%</span>
                                    <span style="color: #C0C4CC;font-size: 14px">同比上周</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="el-col_right">
                        <div class="el-col_right_content">
                            <div class="el-dataSelect">
                                <el-date-picker 
                                style="float: right;z-index: 1"
                                size="small"
                                v-model="orderCountDate" 
                                type="daterange" 
                                align="right" 
                                unlink-panels
                                range-separator="至" 
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                @change="handleDateChange"
                                :picker-options="pickerOptions">
                                </el-date-picker>
                            </div>
                            <div class="figureShows">
                                <!-- ---------------------------------------------- -->
                                <ve-line  :data="chartData" :legend-visible="false" :loading="loading"
                                    :data-empty="dataEmpty" :settings="chartSettings">

                                </ve-line>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
 import {str2Date} from '@/utils/data';
const DATA_FROM_BACKEND = {
    columns: ['date', 'orderCount','orderAmount'],
    rows: [
      {date: '2018-11-01', orderCount: 10, orderAmount: 1093},
      {date: '2018-11-02', orderCount: 20, orderAmount: 2230},
      {date: '2018-11-03', orderCount: 33, orderAmount: 3623},
      {date: '2018-11-04', orderCount: 50, orderAmount: 6423},
      {date: '2018-11-05', orderCount: 80, orderAmount: 8492},
      {date: '2018-11-06', orderCount: 60, orderAmount: 6293},
      {date: '2018-11-07', orderCount: 20, orderAmount: 2293},
      {date: '2018-11-08', orderCount: 60, orderAmount: 6293},
      {date: '2018-11-09', orderCount: 50, orderAmount: 5293},
      {date: '2018-11-10', orderCount: 30, orderAmount: 3293},
      {date: '2018-11-11', orderCount: 20, orderAmount: 2293},
      {date: '2018-11-12', orderCount: 80, orderAmount: 8293},
      {date: '2018-11-13', orderCount: 100, orderAmount: 10293},
      {date: '2018-11-14', orderCount: 10, orderAmount: 1293},
      {date: '2018-11-15', orderCount: 40, orderAmount: 4293}
    ]
  };
export default {
    name: 'Home',
    data() {
        return {
            Today_sstatistics: [{ //今日统计
                title: ["今日订单总数", "今日销售总额", "昨日销售总额", "全部商品"],
                imgs: ["data:image/png;base64,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",
                    "http://localhost:9528/static/img/home_today_amount.68547a5a.png",
                    "http://localhost:9528/static/img/home_yesterday_amount.2a881414.png",
                    "http://localhost:9528/static/img/shopNum.629ca656.png"],
                num_price: [200, "5000.00", "5000.00", 53],
            },],
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        let start = new Date();
                        start.setFullYear(2018);
                        start.setMonth(10);
                        start.setDate(1);
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setFullYear(2018);
                        start.setMonth(10);
                        start.setDate(1);
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }
                ]
            },
            value1: '',
            value2: '',
            // -------------------------------------------
            orderCountDate: '',
            chartData: {
                columns: [],
                rows: []
            },
            chartSettings: {
                xAxisType: 'time',
                area:true,
                axisSite: { right: ['orderAmount']},
                labelMap: {'orderCount': '订单数量', 'orderAmount': '订单金额'}
            },
            loading: false,
            dataEmpty: false,
        }
    },
    methods: {
        handleDateChange() {
            this.getData();
        },
        initOrderCountDate() {
            let start = new Date();
            start.setFullYear(2018);
            start.setMonth(10);
            start.setDate(1);
            const end = new Date();
            end.setTime(start.getTime() + 1000 * 60 * 60 * 24 * 7); //一周的时间差
            this.orderCountDate = [start, end];
            // console.log(this.orderCountDate);
        },
        getData() {
            setTimeout(() => {
                this.chartData = {
                    columns: ['date', 'orderCount', 'orderAmount'],
                    rows: []
                };
                for (let i = 0; i < DATA_FROM_BACKEND.rows.length; i++) {
                    let item = DATA_FROM_BACKEND.rows[i]; // {date: '2018-11-01', orderCount: 10, orderAmount: 1093},
                    let currDate = str2Date(item.date);
                    let start = this.orderCountDate[0];
                    let end = this.orderCountDate[1];
                    if (currDate.getTime() >= start.getTime() && currDate.getTime() <= end.getTime()) {
                        this.chartData.rows.push(item);
                    }
                }
                this.dataEmpty = false;
                this.loading = false
            }, 1000)
        }
    },
    created() {
        this.initOrderCountDate();
        this.getData();
    }
}
</script>
<style lang="less" scoped >
#home {
    .app-container {
        margin-top: 40px;
        margin-left: 120px;
        margin-right: 120px;
        // border: 1px solid #333;
        padding: 20px;

        .total-layout {

            .el-row {
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                margin-left: -10px;
                margin-right: -10px;
                // justify-content: space-around;

                .el-col {
                    width: 25%;
                    outline: 1px solid #999;
                    margin: 10px;
                    padding: 10px;
                    display: flex;
                    justify-content: flex-start;

                    .total-frame {
                        margin: auto 0;

                        img {
                            color: #409EFF;
                            width: 60px;
                            height: 60px;
                            float: left;
                        }
                    }

                    .total-title_value {
                        // width: 70%;
                        // padding-left: 20px;
                        margin-left: 10px;
                        line-height: 12px;

                        .total-title {
                            font-size: 16px;
                            color: #909399;
                        }

                        .total-num_price {
                            font-size: 18px;
                            color: #606266;
                        }
                    }
                }
            }
        }

        .statiscs-layout {
            outline: 1px solid #999;
            margin-top: 20px;

            .layout-title {
                color: #606266;
                padding: 15px 20px;
                background: #F2F6FC;
                font-weight: bold;
            }

            .el-row {
                box-sizing: border-box;

                .el-col_left {
                    width: 16.667%;
                    float: left;
                }

                .el-col_right {
                    width: 83.333%;
                    float: right;

                    .el-col_right_content {
                        padding: 10px;
                        border-left: 1px solid #DCDFE6;

                        .el-dataSelect {
                            float: right;
                            z-index: 1;
                            line-height: 32px;
                        }

                        .figureShows {
                           
                        }
                    }
                }

            }
        }
    }
}
</style>
