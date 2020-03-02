<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      :stripe="stripe"
      highlight-current-row
      :height="clientHeight"
      :header-cell-style="{ background: '#eef1f6', color: '#000' }"
    >
      <el-table-column align="center" label="操作人员" fixed>
        <template slot-scope="scope">
          {{ scope.row.operator }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作表名">
        <template slot-scope="scope">
          {{ scope.row.Operation_table_name }}
        </template>
      </el-table-column>
      <el-table-column label="编辑项目" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.Edit_project }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作日期" align="center">
        <template slot-scope="scope">
          {{ scope.row.Operation_Date }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      stripe: true,
      clientHeight: document.documentElement.clientHeight - 90
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    window.onresize = () => {
      this.clientHeight = document.documentElement.clientHeight - 90;
    };
    console.log("this.placeType:" + this.placeType);
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then(response => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    }
  },
  computed: {
    placeType() {
      return this.$store.state.app.place;
    }
  }
};
</script>
