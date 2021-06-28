<template>
  <div class="content">
    <div class="sbox">
      <div v-for="(i,index) of contentLst" :key="index" >
        <p>标题：{{i.data.label}}</p>
        <p v-html="i.data.content">内容：</p>
      </div>
      <new-page></new-page>
      
    </div>
  </div>
</template>

<script>
import newPage from './child/newPage'
export default {
  data(){
      return {
        contentLst: []
      }
  },
  methods:{
    refrushPage(){
      this.axios.get('zxc').then(e=>{
        this.contentLst = e.data
        for (let i of this.contentLst){
          let _json = JSON.parse(i.data)
          i.data = _json
        }
      })
    }
  },
  mounted(){
    this.refrushPage()
  },
  components:{
    newPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.content
  width calc(100% - 400px)
  min-width 500px
  height 100%
  box-shadow 0 0 50px #eee
  margin: auto;
  overflow auto
  .sbox
    width: 90%;
    /* height: 100%; */
    text-align center
    margin: auto;
    padding-bottom: 100px
    overflow hidden
  .add
    padding 10px
    background $subColor
    color #fff
    box-shadow 0 10px 50px #ccc
</style>
