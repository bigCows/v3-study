<template>
  <div>{{ name }}</div>
  <button @click="edit">改名字</button>
  <div>{{ obj.name }}</div>
  <div>{{ test.a }}</div>
  <div>{{ test.b }}</div>
</template>

<script>
import { ref, toRefs } from 'vue'

export default {
  name: 'Ref',
  setup() {
    // ref定义简单数据类型的响应式，修改必须使用.value
    // 也可定义引用类型数据响应式
    const obj = ref(null)
    setTimeout(() => {
      obj.value = {
        name: 'mmmm'
      }
    }, 1000) // 异步读值报错
    console.log(obj)
    const name = ref('zs')
    console.log(name)
    const edit = () => {
      name.value = 'xxx'
    }

    const testVal = {
      a: '1',
      b: 2
    }
    const test = toRefs(testVal)

    return { name, edit, obj, test }
  }
}
</script>

<style scoped lang="scss"></style>
