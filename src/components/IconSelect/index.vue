<template>
  <div class="icon-select-wrapper">
    <div>当前选择：{{ currentIcon }}</div>
    <el-input v-model="iconVal" placeholder="请输入内容"></el-input>
    <div>
      <ul class="icon-list">
        <li
          :class="{ active: item === currentIcon }"
          v-for="(item, index) in iconList"
          :key="index"
          @click="selectIcon(item)"
        >
          <svg-icon
            :class-name="item === currentIcon ? 'white' : 'gray'"
            :name="item"
            style="width: 30px; height: 30px"
          />
          <span class="icon-label">{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import icons from './config'
export default {
  data() {
    return {
      iconList: icons,
      iconVal: '',
      currentIcon: 'add-circle',
      iconClass: '',
    }
  },
  watch: {
    iconVal(val) {
      if (val) {
        this.iconList = this.iconList.filter((item) => item.indexOf(val) > -1)
      } else {
        this.iconList = icons
      }
    },
  },
  methods: {
    selectIcon(item) {
      this.currentIcon = item
      this.iconClass
    },
  },
}
</script>

<style lang="less">
.icon-select-wrapper {
  width: 450px;
}
.icon-list {
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid #dcdfe6;
  border-top: 1px solid #dcdfe6;
  margin-top: 20px;
  li {
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #dcdfe6;
    border-bottom: 1px solid #dcdfe6;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
    .icon-label {
      font-size: 12px;
      color: #666;
    }
    &.active {
      background: burlywood;
      .icon-label {
        font-size: 12px;
        color: #fff;
      }
    }
  }
}
</style>