<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    prefix?: string
    /**
     * svg名称
     */
    name: string
    /**
     * 当svg不是正方形时，设置宽高的比例
     */
    widthScale?: number
  }>(),
  {
    prefix: 'icon',
    widthScale: 1,
  },
)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const svgWidth = computed(() => props.widthScale.toString() + 'em')
</script>

<style lang="scss" scoped>
.svg-icon {
  // 使用font-size控制大小
  height: 1em;
  width: v-bind(svgWidth);
  vertical-align: -0.18em;
  fill: currentColor;
  overflow: hidden;
}
</style>
