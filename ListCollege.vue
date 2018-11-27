<template id="ListCollege">
  <div>
    <div class="row">
      <div class="col-md-6 col-left">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              {{CollegeInfo.name}}列表
            </div>
            <div class="my-panel-body-list">
              <!--郑州分院招生列表-->
              <div>
                <ul class="list-group my_list">
                  <li class="my_list_item" v-for="item in AdmissionsList">
                    <a >{{item.name}}</a><a>{{item.info}}</a>
                    <a class="my_list_info"><a href="ListCollege.vue">详情</a><a>|</a><a href="ListCollege.vue">立即报名</a></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-right">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              {{CollegeInfo.name}}公告
            </div>
            <div class="my-panel-body-list">
              <!--郑州分院公告-->
              <div>
                <ul class="list-group my_list">
                  <li class="my_list_item" v-for="item in CollegeNoticList">
                    <a >{{item.name}}</a><a>{{item.date}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-left">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              {{CollegeInfo.name}}简介
            </div>
            <div class="my-panel-body-list">
              <!--郑州分院简介-->
              <div>
                <p class=" my_introduce">{{CollegeNotic}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-right">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              联系方式
            </div>
            <div class="my-panel-body-list">
              <!--联系方式-->
              <div >
                <ul class="list-group my_list">
                  <li class="my_list_item my_contact" v-for="item in Contact">
                    <a :href="item.url">{{item.title}}<span>{{item.date}}</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ListCollege",
    props:['aid'],

    data: function () {
      return{
        CollegeInfo: {
          name: '郑州分院'
        },

        // 招生列表
        AdmissionsList: [{
          aid: '123', name: '中级瑜伽', info: '5842.50 元/人',
        },{
          aid: '123', name: '中级瑜伽', info: '5842.50 元/人',
        },{
          aid: '123', name: '中级瑜伽', info: '5842.50 元/人',
        },{
          aid: '123', name: '中级瑜伽', info: '5842.50 元/人',
        }],

        // 学院公告
        CollegeNoticList: [{
          aid: '123', name: '2018年中印瑜伽学院招生', date: '2018-09-10',
        },{
          aid: '123', name: '2018年中印瑜伽学院招生', date: '2018-09-10',
        },{
          aid: '123', name: '2018年中印瑜伽学院招生', date: '2018-09-10',
        }],

        // 郑州分院简介
        CollegeNotic:  '中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位',

        // 联系方式
        Contact:[{
          title:"咨询电话： ",
          date:"0871-9658412",
          url:"http://www.baidu.com"
        },{
          title:"详细地址：",
          date:"河南省郑州市嘎达村光彩大道 19号",
          url:"http://www.baidu.com"
        }],
      }
    },

    methods:{
      // getCollegeInfo: function (e) {
      //   this.$router.push({
      //     // 你要跳转的地址
      //     path: '/ListCollege',
      //     params: {
      //       aid: e,
      //     },
      //   })
      // }
    },
  }
</script>

<style scoped>
  .panel-default {
    height: 290px;
    border-color: #d7d7d7;
  }
  .my-panel-body {
    padding: 5px;
  }
  .my-panel-body-title {
    font-size: 18px;
    color: #0E90D2;
    border-bottom: 2px solid #cccccc;
  }
  .my-panel-body-list {
    margin-bottom: 20px;
    min-height: 216px;
  }

  /*分院列表*/
  /*.my_list {*/
    /*border: 0px;*/
  /*}*/
  .my_list_item {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid #d7d7d7;
    /*list-style-type:disc;*/
  }
  .my_list_item a {
    color: #212529;
    display:flex;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size: 14px;
  }
  .my_list_info a{
    color: #1296db;
    margin-right: 4px;
  }

  /*分院简介*/
  .my_introduce {
    padding: 1em;
    font-size: 16px;
    text-indent: 2em;
  }

  /*联系方式*/
  .my_contact {border-bottom: 0px;}
</style>






