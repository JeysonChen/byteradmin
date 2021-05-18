<template>
  <el-menu-item
    v-if="!data.children"
    :index="data.index"
    >
      <i :class="data.icon"></i>
      <template slot="title">
        {{ data.label }}
      </template>
    </el-menu-item
  >
  <el-submenu
    v-else
    :index="data.index"
  >
    <template slot="title">
      <i :class="data.icon"></i>
      <span slot="title">{{ data.label }}</span>
    </template>
    
    <el-menu-item
      v-for="(item, i) in data.children"
      :key="i"
      :index="item.index"
      >{{ item.label }}</el-menu-item
    >
  </el-submenu>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
</style>