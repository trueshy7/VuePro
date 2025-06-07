<template>
  <div class="outer">
    <h4>我是登录界面</h4>
    <el-input
        type="text"
        class="LoginInput"
        v-model="username"
        placeholder="请输入用户名"
        clearable
        :suffix-icon="Calendar"
    >
      <template #prefix>
        <el-icon color="#409efc">
          <User/>
        </el-icon>
      </template>
    </el-input>
    <br>
    <el-input
        type="password"
        class="LoginInput"
        v-model="password"
        placeholder="请输入密码"
        clearable show-password
        :prefix-icon="Search"
    >
      <template #prefix>
        <el-icon color="#409efc">
          <Lock/>
        </el-icon>
      </template>
    </el-input>
    <br>
    <el-button @click="login" class="ConfirmButton" type="primary" :icon="confirm">
      确认
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    login() {
      if (this.password == "" || this.username == "") {
        this.$message.error('用户名或密码为空');
      }
      this.$axios.post("/user/login", {"username": this.username, "password": this.password}).then((res) => {
          res=res.data;
          if(res.code==200){
            this.$message.success("登陆成功")
            localStorage.setItem("token",res.token)
            this.$router.push("/home");
          }
          else {
            this.$message.error(res.msg)
          }
      })
    }
  }
}
</script>

<style scoped>
.outer {
  margin-top: 10%;
  width: 100%;
  height: 100%;
}

.LoginInput {
  width: 300px;
  height: 35px;
}

.ConfirmButton {
  width: 300px;
  color: green;
  background-color: greenyellow;
  border-radius: 0px;
}
</style>