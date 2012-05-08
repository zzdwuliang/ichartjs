iChart.Legend=iChart.extend(iChart.Component,{configure:function(){iChart.Legend.superclass.configure.apply(this,arguments);this.type="legend";this.set({data:void 0,width:"auto",column:1,row:"max",maxwidth:0,line_height:16,sign:"square",sign_size:12,sign_space:5,legendspace:5,text_with_sign_color:!1,align:"right",valign:"middle"});this.registerEvent("drawCell","analysing","drawRaw")},drawCell:function(a,c,f,d){var b=this.get("sign_size"),e=this.get("sign");"round"==e?this.T.round(a+b/2,c+b/2,b/2,
d):"round-bar"==e?(this.T.rectangle(a,c+5*b/12,b,b/6,d),this.T.round(a+b/2,c+b/2,b/4,d)):"square-bar"==e?(this.T.rectangle(a,c+5*b/12,b,b/6,d),this.T.rectangle(a+b/4,c+b/4,b/2,b/2,d)):this.T.rectangle(a,c,b,b,d);e=this.get("color");this.get("text_with_sign_color")&&(e=d);this.T.fillText(f,a+this.get("signwidth"),c+b/2,this.get("textwidth"),e);this.fireEvent(this,"drawCell",[a,c,f,d])},drawRow:function(a,c,f){for(var d=0;d<this.get("column");d++)a<this.data.length&&(this.fireEvent(this,"drawCell",
[this.data[a]]),this.drawCell(c,f,this.data[a].text,this.data[a].color),this.data[a].x=c,this.data[a].y=f),c+=this.columnwidth[d]+this.get("signwidth")+this.get("legendspace"),a++},isEventValid:function(a){if(a.offsetX>this.x&&a.offsetX<this.x+this.get("width")&&a.offsetY>this.y&&a.offsetY<this.y+this.get("height"))for(var c=0;c<this.data.length;c++)if(a.offsetX>this.data[c].x&&a.offsetX<this.data[c].x+this.data[c].width+this.get("signwidth")&&a.offsetY>this.data[c].y&&a.offsetY<this.data[c].y+this.get("line_height"))return{valid:!0,
value:c,target:this.data[c]};return{valid:!1}},doDraw:function(){this.get("border.enable")&&this.T.drawBorder(this.x,this.y,this.width,this.height,this.get("border.width"),this.get("border.color"),this.get("border.radius"),this.get("fill_color"),!1,this.get("shadow"),this.get("shadow_color"),this.get("shadow_blur"),this.get("shadow_offsetx"),this.get("shadow_offsety"));this.T.textStyle("left","middle",iChart.getFont(this.get("fontweight"),this.get("fontsize"),this.get("font")));for(var a=this.x+this.get("padding_left"),
c=this.y+this.get("padding_top"),f=this.get("column"),d=this.get("row"),b=0;b<d;b++)this.fireEvent(this,"drawRaw",[b*f]),this.drawRow(b*f,a,c),c+=this.get("line_height")},doEvent:function(){},doConfig:function(){iChart.Legend.superclass.doConfig.call(this);iChart.Assert.isNotEmpty(this.get("data"),this.type+"[data]");var a=0,c=w=this.get("width"),f=0,d="auto"==w,b=this.get("sign_size"),e=iChart.isNumber(this.get("column")),g=iChart.isNumber(this.get("row")),h=this.data.length;this.push("signwidth",
b+this.get("sign_space"));this.get("line_height")<b&&this.push("line_height",b+b/5);!e&&!g&&(e=1);e&&!g&&this.push("row",Math.ceil(h/this.get("column")));!e&&g&&this.push("column",Math.ceil(h/this.get("row")));e=this.get("column");g=this.get("row");this.columnwidth=Array(e);d&&(this.T.textFont(this.get("fontStyle")),c=0);for(b=0;b<h;b++)a=this.data[b],iChart.merge(a,this.fireEvent(this,"analysing",[a,b])),a.text=a.text||a.name,a.width=this.T.measureText(a.text);for(b=0;b<e;b++){f=0;for(a=b;a<h;)f=
Math.max(f,this.data[a].width),a+=e;this.columnwidth[b]=f;c+=f}d&&(w=this.push("width",c+this.get("hpadding")+this.get("signwidth")*e+(e-1)*this.get("legendspace")));w>this.get("maxwidth")&&(w=this.push("width",this.get("maxwidth")));this.push("textwidth",w-this.get("hpadding")-this.get("signwidth"));this.width=w;this.height=this.push("height",g*this.get("line_height")+this.get("vpadding"));"center"==this.get("align")&&"middle"==this.get("valign")&&this.push("valign","top");"left"==this.getC("align")&&
"middle"==this.get("valign")&&this.push("align","right");"top"==this.get("valign")?this.push("originy",this.getC("t_originy")):"bottom"==this.get("valign")?this.push("originy",this.getC("b_originy")-this.get("height")):this.push("originy",this.getC("centery")-this.get("height")/2);"left"==this.get("align")?this.push("originx",this.getC("l_originx")):"center"==this.get("align")?this.push("originx",this.getC("centerx")-this.get("textwidth")/2):this.push("originx",this.getC("r_originx")-w);this.push("originx",
this.get("originx")+this.get("offsetx"));this.push("originy",this.get("originy")+this.get("offsety"));this.x=this.get("originx");this.y=this.get("originy")}});
