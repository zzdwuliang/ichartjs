	/**
	 * @overview this component use for abc
	 * @component#iChart.Component
	 * @extend#iChart.Painter
	 */
	iChart.Component = iChart.extend(iChart.Painter,{
		configure : function(c) {
			/**
			 * invoked the super class's configuration
			 */
			iChart.Component.superclass.configure.apply(this,arguments);
	
			/**
			 * indicate the element's type
			 */
			this.type = 'component';
	
			this.set({
				/**
				 * @inner {Boolean} Specifies the config of Tip.For details see <link>iChart.Tip</link>
				 * Note:this has a extra property named 'enable',indicate whether tip available(default to false)
				 */
				tip : {
					enable : false,
					border : {
						width : 2
					}
				}
			});
			
			/**
			 * If this element can split or contain others.(default to false)
			 */
			this.atomic = false;
			/**
			 * If method draw be proxy.(default to false)
			 */
			this.proxy = false;
			this.inject(c);
			
			this.final_parameter = {};
			
			
	},
	afterConfiguration:function(){
		this.init();
	},
	initialize : function() {
		if (!this.preventEvent)
			/**
			 * define abstract method
			 */
			iChart.DefineAbstract('isEventValid', this);
	
		iChart.DefineAbstract('doDraw', this);
	
		this.doConfig();
		this.initialization = true;
	},
	doConfig : function() {
		iChart.Component.superclass.doConfig.call(this);
		var _ = this._();
		/**
		 * originx
		 */
		_.x = _.get('originx')+_.get('offsetx');
		/**
		 * 
		 * originy
		 */
		_.y = _.get('originy')+_.get('offsety');
		
		/**
		 * if have evaluate it
		 */
		_.data = _.get('data');
		
		if (_.get('tip.enable')) {
			/**
			 * make tip's border in accord with sector
			 */
			_.pushIf('tip.border.color', _.get('f_color'));
	
			if (!iChart.isFunction(_.get('tip.invokeOffset')))
				/**
				 * indicate the tip must calculate position
				 */
				_.push('tip.invokeOffset', _.tipInvoke());
		}
	
	},
	isMouseOver : function(e) {
		return this.isEventValid(e);
	},
	//render ? named
	redraw : function() {
		
		this.container.draw();
	},
	commonDraw : function(opts) {
		/**
		 * execute the doDraw() that the subClass implement
		 */
		if(!this.proxy)
		this.doDraw.call(this, opts);
	
	},
	inject : function(c) {
		if (c) {
			this.container = c;
			this.target = this.T = c.T;
		}
	}
	});//@end