iChart.Label=iChart.extend(iChart.Component,{configure:function(){iChart.Label.superclass.configure.apply(this,arguments);this.type="legend";this.set({text:"",line_height:16,sign:"square",sign_size:12,padding:5,offsety:2,sign_space:5,highlight:!1,background_color:"#efefef",text_with_sign_color:!1,border:{radius:2}});this.atomic=!0;this.registerEvent()},isEventValid:function(a){return{valid:iChart.inRange(this.labelx,this.labelx+this.width,a.offsetX)&&iChart.inRange(this.labely,this.labely+this.height,a.offsetY)}},text:function(a){a&&this.push("text",a);this.width=this.T.measureText(this.get("text"))+this.get("hpadding")+this.get("sign_size")+this.get("sign_space")},doDraw:function(a){a=a||{};a.invoke&&this.updateLcb(a.invoke);a.highlight&&this.fireEvent(this,"highlight");this.lineFn.call(this);this.T.drawBorder(this.labelx,this.labely,this.width,this.height,this.get("border.width"),this.get("border.color"),this.get("border.radius"),this.get("background_color"),!1,this.get("shadow"),this.get("shadow_color"),this.get("shadow_blur"),this.get("shadow_offsetx"),this.get("shadow_offsety"));this.T.textStyle("left","top",this.get("fontStyle"));var a=this.labelx+this.get("padding_left"),b=this.labely+this.get("padding_top")+this.get("offsety"),c=this.get("sign_size"),d=this.get("color");this.get("text_with_sign_color")&&(d=this.get("scolor"));"square"==this.get("sign")?this.T.rectangle(a,b,c,c,this.get("scolor"),1):this.T.round(a+c/2,b+c/2,c/2,this.get("scolor"),1);this.T.fillText(this.get("text"),a+c+this.get("sign_space"),b,this.get("textwidth"),d)},updateLcb:function(a){this.lineFn=a.lineFn;var b=a.labelXY.call(this);this.labelx=b.labelx;this.labely=b.labely;this.x=a.origin.x;this.y=a.origin.y},doConfig:function(){iChart.Label.superclass.doConfig.call(this);this.T.textFont(iChart.getFont(this.get("fontweight"),this.get("fontsize"),this.get("font")));this.height=this.get("line_height")+this.get("vpadding");this.text();var a=this.get("lineCB");a&&this.updateLcb(a)}});