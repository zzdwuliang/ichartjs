/**
 * @overview this component use for abc
 * @component#iChart.Column
 * @extend#iChart.Chart
 */
iChart.Column = iChart.extend(iChart.Chart, {
	/**
	 * initialize the context for the Column
	 */
	configure : function(config) {
		/**
		 * invoked the super class's configuration
		 */
		iChart.Column.superclass.configure.call(this);

		this.type = 'column';
		this.dataType = 'simple';
		this.set({
			/**
			 * @cfg {Object} the option for coordinate.
			 * @see<link>iChart.Coordinate2D<link>
			 */
			coordinate : {},
			/**
			 * @cfg {Number} the width of each column(default to calculate according to coordinate's width)
			 */
			hiswidth : undefined,
			/**
			 * @cfg {Number} the distance of column's bottom and text(default to 6)
			 */
			text_space : 6,
			/**
			 * @cfg {String} the align of scale(default to 'left') Available value are:
			 * @Option 'left'
			 * @Option 'right'
			 */
			scaleAlign : 'left',
			/**
			 * @inner {Object} the option for label
			 * @extend iChart.Chart
			 * @see iChart.Chart#label
			 */
			label : {
				padding : 5
			},
			/**
			 * @cfg {Object} option of rectangle
			 */
			rectangle : {}
		});

		this.registerEvent();

		this.rectangles = [];
		this.labels = [];
		this.labels.ignore = true;
	},
	doAnimation : function(t, d) {
		var r, h;
		this.coo.draw();
		for ( var i = 0; i < this.labels.length; i++) {
			this.labels[i].draw();
		}
		for ( var i = 0; i < this.rectangles.length; i++) {
			r = this.rectangles[i];
			h = Math.ceil(this.animationArithmetic(t, 0, r.height, d));
			r.push('originy', r.y + (r.height - h));
			r.push('height', h);
			r.drawRectangle();
		}
	},
	doParse : function(d, i, id, x, y, h) {
		if (this.get('label.enable'))
			this.push('rectangle.label.text', this.fireString(this, 'parseLabelText', [d, i], d.name + ":" + d.value));
		if (this.get('tip.enable'))
			this.push('rectangle.tip.text', this.fireString(this, 'parseTipText', [d, i], d.name + ":" + d.value));

		this.push('rectangle.value', d.value);
		this.push('rectangle.background_color', d.color);

		this.push('rectangle.id', id);
		this.push('rectangle.originx', x);
		this.push('rectangle.originy', y);
		this.push('rectangle.height', h);

	},
	doConfig : function() {
		iChart.Column.superclass.doConfig.call(this);

		/**
		 * apply the coordinate feature
		 */
		iChart.Interface.coordinate.call(this);

		if (this.dataType == 'simple') {
			var L = this.data.length, W = this.get('coordinate.width'), hw = this.pushIf('hiswidth', W / (L * 2 + 1));

			if (hw * L > W) {
				hw = this.push('hiswidth', W / (L * 2 + 1));
			}

			/**
			 * the space of two column
			 */
			this.push('hispace', (W - hw * L) / (L + 1));

		}
		
		if (this.is3D()){
			this.push('zHeight', this.get('hiswidth') * this.get('zScale'));
		}
		
		/**
		 * use option create a coordinate
		 */
		this.coo = iChart.Interface.coordinate_.call(this);

		this.pushComponent(this.coo, true);

		/**
		 * quick config to all rectangle
		 */
		iChart.apply(this.get('rectangle'), iChart.clone(['shadow', 'shadow_blur', 'shadow_offsetx', 'shadow_offsety', 'gradient', 'color_factor', 'label', 'tip', 'border'], this.options));

		this.push('rectangle.width', this.get('hiswidth'));
	}

});// @end