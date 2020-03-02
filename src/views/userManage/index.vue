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
      <el-table-column align="center" label="用户ID" fixed>
        <template slot-scope="scope">
          {{ scope.row.user_ID }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户名">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="登录密码" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.login_password }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否锁定" align="center">
        <template slot-scope="scope">
          {{ scope.row.Whether_locked }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="归属地">
        <template slot-scope="scope">
          <span>{{ scope.row.Account_owner }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="电子邮箱">
        <template slot-scope="scope">
          <span>{{ scope.row.Email }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="联系电话">
        <template slot-scope="scope">
          <span>{{ scope.row.contact_number }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="角色">
        <template slot-scope="scope">
          <span>{{ scope.row.Roles }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="150" fixed="right">
        <template slot-scope="scope">
          <el-button type="warning" size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
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
