<template>
    <div>
      <pdf 
        ref="pdf"
        :src="url"
      >
      </pdf>
    </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components:{
      pdf
  },
  data(){
      return {
          url:"http://image.cache.timepack.cn/nodejs.pdf",
      }
  },
  methods:{
    getQueryVariable(variable){
      var query = document.location.hash.split('?')[1]
      if (!query) return
      var vars = query.split("&");
      let v = {}
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        v[pair[0]] = pair[1]
      }
      return v
    }
  },
  mounted(){
    let v = this.getQueryVariable()
    console.log(v)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.framebox
  height 100%
#show-iframe
  height 100%
  width 100%
</style>
