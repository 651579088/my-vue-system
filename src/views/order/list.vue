<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary" class="aaaa">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  }
}
</script>
<style>
.aaaa{color: aqua !important}
</style>
