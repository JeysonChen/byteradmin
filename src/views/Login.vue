<template>
  <div class="login">
    <h1>医疗服务后台管理系统</h1>
    <el-row>
      <el-col :span="10">
        <div style="width: 320px; margin: 20px auto">
          <img src="../assets/images/admin.jpg" alt width="100%" />
        </div>
      </el-col>
      <el-col :span="8" :offset="4" class="login-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="login-btn"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Api from '@/api'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {},
    }
  },
  methods: {
    ...mapMutations(['updateUser']),
    onSubmit() {
      Api.admin
        .login({
          ...this.form,
        })
        .then((data) => {
          console.log(data, '99')
          this.$message.success('登录成功')
          localStorage.token = data.token
          localStorage.isLogin = true
          this.updateUser({
            key: 'isLogin',
            val: true,
          })
          this.updateUser({
            key: 'token',
            val: data.token,
          })
        })
        .catch(({ msg }) => {
          this.$message.error(msg)
        })
    },
  },
}
</script>
<style lang="less">
.login-box {
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  color: #fff;
  width: 400px;
  height: 300px;
  padding: 80px 40px 50px 20px;
  .el-form-item__label {
    color: #fff;
  }
  .el-input {
    width: 260px;
  }
  .login-btn {
    width: 260px;
  }
}
.login {
 h1 {
   text-align: center;
   font-size: 24px;
   font-weight: bold;
   margin: 30px auto 60px;
 }
}
</style>
