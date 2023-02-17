var AntDemos1 = (function () { var h=void 0,l=null;function o(a){return function(){return this[a]}}var p,q=this;
function s(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}var t="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),u=0;function v(a,b){this.x=a;this.y=b}v.prototype={c:o("x"),d:o("y"),Z:function(a){this.x+=a},$:function(a){this.y+=a},t:function(a){return Math.sqrt((this.x-a.c())*(this.x-a.c())+(this.y-a.d())*(this.y-a.d()))},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},scale:function(a){this.x*=a;this.y*=a},toString:function(){return" X: "+this.x+" Y: "+this.y},rotate:function(){}};function aa(a,b,c,d){this.position=new v(a,b);this.m=d;this.size=c}aa.prototype={};function ba(){}
ba.prototype={Q:function(a,b,c,d){a.fillStyle=d;a.strokeStyle=d;a.lineWidth=2;a.beginPath();b=Math.sin(b.counter);a.arc(c.position.c(),c.position.d(),c.size*45+b,0,Math.PI*2,!0);a.stroke();a.beginPath();a.arc(c.position.c(),c.position.d(),c.size*45+b-5,0,Math.PI*2,!0);a.fill()},ca:function(a,b,c){b=Math.sin(c.F/(5+c.size*5));a.save();a.translate(c.position.c(),c.position.d());a.rotate(c.direction/57.2957795);a.scale(c.size,c.size);a.lineWidth=1;a.fillStyle="#333333";a.strokeStyle="#333333";a.beginPath();
a.arc(0,-10,5.5,0,Math.PI*2,!0);a.fill();a.beginPath();a.arc(0,0,4.5,0,Math.PI*2,!0);a.fill();a.beginPath();a.arc(0,10,6,0,Math.PI*2,!0);a.fill();a.strokeStyle="#282828";a.lineWidth=1;a.beginPath();a.moveTo(-1,-12.5);a.bezierCurveTo(-1,c.o/3*2-c.o-15.5,-1+b,c.o/2-c.o-15.5,9+b-15,-c.o-15.5);a.moveTo(1,-12.5);a.bezierCurveTo(1,c.o/3*2-c.o-15.5,1+b,c.o/2-c.o-15.5,21+b-16,-c.o-15.5);a.moveTo(-1,-7.5);a.bezierCurveTo(-10,-15.5,-10,b*2-15.5,-14,5+b*4-15.5);a.moveTo(-1,0.5);a.bezierCurveTo(-8,-6.5,-8,7+
b*2-15.5,-15,16-b*4-15.5);a.moveTo(-1,6.5);a.bezierCurveTo(-11,6.5,-11,22-b*2-15.5,-14,36+b*4-15.5);a.moveTo(1,-7.5);a.bezierCurveTo(10,-15.5,10,b*2-15.5,14,5-b*4-15.5);a.moveTo(1,0.5);a.bezierCurveTo(8,-6.5,8,7-b*2-15.5,15,16+b*4-15.5);a.moveTo(1,6.5);a.bezierCurveTo(11,6.5,11,22-b*2-15.5,14,36-b*4-15.5);a.stroke();a.restore()},P:function(a,b,c){a.lineWidth=1;a.strokeStyle="#DDD";a.beginPath();a.arc(c.k.c(),c.k.d(),c.w,0,Math.PI*2,!0);a.stroke();a.strokeStyle="#EEE";a.save();a.translate(c.k.c(),
c.k.d());a.rotate(c.direction/57.2957795);a.beginPath();a.moveTo(0,-c.w);a.lineTo(0,c.w);a.stroke();a.beginPath();a.moveTo(-c.w,0);a.lineTo(c.w,0);a.stroke();a.restore();c.target!==h&&(a.beginPath(),a.moveTo(c.k.c(),c.k.d()),a.lineTo(c.target.c(),c.target.d()),a.stroke())},O:function(a,b,c,d){a.font="11px Arial";a.fillStyle="#555";a.fillText(c.name,c.position.c()+(c.position.c()<d.width-150?40:-100),c.position.d()-7);a.fillStyle="#999";b="Unknown";c.target&&!c.n?b="Moving to target":c.target&&c.n?
b="Finding path to target":c.n?c.n&&(b="Waiting for path"):b="Exploring";a.fillText(b,c.position.c()+(c.position.c()<d.width-150?40:-100),c.position.d()+7)}};function w(a,b,c,d,f){this.position=new v(a,b);this.k=new v(a,b);this.target=h;this.size=f.size+Math.round(Math.random()*3)/12;this.w=50+60*this.size;this.color="#bc5555";this.l=this.direction=Math.round(Math.random()*360);this.ka=Math.round(Math.random()*5)+(6-this.size/2);this.o=Math.round(Math.random()*10)+6;this.F=0;this.name=c||"Unnamed Ant";this.n=!1;this.I=0;this.m=d}
w.prototype={c:function(){return this.position.c()},d:function(){return this.position.d()},j:function(a){if(a){if(this.target&&this.position.t(this.target)<this.w)this.target=h;this.ja(a);this.move(a)}else console.log("ANT: "+this.name+" no cycle data!",a)},ja:function(){var a=!1;for(ant in this.m.a)if(this.m.a[ant].name!=this.name){var b=20*this.m.a[ant].size;this.m.a[ant].c()>this.k.c()-b&&this.m.a[ant].c()<this.k.c()+b&&this.m.a[ant].d()>this.k.d()-b&&this.m.a[ant].d()<this.k.d()+b&&(a=!0)}if(this.n==
!0&&a==!1&&Math.round(Math.random()*20)==1)this.n=!1,this.I=0;else if(a==!0)this.n=!0},N:function(a,b){for(var c=b-a;c<-180;)c+=360;for(;c>180;)c-=360;return c},move:function(a){this.W=0;var b=this.direction/57.2957795,c=this.ka*(a.dt/40),d=c*Math.cos(b),f=c*Math.sin(b),b=this.N(this.l,this.direction);b<22.5&&b>-22.5&&(this.k.c()<20?this.l+=45:this.k.c()>this.m.q()-20?this.l+=45:this.k.d()<20?this.l+=45:this.k.d()>this.m.p()-20?this.l+=45:this.n||(this.position.Z(f),this.position.$(d*-1),this.F+=
c,this.W+=c));this.target&&!this.n?this.l=Math.atan2(this.position.c()-this.target.c(),this.target.d()-this.position.d())*57.2957795-180:!this.n&&b<10&&b>-10&&Math.round(Math.random()*20)==1&&(this.l+=Math.round(Math.random()*38)-19);this.n&&b<5&&b>-5&&Math.round(Math.random()*10)==1&&(this.l+=Math.round(Math.random()*60)-30);if(this.n&&b<5&&b>-5&&(this.I+=a.dt,this.I>500&&Math.round(Math.random()*30)==1))this.I=0,this.l=this.direction+(Math.round(Math.random()*180)-90)*2;this.l>360&&(this.l+=-360);
this.l<0&&(this.l+=360);b=this.N(this.l,this.direction);a=(this.W>0?0.2:6)*(a.dt/40);b<-1&&(b>=a&&(a=b),this.direction+=a,this.F+=a);b>1&&(b<=a&&(a=b),this.direction-=a,this.F+=a);this.direction>360&&(this.direction-=360);this.direction<0&&(this.direction+=360);b=this.direction/57.2957795;c=this.size*32;d=c*Math.cos(b)*-1;f=c*Math.sin(b);this.k=new v(this.position.c()+f,this.position.d()+d)}};function x(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var y,A,B,C;function ca(){return q.navigator?q.navigator.userAgent:l}C=B=A=y=!1;var D;if(D=ca()){var da=q.navigator;y=D.indexOf("Opera")==0;A=!y&&D.indexOf("MSIE")!=-1;B=!y&&D.indexOf("WebKit")!=-1;C=!y&&!B&&da.product=="Gecko"}var ea=y,E=A,F=C,G=B,fa=q.navigator,ga=(fa&&fa.platform||"").indexOf("Mac")!=-1,H;
a:{var I="",J;if(ea&&q.opera)var K=q.opera.version,I=typeof K=="function"?K():K;else if(F?J=/rv\:([^\);]+)(\)|;)/:E?J=/MSIE\s+([^\);]+)(\)|;)/:G&&(J=/WebKit\/(\S+)/),J)var ha=J.exec(ca()),I=ha?ha[1]:"";if(E){var L,ia=q.document;L=ia?ia.documentMode:h;if(L>parseFloat(I)){H=String(L);break a}}H=I}var ja={};
function M(a){var b;if(!(b=ja[a])){b=0;for(var c=String(H).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;b==0&&e<f;e++){var g=c[e]||"",j=d[e]||"",k=RegExp("(\\d*)(\\D*)","g"),n=RegExp("(\\d*)(\\D*)","g");do{var z=k.exec(g)||["","",""],m=n.exec(j)||["","",""];if(z[0].length==0&&m[0].length==0)break;b=x(z[1].length==0?0:parseInt(z[1],10),m[1].length==0?0:parseInt(m[1],10))||x(z[2].length==0,m[2].length==
0)||x(z[2],m[2])}while(b==0)}b=ja[a]=b>=0}return b}var ka={};function la(){return ka[9]||(ka[9]=E&&!!document.documentMode&&document.documentMode>=9)};function ma(){}var na=0;p=ma.prototype;p.key=0;p.v=!1;p.L=!1;p.h=function(a,b,c,d,f,e){if(s(a)=="function")this.U=!0;else if(a&&a.handleEvent&&s(a.handleEvent)=="function")this.U=!1;else throw Error("Invalid listener argument");this.G=a;this.Y=b;this.src=c;this.type=d;this.capture=!!f;this.T=e;this.L=!1;this.key=++na;this.v=!1};p.handleEvent=function(a){return this.U?this.G.call(this.T||this.src,a):this.G.handleEvent.call(this.G,a)};!E||la();var oa=!E||la(),pa=E&&!M("8");!G||M("528");F&&M("1.9b")||E&&M("8")||ea&&M("9.5")||G&&M("528");F&&!M("8")||E&&M("9");var qa=Array.prototype,ra=qa.indexOf?function(a,b,c){return qa.indexOf.call(a,b,c)}:function(a,b,c){c=c==l?0:c<0?Math.max(0,a.length+c):c;if(typeof a=="string")return typeof b!="string"||b.length!=1?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function N(a,b){this.type=a;this.currentTarget=this.target=b}N.prototype.K=!1;N.prototype.M=!1;N.prototype.ha=!0;N.prototype.preventDefault=function(){this.M=!0;this.ha=!1};function sa(a){sa[" "](a);return a}sa[" "]=function(){};function O(a,b){a&&this.h(a,b)}(function(){function a(){}a.prototype=N.prototype;O.la=N.prototype;O.prototype=new a})();p=O.prototype;p.target=l;p.relatedTarget=l;p.offsetX=0;p.offsetY=0;p.clientX=0;p.clientY=0;p.screenX=0;p.screenY=0;p.button=0;p.keyCode=0;p.charCode=0;p.ctrlKey=!1;p.altKey=!1;p.shiftKey=!1;p.metaKey=!1;p.fa=!1;p.R=l;
p.h=function(a,b){var c=this.type=a.type;N.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(F){var f;a:{try{sa(d.nodeName);f=!0;break a}catch(e){}f=!1}f||(d=l)}}else if(c=="mouseover")d=a.fromElement;else if(c=="mouseout")d=a.toElement;this.relatedTarget=d;this.offsetX=G||a.offsetX!==h?a.offsetX:a.layerX;this.offsetY=G||a.offsetY!==h?a.offsetY:a.layerY;this.clientX=a.clientX!==h?a.clientX:a.pageX;this.clientY=a.clientY!==h?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.fa=ga?a.metaKey:a.ctrlKey;this.state=a.state;this.R=a;a.M&&this.preventDefault();delete this.K};
p.preventDefault=function(){O.la.preventDefault.call(this);var a=this.R;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,pa)try{if(a.ctrlKey||a.keyCode>=112&&a.keyCode<=123)a.keyCode=-1}catch(b){}};var Q={},R={},S={},T={};
function U(a,b,c,d,f){if(b)if(s(b)=="array")for(var e=0;e<b.length;e++)U(a,b[e],c,d,f);else{var d=!!d,g=R;b in g||(g[b]={r:0,u:0});g=g[b];d in g||(g[d]={r:0,u:0},g.r++);var g=g[d],j=a[t]||(a[t]=++u),k;g.u++;if(g[j]){k=g[j];for(e=0;e<k.length;e++)if(g=k[e],g.G==c&&g.T==f){if(g.v)break;return}}else k=g[j]=[],g.r++;e=ta();e.src=a;g=new ma;g.h(c,e,a,b,d,f);c=g.key;e.key=c;k.push(g);Q[c]=g;S[j]||(S[j]=[]);S[j].push(g);a.addEventListener?(a==q||!a.ba)&&a.addEventListener(b,e,d):a.attachEvent(b in T?T[b]:
T[b]="on"+b,e)}else throw Error("Invalid event type");}function ta(){var a=ua,b=oa?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}function va(a,b,c,d){if(!d.H&&d.X){for(var f=0,e=0;f<d.length;f++)d[f].v?d[f].Y.src=l:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.X=!1;e==0&&(delete R[a][b][c],R[a][b].r--,R[a][b].r==0&&(delete R[a][b],R[a].r--),R[a].r==0&&delete R[a])}}
function wa(a,b,c,d,f){var e=1,b=b[t]||(b[t]=++u);if(a[b]){a.u--;a=a[b];a.H?a.H++:a.H=1;try{for(var g=a.length,j=0;j<g;j++){var k=a[j];k&&!k.v&&(e&=xa(k,f)!==!1)}}finally{a.H--,va(c,d,b,a)}}return Boolean(e)}
function xa(a,b){if(a.L){var c=a.key;if(Q[c]){var d=Q[c];if(!d.v){var f=d.src,e=d.type,g=d.Y,j=d.capture;f.removeEventListener?(f==q||!f.ba)&&f.removeEventListener(e,g,j):f.detachEvent&&f.detachEvent(e in T?T[e]:T[e]="on"+e,g);f=f[t]||(f[t]=++u);if(S[f]){var g=S[f],k=ra(g,d);k>=0&&qa.splice.call(g,k,1);g.length==0&&delete S[f]}d.v=!0;if(d=R[e][j][f])d.X=!0,va(e,j,f,d);delete Q[c]}}}return a.handleEvent(b)}
function ua(a,b){if(!Q[a])return!0;var c=Q[a],d=c.type,f=R;if(!(d in f))return!0;var f=f[d],e,g;if(!oa){var j;if(!(j=b))a:{j="window.event".split(".");for(var k=q;e=j.shift();)if(k[e]!=l)k=k[e];else{j=l;break a}j=k}e=j;j=!0 in f;k=!1 in f;if(j){if(e.keyCode<0||e.returnValue!=h)return!0;a:{var n=!1;if(e.keyCode==0)try{e.keyCode=-1;break a}catch(z){n=!0}if(n||e.returnValue==h)e.returnValue=!0}}n=new O;n.h(e,this);e=!0;try{if(j){for(var m=[],P=n.currentTarget;P;P=P.parentNode)m.push(P);g=f[!0];g.u=g.r;
for(var r=m.length-1;!n.K&&r>=0&&g.u;r--)n.currentTarget=m[r],e&=wa(g,m[r],d,!0,n);if(k){g=f[!1];g.u=g.r;for(r=0;!n.K&&r<m.length&&g.u;r++)n.currentTarget=m[r],e&=wa(g,m[r],d,!1,n)}}else e=xa(c,n)}finally{if(m)m.length=0}return e}d=new O(b,this);return e=xa(c,d)};function V(a){this.position=h;this.b=a.events}V.prototype={h:function(){typeof console!=="undefined"&&console.log("Mouse Initalised")},J:function(a){var b=this;U(a,"mousemove",function(a){b.position=new v(a.offsetX,a.offsetY)});U(a,"click",function(){b.b.fire("MOUSE:CLICK",a)});U(a,"mousedown",function(){b.b.fire("MOUSE:DOWN",a)});U(a,"mouseup",function(){b.b.fire("MOUSE:UP",a)});U(a,"mouseout",function(){b.b.fire("MOUSE:OUT",a)})}};function W(a){this.enabled=a&&a.enabled?a.enabled:!0;this.b=a&&a.b?a.b:h;this.h()}W.prototype={h:function(){this.b&&this.log("Listening...")},log:function(a,b){this.enabled&&typeof console!=="undefined"&&(console.log("Logger: "+a),b&&typeof console!=="undefined"&&console.log(b))}};function X(a){this.b=a.events;this.i=l;this.ia=!1;this.height=a.height;this.width=a.width;this.b.listen("APP:RESIZE",this.ga,this);this.s=new ba}
X.prototype={h:function(a,b){this.i=b;this.i.save();this.m=a},q:o("width"),p:o("height"),ga:function(a){this.width=a.width;this.height=a.height},j:function(a,b){this.clear(b.bgColor);this.i.save();if(b.hoveredAnts&&b.hoveredAnts.length)for(ant in b.hoveredAnts)b.hoveredAnts[ant]!==b.selectedAnt&&this.s.Q(this.i,a,b.hoveredAnts[ant],"#ecf0f8");b.selectedAnt&&(this.s.Q(this.i,a,b.selectedAnt,"#d5e5d3"),this.s.P(this.i,a,b.selectedAnt),this.s.O(this.i,a,b.selectedAnt,this.m));if(this.ia)for(ant in b.ants)this.s.P(this.i,
a,b.ants[ant]),this.s.O(this.i,a,b.ants[ant],this.m);for(foodItem in b.food)this.da(this.i,a,b.food[foodItem]);for(ant in b.ants)this.s.ca(this.i,a,b.ants[ant]);this.i.rotate(0);this.i.translate(0,0)},clear:function(a){this.i.fillStyle=!a?"rgb(255,255,255)":a;this.i.fillRect(0,0,this.width,this.height);this.i.restore()},da:function(a,b,c){a.lineWidth=2;a.fillStyle="#cbc7c1";a.strokeStyle="#8d7960";a.beginPath();a.arc(c.position.c(),c.position.d(),c.size,0,Math.PI*2,!0);a.fill();a.stroke()}};function ya(){this.initalise=this.C}
ya.prototype={C:function(a){this.b=a.events;this.V=new W({events:this.b});this.e=new X({events:this.b,width:a.width,height:a.height});this.canvas=a.canvas;this.z=a.canvasContext;this.a=[];this.g=l;this.S=[];this.D="Jimmy,Neil,Bertie,Alfred,Nigel,Roberto,Jasper,Toby,Henry,Lance,Jacob,Marcus,Leroy,Stevie,Niko,Pippa,Roxy,Holly,Bella,Victoria,Tina,Gloria,Pauline,Jannis,Karen,Patricia,Mildrid,Kourtney".split(",");this.f=new V({events:this.b});this.h()},h:function(){this.e.h(this,this.z);this.f.J(this.canvas);
this.b.listen("APP:TICK",this.j,this);this.b.listen("MOUSE:CLICK",this.B,this);this.A(20);this.aa(1+Math.round(Math.random()*2));this.j({dt:0})},q:function(){return this.e.q()},p:function(){return this.e.p()},B:function(){var a=!1,b=50,c=this.g;if(this.f.position)for(ant in this.a){var d=this.f.position.t(this.a[ant].position);if(d<50&&d<b)this.g=this.a[ant],a=!0,b=d}if(a){if(this.g==c)this.g=h}else for(ant in this.a)this.a[ant].target=this.f.position},j:function(a){if(a.dt)for(ant in this.a)this.a[ant].j(a);
var b=[];if(this.f.position)for(ant in this.a)this.f.position.t(this.a[ant].position)<50&&b.push(this.a[ant]);this.canvas.style.cursor=b.length?"pointer":"default";this.e.j(a,{ants:this.a,hoveredAnts:b,selectedAnt:this.g,food:this.S,bgColor:"#c2cfb8"})},A:function(a){for(i=0;i<a;i++){var b=this.D.splice(Math.round(Math.random()*this.D.length),1);this.a.push(new w(Math.ceil(Math.random()*(this.e.q()-40))+20,Math.ceil(Math.random()*(this.e.p()-40))+20,b.length?b[0]:h,this,{size:0.7}))}},aa:function(a){for(i=
0;i<a;i++){var b=Math.round(Math.random()*(this.e.width-100))+50,c=Math.round(Math.random()*(this.e.height-100))+50,d=10+Math.round(Math.random()*10);for(i2=0;i2<d;i2++)this.S.push(new aa(b+Math.round(Math.random()*50)-25,c+Math.round(Math.random()*50)-25,4+Math.random()*2,this))}}};function za(){this.initalise=this.C}
za.prototype={C:function(a){this.b=a.events;this.V=new W({events:this.b});this.e=new X({events:this.b,width:a.width,height:a.height});this.canvas=a.canvas;this.z=a.canvasContext;this.a=[];this.g=l;this.D="Jimmy,Neil,Bertie,Alfred,Nigel,Roberto,Jasper,Toby,Henry,Lance,Jacob,Marcus,Leroy,Stevie,Niko,Pippa,Roxy,Holly,Bella,Victoria,Tina,Gloria,Pauline,Jannis,Karen,Patricia,Mildrid,Kourtney".split(",");this.f=new V({events:this.b});this.h()},h:function(){this.e.h(this,this.z);this.f.J(this.canvas);this.b.listen("APP:TICK",
this.j,this);this.b.listen("MOUSE:CLICK",this.B,this);this.A(100);this.j({ea:0})},q:function(){return this.e.q()},p:function(){return this.e.p()},B:function(){var a=!1,b=50,c=this.g;if(this.f.position)for(ant in this.a){var d=this.f.position.t(this.a[ant].position);if(d<50&&d<b)this.g=this.a[ant],a=!0,b=d}if(a){if(this.g==c)this.g=h}else for(ant in this.a)this.a[ant].target=this.f.position},j:function(a){if(a.dt)for(ant in this.a)this.a[ant].j(a);var b=[];if(this.f.position)for(ant in this.a)this.f.position.t(this.a[ant].position)<
50&&b.push(this.a[ant]);this.canvas.style.cursor=b.length?"pointer":"default";this.e.j(a,{ants:this.a,hoveredAnts:b,selectedAnt:this.g,bgColor:"#d8e5ee"})},A:function(a){for(i=0;i<a;i++){var b=this.D.splice(Math.round(Math.random()*this.D.length),1);this.a.push(new w(Math.ceil(Math.random()*(this.e.q()-40))+20,Math.ceil(Math.random()*(this.e.p()-40))+20,b.length?b[0]:h,this,{size:0.6}))}}};function Aa(){this.initalise=this.C}
Aa.prototype={C:function(a){this.b=a.events;this.V=new W({events:this.b});this.e=new X({events:this.b,width:a.width,height:a.height});this.canvas=a.canvas;this.z=a.canvasContext;this.a=[];this.g=l;this.f=new V({events:this.b});this.h()},h:function(){this.e.h(this,this.z);this.f.J(this.canvas);this.b.listen("APP:TICK",this.j,this);this.b.listen("MOUSE:CLICK",this.B,this);this.A(1);this.j({ea:0})},q:function(){return this.e.q()},p:function(){return this.e.p()},B:function(){var a=!1,b=50,c=this.g;if(this.f.position)for(ant in this.a){var d=
this.f.position.t(this.a[ant].position);if(d<50&&d<b)this.g=this.a[ant],a=!0,b=d}if(a){if(this.g==c)this.g=h}else for(ant in this.a)this.a[ant].target=this.f.position},j:function(a){if(a.dt)for(ant in this.a)this.a[ant].j(a);var b=[];if(this.f.position)for(ant in this.a)this.f.position.t(this.a[ant].position)<50&&b.push(this.a[ant]);this.canvas.style.cursor=b.length?"pointer":"default";this.e.j(a,{ants:this.a,hoveredAnts:b,selectedAnt:this.g,bgColor:"#aaa5a1"})},A:function(){var a=new w(Math.ceil(Math.random()*
(this.e.q()-40))+20,Math.ceil(Math.random()*(this.e.p()-40))+20,"Jimmy",this,{size:2.5});this.a.push(a);this.g=a}};var Ca=Ba,Y="AntDemos1".split("."),Z=q;!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)!Y.length&&Ca!==h?Z[$]=Ca:Z=Z[$]?Z[$]:Z[$]={};function Ba(a){switch(a){case "ant":return new Aa;case "lotsOfAnts":return new za;case "food":return new ya}};
return AntDemos1;
})();