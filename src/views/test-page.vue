<script setup lang="ts">
const testRequest = async () => {
  const [err, { data }] = await _request(
    '/mock/test/ok',
    { a: ' t ', b: [' q', 'q '] },
    'post',
    { trimString: true },
  ).flat()
  if (err) return
  console.log(data)
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
