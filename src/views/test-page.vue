<script setup lang="ts">
const testRequest = debounce((num: number, str: string): void => {
  console.log(num, str)
})
</script>

<template>
  <el-button type="primary" @click="testRequest(1, 'a')">test11</el-button>
  <div class="test">test</div>
</template>

<style lang="scss" scoped>
.test {
  background-color: $color-primary;
}
</style>
