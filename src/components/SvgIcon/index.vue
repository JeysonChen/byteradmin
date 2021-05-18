<template>
  <!-- aria-hidden, 帮助残障人士阅读(设备读取内容时会跳过这个标签以免混淆) -->
  <svg
    :class="`${svgClass} ${spin ? 'scoped-svg-animation' : ''}`"
    aria-hidden="true"
    v-on="$listeners"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>
 
<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    // 是否旋转
    spin: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`
    },
    svgClass() {
      if (this.className) {
        return 'scoped-svg-icon ' + this.className
      } else {
        return 'scoped-svg-icon'
      }
    },
  },
}
</script>
 
<style lang="less">
.scoped-svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  &.scoped-svg-animation {
    animation: rotate 2s linear infinite;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  &.gray {
    color: #666;
  }
  &.white {
    color: #fff;
  }
}
</style>

