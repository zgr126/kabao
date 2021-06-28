<template>
  <div>
      <el-divider class="divider">新建</el-divider>
      <input class="label" v-model='label' />
      <vue-tinymce
      v-model="content" 
      :setting="setting" />
      <xbutton @click.native="addnew">add</xbutton>
      <!-- <input v-model='content' /> -->
  </div>
</template>

<script>
export default {
    data(){
        return {
            label: '',
            content: '',
            setting: {
                menubar: false,
                toolbar: "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
                toolbar_drawer: "sliding",
                quickbars_selection_toolbar: "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
                plugins: "link image media table lists fullscreen quickbars",
                language: 'zh_CN', //本地化设置
                height: 350
            }
        }
    },
    methods:{
        addnew(){
            this.axios.post('zxc',{
                label: this.label,
                content: this.content
            }).then(e=>{
                this.$parent.refrushPage()
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.divider
    margin-top 130px
.label
    width: 100%;
    border: solid 1px #cccccc;
    height: 30px;
    box-sizing: border-box;
    margin: 10px 0;
</style>