<template lang="pug">
  v-container(fluid)
    v-layout(row xs12 wrap)
      h1 About me
      v-flex(xs12)
        p Front-end Engineer
    v-spacer
    v-layout(row xs12 wrap)
      h1 Skills
      v-flex(xs12 v-for="list in lists" :key="list.id" class="skill_box")
        p.list_name {{list.name}}
        .progress-wrap.progress(:data-progress-percent='list.level' :style="{ 'background-color': list.color }")
          .progress-bar.progress
    //- v-layout(row xs12 wrap)
    //-   h1 Skills
    //-   v-flex(xs12)
    //-     p HTML5 / Pug
    //-       | <br>CSS3 / Stylus / SASS / SCSS
    //-       | <br>JavaScript / Vue / Node
    //-       | <br>PHP / Laravel 
    //-       | <br>WordPress / MySQL
    //-       | <br>Git / GitHub / CircleCI
    //-       | <br>VSCode / 
    //-       | <br>XD / Photoshop / Illustrator
    //-       | <br>Slack / Chatwork
    //-       | <br>Backlog / Redmine
    //-       | <br>etc…
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
h1
  margin-bottom 8px
.spacer
  margin-bottom 30px
.container
  padding-bottom 60px
.progress
  width 100%
  height 5px
.progress-wrap
  background #f80
  margin-bottom 15px
  overflow hidden
  position relative
  border-radius 15px
  .progress-bar
    background #ddd
    left 0
    position absolute
    top 0
.list_name
  margin-bottom 4px
</style>
