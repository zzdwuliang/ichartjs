(function(h){function y(a){"string"===typeof a&&(a=document.getElementById(a));if(!a||!a.tagName||"canvas"!=a.tagName.toLowerCase())throw Error("there not a canvas element");this.canvas=a;this.c=this.canvas.getContext("2d");this.width=this.canvas.width;this.height=this.canvas.height}var v=Math.PI/90,o=Math.PI,u=Math.ceil,r=Math.floor,z=2*Math.PI,w=Math.max,x=Math.min,p=Math.sin,s=Math.cos,n=function(a,b){return 1==a?r(b)+0.5:Math.round(b)},A=function(a,b,d,c){var i=b.x,f=b.y,j=a[d-1],m=a[d+1],e,g;if(d<a.length-1){var a=j.y,d=m.y,k;e=(c*i+j.x)/(c+1);g=(c*f+a)/(c+1);m=(c*i+m.x)/(c+1);c=(c*f+d)/(c+1);k=(c-g)*(m-i)/(m-e)+f-c;g+=k;c+=k;g>a&&g>f?(g=w(a,f),c=2*f-g):g<a&&g<f&&(g=x(a,f),c=2*f-g);c>d&&c>f?(c=w(d,f),g=2*f-c):c<d&&c<f&&(c=x(d,f),g=2*f-c);b.rcx=m;b.rcy=c}return[j.rcx||j.x,j.rcy||j.y,e||i,g||f,i,f]};y.prototype={css:function(a,b){if(h.isDefined(b))this.canvas.style[a]=b;else return this.canvas.style[a]},ellipse:function(a,b,d,c,i,f,j,m,e,g,k,l,h,n){l=!!l;h=!!h;this.save().gCo(n).strokeStyle(m,e,g).shadowOn(k).fillStyle(j).moveTo(a,b).beginPath();for(h&&this.moveTo(a,b);i<=f;)this.lineTo(a+d*s(i),b+(l?-c*p(i):c*p(i))),i+=v;return this.lineTo(a+d*s(f),b+(l?-c*p(f):c*p(f))).closePath().stroke(m).fill(j).restore()},arc:function(a,b,d,c,i,f,j,m,e,g,k,l,h,n){l=!!l;h=!!h&&!c;this.save().gCo(n).strokeStyle(m,e,g).shadowOn(k).fillStyle(j).beginPath();c?(this.moveTo(a+s(i)*(d-c),b+p(i)*(d-c)).lineTo(a+s(i)*d,b+p(i)*d),this.c.arc(a,b,d,i,f,l),this.lineTo(a+s(f)*(d-c),b+p(f)*(d-c)),this.c.arc(a,b,d-c,f,i,!l)):this.c.arc(a,b,d,i,f,l);h&&this.lineTo(a,b);return this.closePath().fill(j).stroke(m).restore()},sector:function(a,b,d,c,i,f,j,m,e,g,k,l){k&&this.arc(a,b,d,c,i,f,j,0,0,0,k,l,!0,!0);return this.arc(a,b,d,c,i,f,j,m,e,g,!1,l,!0)},sector3D:function(){var a=function(a,b,c,d,e,g,k,l,n){var t=function(e,g){this.lineTo(a+c*s(e),b+(g||0)+(k?-d*p(e):d*p(e)))},e=k&&g>o&&e<o?o:e,g=!k&&e<o&&g>o?o:g,q=e;for(this.fillStyle(h.dark(n)).moveTo(a+c*s(e),b+(k?-d*p(e):d*p(e))).beginPath();q<=g;)t.call(this,q),q+=v;t.call(this,g);this.lineTo(a+c*s(g),b+l+(k?-d*p(g):d*p(g)));for(q=g;q>=e;)t.call(this,q,l),q-=v;t.call(this,e,l);this.lineTo(a+c*s(e),b+(k?-d*p(e):d*p(e))).closePath().fill(!0)},b=function(a,b,d,c,e,g,k,l){d=a+d*s(k);c=b+g+(e?-c*p(k):c*p(k));this.moveTo(a,b).beginPath().fillStyle(l).lineTo(a,b+g).lineTo(d,c).lineTo(d,c-g).lineTo(a,b).closePath().fill(!0)},d=function(a,d,c,m,e,g,k,l,n){var t=k?e<o/2||e>1.5*o:e>o/2&&e<1.5*o,q=k?g>o/2&&g<1.5*o:g<o/2||g>1.5*o;if(!t&&!q)return!1;n=h.dark(n);t&&b.call(this,a,d,c,m,k,l,e,n);q&&b.call(this,a,d,c,m,k,l,g,n)},c=function(b,c,j,h,e,g,k,l,n,t,q,p,o){this.ellipse(b,c+k,j,h,e,g,l,n,t,q,p,o,!0);d.call(this,b,c,j,h,e,g,o,k,l);this.ellipse(b,c,j,h,e,g,l,n,t,q,!1,o,!0);a.call(this,b,c,j,h,e,g,o,k,l);return this};c.layerPaint=d;c.sPaint=a;c.layerDraw=b;return c}(),textStyle:function(a,b,d){return this.textAlign(a).textBaseline(b).textFont(d)},strokeStyle:function(a,b,d,c){if(a&&(b&&(this.c.lineWidth=b),d&&(this.c.strokeStyle=d),c))this.c.lineJoin=c;return this},globalAlpha:function(a){a&&(this.c.globalAlpha=a);return this},fillStyle:function(a){a&&(this.c.fillStyle=a);return this},arc2:function(a,b,d,c,i){this.c.arcTo(a,b,d,c,i);return this},textAlign:function(a){a&&(this.c.textAlign=a);return this},textBaseline:function(a){a&&(this.c.textBaseline=a);return this},textFont:function(a){a&&(this.c.font=a);return this},shadowOn:function(a){a&&(this.c.shadowColor=a.color,this.c.shadowBlur=a.blur,this.c.shadowOffsetX=a.offsetx,this.c.shadowOffsetY=a.offsety);return this},shadowOff:function(){this.c.shadowColor="white";this.c.shadowBlur=this.c.shadowOffsetX=this.c.shadowOffsetY=0;return this},avgLinearGradient:function(a,b,d,c,i){a=this.createLinearGradient(a,b,d,c);for(b=0;b<i.length;b++)a.addColorStop(b/(i.length-1),i[b]);return a},createLinearGradient:function(a,b,d,c){return this.c.createLinearGradient(a,b,d,c)},avgRadialGradient:function(a,b,d,c,i,f,j){a=this.createRadialGradient(a,b,d,c,i,f);for(b=0;b<j.length;b++)a.addColorStop(b/(j.length-1),j[b]);return a},createRadialGradient:function(a,b,d,c,i,f){return this.c.createRadialGradient(a,b,d,c,i,f)},text:function(a,b,d,c,i,f,j,h,e,g,k){return this.save().textStyle(f,j,h).fillText(a,b,d,c,i,e,g,k).restore()},fillText:function(a,b,d,c,i,f,j,h){a+="";c=c||!1;f=f||"lr";j=j||16;this.save().fillStyle(i).shadowOn(h);a.split("tb"==f?"":"\n").each(function(a){try{c?this.c.fillText(a,b,d,c):this.c.fillText(a,b,d),d+=j}catch(f){console.log(f.message+"["+a+","+b+","+d+"]")}},this);return this.restore()},measureText:function(a){return this.c.measureText(a).width},moveTo:function(a,b){this.c.moveTo(a||0,b||0);return this},lineTo:function(a,b){this.c.lineTo(a||0,b||0);return this},save:function(){this.c.save();return this},restore:function(){this.c.restore();return this},beginPath:function(){this.c.beginPath();return this},closePath:function(){this.c.closePath();return this},stroke:function(a){a&&this.c.stroke();return this},fill:function(a){a&&this.c.fill();return this},cube:function(a,b,d,c,i,f,j,m,e,g,k,l){a=n(g,a);b=n(g,b);j=j&&0<j?j:i;c=b-j*c;d=n(g,a+j*d);c=n(g,c);l&&(this.polygon(m,e,g,k,l,!1,[a,b,d,c,d+i,c,a+i,b]),this.polygon(m,e,g,k,l,!1,[a,b,a,b+f,a+i,b+f,a+i,b]),this.polygon(m,e,g,k,l,!1,[a+i,b,d+i,c,d+i,c+f,a+i,b+f]));this.polygon(h.dark(m),e,g,k,!1,!1,[a,b,d,c,d+i,c,a+i,b]);this.polygon(m,e,g,k,!1,!1,[a,b,a,b+f,a+i,b+f,a+i,b]);this.polygon(h.dark(m),e,g,k,!1,!1,[a+i,b,d+i,c,d+i,c+f,a+i,b+f]);return this},cube3D:function(a,b,d,c,i,f,j,m,e,g,k,l){a=n(g,a);b=n(g,b);m=!m||0==m?f:m;i?(c=h.vectorP2P(d,c),d=a+m*c.x,c=b-m*c.y):(d=a+m*d,c=b-m*c);for(;6>l.length;)l.push(!1);d=n(g,d);c=n(g,c);m=[];0>c?h.isObject(l[4])&&m.push(h.applyIf({points:[a,b-j,d,c-j,d+f,c-j,a+f,b-j]},l[4])):h.isObject(l[0])&&m.push(h.applyIf({points:[a,b,d,c,d+f,c,a+f,b]},l[0]));h.isObject(l[1])&&m.push(h.applyIf({points:[d,c,d,c-j,d+f,c-j,d+f,c]},l[1]));h.isObject(l[2])&&m.push(h.applyIf({points:[a,b,a,b-j,d,c-j,d,c]},l[2]));h.isObject(l[3])&&m.push(h.applyIf({points:[a+f,b,a+f,b-j,d+f,c-j,d+f,c]},l[3]));0>c?h.isObject(l[0])&&m.push(h.applyIf({points:[a,b,d,c,d+f,c,a+f,b]},l[0])):h.isObject(l[4])&&m.push(h.applyIf({points:[a,b-j,d,c-j,d+f,c-j,a+f,b-j]},l[4]));h.isObject(l[5])&&m.push(h.applyIf({points:[a,b,a,b-j,a+f,b-j,a+f,b]},l[5]));m.each(function(a){this.polygon(a.color,e,g,k,a.shadow,a.alpha,a.points)},this);return this},polygon:function(a,b,d,c,i,f,h){if(!(2>h.length)){this.save().strokeStyle(b,d,c).beginPath().fillStyle(a).globalAlpha(f).shadowOn(i).moveTo(h[0],h[1]);for(a=2;a<h.length;a+=2)this.lineTo(h[a],h[a+1]);return this.closePath().stroke(b).fill(!0).restore()}},lines:function(a,b,d,c){if(4>a.length)return this;this.save().gCo(c).beginPath().strokeStyle(!0,b,d).moveTo(n(b,a[0]),n(b,a[1]));for(d=2;d<a.length-1;d+=2)this.lineTo(n(b,a[d]),n(b,a[d+1]));return this.stroke(!0).restore()},bezierCurveTo:function(a){this.c.bezierCurveTo(a[0],a[1],a[2],a[3],a[4],a[5]);return this},lineArray:function(a,b,d,c,i){if(2>a.length)return this;this.strokeStyle(!0,b,d).moveTo(n(b,a[0].x),n(b,a[0].y));if(c)for(d=1;d<a.length;d++)this.bezierCurveTo(A(a,a[d],d,i));else for(d=1;d<a.length;d++)this.lineTo(n(b,a[d].x),n(b,a[d].y));return this.stroke(!0)},manyLine:function(a,b,d,c,i){var f=[],h=!1;a.each(function(a){a.ignored&&h?(this.lineArray(f,b,d,c,i),f=[],h=!1):(f.push(a),h=!0)},this)},line:function(a,b,d,c,i,f,h){if(!i||0==i)return this;this.save().gCo(h);return this.beginPath().strokeStyle(!0,i,f).moveTo(n(i,a),n(i,b)).lineTo(n(i,d),n(i,c)).stroke(!0).restore()},round:function(a,b,d,c,i,f){return this.arc(a,b,d,0,0,z,c,!!f,i,f)},fillRect:function(a,b,d,c){this.c.fillRect(a,b,d,c);return this},translate:function(a,b){this.c.translate(a,b);return this},clearRect:function(a,b,d,c){d=d||this.width;c=c||this.height;this.c.clearRect(a||0,b||0,d,c);return this},gCo:function(a){return a?this.gCO(a):this},gCO:function(a){this.c.globalCompositeOperation=a?"destination-over":"source-over";return this},box:function(a,b,d,c,i,f,j,m){i=i||{enable:0};if(i.enable)var e=i.width,g=i.color,k=i.radius,l=h.isNumber(e),e=h.parsePadding(e),d=d-(e[1]+e[3])/2,c=c-(e[0]+e[2])/2,a=a+e[3]/2,b=b+e[0]/2,a=r(a),b=r(b),e=l?e[0]:e,k=!l||0==k||"0"==k?0:h.parsePadding(k);this.save().translate(a,b).shadowOn(j).gCo(m).fillStyle(f).strokeStyle(l,e,g);k?this.beginPath().moveTo(k[0],n(e,0)).lineTo(d-k[1],n(e,0)).arc2(d,n(e,0),d,k[1],k[1]).lineTo(n(e,d),c-k[2]).arc2(n(e,d),c,d-k[2],c,k[2]).lineTo(k[3],n(e,c)).arc2(0,n(e,c),0,c-k[3],k[3]).lineTo(n(e,0),k[0]).arc2(n(e,0),0,k[0],0,k[0]).closePath().fill(f).stroke(e):!i.enable||l?(i.enable&&this.c.strokeRect(0,0,n(e,d),n(e,c)),f&&this.fillRect(0,0,d,c)):(f&&this.beginPath().moveTo(r(e[3]/2),r(e[0]/2)).lineTo(u(d-e[1]/2),e[0]/2).lineTo(u(d-e[1]/2),u(c-e[2]/2)).lineTo(r(e[3]/2),u(c-e[2]/2)).lineTo(r(e[3]/2),r(e[0]/2)).closePath().fill(!0),e&&(g=h.isArray(g)?g:[g,g,g,g],this.line(d,e[0]/2,d,c-e[0]/2,e[1],g[1],0).line(0,e[0]/2,0,c-e[0]/2,e[3],g[3],0).line(r(-e[3]/2),0,d+e[1]/2,0,e[0],g[0],0).line(r(-e[3]/2),c,d+e[1]/2,c,e[2],g[2],0)));return this.restore()},toImageURL:function(a){return this.canvas.toDataURL(a||"image/png")},addEvent:function(a,b,d){h.Event.addEvent(this.canvas,a,b,d)}};h.Chart=h.extend(h.Painter,{configure:function(){h.Chart.superclass.configure.apply(this,arguments);this.type="chart";this.set({render:"",data:[],width:void 0,height:void 0,lineJoin:"round",align:"center",default_mouseover_css:!0,showpercent:!1,decimalsnum:1,title:{text:"",fontweight:"bold",fontsize:20,height:30},subtitle:{text:"",fontweight:"bold",fontsize:16,height:20},footnote:{text:"",color:"#5d7f97",textAlign:"right",height:20},footnote_align:"right",title_align:"center",title_valign:"top",animation:!1,doAnimationFn:h.emptyFn,animation_timing_function:"easeInOut",duration_animation_duration:1E3,z_index:999,legend:{enable:!1},tip:{enable:!1}});this.registerEvent("parseData","parseTipText","beforeAnimation","afterAnimation","animating");this.T=null;this.animationed=this.rendered=!1;this.data=[];this.components=[];this.total=0},plugin:function(a){a.inject(this);this.components.push(a)},toImageURL:function(){return this.T.toImageURL()},segmentRect:function(){this.T.clearRect(this.get("l_originx"),this.get("t_originy"),this.get("client_width"),this.get("client_height"))},resetCanvas:function(){this.T.box(this.get("l_originx"),this.get("t_originy"),this.get("client_width"),this.get("client_height"),0,this.get("f_color"),0,!0)},animation:function(a){a.segmentRect();a.doAnimation(a.variable.animation.time,a.duration);a.resetCanvas();a.variable.animation.time<a.duration?(a.variable.animation.time++,requestAnimFrame(function(){a.animation(a)})):requestAnimFrame(function(){a.variable.animation.time=0;a.animationed=!0;a.draw();a.processAnimation=!1;a.fireEvent(a,"afterAnimation",[a])})},doAnimation:function(a,b){this.get("doAnimationFn").call(this,a,b)},doSort:function(){this.components.sort(function(a,b){return(h.isArray(a)?a.zIndex||0:a.get("z_index"))>(h.isArray(b)?b.zIndex||0:b.get("z_index"))})},commonDraw:function(){h.Assert.isTrue(this.rendered,this.type+" has not rendered.");h.Assert.isTrue(this.initialization,this.type+" has initialize failed.");h.Assert.gtZero(this.data.length,this.type+"'s data is empty.");this.redraw||(this.doSort(),this.title&&this.title.draw(),this.subtitle&&this.subtitle.draw(),this.footnote&&this.footnote.draw(),this.T.box(0,0,this.width,this.height,this.get("border"),this.get("f_color"),0,!0));this.redraw=!0;!this.animationed&&this.get("animation")?(this.fireEvent(this,"beforeAnimation",[this]),this.animation(this)):(this.segmentRect(),this.components.eachAll(function(a){a.draw()},this),this.resetCanvas())},create:function(a){this.width=this.pushIf("width",400);this.height=this.pushIf("height",300);var b="width:"+this.width+"px;height:"+this.height+"px;padding:0px;overflow:hidden;position:relative;",d=h.iGather(this.type);this.shellid=h.iGather(this.type+"-shell");a.innerHTML="<div id='"+this.shellid+"' style='"+b+"'><canvas id= '"+d+"'  width='"+this.width+"' height="+this.height+"'><p>Your browser does not support the canvas element</p></canvas></div>";this.element=document.getElementById(d);this.shell=document.getElementById(this.shellid);this.T=this.target=new y(this.element);this.rendered=!0},render:function(a){this.push("render",a)},initialize:function(){if(!this.rendered){var a=this.get("render");"string"==typeof a&&document.getElementById(a)?this.create(document.getElementById(a)):"object"==typeof a&&this.create(a)}0<this.get("data").length&&this.rendered&&!this.initialization&&(h.Interface.parser.call(this,this.get("data")),this.doConfig(),this.initialization=!0)},doConfig:function(){h.Chart.superclass.doConfig.call(this);var a=this._(),b=a.variable.event,d=a.get("default_mouseover_css"),c,i;h.Assert.isArray(a.data);h.Interface._3D.call(a);a.T.strokeStyle(!0,a.get("brushsize"),a.get("strokeStyle"),a.get("lineJoin"));a.processAnimation=a.get("animation");a.duration=u(a.get("duration_animation_duration")*h.FRAME/1E3);a.variable.animation={type:0,time:0,queue:[]};a.animationArithmetic=h.getAnimationArithmetic(a.get("animation_timing_function"));a.on("afterAnimation",function(){var b=a.variable.animation.queue.shift();b&&a[b.handler].apply(a,b.arguments)});["click","dblclick","mousemove"].each(function(b){a.T.addEvent(b,function(c){a.processAnimation||a.fireEvent(a,b,[a,h.Event.fix(c)])},!1)});a.on("click",function(a,b){a.components.eachAll(function(a){if(!a.ignoreEvent){var c=a.isMouseOver(b);c.valid&&a.fireEvent(a,"click",[a,b,c])}})});a.on("mousemove",function(a,e){c=i=!1;a.components.eachAll(function(f){if(!f.ignoreEvent){var h=f.variable.event,g=f.isMouseOver(e);if(g.valid){if(c=!0,i=i||f.atomic,b.mouseover||(b.mouseover=!0,a.fireEvent(a,"mouseover",[e])),d&&i&&a.T.css("cursor","pointer"),h.mouseover||(h.mouseover=!0,f.fireEvent(f,"mouseover",[e,g])),f.fireEvent(f,"mousemove",[e,g]),g.stop)return!1}else h.mouseover&&(h.mouseover=!1,f.fireEvent(f,"mouseout",[e,g]))}});d&&!i&&b.mouseover&&a.T.css("cursor","default");!c&&b.mouseover&&(b.mouseover=!1,a.fireEvent(a,"mouseout",[e]))});a.push("r_originx",a.width-a.get("padding_right"));a.push("b_originy",a.height-a.get("padding_bottom"));var f=0,j=a.push("l_originx",a.get("padding_left")),m=a.push("t_originy",a.get("padding_top")),e=a.push("client_width",a.get("width")-a.get("hpadding"));h.isString(a.get("title"))&&a.push("title",h.applyIf({text:a.get("title")},a.default_.title));h.isString(a.get("subtitle"))&&a.push("subtitle",h.applyIf({text:a.get("subtitle")},a.default_.subtitle));h.isString(a.get("footnote"))&&a.push("footnote",h.applyIf({text:a.get("footnote")},a.default_.footnote));if(""!=a.get("title.text")){var g=""!=a.get("subtitle.text"),f=g?a.get("title.height")+a.get("subtitle.height"):a.get("title.height"),m=a.push("t_originy",m+f);a.push("title.originx",j);a.push("title.originy",a.get("padding_top"));a.push("title.width",e);a.title=new h.Text(a.get("title"),a);g&&(a.push("subtitle.originx",j),a.push("subtitle.originy",a.get("title.originy")+a.get("title.height")),a.push("subtitle.width",e),a.subtitle=new h.Text(a.get("subtitle"),a))}""!=a.get("footnote.text")&&(g=a.get("footnote.height"),f+=g,a.push("b_originy",a.get("b_originy")-g),a.push("footnote.originx",j),a.push("footnote.originy",a.get("b_originy")),a.push("footnote.width",e),a.footnote=new h.Text(a.get("footnote"),a));f=a.push("client_height",a.get("height")-a.get("vpadding")-f);a.push("minDistance",x(e,f));a.push("maxDistance",w(e,f));a.push("minstr",e<f?"width":"height");a.push("centerx",j+e/2);a.push("centery",m+f/2);a.push("communal_option","shadow,shadow_color,shadow_blur,shadow_offsetx,shadow_offsety,tip".split(","));a.get("legend.enable")&&(a.legend=new h.Legend(h.apply({maxwidth:e,data:a.data},a.get("legend")),a),a.components.push(a.legend));a.get("tip.enable")&&a.push("tip.wrap",a.shell)}})})(iChart);