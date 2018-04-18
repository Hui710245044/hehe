//<reference path="jquery-3.2.1.js"/>
var rcode = 39;//参考物
var step = 10;//按一次键盘之后移动的距离
$(function(){
    //获取小鸟位置
     var off= $("#birds").offset();//获取小鸟所在的位置
     var dwidth = $(window).width();//浏览器的宽度
     var dheight = $(window).height();//浏览器的高度
     var bwidth = $("#birds").width();//获取小鸟的宽度
     var bheight = $("#birds").height();//获取小鸟的高度

     //键盘事件
     $(document).keydown(function(e){
         var keycode = e.keyCode;
         //alert(keycode);
        if(keycode != rcode){
            $("#birds").removeClass().addClass("direction-" + keycode);
        }
        rcode = keycode;
         switch(keycode){
             case 37://左
                off.left -= step;
                if(off.left <= -bwidth){
                    off.left = dwidth;
                }
                break;
             case 38://上 
                off.top -= step;
                if(off.top <= -bheight){
                    off.top = dheight;
                }
                break;
             case 39://右
                off.left += step;
                if(off.left >= dwidth){
                    off.left = -bwidth;
                }
                break;
             case 40://下
                off.top += step;
                if(off.top >= dheight){
                    off.top = -bheight;
                }
                break;
         }
         $("#birds").offset(off);
     });
});