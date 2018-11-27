<template id="ListArticle">
  <div>
    <div >
      <div class="col-md-12 col-left">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              <a href="ListPanel.vue">返回上一级</a>
              <a>{{CollegeNotic.title}}</a>
              <a></a>
            </div>
            <div class="my-panel-body-info">
              <p v-for="item in CollegeNotic.container">{{item}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ListArticle",
    // props:['aid'],

    data: function () {
      return{

        // 郑州分院简介
        CollegeNotic: {
          aid: '123', title: '2018年中印瑜伽学院招生报名',
          container: [
            '中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位',
            '中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位',
            '中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位',
            '中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位',
            '中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位',
            '中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位',
            '中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位',
            '中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位',
            '中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位于中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位总院位中印瑜伽学院成立于2018年，是国内唯一拥有证书发放权限的的瑜伽机构，总院位'
          ],
        }

      }
    },

    methods:{

      // 学院详情
      getCollegeInfo: function (e) {
        this.$router.push({
          // 你要跳转的地址
          path: '/ListCollege',
          params: {
            aid: e,
          },
        })
      }
    },
  }
</script>

<style scoped>
  .panel-default {
    height: 100%;
    border-color: #d7d7d7;
  }
  .my-panel-body {
    padding: 5px;
  }
  .my-panel-body-title {
    font-size: 18px;
    display: flex;
    padding-left: 1%;
    justify-content: space-between;
    line-height: 40px;
    color: #0E90D2;
    border-bottom: 2px solid #cccccc;
  }
  .my-panel-body-title > a{
    width: 33%;
  }
  .my-panel-body-title > a + a{
    text-align: center;
    color: #383838;
  }
  .my-panel-body-info {
    margin: 20px 0 20px 0;
    min-height: 216px;
    padding: 0.75rem 1rem;
    background-color: #fff;
  }
  .my-panel-body-info p {
    color: #212529;
    padding: 10px;
    font-size: 16px;
    text-indent: 2em;
  }

</style>






