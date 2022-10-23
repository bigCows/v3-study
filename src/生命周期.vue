<template>
  <div class="container">钩子</div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
export default {
  name: 'hook',

  setup() {
    onBeforeMount(() => {
      console.log('1', document.querySelector('.container')) // null
    })
    onMounted(() => {
      console.log('2', document.querySelector('.container'))
    })
    // V3中可定义多个相同的钩子函数，实现多种功能
    onMounted(() => {
      console.log('3', document.querySelector('.container'))
    })
  }
}
</script>

<style></style>
