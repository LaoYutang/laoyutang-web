<script setup lang="ts">
const testRequest = () => {
  request('/mock/test/ok', { a: 1, b: '1' }, 'delete/formdata')?.then((res) => {
    console.log(res)
  })
  request('/mock/test/ok', {}, 'get')?.then((res) => {
    console.log(res)
  })
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
