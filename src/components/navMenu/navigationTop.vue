<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">概述篇</el-menu-item>
      <el-submenu index="2">
        <template slot="title">设计理念</template>
        <el-menu-item index="2-1">理念1</el-menu-item>
        <el-menu-item index="2-2">理念2</el-menu-item>
        <el-menu-item index="2-3">理念3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a target="_blank">核心亮点</a></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
