"use strict";(self["webpackChunkspringboot_vue_demo"]=self["webpackChunkspringboot_vue_demo"]||[]).push([[794],{1794:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var o=a(6252);const m=(0,o.Uk)("男"),u=(0,o.Uk)("女"),d=(0,o.Uk)("未知"),t={style:{"text-align":"center"}},r=(0,o.Uk)("保存");function s(e,l,a,s,n,f){const p=(0,o.up)("el-input"),i=(0,o.up)("el-form-item"),V=(0,o.up)("el-radio"),w=(0,o.up)("el-form"),c=(0,o.up)("el-button"),g=(0,o.up)("el-card");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(g,{style:{width:"40%",margin:"10px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{ref:"form",model:n.form,"label-width":"80px"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{label:"用户名"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{modelValue:n.form.username,"onUpdate:modelValue":l[0]||(l[0]=e=>n.form.username=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{label:"昵称"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{modelValue:n.form.nickName,"onUpdate:modelValue":l[1]||(l[1]=e=>n.form.nickName=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{label:"年龄"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{modelValue:n.form.age,"onUpdate:modelValue":l[2]||(l[2]=e=>n.form.age=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{label:"性别"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{modelValue:n.form.sex,"onUpdate:modelValue":l[3]||(l[3]=e=>n.form.sex=e),label:"男"},{default:(0,o.w5)((()=>[m])),_:1},8,["modelValue"]),(0,o.Wm)(V,{modelValue:n.form.sex,"onUpdate:modelValue":l[4]||(l[4]=e=>n.form.sex=e),label:"女"},{default:(0,o.w5)((()=>[u])),_:1},8,["modelValue"]),(0,o.Wm)(V,{modelValue:n.form.sex,"onUpdate:modelValue":l[5]||(l[5]=e=>n.form.sex=e),label:"未知"},{default:(0,o.w5)((()=>[d])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(i,{label:"地址"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{modelValue:n.form.address,"onUpdate:modelValue":l[6]||(l[6]=e=>n.form.address=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{label:"密码"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{modelValue:n.form.password,"onUpdate:modelValue":l[7]||(l[7]=e=>n.form.password=e),"show-password":""},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),(0,o._)("div",t,[(0,o.Wm)(c,{type:"primary",onClick:f.update},{default:(0,o.w5)((()=>[r])),_:1},8,["onClick"])])])),_:1})])}var n=a(4471),f={name:"Person",data(){return{form:{}}},created(){let e=sessionStorage.getItem("user")||"{}";this.form=JSON.parse(e)},methods:{update(){n.Z.put("/user",this.form).then((e=>{console.log(e),"0"===e.code?(this.$message({type:"success",message:"更新成功"}),sessionStorage.setItem("user",JSON.stringify(this.form)),this.$router.push("/")):this.$message({type:"error",message:e.msg})}))}}},p=a(3744);const i=(0,p.Z)(f,[["render",s]]);var V=i}}]);
//# sourceMappingURL=794.0c38b6d1.js.map