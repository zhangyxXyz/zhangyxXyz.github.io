// build time:Sun May 08 2022 04:25:55 GMT+0800 (中国标准时间)
function t(t,o){this.x=t;this.y=o}t.prototype={rotate:function(t){var o=this.x;var i=this.y;this.x=Math.cos(t)*o-Math.sin(t)*i;this.y=Math.sin(t)*o+Math.cos(t)*i;return this},mult:function(t){this.x*=t;this.y*=t;return this},clone:function(){return new t(this.x,this.y)},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},subtract:function(t){this.x-=t.x;this.y-=t.y;return this},set:function(t,o){this.x=t;this.y=o;return this}};function o(t,o,i,n,r,s){this.stretchA=t;this.stretchB=o;this.startAngle=i;this.angle=n;this.bloom=s;this.growFactor=r;this.r=1;this.isfinished=false}o.prototype={draw:function(){var o=this.bloom.garden.ctx;var i,r,s,e;i=new t(0,this.r).rotate(n.degrad(this.startAngle));r=i.clone().rotate(n.degrad(this.angle));s=i.clone().mult(this.stretchA);e=r.clone().mult(this.stretchB);o.strokeStyle=this.bloom.c;o.beginPath();o.moveTo(i.x,i.y);o.bezierCurveTo(s.x,s.y,e.x,e.y,r.x,r.y);o.stroke()},render:function(){if(this.r