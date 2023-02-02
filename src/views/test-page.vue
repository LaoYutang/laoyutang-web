<script setup lang="ts">
const testRequest = () => {
  console.log(Promise.prototype.flat.call(1))
}
</script>

<template>
  <el-button type="primary" @click="testRequest()">test11</el-button>
  <div class="test">test</div>
</template>

<style lang="scss" scoped>
.test {
  background-color: $color-primary;
}
</style>
