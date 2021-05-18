<template>
  <div>
    <div class="aside-header">
      <span>{{isCollaps ? '字节匠' : '字节匠后台管理'}}</span>
    </div>
    <el-menu class="aside-menu" :default-openeds="['1', '3']" router  
    @open="handleOpen" @close="handleClose" :collapse="isCollaps">
      <template v-for="(data, index) in menuList">
          <menu-item :key="index" :data="data"/>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menu from '../../utils/menu'
import MenuItem from './MenuItem';
export default {
  data() {
    return {
      menuList: menu,
      // isCollapse: true
    }
  },
  computed: {
    isCollaps() {
      return this.$store.state.user.isCollaps;
    }
  },
  components: {
    MenuItem
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less">
.aside-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.aside-header {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid #f0f9f0;
}
</style>