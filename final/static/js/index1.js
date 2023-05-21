// jQuery
$(function() {
    // 获取 audio 元素和 control 元素
    var audio = $("#audio")[0];
    var control = $(".play");
  
    // 给 control 元素添加点击事件
    control.click(function() {
      // 判断 audio 元素的播放状态
      if (audio.paused) {
        // 如果是暂停状态，就播放音乐，并将 span 的类名切换为 icon-zanting
        audio.play();
        control.find("span.iconfont").toggleClass("icon-bofang icon-zanting");
      } else {
        // 如果是播放状态，就暂停音乐，并将 span 的类名切换为 icon-bofang
        audio.pause();
        control.find("span.iconfont").toggleClass("icon-zanting icon-bofang");
      }
    });
  });
  