<template>
  <div style="padding: 10px">
    <!--    功能区域-->
    <div style="margin: 10px 0">
      <el-button type="primary" @click="add">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <!--    搜索区域-->
    <div style="margin: 10px 0">
      <el-input v-model="search" placeholder="请输入关键字" style="width: 20%" clearable/>
      <el-button type="primary" style="margin-left: 5px" @click="load">查询</el-button>
    </div>
    <el-table v-loading="loading" :data="tableData" border stripe style="width: 100%;">
      <el-table-column prop="id" label="ID" sortable></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="time" label="时间"></el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button size="small" @click="details(scope.row)">详情</el-button>
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="你确定删除吗?" @confirm="handleDelete(scope.row.id)">
            <template #reference>
              <el-button size="small" type="danger" >删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!--    分页-->
    <div style="margin: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :currentPage="currentPage"
          :page-sizes="[5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>
    <el-dialog v-model="dialogVisible" title="提示" width="63%">
      <el-form :model="form" label-width="120px">
        <el-form-item label="标题">
          <el-input v-model="form.title" style="width: 50%"/>
        </el-form-item>
        <div id="div1"></div>
<!--        <el-form-item label="内容">-->
<!--          <el-input v-model="form.content" style="width: 80%"/>-->
<!--        </el-form-item>-->
      </el-form>
      <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="save">确定</el-button>
          </span>
      </template>
    </el-dialog>
    <el-dialog v-model="vis" title="详情" width="63%">
      <el-card>
        <div v-html="detail.content" style="min-height: 100px"></div>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import request from "@/utils/request";
import E from 'wangeditor';
let editor;
export default {
  name: 'News',
  components: {},
  data() {
    return {
      loading: true,
      form: {},
      dialogVisible: false,
      total: 10,
      currentPage: 1,
      pageSize: 10,
      search: '',
      tableData: [],
      vis: false,
      detail: {}
    }
  },
  created() {
    this.load()
  },
  methods: {
    details(row){
      this.detail = row
      this.vis = true
    },
    filesUploadSuccess(res){
      this.form.cover=res.data
      console.log(res)
    },
    load(){
      this.loading = true
      request.get("/news",{
        params:{
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search
        }
      }).then(res=>{
        this.loading = false
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    add() {
      this.dialogVisible = true
      this.form={}
      this.$nextTick(()=>{
        if (!editor) {
        //关联弹窗div,new一个editor
        editor = new E('#div1')
        //配置server接口地址
        //editor.config.uploadImgServer = 'http://localhost:9090/files/editor/upload'
        editor.config.uploadImgServer = 'http://' + window.server.filesUploadUrl + ':9090/files/editor/upload'
        editor.config.uploadFileName="file" // 设置上传参数名称
        editor.create()
        }
        editor.txt.html("")
      })
    },
    save(){
      this.form.content=editor.txt.html()
      if (this.form.id ){ //更新
        request.put("/news",this.form).then(res=>{
          if (res.code === '0'){
            this.$message({
              type: "success",
              message: "更新成功"
            })
          }else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load()//刷新表格
          this.dialogVisible = false //关闭表格
        })
      }else { //新增
        let userStr = sessionStorage.getItem("user")||"{}"
        let user = JSON.parse(userStr)
        this.form.author = user.nickName
        request.post("/news",this.form).then(res => {
          if (res.code === '0'){
            this.$message({
              type: "success",
              message: "新增成功"
            })
          }else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load()//刷新表格
          this.dialogVisible = false //关闭表格
        })
      }
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
      this.$nextTick(()=>{
          if (!editor) {
            //关联弹窗div,new一个editor
            editor = new E('#div1')
            editor.config.uploadImgServer = 'http://' + window.server.filesUploadUrl + ':9090/files/editor/upload'
            // editor.config.uploadImgServer = 'http://localhost:9090/files/editor/upload'
            editor.config.uploadFileName = "file"  // 设置上传参数名称
            editor.create()
          }
        editor.txt.html(row.content)
      })
    },
    handleDelete(id) {
      console.log(id)
      request.delete("/news/"+id).then(res =>{
        if (res.code === '0'){
          this.$message({
            type: "success",
            message: "删除成功"
          })
        }else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
        this.load()//刷新表格
      })
    },
    handleSizeChange(pageSize) { //改变当前每页个数
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) { //改变当前页码
      this.currentPage = pageNum
      this.load()
    }
  }
}
</script>
