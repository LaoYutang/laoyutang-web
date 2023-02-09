<script setup lang="ts">
console.log(
  _structTree([
    { id: 1, parentId: 10, reset: 'df' },
    { id: 10, parentId: 2 },
    { id: 2, parentId: null, reset: 'df' },
    { id: 3, parentId: 2 },
  ]),
)
</script>

<template>
  <el-button type="primary">test11</el-button>
  <div class="test">test</div>

  <SvgIcon
    name="logo-text"
    :width-scale="4"
    style="font-size: 100px; color: red"
  />
</template>

<style lang="scss" scoped>
.test {
  background-color: $color-primary;
}
</style>
