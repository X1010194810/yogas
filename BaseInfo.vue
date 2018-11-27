<template id="BaseInfo">
  <div>
    <div class="row">
      <div class="col-md-2 ">
        <div  class="panel panel-default">
          <div class="panel-body my-panel-body">
            <div class="my-panel-body-title">
              <div @click="ChangeViewIndex(1)" v-bind:class="[ ViewIndex == 1 ? 'active': '' ]"><img src="../assets/img/logo.png" height="40" width="40"/>基本信息</div>
              <div @click="ChangeViewIndex(2)" v-bind:class="[ ViewIndex == 2 ? 'active': '' ]"><img src="../assets/img/logo.png" height="40" width="40"/>我的报名</div>
              <div @click="ChangeViewIndex(3)" v-bind:class="[ ViewIndex == 3? 'active': '' ]"><img src="../assets/img/logo.png" height="40" width="40"/>我的证书</div>
              <div @click="ChangeViewIndex(4)" v-bind:class="[ ViewIndex == 4? 'active': '' ]"><img src="../assets/img/logo.png" height="40" width="40"/>安全中心</div>
            </div>

          </div>
        </div>
      </div>

      <!--基本信息-->
      <div class="col-md-10 col-right" v-show="ViewIndex == '1'">
        <div class="col-md-6 col-6">
          <div  class="panel panel-default">
            <div class="panel-body my-panel-body">
              <form class="form-horizontal" role="form">
                <div class="form-group form_group">
                  <label for="firstname" class="col-sm-3 control-label my_control_label">手机号</label>
                  <div class="col-sm-9">
                    <!--<input type="text" class="form-control form_control" id="firstname" v-model="UserInfo.phone">-->
                    <div>{{UserInfo.phone}}</div>
                  </div>
                </div>

                <div class="form-group form_group">
                      <label for="sex" class="col-sm-3 control-label my_control_label">性别</label>
                      <div class="radio form_radio">
                        <label class="radio-inline radio_inline">
                          <input type="radio" name="optionsRadiosinline" id="optionsRadios3" value="option1" checked> 男
                        </label>
                        <label class="radio-inline">
                          <input type="radio" name="optionsRadiosinline" id="optionsRadios4"  value="option2"> 女
                        </label>
                      </div>
                </div>
                <div class="form-group form_group">
                  <label for="lastname" class="col-sm-3 control-label my_control_label">身份证号码</label>
                  <div class="col-sm-9">
                    <input  type="text" class="form-control form_control" id="code" placeholder="请输入18位身份证号码">
                  </div>
                </div>
                <div class="form-group form_group">
                  <label for="lastname" class="col-sm-3 control-label my_control_label">国家</label>
                  <div class="col-sm-9">
                    <select class="form-control form_control">
                      <option v-for="item in UserInfo.country">{{item.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group form_group">
                  <label for="lastname" class="col-sm-3 control-label my_control_label">详细信息</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control form_control" id="Info"
                           placeholder="请输入详细信息">
                  </div>
                </div>
                <div class="form-group form_group">
                  <label for="lastname" class="col-sm-3 control-label my_control_label">正规照片</label>
                  <div class="col-sm-9">
                    <img src="../assets/img/logo.png" height="150" width="300"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10 col_button">
                    <button type="button" class="btn btn-default">取消</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-6">
          <div  class="panel panel-default">
            <div class="panel-body my-panel-body">
              <form class="form-horizontal" role="form">
                <div class="form-group form_group">
                  <label for="firstname" class="col-sm-3 control-label my_control_label">姓名</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control form_control" id="name" v-model="UserInfo.name">
                    <!--<div></div>-->
                  </div>
                </div>

                <div class="form-group form_group">
                  <label for="sex" class="col-sm-3 control-label my_control_label">邮箱</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control form_control" id="mail" v-model="UserInfo.mail">
                  </div>
                </div>
                <div class="form-group form_group">
                  <label for="lastname" class="col-sm-3 control-label my_control_label">民族</label>
                  <div class="col-sm-9">
                    <select class="form-control form_control">
                      <option v-for="item in UserInfo.national">{{item.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group form_group">
                  <label for="lastname" class="col-sm-3 control-label my_control_label">地域</label>
                  <div class="col-sm-9">
                    <select class="form-control form_control">
                      <option v-for="item in UserInfo.address">{{item.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group form_group">
                  <label for="lastname" class="col-sm-3 control-label my_control_label">所属单位</label>
                  <div class="col-sm-9">
                    <select class="form-control form_control">
                      <option v-for="item in UserInfo.unit">{{item.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group form_group">
                  <label for="lastname" class="col-sm-3 control-label my_control_label">单位证明</label>
                  <div class="col-sm-9">
                    <img src="../assets/img/logo.png" height="150" width="300"/>
                  </div>
                </div>
                <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10 col_button">
                  <router-link to="@/ModalPopup"><button type="button" class="btn btn-info">保存</button></router-link>
                  <!--<ModalPopup></ModalPopup>-->

                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
        </div>

      <!--我的报名-->
      <div class="col-md-10 col-right" v-show="ViewIndex == '2'">
        <table class="table">
          <!--<caption>基本的表格布局</caption>-->
          <thead>
          <tr>
            <th>班级名称</th>
            <th>报名费用</th>
            <th>报名起止时间</th>
            <th>班级介绍</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr  v-for="item in CertificateList">
            <td>{{item.name}}</td>
            <td>{{item.emount}}</td>
            <td>{{item.time}}</td>
            <td>{{item.introduce}}</td>
            <td>{{item.state}}</td>
            <!--<td><button type="submit" class="btn btn-default">提交</button></td>-->
          </tr>

          </tbody>
        </table>
      </div>

      <!--我的证书-->
      <div class="col-md-10 col-right" v-show="ViewIndex == '3'">
        <table class="table">
          <!--<caption>基本的表格布局</caption>-->
          <thead>
          <tr>
            <th>证书名称</th>
            <th>证书编号</th>
            <th>获得时间</th>
            <th>班级介绍</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr  v-for="item in CertificateList">
            <td>{{item.name}}</td>
            <td>{{item.emount}}</td>
            <td>{{item.time}}</td>
            <td>{{item.state}}</td>
            <!--<td><button type="submit" class="btn btn-default">提交</button></td>-->
          </tr>

          </tbody>
        </table>
      </div>

      <!--安全中心-->
      <div class="col-md-10 col-right" v-show="ViewIndex == '4'">
        <div class="col-md-10 col-6">
          <div  class="panel panel-default">
            <div class="panel-body my-panel-body">
              <form class="form-horizontal" role="form">
                <div class="form-group form_group">
                  <label for="firstname" class="col-sm-3 control-label my_control_label">原密码</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control form_control" id="firstname" placeholder="请输入11位手机号码">
                  </div>
                </div>
                <div class="form-group form_group">
                  <label for="lastname" class="col-sm-3 control-label my_control_label">新密码</label>
                  <div class="col-sm-9">
                    <input  type="text" class="form-control form_control" id="code" placeholder="请输入11位手机号码">
                  </div>
                </div>
                <div class="form-group form_group">
                  <label for="lastname" class="col-sm-3 control-label my_control_label">确认密码</label>
                  <div class="col-sm-9">
                    <input  type="text" class="form-control form_control" id="code" placeholder="请输入11位手机号码">
                  </div>
                </div>


                <div class="form-group form-center">
                  <div class="col-sm-offset-2 col-sm-6">
                    <button type="button" class="btn btn-info">取消</button>
                  </div>
                  <div class="col-sm-offset-2 col-sm-6">
                    <button type="button" class="btn btn-info">保存</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  // import ModalPopup from '../components/ModalPopup';
  export default {
    name: "BaseInfo",
    // props:['aid'],

    data: function () {
      return{
        ViewIndex: ['1'],

        // 郑州分院简介
        UserInfo: {
          phone: '18487147902', sex: '0',code: '23230319941001241X',Info:'123', name: '刘温馨', mail: 'liuwenxin1706@mail.yneusoft.com',
          country: [{
            aid: '123', name: '中国',
          },{
            aid: '123', name: '美国',
          },{
            aid: '123', name: '韩国',
          }],
          national: [{
            aid: '123', name: '汉族',
          },{
            aid: '123', name: '回族',
          },{
            aid: '123', name: '满族',
          }],
          address: [{
            aid: '123', name: '昆明',
          },{
            aid: '123', name: '玉溪',
          },{
            aid: '123', name: '大理',
          }],
          unit: [{
            aid: '123', name: '云南民族大学',
          },{
            aid: '123', name: '云南理工大学',
          },{
            aid: '123', name: '云南师范大学',
          }],
          unitImage: '',
        },

        // 证书列表
        CertificateList: [{
          name: '中级瑜伽', emount:'5842.50 元/人',
          time: '2018-11-11', introduce:'5842.50 元/人',
          state: '空缺',
        }],
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
      },
      ChangeViewIndex: function (e) {
        console.log(e)
        this.ViewIndex == e
        Vue.set(this.ViewIndex,0, e, )
      },
    },
    components: {
      ModalPopup,
    }
  }
</script>

<style scoped>

  .col-right {
    border: 1px solid #ccc;
  }
  .col-6 {
    padding: 0;
    height: 533px;
  }

  .col-6 > div {
    border: 0px;
  }
  .table {
    font-size: 16px;
  }
  .panel-default {
    height: 100%;
    border-color: #d7d7d7;
  }
  .my-panel-body {
    padding: 5px;
  }
  .my-panel-body-title {
    font-size: 18px;
    padding-left: 1%;
    line-height: 40px;
  }
  .my-panel-body-title > div{
    text-align: center;
    line-height: 60px;
  }
  .my-panel-body-title img {
    margin-right: 10px;
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
  .active {color: #1296db;}

  /*表单提交*/
  form {
    padding: 20px;
  }
  .col_button {
    text-align: center;
  }
  .col_button button{
    border: 1px solid #1296db;
    width: 180px;
    line-height: 24px;
  }
  .my_control_label {
    text-align: right;
    font-size: 16px;
    /*max-width: 30%;*/
    padding-top: 0px;
    line-height: 40px;
  }
  .my_control_label div {
    line-height: 40px;
  }
  .col-sm-10 input, .col-sm-10 div {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }
  .radio_inline {
    margin-left: 20px;
    padding-top: 5px;
  }
  .form_control {
    height: 40px;
    line-height: 40px;
  }
  /*安全中心*/
  .form-center{
    display: flex;
    margin-top: 40px;
  }
  .form-center button{
    border: 1px solid #1296db;
    width: 180px;
    line-height: 24px;
  }
</style>






