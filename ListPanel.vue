<template>
    <div  class="panel panel-default">
      <div class="panel-body my-panel-body">
        <div class="my-panel-body-title">
          <div>{{title}}</div> <div v-if="title == '学院公告'">more  »</div>
        </div>
        <div class="my-panel-body-list">
          <!--学院公告-->
          <div v-if="title == '学院公告'">
            <ul class="list-group my_list">
              <li class="my_list_item " @click="getListArticle(item.aid)" v-for="item in data">
                <a><span>{{item.title}}</span></a>
              </li>
            </ul>
          </div>

          <!--招生学院-->
          <div v-if="title == '招生学院'" class="my_media">
            <div class="media" @click="getCollegeInfo(item.aid)" v-for="item in data">
              <div class="media-left">
                <img src="../assets/img/logo.png" class="media-object"/>
              </div>
              <div class="media-body my_media_body">
                <h4 class="media-heading">{{item.name}}</h4>
                <p>{{item.address}}</p>
              </div>
            </div>
          </div>

          <!--学院简介-->
          <div v-if="title == '学院简介'">
              <p class="my_introduce" >{{data}}</p>

          </div>

          <!--联系方式-->
          <div  v-if="title == '联系方式'">
            <ul class="list-group my_list">
              <li class="my_list_item my_contact" v-for="item in data">
                <a>{{item.title}}<span>{{item.date}}</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ListPanel",
        props:['title','data'],

        data: function () {
          return{
            aid: '2',
            // data:['123']
          }
        },

        methods:{
          getCollegeInfo: function (e) {
            this.$router.push({
              // 你要跳转的地址
              path: '/ListCollege',
              params: {
                aid: e,
              },
            })
          },
          getListArticle: function (e){
            this.$router.push({
              // 你要跳转的地址
              path: '/ListArticle',
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
    user-select: none;
    height: 290px;
    border-color: #d7d7d7;
  }
  .my-panel-body {
    padding: 5px;
  }
  .my-panel-body-title {
    font-size: 18px;
    color: #0E90D2;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #cccccc;
  }
  .my-panel-body-list {
    margin-bottom: 20px;
    min-height: 216px;
  }
  .my-panel-body-list > div {
    overflow-y:scroll;
  }
  .my_list {
    border: 0px;
  }
  .my_list_item {
    display: block;
    padding: 0.75rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid #d7d7d7;
    /*list-style-type:disc;*/
  }
  .my_list_item a {
    color: #212529;
    display:block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size: 14px;
  }
  .my_list_item a :hover{
    color: #1296db;
  }
  .my_list_item a span {
    margin-left: 4%;
  }

  /*招生学院*/
  .my_media {
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
  }
  .media:first-child {
    margin-top: 15px;
  }
  .my_media > view{
    width: 50%;
  }
  .my_media  img{
    width:60px;
  }
  .my_media_body {
    width: 180px;
    overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
  }

  /*学校简介*/
  .my_introduce {
    padding: 1em;
    font-size: 16px;
    display:block;
    text-indent: 2em;
    /*overflow-y:scroll;*/
  }

  /*联系方式*/
  .my_contact {
    border-bottom: 0px;
  }
</style>
