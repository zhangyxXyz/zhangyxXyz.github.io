// build time:Mon May 09 2022 05:41:11 GMT+0800 (中国标准时间)
var t=$(window),e,a,n,o;var i=$(window).width();var r=$(window).height();$(function(){$loveHeart=$("#loveHeart");var i=$loveHeart.width()/2;var r=$loveHeart.height()/2-55;n=$("#garden");a=n[0];a.width=$("#loveHeart").width();a.height=$("#loveHeart").height();e=a.getContext("2d");e.globalCompositeOperation="lighter";o=new Garden(e,a);$("#content").css("width",$loveHeart.width()+$("#code").width());$("#content").css("height",Math.max($loveHeart.height(),$("#code").height()));$("#content").css("margin-top",Math.max((t.height()-$("#content").height())/2,10));$("#content").css("margin-left",Math.max((t.width()-$("#content").width())/2,10));setInterval(function(){o.render()},Garden.options.growSpeed)});$(window).resize(function(){var t=$(window).width();var e=$(window).height();if(t!=i&&e!=r){location.replace(location)}});function s(t){var e=t/Math.PI;var a=19.5*(16*Math.pow(Math.sin(e),3));var n=-20*(13*Math.cos(e)-5*Math.cos(2*e)-2*Math.cos(3*e)-Math.cos(4*e));return new Array(offsetX+a,offsetY+n)}function h(){var t=50;var e=10;var a=new Array;var n=setInterval(function(){var t=s(e);var i=true;for(var r=0;r<a.length;r++){var h="a[r];var" c="Math.sqrt(Math.pow(h[0]-t[0],2)+Math.pow(h[1]-t[1],2));if(c<Garden.options.bloomRadius.max*1.3){i=false;break}}if(i){a.push(t);o.createRandomBloom(t[0],t[1])}if(e">=30){clearInterval(n);l()}else{e+=.2}},t)}(function(t){t.fn.typewriter=function(){this.each(function(){var e=t(this),a=e.html(),n=0;e.html("");var o=setInterval(function(){var t=a.substr(n,1);if(t=="<"){n=a.indexOf(">",n)+1}else{n++}e.html(a.substring(0,n)+(n&1?"_":""));if(n>=a.length){clearInterval(o)}},75)});return this}})(jQuery);function c(t){var e=Date();var a=(Date.parse(e)-Date.parse(t))/1e3;var n=Math.floor(a/(3600*24));a=a%(3600*24);var o=Math.floor(a/3600);if(o<10){o="0"+o}a=a%3600;var i="Math.floor(a/60);if(i<10){i="0"+i}a=a%60;if(a<10){a="0"+a}var" r="<span class="digit">" +n+'< span> days <span class="digit">'+o+'</span> hours <span class="digit">'+i+'</span> minutes <span class="digit">'+a+"</span> seconds";$("#elapseClock").html(r)}function l(){d();$("#messages").fadeIn(5e3,function(){f()})}function d(){$("#words").css("position","absolute");$("#words").css("top",$("#garden").position().top+195);$("#words").css("left",$("#garden").position().left+70)}function v(){$("#code").css("margin-top",($("#garden").height()-$("#code").height())/2)}function f(){$("#loveu").fadeIn(3e3)}
//rebuild by hrmmi </10){o="0"+o}a=a%3600;var></"){n=a.indexOf("></a.length;r++){var>