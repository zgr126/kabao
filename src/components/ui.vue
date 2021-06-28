<template>
    <div id="ui">
        <div class="top">
            <div class="t_l">
                <img src="../assets/logo.png">
            </div>
            <div class="t_r">
                <div class="login" @click="isLoginDialog = true" v-if="!user.name">
                    login
                </div>
                <span class="userbox" v-if="user.name">
                    <span>{{user.name}}</span>
                    <span class="exit">exit</span>
                </span>
            </div>
        </div>
        <div class="bottom">
            <div class="t_m">
                <div v-for="(i, index) of top" class="menu_item" :key="index" @click="changeRoute(i)" :class="{active: nowSelect == i.name}">
                    <p class="p2">{{i.elabel}}</p>
                </div>
            </div>
            <div class="t_lr">
                <span class="l">
                    Copyright©2020-2021 TXRY
                </span>
                <span class="r">
                    Licence
                </span>
            </div>
        </div>
        <el-dialog 
            title="" 
            :visible.sync="isLoginDialog" 
            v-if="isLoginDialog"
            class="input-width2"
            width="700px"
            :destroy-on-close="true">
            <el-form :model="loginForm" label="Login" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
                <el-form-item label="name" prop="name">
                    <el-input v-model.number="loginForm.name"></el-input>
                </el-form-item>
                <el-form-item label="password" prop="passWord">
                    <el-input type="password" v-model="loginForm.passWord" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                    <el-button @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data(){
    return {
        topSource:[
            {name: '', label: '首页', elabel: 'HOME'},
            {name: 'scan', label: '扫码', elabel: 'Scan'},
            {name: 'share', label: '共享', elabel: 'SHARE'},
        ],
        top:[],
        isLoginDialog: false,
        loginForm: {
            name: '',
            passWord: ''
        },
        rules: {
          passWord: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
        user: {
            name:'admin'
        }
    }
  },
  methods:{

    changeRoute(i){
      // if (!this.username && (i.name != 'about' && i.name != '')){
      //   this.$message({
      //         showClose: true,
      //         message: '请登录后查看',
      //         type: 'warning'
      //       });
      //   return
      // }
      let path
      if (this.$route.path.slice(1) == i.name)return
      if (!i.name){path = '/'}else{path = i.name}
      this.$router.push(path)
    },
  },
  mounted(){
    this.nowSelect = this.$route.path.slice(1)
    this.top = JSON.parse(JSON.stringify(this.topSource))
    if (this.user.name){
        this.top.push({name: 'setting', label: '共享', elabel: 'SETTING'},)
    }
  },
  watch:{
    '$route.path':function(n,o){
      this.nowSelect = n.slice(1)
    }
  },
  components:{
    // mimavue
  }
}
</script>

<style lang="stylus" scoped>
.top
    width 100%
    margin: auto;
    z-index 2
    position absolute
    // color #fff
    .t_l
        // height 100%
        position absolute
        display inline-block
    img 
        height: 30px;
        margin: 20px;
        float left
    .t_r
        position absolute
        top: 20px;
        right: 20px;
        .userbox
            font-size 14px
            span 
                padding 0 10px
            .exit
                color #bf0000
        .login
            display inline-block
            line-height: 14px;
            /* margin: 0; */
            padding: 8px 8px;
            border: solid 1px #a20000
            border-radius: 20px;
            margin: 5px 8px;
            cursor pointer
            
            background: #bf0000
            color: #fff;
            font-size 12px
            &:hover
                box-shadow: 0 1px 2px #aaa;
                border: solid 1px #fff;
#ui
    position absolute
    height: 100%;
    width: 100%;
.bottom
    position absolute
    bottom 20px
    width 100%
    .t_m
        margin: auto;
        text-align center
        z-index 3
        position: absolute;
        width: 100%;
        bottom: 0;
        .menu_item
            display inline-block
            line-height: 14px;
            /* margin: 0; */
            padding: 6px 8px;
            border: solid 1px #222;
            border-radius: 20px;
            margin: 5px 8px;
            cursor pointer
            
            font-size 12px
            background: #333;
            color: #fff;
            &:hover
                box-shadow: 0 1px 2px #aaa;
                border: solid 1px #fff;
            .p2
                margin: 0;
    .t_lr
        position absolute
        bottom 0
        width 100%
        .l,.r
            display inline-block
            margin 0 20px
            font-size 12px
        .l
            position absolute
            bottom 0
            color: #949494;
        .r
            float right
            color #d51b1b
            font-weight: 800;
@media screen and (max-width: 800px) 
    .bottom
        .t_lr
            bottom -20px
</style>