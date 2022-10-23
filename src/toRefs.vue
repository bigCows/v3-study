<template>
  <div>
    <div>{{ name }}</div>
    <button @click="edits">改名字</button>
    <div>{{ age }}</div>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  name: 'App',
  // 使用reactive函数定义复杂类型数据成为响应式数据
  setup() {
    // 响应式数据
    const obj = reactive({
      name: 'zs',
      age: 18
    })

    // // 解构或展开失去响应式
    // const { name, age } = obj
    // console.log(name, age)
    // const obj2 = { ...obj }
    // console.log(obj2)

    // 使用toRefs函数将所有属性转为响应式，对象为普通对象，常用语结构或展开reactive对象，toRefs转换后的属性和原对象的属性是关联的，可直接修改原属性，不用将转换后的属性使用.value转换
    const obj2 = toRefs(obj)
    console.log(obj2)
    const edits = () => {
      console.log(obj2)
      // obj2.name.value = 'ls'
      // obj2.age.value = 20
      obj.name = 'xx'
      obj.age = 40
    }

    return { ...obj2, edits }
  }
}
</script>

<style></style>
