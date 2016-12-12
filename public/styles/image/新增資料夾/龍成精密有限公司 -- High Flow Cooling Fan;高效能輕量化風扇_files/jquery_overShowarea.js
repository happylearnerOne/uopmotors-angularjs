$().ready(function(){
  //當九宮格的圖片 被點擊 的時候
  $("#thumbimg a").click(function(e){
	  //讓超連結失效
	  e.preventDefault();
	  //先將觸發事件的物件放入變數中等待未來使用
	  var $img = $(this);
	  //先將大圖淡出
	  $("#gallery img").fadeOut('fast',function(){
		  //因為更改屬性動作不屬於動畫事件
		  //因此要把更改屬性放在淡出的 CALLFUNC 內
		  //才可以確定淡出以後才換圖片連結
		  //最後再將圖片淡入
		  $("#gallery img").attr("src",$img.attr("href")).fadeIn('fast');
	  });
  });
});

