iChart.Sector=iChart.extend(iChart.Component,{configure:function(){iChart.Sector.superclass.configure.apply(this,arguments);this.type="sector";this.set({value:"",name:"",counterclockwise:!1,startAngle:0,middleAngle:0,endAngle:0,totalAngle:0,bound_event:"click",expand:!1,pop_animate:!1,mutex:!1,increment:void 0,label:{enable:!0}});this.atomic=!0;this.registerEvent("changed");this.tip=this.label=null},bound:function(){this.expanded||this.toggle()},rebound:function(){this.expanded&&this.toggle()},toggle:function(){this.fireEvent(this,this.get("bound_event"),[this])},doDraw:function(){this.drawSector();this.label&&this.label.draw()},labelInvoke:function(a){var b=this.get("middleAngle"),c=Math.cos(b)*a,d=Math.sin(b)*a,a=this.label;a.push("originx",a.get("originx")+c);a.push("originy",a.get("originy")+d);a.push("labelx",a.get("labelx")+c);a.push("labely",a.get("labely")+d);var e=[];a.get("line_potins").each(function(a,b){e.push(0==b%2?a+c:a+d)},a);a.push("line_potins",e)},doConfig:function(){iChart.Sector.superclass.doConfig.call(this);var a=this;a.push("totalAngle",a.get("endAngle")-a.get("startAngle"));this.get("label.enable")&&(a.pushIf("label.line_thickness",a.is3D()?4:1),a.pushIf("label.border.color",a.get("border.color")),a.push("label.scolor",a.get("background_color")));a.variable.event.status=a.expanded=a.get("expand");a.get("tip.enable")&&("follow"!=a.get("tip.showType")&&a.push("tip.invokeOffsetDynamic",!1),a.tip=new iChart.Tip(a.get("tip"),a));a.variable.event.poped=!1;a.on(a.get("bound_event"),function(a){a.variable.event.poped=true;a.expanded=!a.expanded;a.redraw();a.variable.event.poped=false});a.on("beforedraw",function(){a.x=a.get("originx");a.y=a.get("originy");if(a.variable.event.status!=a.expanded){a.fireEvent(a,"changed",[a,a.expanded]);a.get("label.enable")&&a.labelInvoke(a.get("label.linelength")*(a.expanded?2:-2)/3)}if(a.variable.event.status=a.expanded)if(a.get("mutex")&&!a.variable.event.poped)a.expanded=false;else{a.x=a.x+a.get("increment")*Math.cos(2*Math.PI-a.get("middleAngle"));a.y=a.y-a.get("increment")*Math.sin(2*Math.PI-a.get("middleAngle"))}return true})}});