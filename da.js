(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.da = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		btnMc.addEventListener(MouseEvent.CLICK, clickDeNext);
		
		 
		
		function clickDeNext(event:MouseEvent):void
		
		
		
		this.btnMc.addEventListener("click",clickDeNext.bind(this));
		
		 
		
		function clickDeNext(event:MouseEvent):void {
		sikaku.gotoAndPlay("go");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// レイヤー 2
	this.btnMc = new lib.botan();
	this.btnMc.setTransform(260.5,357.5,1,1,0,0,0,38.5,38.5);
	new cjs.ButtonHelper(this.btnMc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnMc}]}).wait(1));

	// レイヤー 1
	this.sikaku = new lib.aaaaa();
	this.sikaku.setTransform(58,58,1,1,0,0,0,53,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sikaku}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,294.1,391);


// symbols:
(lib.botan = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC33").s().p("AkPEPQhwhwgBifQABieBwhxQBxhwCegBQCfABBwBwQBxBxABCeQgBCfhxBwQhwBxifABQiegBhxhxg");
	this.shape.setTransform(38.5,38.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,77);


(lib.aaaa = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoRISIAAwjIQjAAIAAQjg");
	this.shape.setTransform(53,53);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,106);


(lib.aaaaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{go:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// レイヤー 1
	this.instance = new lib.aaaa();
	this.instance.setTransform(53,53,1,1,0,0,0,53,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:485},12).to({x:53},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,106);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;