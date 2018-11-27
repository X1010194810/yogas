<template>
    <header>
      <div class="header-body">
        <div class="header-body-button">
          <!--<a href="ListPanel.vue">登录 </a>|<a href=""> 注册</a>-->
          <a>王加雷 </a>|<a @click="getBaseInfo()"> 个人中心</a>
        </div>
        <div class="header-title">中印瑜伽学院证书查询-报名系统</div>
        <div class="container header-search">
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class="input-group">
                <input type="text" class="form-control header-search-input" placeholder="请输入18位身份证号码">
                <span class="input-group-btn">
                        <button class="btn btn-primary header-search-btn" type="button"><span class="glyphicon glyphicon-search"></span></button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
      name: "Header",
      data: function () {
        return{

        }
      },

      methods:{

        // 跳转
        getBaseInfo: function (e) {
          this.$router.push({
            // 你要跳转的地址
            path: '/BaseInfo',
            params: {
              aid: e,
            },
          })
        }
      },
    }

</script>

<style scoped>
  .header-body {
    user-select: none;
    background-image: url("../assets/img/bg.png");
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    position:relative;
    height: 300px;
    padding-top: 50px;
  }
  .header-body-button {
    line-height: 50px;
    right: 40px;
    position: absolute;
    float: right;
    color: #fff;
    font-size: 18px;
    margin: -40px 0 0 0 ;
  }
  .header-body-button a {
    color: #fff;
    text-decoration:none
    }
  .header-body-button a:hover{
    color: #1296db;
  }
  .header-title {
    text-align: center;
    font-size: 36px;
    color: #ffffff;
  }
  .header-search {
    padding-top: 50px;
  }
  .header-search-input {
    height: 40px;
    padding: 5px 10px;
    border-radius: 0;
  }
  .header-search-btn {
    height: 40px;
    border-radius: 0;
  }
</style>
