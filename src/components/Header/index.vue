<template>
  <el-header class="header-menu">
    <i class="collaps-icon" :class="!isCollaps ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="toggalSideBar"></i>
    <div>
      <el-dropdown @command="command">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </div>
    
  </el-header>
</template>

<script>
export default {
  computed: {
    isCollaps() {
      return this.$store.state.user.isCollaps;;
    }
  },
  methods: {
    command(com) {
      console.log(com, '999')
      com === 'logOut' && this.$store.dispatch('logOut')
    },
    toggalSideBar() {
      console.log('jdhkjrhe')
      this.$store.dispatch('toggleSideBar');
    }
  }
}
</script>

<style lang="less">
.header-menu {
  .collaps-icon {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>