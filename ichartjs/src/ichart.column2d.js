/**
 * @overview this component use for abc
 * @component#@chart#iChart.Column2D
 * @extend#iChart.Column
 */
iChart.Column2D = iChart.extend(iChart.Column, {
	/**
	 * initialize the context for the Column2D
	 */
	configure : function() {
		/**
		 * invoked the super class's configuration
		 */
		iChart.Column2D.superclass.configure.call(this);

		this.type = 'column2d';

		/**
		 * this.set({});
		 */
	},
	doConfig : function() {
		iChart.Column2D.superclass.doConfig.call(this);

		/**
		 * get the max/min scale of this coordinate for calculated the height
		 */
		var S = this.coo.getScale(this.get('keduAlign')), bs = this.coo.get('brushsize'), H = this.coo.get('height'), h2 = this.get('hiswidth') / 2, gw = this.get('hiswidth') + this.get('hispace'), h;

		this.data.each(function(d, i) {
			h = (d.value - S.start) * H / S.distance;
			
			this.doParse(d, i, i, this.x + this.get('hispace') + i * gw, this.y + H - h - bs, h);
			d.reference = new iChart.Rectangle2D(this.get('rectangle'), this);
			this.rectangles.push(d.reference);
			
			this.labels.push(new iChart.Text({
				id : i,
				text : d.name,
				originx : this.x + this.get('hispace') + gw * i + h2,
				originy : this.y + H + this.get('text_space')
			}, this));

		}, this);

		this.pushComponent(this.labels);
		this.pushComponent(this.rectangles);
	}

});// @end
