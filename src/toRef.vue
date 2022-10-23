<template>
  <div>
    <div>{{ name }}</div>
    <button @click="edits">改名字</button>
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { reactive, toRef } from 'vue'
export default {
  name: 'Ref',
  // 使用reactive函数定义复杂类型数据成为响应式数据
  setup() {
    // 响应式数据
    const obj = reactive({
      name: 'zs',
      age: 18
    })
    console.log(obj) // Proxy

    // 如解构或使用展开运算符操作ref数据，将失去响应式特性
    // const { name } = obj
    // console.log(name)
    // 使用toRef函数将复杂响应式数据中的某项变为响应式数据,toRef转换的数据是对象，修改必须通过.value
    const name = toRef(obj, 'name')
    const edits = () => {
      console.log(name)
      name.value = `${Math.random() * 10}ww`
      console.log(name, 111)
    }
    return { name, edits }
  }
}
</script>

<style></style>
