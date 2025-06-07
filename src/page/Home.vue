<template>
  <div class="outer1">
    <el-container class="outer2">
      <el-header class="header">喵ZK音乐管理系统</el-header>
      <el-container class="content">
        <el-aside class="aside">
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <location/>
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon>
                <icon-menu/>
              </el-icon>
              <span  @click="usershow">用户管理</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <document/>
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <setting/>
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>

        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      users: []
    }
  },
  methods: {
    fun() {
      this.$axios.get('/user/find').then(res => {
        this.users = res.data.data;
      });
    },
    usershow(){
      this.$router.push("/userlist");
    }
  },
  mounted() {
  }
}
</script>

<style>
.outer1 {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}

.outer2 {
  display: flex;
  position: relative;
  width: 100%;
  height: 750px;
}

.header {
  display: flex;
  position: relative;
  width: 100%;
  height: 20%;
  background-color: yellowgreen;
}

.content {
  display: flex;
  position: relative;
  width: 100%;
  height: 80%;
}

.aside {
  display: flex;
  position: relative;
  width: 20%;
  height: 100%;
  background-color: #7d9687;
}

.main {
  display: flex;
  position: relative;
  width: 80%;
  height: 100%;
  background-color: wheat;
}
</style>