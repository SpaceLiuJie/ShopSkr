<template>
    <div class="active">
        <div class="search">
            <div class="searchbox">
                <svg t="1656993517074" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2261" width="200" height="200">
                    <path
                        d="M912.072815 946.738335c-4.78498 0-9.56996-1.824555-13.220093-5.475711L650.662083 693.076078c-0.285502-0.285502-0.561795-0.579191-0.827855-0.883113l-6.979972-7.948019c-6.671956-7.594979-6.096858-19.11843 1.297552-26.012444 32.130791-29.958312 57.424874-65.413825 75.181283-105.379049 18.374486-41.35692 27.691689-85.472674 27.691689-131.122363 0-86.355787-33.628912-167.542854-94.691639-228.604558-61.062727-61.062727-142.249795-94.691639-228.604558-94.691639s-167.541831 33.628912-228.604558 94.691639c-61.062727 61.062727-94.691639 142.249795-94.691639 228.604558s33.628912 167.542854 94.691639 228.604558c61.062727 61.062727 142.249795 94.691639 228.604558 94.691639 26.15059 0 52.16508-3.130294 77.326133-9.301853 5.090948-1.353834 73.4038-19.189038 120.842229-14.809287 10.282181 0.948605 17.847483 10.05296 16.899902 20.335141s-10.047844 17.853623-20.335141 16.899902c-41.659819-3.845585-107.272165 13.571087-107.930151 13.747095-0.125867 0.033769-0.251733 0.065492-0.3776 0.097214-28.132734 6.91755-57.20998 10.425444-86.425372 10.425444-48.684816 0-95.922676-9.538237-140.402727-28.352745-42.953278-18.166755-81.523735-44.172035-114.644063-77.290317-33.119305-33.119305-59.123562-71.691809-77.29134-114.644063-18.813484-44.479027-28.352745-91.716888-28.352745-140.401704s9.53926-95.922676 28.352745-140.402727c18.167778-42.953278 44.172035-81.524758 77.29134-114.644063 33.119305-33.119305 71.690786-59.123562 114.644063-77.29134 44.480051-18.813484 91.717911-28.352745 140.402727-28.352745s95.922676 9.53926 140.401704 28.352745c42.953278 18.167778 81.524758 44.173059 114.644063 77.29134 33.118282 33.119305 59.123562 71.690786 77.29134 114.644063 18.813484 44.480051 28.351722 91.717911 28.351722 140.402727 0 50.912553-10.399861 100.136651-30.91101 146.305157-17.285688 38.906102-40.96704 73.973782-70.526263 104.47547l242.313791 242.310721c7.302313 7.30129 7.302313 19.138896 0.001023 26.440186C921.642774 944.912757 916.857794 946.738335 912.072815 946.738335z"
                        p-id="2262"></path>
                    <path
                        d="M165.576059 421.887656c-0.696872 0-1.400906-0.038886-2.110057-0.118704-10.260691-1.152243-17.645892-10.404977-16.493649-20.666692 4.838192-43.080168 17.974373-83.934644 39.046295-121.429607 5.058203-9.002025 16.457834-12.19781 25.458835-7.139607 9.002025 5.058203 12.19781 16.45681 7.139607 25.458835-18.605753 33.108049-30.207999 69.202105-34.484396 107.282399C183.060269 414.827867 174.967964 421.887656 165.576059 421.887656z"
                        p-id="2263"></path>
                </svg>
                <span class="screen">筛选搜索</span>
                <div class="input">
                    <span class="activeName">活动名称：</span>
                    <el-input style="width:200px" v-model="input" placeholder="优惠券名称"></el-input>
                    <el-button class="chaxun" size="mini" style="width:100px;margin-left: 20px;" type="primary"
                        icon="el-icon-search" @click="searchHandel()">查询搜索
                    </el-button>
                </div>
            </div>
        </div>
        <div class="addmarket">
            <div class="addcontent">
                <svg t="1657004161712" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="7345" width="200" height="200">
                    <path
                        d="M890.79 889.542c0 50.858-39.169 92.089-87.481 92.089H278.442c-48.312 0-87.478-41.231-87.478-92.089V134.458c0-50.859 39.166-92.089 87.478-92.089h524.866c48.313 0 87.481 41.229 87.481 92.089v755.084z"
                        fill="#FFFFFF" p-id="7346"></path>
                    <path
                        d="M803.309 992.63H278.442c-54.301 0-98.478-46.246-98.478-103.089V134.458c0-56.843 44.177-103.089 98.478-103.089h524.866c54.303 0 98.481 46.246 98.481 103.089v755.083c0.001 56.844-44.178 103.089-98.48 103.089zM278.442 53.37c-42.17 0-76.478 36.376-76.478 81.089v755.083c0 44.712 34.308 81.089 76.478 81.089h524.866c42.172 0 76.481-36.376 76.481-81.089V134.458c0-44.712-34.31-81.089-76.481-81.089H278.442z"
                        fill="#2566B1" p-id="7347"></path>
                    <path
                        d="M825.089 159.207a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.776l56.765-52.284c4.246-3.913 10.863-3.641 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.776l-56.765 52.284a10.418 10.418 0 0 1-7.081 2.766zM831.063 214.479a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.776l56.766-52.284c4.249-3.913 10.863-3.64 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.776l-56.766 52.284a10.412 10.412 0 0 1-7.081 2.766zM834.05 271.244a10.429 10.429 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.775l56.766-52.284c4.249-3.914 10.863-3.64 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.775l-56.766 52.284a10.415 10.415 0 0 1-7.081 2.766zM833.056 332.491a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.776l56.766-52.284c4.249-3.913 10.863-3.641 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.776l-56.766 52.284a10.415 10.415 0 0 1-7.081 2.766zM829.073 393.241a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.606-14.776l56.764-52.285c4.247-3.913 10.864-3.641 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.776l-56.763 52.285a10.416 10.416 0 0 1-7.081 2.766zM832.06 449.01a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.776l56.766-52.285c4.249-3.914 10.863-3.641 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.776l-56.766 52.285a10.415 10.415 0 0 1-7.081 2.766zM828.077 507.767a10.429 10.429 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.776l56.765-52.283c4.249-3.914 10.864-3.639 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.776l-56.765 52.283a10.42 10.42 0 0 1-7.081 2.766zM827.079 563.537a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.776l56.765-52.284c4.246-3.914 10.864-3.64 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.776l-56.765 52.284a10.418 10.418 0 0 1-7.081 2.766zM826.876 619.227a10.429 10.429 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.775l56.766-52.284c4.249-3.914 10.863-3.64 14.775 0.607s3.641 10.863-0.607 14.775l-56.766 52.284a10.42 10.42 0 0 1-7.081 2.766zM831.855 668.026a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.775l56.767-52.284c4.247-3.912 10.864-3.641 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.775l-56.767 52.284a10.415 10.415 0 0 1-7.081 2.766zM827.872 725.787a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.776l56.766-52.284c4.249-3.914 10.863-3.64 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.776l-56.766 52.284a10.415 10.415 0 0 1-7.081 2.766zM828.869 781.557a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.776l56.763-52.284c4.247-3.914 10.863-3.64 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.776l-56.763 52.284a10.418 10.418 0 0 1-7.081 2.766zM832.354 833.342a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.775l56.767-52.284c4.247-3.913 10.863-3.641 14.775 0.607 3.913 4.248 3.641 10.863-0.607 14.775l-56.767 52.284a10.415 10.415 0 0 1-7.081 2.766zM829.366 892.099a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.775l56.767-52.284c4.247-3.913 10.863-3.64 14.775 0.607s3.641 10.863-0.607 14.775l-56.767 52.284a10.418 10.418 0 0 1-7.081 2.766zM830.364 952.848a10.425 10.425 0 0 1-7.694-3.373c-3.912-4.248-3.641-10.863 0.607-14.776l56.765-52.284c4.247-3.914 10.863-3.64 14.775 0.607 3.912 4.248 3.641 10.863-0.607 14.776l-56.765 52.284a10.412 10.412 0 0 1-7.081 2.766z"
                        fill="#2566B1" p-id="7348"></path>
                    <path
                        d="M851.945 889.542c0 50.858-39.168 92.089-87.482 92.089H239.598c-48.313 0-87.48-41.231-87.48-92.089V134.458c0-50.859 39.168-92.089 87.48-92.089h524.865c48.314 0 87.482 41.229 87.482 92.089v755.084z"
                        fill="#FFFFFF" p-id="7349"></path>
                    <path
                        d="M764.463 992.63H239.598c-54.303 0-98.48-46.246-98.48-103.089V134.458c0-56.843 44.178-103.089 98.48-103.089h524.865c54.304 0 98.482 46.246 98.482 103.089v755.083c0 56.844-44.178 103.089-98.482 103.089zM239.598 53.37c-42.172 0-76.48 36.376-76.48 81.089v755.083c0 44.712 34.309 81.089 76.48 81.089h524.865c42.173 0 76.482-36.376 76.482-81.089V134.458c0-44.712-34.31-81.089-76.482-81.089H239.598z"
                        fill="#2566B1" p-id="7350"></path>
                    <path d="M222.59 240.205m-19.952 0a19.952 19.952 0 1 0 39.904 0 19.952 19.952 0 1 0-39.904 0Z"
                        fill="#FFFFFF" p-id="7351"></path>
                    <path
                        d="M222.592 267.626c-15.121 0-27.423-12.301-27.423-27.422s12.302-27.423 27.423-27.423c15.119 0 27.419 12.302 27.419 27.423 0 15.121-12.3 27.422-27.419 27.422z m0-39.906c-6.884 0-12.485 5.601-12.485 12.484s5.602 12.483 12.485 12.483c6.882 0 12.481-5.6 12.481-12.483 0-6.883-5.599-12.484-12.481-12.484z"
                        fill="#2566B1" p-id="7352"></path>
                    <path d="M222.59 350.711m-19.952 0a19.952 19.952 0 1 0 39.904 0 19.952 19.952 0 1 0-39.904 0Z"
                        fill="#FFFFFF" p-id="7353"></path>
                    <path
                        d="M222.592 378.133c-15.121 0-27.423-12.302-27.423-27.422s12.302-27.422 27.423-27.422c15.119 0 27.419 12.301 27.419 27.422s-12.3 27.422-27.419 27.422z m0-39.905c-6.884 0-12.485 5.6-12.485 12.483 0 6.884 5.602 12.484 12.485 12.484 6.882 0 12.481-5.6 12.481-12.484 0-6.883-5.599-12.483-12.481-12.483z"
                        fill="#2566B1" p-id="7354"></path>
                    <path d="M222.59 467.356m-19.952 0a19.952 19.952 0 1 0 39.904 0 19.952 19.952 0 1 0-39.904 0Z"
                        fill="#FFFFFF" p-id="7355"></path>
                    <path
                        d="M222.592 494.779c-15.121 0-27.423-12.302-27.423-27.423 0-15.12 12.302-27.421 27.423-27.421 15.119 0 27.419 12.301 27.419 27.421 0 15.121-12.3 27.423-27.419 27.423z m0-39.906c-6.884 0-12.485 5.6-12.485 12.483 0 6.884 5.602 12.484 12.485 12.484 6.882 0 12.481-5.601 12.481-12.484s-5.599-12.483-12.481-12.483z"
                        fill="#2566B1" p-id="7356"></path>
                    <path d="M222.59 593.211m-19.952 0a19.952 19.952 0 1 0 39.904 0 19.952 19.952 0 1 0-39.904 0Z"
                        fill="#FFFFFF" p-id="7357"></path>
                    <path
                        d="M222.592 620.634c-15.121 0-27.423-12.302-27.423-27.422 0-15.12 12.302-27.421 27.423-27.421 15.119 0 27.419 12.301 27.419 27.421s-12.3 27.422-27.419 27.422z m0-39.905c-6.884 0-12.485 5.6-12.485 12.483 0 6.884 5.602 12.484 12.485 12.484 6.882 0 12.481-5.6 12.481-12.484s-5.599-12.483-12.481-12.483z"
                        fill="#2566B1" p-id="7358"></path>
                    <path d="M222.59 703.717m-19.952 0a19.952 19.952 0 1 0 39.904 0 19.952 19.952 0 1 0-39.904 0Z"
                        fill="#FFFFFF" p-id="7359"></path>
                    <path
                        d="M222.592 731.14c-15.121 0-27.423-12.302-27.423-27.423 0-15.121 12.302-27.422 27.423-27.422 15.119 0 27.419 12.301 27.419 27.422s-12.3 27.423-27.419 27.423z m0-39.906c-6.884 0-12.485 5.6-12.485 12.483 0 6.884 5.602 12.484 12.485 12.484 6.882 0 12.481-5.601 12.481-12.484s-5.599-12.483-12.481-12.483z"
                        fill="#2566B1" p-id="7360"></path>
                    <path d="M222.59 820.364m-19.952 0a19.952 19.952 0 1 0 39.904 0 19.952 19.952 0 1 0-39.904 0Z"
                        fill="#FFFFFF" p-id="7361"></path>
                    <path
                        d="M222.592 847.786c-15.121 0-27.423-12.302-27.423-27.422s12.302-27.422 27.423-27.422c15.119 0 27.419 12.301 27.419 27.422s-12.3 27.422-27.419 27.422z m0-39.906c-6.884 0-12.485 5.6-12.485 12.483 0 6.884 5.602 12.484 12.485 12.484 6.882 0 12.481-5.6 12.481-12.484 0-6.883-5.599-12.483-12.481-12.483zM216.835 251.202h-83.647c-6.075 0-11-4.925-11-11s4.925-11 11-11h83.647c6.075 0 11 4.925 11 11s-4.925 11-11 11zM216.835 361.708h-77.51c-6.075 0-11-4.925-11-11s4.925-11 11-11h77.51c6.075 0 11 4.925 11 11s-4.925 11-11 11zM216.835 478.354h-80.577c-6.075 0-11-4.925-11-11s4.925-11 11-11h80.577c6.075 0 11 4.925 11 11s-4.925 11-11 11zM216.835 604.208h-80.577c-6.075 0-11-4.925-11-11s4.925-11 11-11h80.577c6.075 0 11 4.925 11 11s-4.925 11-11 11zM216.835 714.714h-80.577c-6.075 0-11-4.925-11-11s4.925-11 11-11h80.577c6.075 0 11 4.925 11 11s-4.925 11-11 11z"
                        fill="#2566B1" p-id="7362"></path>
                    <path
                        d="M216.835 831.36h-80.577c-6.075 0-11-4.925-11-11s4.925-11 11-11h80.577c6.075 0 11 4.925 11 11s-4.925 11-11 11z"
                        fill="#2566B1" p-id="7363"></path>
                    <path
                        d="M323.379 213.856c-6.073 0-10.996-4.92-11-10.994-0.004-6.075 4.919-11.003 10.993-11.006l439.466-0.255h0.005c6.075 0 10.998 4.92 11.002 10.994 0.004 6.075-4.919 11.003-10.993 11.006l-439.467 0.255h-0.006z"
                        fill="#2566B1" p-id="7364"></path>
                    <path
                        d="M323.379 305.945c-6.072 0-10.996-4.92-11-10.994-0.004-6.075 4.919-11.003 10.993-11.006l439.466-0.255h0.005c6.075 0 10.998 4.92 11.002 10.994 0.004 6.075-4.919 11.003-10.993 11.006l-439.466 0.255h-0.007z"
                        fill="#2566B1" p-id="7365"></path>
                    <path
                        d="M323.379 398.034c-6.073 0-10.996-4.92-11-10.994-0.004-6.075 4.919-11.003 10.994-11.006l439.465-0.254h0.005c6.074 0 10.998 4.92 11.002 10.994 0.004 6.075-4.919 11.003-10.993 11.006l-439.467 0.254h-0.006z"
                        fill="#2566B1" p-id="7366"></path>
                    <path
                        d="M323.379 490.123c-6.073 0-10.996-4.92-11-10.994-0.004-6.075 4.919-11.003 10.993-11.006l439.466-0.256h0.005c6.075 0 10.998 4.92 11.002 10.994 0.004 6.075-4.919 11.003-10.993 11.006l-439.466 0.256h-0.007z"
                        fill="#2566B1" p-id="7367"></path>
                    <path
                        d="M323.379 579.143c-6.073 0-10.996-4.92-11-10.994-0.004-6.075 4.918-11.003 10.993-11.006l439.466-0.256h0.005c6.075 0 10.998 4.92 11.002 10.994 0.004 6.075-4.919 11.003-10.993 11.006l-439.466 0.256h-0.007z"
                        fill="#2566B1" p-id="7368"></path>
                    <path
                        d="M323.379 671.231c-6.073 0-10.996-4.92-11-10.994-0.004-6.075 4.919-11.003 10.993-11.006l439.466-0.256h0.005c6.075 0 10.998 4.92 11.002 10.994 0.004 6.075-4.919 11.003-10.993 11.006l-439.466 0.256h-0.007z"
                        fill="#2566B1" p-id="7369"></path>
                    <path
                        d="M323.379 763.32c-6.073 0-10.996-4.92-11-10.994-0.004-6.075 4.919-11.003 10.993-11.006l439.466-0.255h0.005c6.075 0 10.998 4.92 11.002 10.994 0.004 6.075-4.919 11.003-10.993 11.006l-439.467 0.255h-0.006z"
                        fill="#2566B1" p-id="7370"></path>
                    <path
                        d="M323.379 855.409c-6.073 0-10.996-4.92-11-10.994-0.004-6.075 4.919-11.003 10.994-11.006l439.466-0.254h0.006c6.073 0 10.996 4.92 11 10.994 0.004 6.075-4.919 11.003-10.993 11.006l-439.467 0.254h-0.006z"
                        fill="#2566B1" p-id="7371"></path>
                </svg>
                <span class="screen">数据列表</span>
                <el-button size="mini" style="float:right" @click="addactive">添加活动</el-button>
            </div>
        </div>
        <div class="tableactive">
            <el-table style="width: 100%;margin-top: 20px;" border :data="tableData">
                <el-table-column label="id" width="100" align="center" prop="id"></el-table-column>
                <el-table-column label="秒杀商品编号" width="120" align="center" prop="spu_id"></el-table-column>
                <el-table-column label="活动标题" align="center" prop="active_name"></el-table-column>
                <el-table-column label="活动状态" width="140" align="center" prop="active">
                </el-table-column>
                <el-table-column label="开始时间" width="195" align="center" prop="star_time"></el-table-column>
                <el-table-column label="结束时间" width="195" align="center" prop="end_time"></el-table-column>
                <el-table-column prop="id" label="操作" width="180" align="center">
                    <template :data="tableData" slot-scope="scope">
                        <el-button size="mini" type="text" @click.native="getspu(scope.row)">修改商品</el-button>
                        <el-button size="mini" type="text" @click.native="handleUpdate(scope.row)">编辑活动</el-button>
                        <el-button size="mini" type="text" @click.native="handleDelete(scope.$index, scope.row.id)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog title="添加活动" width="40%" :visible.sync="dialogVisible">
            <list :editForm='editForm' />
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="handleDialogConfirm" size="small">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="查看信息" width="75%" :visible.sync="selectVisible">
            <el-table :data="selectData">
                <el-table-column prop="spu_id" label="秒杀商品"></el-table-column>
                <el-table-column prop="active_name" label="活动标题"></el-table-column>
                <el-table-column label="活动状态" width="140" align="center" prop="active">
                </el-table-column>
                <el-table-column prop="star_time" width="180" label="开始时间"></el-table-column>
                <el-table-column prop="end_time" width="180" label="结束时间"></el-table-column>
                <el-table-column prop="id" label="操作" width="180" align="center">
                    <template :data="selectData" slot-scope="scope">
                        <el-button size="mini" type="text" @click.native="getspu(scope.row)">修改商品</el-button>
                        <el-button size="mini" type="text" @click.native="handleUpdate(scope.row)">编辑</el-button>
                        <el-button size="mini" type="text" @click.native="handleDelete(scope.$index, scope.row.id)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="selectVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="handleEdit(selectData)" size="small">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="编辑信息" width="%40" :visible.sync="editVisible">
            <list :editForm='editData' />
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="handleEdit(editData)" size="small">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="编辑秒杀商品信息" width="%40" :visible.sync="spuVisible">
            <el-form :data="spuData" label-width="150px" size="small">
                <el-form-item label="商品名称">{{ spuData.title }}</el-form-item>
                <el-form-item label="产品原价格">{{ spuData.price }}元</el-form-item>
                <el-form-item label="秒杀优惠价格">
                    <el-input v-model="spuData.special_price"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="spuVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="handlespu(spuData)" size="small">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { addSpike, getSpike, delSpike, slectSpike, updateSpike, getSpu, updataSup } from '../../../api/seckill.js'
import { mapGetters } from 'vuex'
import List from "@/components/list/index";
export default {
    name: 'Active',
    components: {
        List,
    },
    data() {
        return {
            input: '',
            tableData: [
                {
                    active: '',
                }
            ],
            starTime: '',
            endTime: '',
            dialogVisible: false,
            editForm: {},
            selectVisible: false,
            selectData: [
                {
                    active: '',
                }
            ],
            spuVisible: false,
            editVisible: false,
            editForm: {},
            editData: {},
            active_status: '活动未开始',
            spuData: [],
        }
    },
    methods: {
        // 获取秒杀信息
        getSpike(param) {
            // console.log(param);
            getSpike(param).then(res => {
                // console.log(param);
                // console.log(res, '+++===+++===+++===+++===+++===+++===');
                this.tableData = res.data.res
                let nowTime = new Date().getTime();
                for (let i = 0; i < this.tableData.length; i++) {
                    this.starTime = new Date(res.data.res[i].star_time).getTime();
                    this.endTime = new Date(res.data.res[i].end_time).getTime();
                }
                if (nowTime >= this.starTime && nowTime <= this.endTime) {
                    for (let j = 0; j < this.tableData.length; j++) {
                        this.tableData[j].active = "活动进行中"
                    }
                } else if (nowTime > this.endTime) {
                    for (let k = 0; k < this.tableData.length; k++) {
                        this.tableData[k].active = "活动已结束"
                    }
                } else {
                    for (let n = 0; n < this.tableData.length; n++) {
                        this.tableData[n].active = "活动未开始"
                    }
                }
            }).catch(() => {
                console.log('获取失败！！！！！');
            });
        },

        // 添加活动
        addactive() {
            this.dialogVisible = true;
        },
        handleDialogConfirm() {
            this.editForm.star_time = new Date(this.editForm.star_time).getTime();
            this.editForm.end_time = new Date(this.editForm.end_time).getTime();
            addSpike(this.editForm).then(res => {
                // console.log(res.data.code, '添加活动模块0000000');
                let id = this.storeInfo.id
                this.getSpike({ id });
                // console.log("刷新成功");
                if (res.data.code == 200) {
                    this.$message({
                        message: '添加成功'
                    })
                }
                if (res.data.code == 401) {
                    this.$message({
                        message: '添加失败，未添加活动信息',
                        type: 'warning'
                    })
                }
                if (res.data.code == 501) {
                    this.$message({
                        message: '被添加的商品不存在，请重新添加',
                        type: 'warning'
                    })
                }
            }).catch((err) => {
                console.log(err, "添加活动模块失败");
            });
            this.dialogVisible = false;
        },

        // 查询
        searchHandel() {
            slectSpike({ active_name: this.input }).then(res => {
                // console.log(res);
                let nowTime = new Date().getTime();
                this.starTime = new Date(res.data.res[0].star_time).getTime();
                this.endTime = new Date(res.data.res[0].end_time).getTime();
                if (nowTime >= this.starTime && nowTime <= this.endTime) {
                    this.selectData.active = "活动进行中"
                } else if (nowTime > this.endTime) {
                    this.selectData.active = "活动已结束"
                } else {
                    this.selectData.active = "活动未开始"
                }
                this.selectData = res.data.res
                // console.log(res.data.res);
                this.selectVisible = true
            }).catch(err => {
                console.log(err)
            })
        },
        // 获取秒杀商品价格
        getspu(row) {
            getSpu({ id: row.spu_id }).then(res => {
                this.spuData = res.data.data[0]
                this.spuVisible = true
            }).catch(err => { console.log(err) })
        },
        handlespu(data) {
            this.spuVisible = false
            data.is_special = 2
            updataSup(data).then(res => {
            }).catch(err => { console.log(err, '信息修改失败') })
        },

        // 删除活动
        handleDelete(index, id) {
            delSpike({ id }).then((res) => {
                this.getSpike({ id });
            }).catch((err) => {
                console.log(err, '删除失败！！');
            });
        },
        // 更新商品模块
        handleUpdate(row) {
            // console.log(row);
            this.editData = row;
            this.editVisible = true;
        },
        // 点击确认后编辑
        handleEdit(data) {
            data.star_time = new Date(data.star_time).getTime();
            data.end_time = new Date(data.end_time).getTime();
            updateSpike(data).then(res => {
                if (res.data.code == 200) {
                    this.$message({
                        message: '秒杀信息修改成功',
                        type: 'success'
                    })
                }
            }).catch(err => {
                console, log(err, '秒杀获取失败！！！')
            })
            this.editVisible = false
            this.selectVisible = false
            this.getSpike({ id: 1 });
        },
    },
    created() {
        let id = this.storeInfo.id
        this.getSpike({ id });
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

.search {
    width: 70%;
    height: 118px;
    text-align: left;
    margin: 20px 0;
    border: 1px solid rgb(228, 222, 222);
}

.screen {
    margin: 0 10px;
}

.activeName {
    float: left;
    font-size: 14px;
    font-weight: bolder;
    margin-top: 12px;
    color: #606266;
}

.addcontent {
    width: 98%;
    height: 18px;
    padding: 20px;
}

.addmarket {
    width: 95%;
    height: 58px;
    border: 1px solid rgb(228, 222, 222);
}

.chaxun {
    float: right;
}

.input {
    width: 98%;
    margin: 10px 40px;
}

.searchbox {
    height: 78px;
    width: 95%;
    padding: 20px;
}

.screen {
    margin: 0 10px;
}

.icon {
    width: 16px;
    height: 16px;
    margin-left: 10px;
}
</style>
