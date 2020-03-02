<template>
  <div class="app-container">
    <el-row style="padding-bottom: 20px;">
      <el-col :span="12">
        <el-input placeholder="请输入您要搜索内容" size="small">
          <el-button slot="append" icon="el-icon-search"></el-button> </el-input
      ></el-col>
      <el-col :span="12">
        <el-button type="primary" size="small" style="margin-left: 100px;">新增</el-button>
        <el-button type="primary" size="small">导入</el-button>
        <el-button type="primary" size="small">导出</el-button>
      </el-col>
    </el-row>
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
      <el-table-column align="center" label="序号" width="50" fixed>
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="账号站点" width="100">
        <template slot-scope="scope">
          {{ scope.row.Account_site }}
        </template>
      </el-table-column>
      <el-table-column label="注册站点" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.Rg_country }}</span>
        </template>
      </el-table-column>
      <el-table-column label="归属地" width="80" align="center">
        <template slot-scope="scope">
          {{ scope.row.Possession }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="账号负责人" width="110">
        <template slot-scope="scope">
          <span>{{ scope.row.Account_owner }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="主账号Email" width="110">
        <template slot-scope="scope">
          <span>{{ scope.row.Maccount_email }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="主账号登录密码" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.Maccount_lpwd }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="主账号邮箱密码" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.Maccount_epwd }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="两部验证手机1" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.phone1 }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="两部验证手机2" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.phone2 }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="两部验证手机APP" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.app_phone }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="子账号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.Saccount_email }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="子账号登录密码" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.Saccount_lpwd }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="子账号邮箱密码" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.Saccount_epwd }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="注册公司名-中文" width="130">
        <template slot-scope="scope">
          <span>{{ scope.row.CO_CHS }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="注册公司名-英文" width="130">
        <template slot-scope="scope">
          <span>{{ scope.row.CO_EN }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.NOTE }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="150" fixed="right">
        <template slot-scope="scope">
          <el-button
            type="warning"
            size="mini"
            @click="dialogFormVisible = true"
            >编辑</el-button
          >
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="账号站点:" :label-width="formLabelWidth">
          <el-input
            v-model="form.Account_site"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="注册站点:" :label-width="formLabelWidth">
          <el-input
            v-model="form.Rg_country"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="归属地:" :label-width="formLabelWidth">
          <el-select
            v-model="form.Possession"
            placeholder="请选择账号归属地"
            size="small"
            style="width: 400px;"
          >
            <el-option label="武汉" value="shanghai"></el-option>
            <el-option label="深圳" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号负责人:" :label-width="formLabelWidth">
          <el-input
            v-model="form.Account_owner"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="主账号Email:" :label-width="formLabelWidth">
          <el-input
            v-model="form.Maccount_email"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="主账号登录密码:" :label-width="formLabelWidth">
          <el-input
            v-model="form.Maccount_lpwd"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="主账号邮箱密码:" :label-width="formLabelWidth">
          <el-input
            v-model="form.Maccount_epwd"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="两部验证手机1:" :label-width="formLabelWidth">
          <el-input
            v-model="form.phone1"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="两部验证手机2:" :label-width="formLabelWidth">
          <el-input
            v-model="form.phone2"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="两部验证手机APP:" :label-width="formLabelWidth">
          <el-input
            v-model="form.app_phone"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="子账号:" :label-width="formLabelWidth">
          <el-input
            v-model="form.Saccount_email"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="子账号登录密码:" :label-width="formLabelWidth">
          <el-input
            v-model="form.Saccount_lpwd"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="子账号邮箱密码:" :label-width="formLabelWidth">
          <el-input
            v-model="form.Saccount_epwd"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="注册公司名-中文:" :label-width="formLabelWidth">
          <el-input
            v-model="form.CO_CHS"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="注册公司名-英文:" :label-width="formLabelWidth">
          <el-input
            v-model="form.CO_EN"
            autocomplete="off"
            size="small"
            style="width: 400px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注:" :label-width="formLabelWidth">
          <el-input
            v-model="form.NOTE"
            autocomplete="off"
            size="small"
            style="width: 400px;"
            type="textarea"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
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
      clientHeight: document.documentElement.clientHeight - 142,
      dialogFormVisible: false,
      form: {
        Account_site: "",
        Rg_country: "",
        Possession: "",
        Account_owner: "",
        Maccount_email: "",
        Maccount_lpwd: "",
        Maccount_epwd: "",
        phone1: "",
        phone2: "",
        app_phone: "",
        Saccount_email: "",
        Saccount_lpwd: "",
        Saccount_epwd: "",
        CO_CHS: "",
        CO_EN: "",
        NOTE: ""
      },
      formLabelWidth: "180px"
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    window.onresize = () => {
      this.clientHeight = document.documentElement.clientHeight - 142;
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

<style>
.el-form-item {
  margin-bottom: 10px;
}

.el-textarea .el-textarea__inner {
  resize: none;
  height: 80px;
}
</style>
