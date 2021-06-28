<template>
  <el-button class="button" round size="small" :style="{background:color}"><slot></slot></el-button>
</template>

<script>
export default {
    props:['color'],
    mounted(){
        if (!this.color){
            this.color = 0xbf0000
        }
    }
}
</script>

<style lang="stylus" scoped>
.button
    margin: 10px;
    background: #bf0000;
    color: #fff;
    box-shadow: 0 8px 12px #cc9292;
    border: none;
    &:hover
        box-shadow: 0 2px 5px #cc9292;
</style>