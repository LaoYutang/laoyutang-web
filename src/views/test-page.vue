<script setup lang="ts">
const test = {
  arr: [{ a: 1 }, { b: '2' }],
  set: new Set([{ a: 1 }, { arr: [{ a: 1 }, { b: '2' }] }]),
  map: new Map<any, any>([
    [{}, {}],
    ['a', 'a'],
  ]),
  set1: new Set([1, 2, 3, 4, 5, 6]),
  arr1: ['1', '1', '2'],
  self: {},
}

test.self = test
const testRequest = () => {
  console.log(test, _deepClone(test))
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
