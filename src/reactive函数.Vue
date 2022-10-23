<template>
  <div>
    <div class="div">{{ obj.name }}</div>
    <button @click="edit()">改名字</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'reactive',
  // 使用reactive函数定义复杂类型数据成为响应式数据
  setup() {
    // 非响应式数据
    // const obj = {
    //   name: 'zs',
    //   age: 18
    // }

    // 响应式数据
    const obj = reactive({
      name: 'zs',
      age: 18
    })
    const edit = () => {
      obj.name = 'ls'
      console.log(obj.name)
    }

    return { obj, edit }
  }
}
</script>

<style>
.class {
}
</style>
