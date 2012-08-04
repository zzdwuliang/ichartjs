iChart.Sector3D=iChart.extend(iChart.Sector,{configure:function(){iChart.Sector3D.superclass.configure.apply(this,arguments);this.type="sector3d";this.dimension=iChart._3D;this.set({semi_major_axis:0,semi_minor_axis:0,cylinder_height:0})},drawSector:function(){this.T.sector3D(this.x,this.y,this.a,this.b,this.get("startAngle"),this.get("endAngle"),this.h,this.get("background_color"),this.get("border.enable"),this.get("border.width"),this.get("border.color"),this.get("shadow"),this.get("shadow_color"),this.get("shadow_blur"),this.get("shadow_offsetx"),this.get("shadow_offsety"),this.get("counterclockwise"))},isEventValid:function(b){return this.get("label.enable")&&this.label.isEventValid(b).valid?{valid:!0}:!iChart.inEllipse(b.offsetX-this.x,b.offsetY-this.y,this.a,this.b)?{valid:!1}:iChart.inRange(this.sA,this.eA,2*Math.PI-iChart.atan2Radian(this.x,this.y,b.offsetX,b.offsetY))?{valid:!0}:{valid:!1}},p2p:function(b,a,d,c){return{x:b+this.a*Math.cos(d)*c,y:a+this.b*Math.sin(d)*c}},tipInvoke:function(){var b=this.get("middleAngle"),a=iChart.quadrantd(b),d=this;return function(c,e){var f=d.p2p(d.x,d.y,b,0.6);return{left:2<=a&&3>=a?f.x-c:f.x,top:3<=a?f.y-e:f.y}}},doConfig:function(){iChart.Sector3D.superclass.doConfig.call(this);this.a=this.get("semi_major_axis");this.b=this.get("semi_minor_axis");this.h=this.get("cylinder_height");iChart.Assert.gtZero(this.a);iChart.Assert.gtZero(this.b);this.pushIf("increment",iChart.lowTo(5,this.a/8));this.inc=Math.PI/180;var b=this.get("counterclockwise"),a=function(a){a=iChart.atan2Radian(0,0,this.a*Math.cos(a),b?-this.b*Math.sin(a):this.b*Math.sin(a));!b&&0!=a&&(a=2*Math.PI-a);return a};this.sA=a.call(this,this.get("startAngle"));this.eA=a.call(this,this.get("endAngle"));if(this.get("label.enable")){this.pushIf("label.linelength",iChart.lowTo(10,this.a/8));this.Z=this.get("label.linelength")/this.a+1;var a=this.get("middleAngle"),d=iChart.quadrantd(a),c=this.p2p(this.x,this.y,a,this.Z),e=this.p2p(this.x,this.y,a,1),b=this.get("counterclockwise");this.push("label.originx",e.x);this.push("label.originy",e.y);this.push("label.quadrantd",d);this.push("label.line_potins",[e.x,e.y+this.h/2,c.x,c.y+this.h/2]);this.push("label.line_globalComposite",b&&a<Math.PI||!b&&a>Math.PI);this.push("label.labelx",c.x);this.push("label.labely",c.y+this.h/2);this.label=new iChart.Label(this.get("label"),this)}}});