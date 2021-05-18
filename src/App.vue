<template>
  <div id="app" class="byter-system">
    <login v-if="!isSinglePage" />
    <div class="app-wrapper" v-else>
      <el-container>
        <Asider />
        <el-container class="main-wrapper">
          <header-nav />
          <el-main class="content-wrapper">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import Login from '@/views/Login'
import Asider from '@/components/Asider'
import HeaderNav from '@/components/Header'
export default {
  data() {
    return {
      // isSinglePage: true,
    }
  },
  computed: {
    isSinglePage() {
      return this.$store.state.user.isLogin
    },
  },
  components: {
    Login,
    Asider,
    HeaderNav,
  },
}
</script>
<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .el-container {
    height: 100%;
    overflow: hidden;
  }
  .el-menu {
    border-right: none;
  }
  .el-aside {
    border-right: solid 1px #e6e6e6;
  }
  
  .main-wrapper {
    flex-direction: column;
  }
}
.content-wrapper {
  background: #f9f9f9;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
