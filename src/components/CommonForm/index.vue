<template>
  <div>
    <el-form
      :model="formData"
      :rules="formRule"
      ref="form"
      :label-width="labelWidth"
      :inline="inline"
    >
      <template v-for="(item, index) in formItem">
        <el-form-item
          v-if="item.type == 'input'"
          :label="item.label"
          :prop="item.value"
          :key="index"
        >
          <el-input v-model="formData[item.value]" :size="item.size || ''" clearable></el-input>
        </el-form-item>
        <el-form-item
          v-if="item.type == 'password'"
          :label="item.label"
          :prop="item.value"
          :key="index"
        >
          <el-input type="password" v-model="formData[item.value]" :size="item.size || ''" clearable></el-input>
        </el-form-item>
        <el-form-item
          v-if="item.type == 'select'"
          :key="index"
          :label="item.label"
          :prop="item.value"
        >
          <el-select
            v-model="formData[item.value]"
            :placeholder="item.placeHolder"
            :size="item.size || ''"
          >
            <el-option
              v-for="(option, i) in item.options"
              :key="i"
              :label="option.label"
              :value="option.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="form.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item> -->
        <el-form-item
          v-if="item.type == 'switch'"
          :label="item.label"
          :key="index"
          :prop="item.value"
        >
          <el-switch v-model="formData[item.value]" :value="true"></el-switch>
        </el-form-item>
        <el-form-item
          v-if="item.type == 'checkbox'"
          :label="item.label"
          :prop="item.value"
          :key="index"
        >
          <el-checkbox-group v-model="formData[item.value]">
            <el-checkbox
              v-for="(option, i) in item.options"
              :key="i"
              :label="option.label"
              :name="option.value"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item
          v-if="item.type == 'radio'"
          :label="item.label"
          :prop="item.value"
          :key="index"
        >
          <el-radio-group v-model="formData[item.value]">
            <el-radio
              v-for="(option, i) in item.options"
              :key="i"
              :label="option.label"
            ></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          v-if="item.type == 'textarea'"
          :label="item.label"
          :key="index"
          :prop="item.value"
        >
          <el-input type="textarea" v-model="formData[item.value]" clearable></el-input>
        </el-form-item>
      </template>
    </el-form>
    <el-form :style="{ paddingLeft: labelWidth }">
      <el-form-item>
        <slot :formData="formData"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { formItem } from '../../views/SystemSettings/AdminManage/config'
// let formData = {}
// formItem.forEach((item) => {
//   formData[item.value] = item.default
// })

export default {
  props: {
    formItem: {
      type: Array,
      default: () => [],
    },
    formRule: {
      type: Object,
      default: () => {},
    },
    labelWidth: {
      type: String,
      default: '100px',
    },
    inline: {
      type: Boolean,
      default: false,
    },
    defaultData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      formData: {},
    }
  },
  created() {
    if (this.defaultData) {
      this.formData = { ...this.defaultData }
    }
    // this.formItem.forEach((item) => {
    //   this.formData[item.value] = item.default
    // })

  },

  methods: {
    validateForm() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid) => {
          if (valid) {
            resolve()
          } else {
            reject()
            return false
          }
        })
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    },
  },
}
</script>

<style lang="less" scoped>
.el-form {
  width: 400px;
  .el-select {
    width: 100%;
  }
  .el-switch {
    width: 100%;
  }
  &.el-form--inline {
    width: 100%;
    .el-select {
      width: 180px;
    }
    .el-input {
      width: 180px;
    }
    .el-switch {
      width: 100px;
    }
    .el-form-item {
      margin-bottom: 12px;
    }
  }
}
</style>