<template>
  <div>
    <!--    头部-->
    <Header></Header>
    <!--    主体-->
    <div style="display: flex">
      <!--      侧边栏-->
      <Aside></Aside>
      <!--      内容区域-->
      <router-view style="flex: 1"/>
    </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside";
import Header from "@/components/Header";

export default {
  name: "Layout",
  components: {
    Aside,
    Header
  }
}
</script>

<style scoped>

</style>