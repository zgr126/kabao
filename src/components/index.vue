<template>
  <div class="contentpage" :class="{activepage: animeover}">
      <div class="cover"></div>
      <div class="cover2"></div>
      <!-- <bk ref="gl"></bk> -->
      <!-- <loadzip></loadzip> -->
      <div v-if="animeover">
        <img class="meili" src="../../public/img/meili.png"  />
        <count-to v-if="animeover2" class="font" :startVal='400' :endVal='523' :duration='10000'></count-to>
      </div>
      <div v-if="!animeover" style="height:210px;">
      </div>
      <div v-show="animeover" class="actorbox">
          <img class="actorimg" src="../../public/img/xiaofen.jpg">
      </div>
      <div v-if="!animeover" class="actorbox actorboxopen">
          <div class="open open2"></div>
      </div>
      <button v-if="animeover">放进我的娃娃袋</button>
      <div style="height:100px;"></div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
// import bk from './bk'
export default {
    data(){
        return{
            animeover:false,
            animeover2:false
        }
    },
    methods:{
    },
    mounted(){
        let that = this
        let dom = document.getElementsByClassName('font')[0]
        setTimeout(e=>{
            that.animeover = true
            setTimeout(e=>{
                that.animeover2 = true
                setTimeout(e=>{
                    let dom = document.getElementsByClassName('font')[0]
                    dom.className += " animate__rubberBand animate__animated"
                    
                },8500)
            },1900)
        },8400)
        // this.addZip('daolu')
        // this.addZip('jianzhu', 'building')
        
    },
    components:{
        // bk
        countTo
    }
}
</script>

<style lang="stylus" scoped>
.meili
    width 250px
    margin: auto;
    display: inherit;
    margin-top: 50px;
    display: block;
    margin: auto;
    padding-top: 30px;
.font
    font-size: 80px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    display: block;
    color: #ff005e;
    text-shadow: 5px 5px #3333339c;
    -webkit-text-fill-color: #ff005e;
    -webkit-text-stroke: .5px #fff;
    animation-delay: 0s;
.actorbox
    width: 250px;
    height: 370px;
    // overflow: hidden;
    margin: auto;
    border: solid 5px #ffa5a5;
    border-radius: 10px;
    .open
        height 100%
        width 100%
        background #fff
        animation: black-white 7s linear 1
    .actorimg
        object-fit: cover;
        height 100%
        width 100%
.actorboxopen
    animation: buzz-out .1s linear infinite
.cover
    position: absolute;
    top: 0;
    z-index: 1;
    height 100%
    width 100%
    animation: white-white 14s linear 1
.cover2
    width:29px;
    height:29px;
    background:linear-gradient(90deg,rgba(220,137,255,1) 0%,rgba(162,152,255,1) 52%,rgba(83,160,253,1) 100%);
    opacity:0.2969;
button
    width: 260px;
    border: solid 5px #ffa5a5;
    background: #ff8c8c;
    border-radius: 10px;
    height: 50px;
    margin: 30px auto;
    display: block;
    color: #fff;
    font-size: 20px;
button, .actorbox
    box-shadow: 15px 15px #3333339c;
.contentpage
    // height 100%
    // padding-bottom: 150px;
    width 100%
    position relative
    // overflow hidden
    background-image url('../../public/img/bk.jpg')
    background-repeat repeat
    background-size: 80%;
    // transform: translateX(-50%);
.activepage
    animation: lines 150s linear infinite
@keyframes lines {
  0%{
    background-position-y: 0rem
    background-position-x: 0rem
  }   
  to{
    background-position-y: -100rem
    background-position-x: -100rem
  }   
}
@keyframes buzz-out {
    0% {
    -webkit-transform: translateX(3px) rotate(2deg);
    }
    50% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    }
    100% {
    -webkit-transform: translateX(3px) rotate(2deg);
    }
}
@keyframes black-white {
    0% {
    background #fff
    }
    50% {
    background #fff
    }
    70%{
    background #000
    }
    75% {
    box-shadow 0 0 0px #fff
    }
    85% {
    box-shadow 0 0 20px 2px #fff
    }
    100% {
    background #fff
    box-shadow 0 0 500px 100px #fff
    }
}
@keyframes white-white {
    0% {
    background #ffffff00
    }
    49% {
    background #ffffff00
    }
    50% {
    background #fff
    }
    52% {
    background #fff
    }
    73% {
    background #fff
    }
    80% {
    background #ffffff00
    }
}
</style>