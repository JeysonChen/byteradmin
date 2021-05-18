<template>
    <div>
        <slot name="tableTop"></slot>
        <el-table
            v-loading="loading"
            :border="border"
            :data="tableData"
            :row-class-name="rowClassName"
            style="width: 100%">
            <el-table-column
                v-for="column in tableHeader"
                :key="column.key"
                :prop="column.prop"
                :label="column.label"
                :width="column.width || 140"
                :fixed="column.fixed"
            >
                <template slot-scope="{column, row}" v-if="$scopedSlots.column">
                    <slot :column="column" :row="row" name="column"></slot>
                </template>
            </el-table-column>
            {{$scopedSlots}}
            <el-table-column
                v-if="$scopedSlots.handler"
                prop="handler"
                label="操作"
            >
                <template slot-scope="{column, row}">
                    <slot :column="column" :row="row" name="handler"></slot>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="pageSizes"
            :page-size="pageSize"
            :current-page="currentPage"
            layout="total, sizes, prev, pager, next"
            :total="total">
        </el-pagination>

    </div>
   
</template>

<script>
export default {
    props: {
        tableHeader: {
            type: Array,
            default: () => []
        },
        tableData: {
            type: Array,
            default: () => []
        },
        border: {
            type: Boolean,
            default: false,
        },
        rowClassName: {
            type: String,
            default: ''
        },
        total: {
            type: Number,
            default: 0
        },
        pageSizes: {
            type: Array,
            default: () => [10, 20, 50]
        },
        pageSize: {
            type: Number,
            default: 10
        },
        currentPage: {
            type: Number,
            default: 10
        },
        loading: {
            type: Boolean,
            default: false
        }

    },
    data () {
        return {
        
        }
    },
    mounted() {
        console.log(this.$scopedSlots, 'skc');
    },
    methods: {
        handleSizeChange(val) {
            this.$emit('handleSizeChange', val);
        },
        handleCurrentChange(val) {
            this.$emit('handleCurrentChange', val);
        }
    }
}
</script>

<style lang="less">
    .el-pagination {
        float: right;
        margin: 20px 0;
    }
</style>