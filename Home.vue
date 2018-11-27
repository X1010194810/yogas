<template id="home">
    <div>
      <div class="row">
        <div class="col-md-6 col-left">
          <list-panel title="学院公告" v-bind:data="CollegeNotic"></list-panel>
        </div>
        <div class="col-md-6 col-right">
          <list-panel title="招生学院" v-bind:data="College"></list-panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-left">
          <list-panel title="学院简介" v-bind:data="SchoolIntroduce"></list-panel>
        </div>
        <div class="col-md-6 col-right">
          <list-panel title="联系方式" v-bind:data="Contact"></list-panel>
        </div>
      </div>
    </div>
</template>

<script>
  import ListPanel from '../components/ListPanel';
  import ListCollege from '../components/ListCollege';
    export default {
      "/home": "Home",
      data:function () {
        return{
          // 学院公告
          CollegeNotic: [{
            aid: '123',
            title:"2018年中印瑜伽学院招生",
          },{
            aid: '123',
            title:"2018年中印瑜伽学院招生",
          },{
            aid: '123',
            title:"2018年中印瑜伽学院招生",
          },{
            aid: '123',
            title:"2018年中印瑜伽学院招生",
          },{
            aid: '123',
            title:"2018年中印瑜伽学院招生",
          }],

          // 招生学院
          College:[
            {
              aid: '123',
              name:"郑州分院： ",
              address:"河北省郑州市金马大道",
            },{
            aid: '123',
            name:"郑州分院： ",
            address:"河北省郑州市金马大道河北省郑州市金马大道河北省郑州市金马大道河北省郑州市金马大道",
            },{
              aid: '123',
              name:"郑州分院： ",
              address:"河北省郑州市金马大道河北省郑州市金马大道河北省郑州市金马大道",
            },{
              aid: '123',
              name:"郑州分院： ",
              address:"河北省郑州市金马大道",
            },{
              aid: '123',
              name:"郑州分院： ",
              address:"河北省郑州市金马大道",
            },{
              aid: '123',
              name:"郑州分院： ",
              address:"河北省郑州市金马大道",
          }],

          SchoolIntroduce: '中印瑜伽学院成立于2018年，，，总院位是国内唯一拥有证书发放权限的的瑜伽机构，中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位是国内唯一拥有证书发放权限的的瑜伽机构，中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位是国内唯一拥有证书发放权限的的瑜伽机构.',

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
      components: {
        ListPanel,
        ListCollege
      }
    }
</script>

<style scoped>
  .col-left {padding-right: 5px;}
  .col-right {padding-left: 5px;}

  /*标题框*/
  .panel_title {font-size: 18px;color: #0E90D2;border-bottom: 2px solid #cccccc;user-select: none;}
</style>
