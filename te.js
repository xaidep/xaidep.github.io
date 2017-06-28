(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.te = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(6));

	// レイヤー 1
	this.instance = new lib.aaaaa("synched",0);
	this.instance.setTransform(55,173,1,1,0,0,0,35,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:481},6).to({x:55},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,138,70,70);


// symbols:
(lib.aaaaa = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFeFeIq7AAIAAq7IK7AAg");
	this.shape.setTransform(35,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#666666"],[0,1],-34.9,0,35,0).s().p("AldFeIAAq7IK7AAIAAK7g");
	this.shape_1.setTransform(35,35);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;