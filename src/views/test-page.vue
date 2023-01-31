<script setup lang="ts">
const testRequest = () => {
  console.log(deepClone({ a: [{ b: 1, c: 44 }] }))
}
</script>

<template>
  <el-button type="primary" @click="testRequest">test11</el-button>
  <div class="test">test</div>
</template>

<style lang="scss" scoped>
.test {
  background-color: $color-primary;
}
</style>
