	/**
	 * @overview this component use for abc
	 * @component#iChart.Custom
	 * @extend#iChart.Component
	 */
	iChart.Custom = iChart.extend(iChart.Component,{
		configure:function(){
			/**
			 * invoked the super class's  configuration
			 */
			iChart.Custom.superclass.configure.apply(this,arguments);
			
			/**
			 * indicate the component's type
			 */
			this.type = 'custom';
			
			this.set({
				/**
				 * @cfg {Function} Specifies the customize function.(default to emptyFn)
				 */
				drawFn:iChart.emptyFn,
				/**
				 * @cfg {Function} Specifies the customize event valid function.(default to undefined)
				 */
				eventValid:undefined	
			});
			
			this.registerEvent();
			
		},
		doDraw:function(opts){
			this.get('drawFn').call(this,opts);
		},
		isEventValid:function(e){
			if(iChart.isFunction(this.get('eventValid')))
			return this.get('eventValid').call(this,e);
			return {valid:false};
		},
		doConfig:function(){
			iChart.Custom.superclass.doConfig.call(this);
		}
});//@end