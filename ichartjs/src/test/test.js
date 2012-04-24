var resultList,
	str,
	canvas,
	chart,
	unit,
	total=0,
	success=0,
	fail=0,
	Html;
function level(cost){
	if(cost<25){
		return "<td class='test_item_speed_high'></td>";
	}else if(cost<40){
		return "<td class='test_item_speed_middle'></td>";
	}else{
		return "<td class='test_item_speed_low'></td>";
	}
}
function result(success,type,costOrCause){
	str = [resultList.innerHTML];
	str.push("<table class='test_item'><tr><td class='test_item_name'>&nbsp;");
	str.push(type);
	str.push("</td>");
	total++;
	if(success){
		str.push("<td class='test_item_success'></td>");
		str.push(level(costOrCause));
		str.push("<td class='test_item_cost'>");
		str.push(costOrCause);
		str.push("ms");
		str.push("</td>");
		success++;
	}else{
		str.push("<td class='test_item_fail'></td>");
		str.push("<td>--</td>");
		str.push("<td class='test_item_cause'>");
		str.push(costOrCause);
		str.push("</td>");
		fail++;
	}
	
	
	str.push("</tr></table>");
	resultList.innerHTML = str.join("");
	canvas.innerHTML = "";
}
function start(){
	setTimeout(function(){
		try {
			if(unit.length==0){
				str = [resultList.innerHTML];
				str.push("<div class='test_result'>Test completed.Total:");
				str.push(total);
				str.push("&nbsp;,Success:");
				str.push(success);
				str.push("&nbsp;,Fail:");
				str.push(fail);
				str.push("&nbsp;<button onclick='test();'>Test Again</button>");
				str.push("</div>");
				resultList.innerHTML = str.join("");
				return;
			}
			chart = unit.shift()();
			chart.draw();
			result(true,chart.get('title') || chart.type,chart.RUN_TIME_COST);
		} catch (e) {
			result(false,chart.get('title') || chart.type,e.name+":"+e.message);
		}
		start();
	},300)
}
/////////////////////上面的写成一个测试的js//////////////////////

function test(){
	resultList.innerHTML = Html;
	total=success=fail=0;
	unit = [];
	unit.push(function(){
		return new Jidea.Pie2D({
			render :canvas,
			debug : true,
			title : 'Test Pie2D',
			data:data,
			radius:140,
			offsetAngle:45
		});
	});
	
	unit.push(function(){
		return new Jidea.Pie3D({
			render :canvas,
			debug : true,
			title : 'Test Pie3D',
			data : data,
			padding : '10',
			radius:240,
			yHeight:30,
			zRotate:45,
			showpercent:true,
			legend:{
				enable:true
			},
			tip:{
				enable:true
			}
		});
	});
	
	unit.push(function(){
		return new Jidea.Column2D({
			render :canvas,
			debug : true,
			title : 'Test Column2D',
			data: data,
			align:'center',
			coordinate:{
				width:600,
				height:400
			},
			legend:{
				enable:true
			},
			tip:{
				enable:true,
				shadow:true
			}
			
		});
	});
	
	unit.push(function(){
		return new Jidea.Column3D({
			render :canvas,
			debug : true,
			title : 'Test Column3D',
			data: data,
			align:'center',
			coordinate:{
				width:600,
				height:300,
				background_color:'#d6dbd2'
			},
			tip:{
				enable:true,
				shadow:true,
				showType:'fixed'
			},
			hiswidth:90,
			xAngle:70,
			yAngle:30,
			zScale:1
		});
	});
	
	unit.push(function(){
		return new Jidea.Bar2D({
			render :canvas,
			debug : true,
			title : 'Test Bar2D',
			data: data,
			align:'center',
			coordinate:{
				width:600,
				height:400
			},
			legend:{
				enable:true
			},
			tip:{
				enable:true,
				shadow:true,
				showType:'follow'
			}
			
		});
	});
	
	unit.push(function(){
		return new Jidea.ColumnMulti2D({
			render :canvas,
			debug : true,
			title : 'Test ColumnMulti2D',
			data: data2,
			columnKeys:columnKeys,
			align:'center',
			coordinate:{
				width:600,
				height:400,
				kedu:{
					 position:'left',	
					 end_scale:150,
					 scale:30
				}
			},
			legend:{
				enable:true
			},
			tip:{
				enable:true,
				shadow:true,
				showType:'fixed'
			}
		});
	});
	
	
	unit.push(function(){
		return new Jidea.LineBasic2D({
			render :canvas,
			debug : true,
			title : 'Test LineBasic2D',
			data: data4,
			align:'center',
			labels:lineLabels1,
			listeners:{
				parsePoint:function(v,x,y){
					return {value:v+"℃"}
				}
			}
		});
	});
	
	unit.push(function(){
		return new Jidea.LineBasic2D({
			render :canvas,
			debug : true,
			title : 'Test LineBasic2D More Point',
			data: data6,
			align:'center',
			tip:{
				enable:true,
				shadow:true
			},
			coordinate:{
				width:640,
				height:260,
				axis:{
					color:'#07575a',
					width:[0,0,2,2]
				},
				grids:{
					vertical:{
						way:'share_alike',
				 		value:12
					}
				},
				crosshair:{
					enable:true
				},
				kedu:[{
					 position:'left',	
					 start_scale:0,
					 end_scale:48,
					 scale_line_enable:false,
					 scale:4,
					 listeners:{
						parseText:function(t,x,y){
							return {text:t+"℃"}
						}
					}
				},{
					 position:'bottom',	
					 scale_line_enable:false,
					 start_scale:1,
					 end_scale:12,
					 parseText:function(t,x,y){
						return {textY:y+10}
					 },
					 labels:lineLabels1
				}]
			},
			listeners:{
				parsePoint:function(v,x,y){
					return {value:v+"℃"}
				}
			}
		});
	});
	
	
	unit.push(function(){
		var iChart = Jidea.noConflict();
		return new iChart.Area2D({
			render :canvas,
			debug : true,
			title : 'Test Area2D',
			data: data7,
			align:'center',
			width : 800,
			height : 400,
			labels:lineLabels1,
			listeners:{
				parsePoint:function(v,x,y){
					return {value:v+"℃"}
				}
			}
		});
	});
	
	/**
	 * start Test
	 */
	start();
}

$(function(){
	resultList = $('result_list'),
	canvas = $("myCanvas");
	Html = resultList.innerHTML;
	test();
});