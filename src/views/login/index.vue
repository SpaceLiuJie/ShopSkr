<template>
  <div style="height:100%">
    <div class="login-container">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <div class="title-container">
          
          <h3 class="title"><svg-icon icon-class="logo" class="titleLogo"></svg-icon></h3>
        </div>
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input v-model="ruleForm.username" type="text" class="color" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input :type="passwordType" v-model="ruleForm.pass" autocomplete="off"></el-input>
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
        <!-- <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item> -->
        <!-- <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item> -->
        <el-form-item class="sumbit">
          <el-button :loading="loading"  type="primary" @click="submitForm('ruleForm')" style="background-color:#242f3c;border: none;">提交</el-button>
          <el-button @click="resetForm('ruleForm')" style="background-color:#242f3c;border: none">重置</el-button>
        </el-form-item>
        <div class="tips">
          <span style="margin-right: 20px">username: skrshop</span>
          <span> password: Qqwerqwer</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
 import {login} from '../../api/login.js'
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      let reg = /\w{4,12}/
      if (value === "") {
        callback(new Error("账号不能为空"));
      } else if (!reg.test(value)) {
        callback(new Error("请求输入4-12为数字字母下划线"));
      } else {
        callback();
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'));
    //   } else if (value !== this.ruleForm.pass) {
    //     callback(new Error('两次输入密码不一致!'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm: {
        username: 'skrshop',
        pass: 'Qqwerqwer',
        checkPass: '',
        // age: ''
      },
      rules: {
        username: [
          { required: true, validator: validateUsername, trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        // checkPass: [
        //   {  required: true, validator: validatePass2, trigger: 'blur' }
        // ],
        //   age: [
        //     { validator: checkAge, trigger: 'blur' }
        //   ]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    submitForm(formName) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          let name = this.ruleForm.username;
          // let password=this.ruleForm.pass;
          // console.log(name,password);
          // let data={
          //   name,
          //   password,
          // }
          this.$store.dispatch('user/login', {name:this.ruleForm.username,password:this.ruleForm.pass}).then((res) => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
            this.$message({
              message:"登录失败",
              type:"warning"
            })
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>

<style scoped lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
$dark_gray: #889aa4;

.el-input::v-deep input{
  background-color: #242f3c;
  border: none;
}

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    &>input {
      background: transparent;
      outline: none;
      border: none;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #fff;
      // height: 47px;
      // caret-color: #fff;

      // &:-webkit-autofill {
      //   box-shadow: 0 0 0px 1000px #283443 inset !important;
      //   -webkit-text-fill-color: #fff !important;
      // }
    }
  }

  .demo-ruleForm {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
      }

      .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none
      }
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
        .titleLogo{
          width: 30%;
          height: 25%;
        }
      }

    }
  }
  .sumbit{
    display: flex;
    justify-content: space-between;
  }


}
</style>