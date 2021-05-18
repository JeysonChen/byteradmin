<template>
  <div class="common-title">
    <el-button
      type="prain"
      size="small"
      icon="el-icon-arrow-left"
      @click="goBack"
      >返回</el-button
    >
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    goBack() {
      this.$emit('goBack')
    },
  },
}
</script>

<style lang="less">
.common-title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
  h3 {
    margin-left: 20px;
    font-size: 16px;
  }
}
</style>