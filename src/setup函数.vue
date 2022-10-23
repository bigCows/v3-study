<template>
  <div class="container" @click="fn()">根组件</div>
  <input type="text" :value="num" />
</template>

<script>
export default {
  name: "test",
  setup() {
    // T0、在setup中使用onbeforeMount能够拿到index.html中的app，因为该元素是独立于组件之外的容器，组件没创建时，此容器就已经创建了
    // 1、setup在组件没创建之前就执行了，相当于beforCreate之前，所以不存在this指向，this指向undefined
    // 2、setup中定义所有的数据都要返回才能使用
    console.log(this);
    const num = 2;
    const fn = () => {
      console.log("hello,V3");
    };
    return { num, fn };
  },
  //   beforeCreate() {
  //     console.log(this); //指向Proxy代理对象
  //   },
};
</script>

<style></style>
