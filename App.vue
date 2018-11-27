<template>

  <div id="app">
    <!--头部-->
    <Header></Header>

    <!--内容-->
    <div class="container content-body">
      <!--用于渲染匹配的组件-->
      <router-view></router-view>
    </div>

    <!--底部-->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
  .content-body {
    user-select: none;
    min-height: 580px;
    padding: 10px;
  }
</style>


