<template lang="pug">
  v-container(fluid)
    v-layout(row xs12 wrap)
      v-flex(xs12)
        div.text-align-center
          h2 About me
        div.css_box
          spanc.class_name .isoki 
          span.bracket {
          span.indent
            span.property job
            span.colon : 
            span.value Front-end-Engineer
            span.colon1  ;
          span.indent
            span.property height
            span.colon : 
            span.value  183cm
            span.colon  ;
          span.bracket }
    v-spacer
    v-layout(row xs12 wrap)
      v-flex.text-align-center
        h2 Skills
      v-flex(xs12 v-for="list in lists" :key="list.id" class="skill_box")
        p.list_name
          icon-base(:icon-name='list.icon' width="16" height="16")
            components(:is=`"icon-" + list.icon` :fill="list.color")
          | {{list.name}}
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
import IconBase from './IconBase'
import IconAi from './icons/IconAi'
import IconPs from './icons/IconPs'
import IconXd from './icons/IconXd'
import IconHtml5 from './icons/IconHtml5'
import IconCss3 from './icons/IconCss3'
import IconSass from './icons/IconSass'
import IconStylus from './icons/IconStylus'
import IconPug from './icons/IconPug'
import IconJs from './icons/IconJs'
import IconPhp from './icons/IconPhp'
import $ from 'jquery'

export default {
  components: {
    IconBase,
    IconAi,
    IconPs,
    IconXd,
    IconHtml5,
    IconCss3,
    IconSass,
    IconStylus,
    IconJs,
    IconPhp,
    IconPug
  },
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

<style lang="stylus" scoped>
h2
  margin-bottom 8px
.text-align-center
  text-align center
.spacer
  margin-bottom 30px
.progress
  width 100%
  height 5px
.progress-wrap
  transform skew(-60deg)
  background #f80
  margin-bottom 15px
  overflow hidden
  position relative
  .progress-bar
    background #ddd
    left 0
    position absolute
    top 0
.list_name
  margin-bottom 4px

.css_box
  width 200px
  margin 0 auto
  background-color #333
  padding 10px
  border-radius 3px
  .class_name
    color #A6E22E
  .bracket
  .colon
    color white
  .property
    color #66D9EF
  .value
    color #AE81FF
  .indent
    display block
    margin-left 1em
</style>
