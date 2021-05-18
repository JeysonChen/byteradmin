<template>
  <div>
    <common-title :title="title" @goBack="goBack" />
    <el-card>
      <common-form
        :form-item="formItem"
        :form-rule="formRule"
        :default-data="defaultData"
        ref="commonForm"
      >
        <template slot-scope="{ formData }">
          <el-button type="primary" @click="submit(formData)">提交</el-button>
        </template>
      </common-form>
    </el-card>
    
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm";
import CommonTitle from "@/components/CommonTitle";
import { formItem, formRule } from "./config";
import Api from "@/api";
export default {
  name: "AddAdmin",
  data() {
    return {
      formItem,
      formRule,
    };
  },
  components: {
    CommonForm,
    CommonTitle,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    defaultData: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    if (this.$parent.isEdit) {
      this.formItem = formItem.filter((item) => item.type !== "password");
    } else {
      this.formItem = formItem;
    }
  },
  methods: {
    goBack() {
      this.$parent.isAdd = false;
      this.$parent.isEdit = false;
    },

    submit(formData) {
      console.log(this.$refs.commonForm, "refs");
      console.log(formData, "formData");
      this.$refs.commonForm
        .validateForm()
        .then((res) => {
          console.log("good");
          if (this.$parent.isAdd) {
            Api.admin.add(formData).then(({ data }) => {
              this.$message.success("创建成功");
              this.$parent.isAdd = false;
              this.$parent.getData();
              this.$parent.searchFormData = null;
              this.$refs.commonForm.resetForm();
            });
          }
          if (this.$parent.isEdit) {
            Api.admin.edit(formData).then((res) => {
              this.$message.success("修改成功");
              this.$parent.isEdit = false;
               console.log(this.$parent.pageNo);
              this.$parent.getData();
              console.log(this.$parent.pageNo);
            });
          }
        })
        .catch((err) => {
          console.log("bad");
        });
    },
  },
};
</script>

<style>
</style>