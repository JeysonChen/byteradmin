<template>
  <div>
    <div v-if="!isAdd && !isEdit">
      <div class="top-card">
        <h3>管理员页面</h3>
        <el-button type="primary" @click="addAdmin">新增管理员</el-button>
      </div>
      <el-card class="search-card">
        <common-form
          class="search-box"
          :form-item="searchFormItem"
          :inline="true"
          ref="searchFormItem"
        >
          <template slot-scope="{ formData }">
            <el-button type="primary" size="small" @click="search(formData)">查询</el-button>
          </template>
        </common-form>
      </el-card>
      <el-card>
        <common-table
          :table-header="tableHeader"
          :table-data="tableData"
          :total="total" 
          :loading="loading"
          :current-page="pageNo"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        >
          <template slot-scope="{ row, column }" slot="column">
            <template v-if="column.property === 'isUsing'">
              <el-switch
                v-model="row['isUsing']"
                @change="changeStatus(row)"
              >
              </el-switch>
            </template>
            <span v-else>{{ row[column.property] }}</span>
          </template>
          <template slot-scope="{ row }" slot="handler">
            <el-link type="primary"  @click="handleEdit(row)">编辑</el-link>
            <el-link type="primary" @click="handleDelete(row)"
              >删除</el-link
            >
          </template>
        </common-table>
      </el-card>
      
    </div>
    <div v-else>
      <add :title="title" :default-data="defaultData" />
    </div>
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm";

import { tableHeader, searchFormItem} from './config'
import Api from '@/api'
import CommonTable from '@/components/CommonTable'
import Add from './Add'
import moment from 'moment'
export default {
  name: 'AdminManage',
  data() {
    return {
      title: '新增管理员',
      tableHeader,
      isAdd: false,
      isEdit: false,
      tableData: [],
      pageSize: 10,
      pageNo: 1,
      total: 0,
      searchFormItem,
      searchFormData: {
        userName: '',
        userAccount: '',
        isUsing: ''
      },
      loading: false
    }
  },
  components: {
    CommonTable,
    Add,
    CommonForm
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true;
      Api.admin.list({
        pageSize: this.pageSize,
        pageNo: this.pageNo,
        ...this.searchFormData,
      }).then(({ data }) => {
        console.log(data, 'lidst')
        this.loading = false;
        this.total = data.total;
        this.tableData = data.list && data.list.map(item => {
          item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')
          return item;
        });
        this.defaultData = null;
      })
    },
    search(formData) {
      this.searchFormData = formData;
      this.getData();
    },
    addAdmin() {
      this.title = '新增管理员'
      this.isAdd = true;
      this.defaultData = null;
    },
    handleEdit(row) {
      this.title = '编辑管理员'
      this.isEdit = true
      this.defaultData = row
    },
    handleDelete(row) {
       this.$confirm(`确认删除${row.userName || ''}`, '确认删除')
          .then(() => {
            Api.admin.delete({id: row._id}).then(({data}) => {
              console.log(data, '77');
              this.getData();
            })
          });
    },
    changeStatus(row) {
      this.$confirm(`确认变更${row.userName || ''}启用状态`, '确认')
          .then(() => {
            Api.admin.changeStatus({id: row._id, isUsing: row.isUsing}).then(({data}) => {
              console.log(data, '77');
              this.getData();
            })
          });
    },
    handleSizeChange(val) {
      console.log('pageSize变更了');
      this.pageSize = val;
      this.getData();

    },
    handleCurrentChange(val) {
      console.log('页面发生了变化');
      this.pageNo = val;
      this.getData();
    }
  },
}
</script>

<style lang="less">
.search-box {
  width: 100%;
}
.top-card {
  margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  h3 {
    font-size: 16px;
  }
}

</style>