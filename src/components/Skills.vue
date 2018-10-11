<template lang="pug">
  v-app(id="inspire")
    v-container(fluid)
      v-layout(row xs12 wrap)
        v-flex(xs12 v-for="list in lists" :key="list.id" class="skill_box")
          p {{list.name}}
          .progress-wrap.progress(:data-progress-percent='list.level' :style="{ 'background-color': list.color }")
            .progress-bar.progress
</template>

<script>
// import axios from 'axios';
import $ from 'jquery'
export default {
  data () {
    return {
      value: 0,
      list: []
    }
  },
  mounted () {
    moveProgressBar();
    $(window).resize(function() {
        moveProgressBar();
    });
    function moveProgressBar() {
        var getPercent = [];
        var getProgressWrapWidth = $('.progress-wrap').width();
        // jsonの数値だけ配列にいれる
        $('.progress-wrap').each(function(){
            var percent = $(this).data('progress-percent') / 100 * getProgressWrapWidth;
            getPercent.push(percent);
        });
        // アニメーション時間
        var animationLength = 2000;
        // 数値を入れる
        $('.progress-bar').each(function(i){
            $(this).stop().animate({
              left: getPercent[i]
            }, animationLength);
            i++
        });
    }
  },
  created: function () {
    var lists = require("../assets/skills.json")
    this.lists = lists
  }
}
</script>

<style lang="stylus" conputed>
.container
  padding-bottom 60px
.progress
  width 100%
  height 10px
.progress-wrap
  background #f80
  margin-bottom 20px
  overflow hidden
  position relative
  border-radius 15px
  .progress-bar
    background #ddd
    left 0
    position absolute
    top 0
</style>
