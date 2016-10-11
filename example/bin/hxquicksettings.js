// Generated by Haxe 3.3.0 (git build development @ 297c528)
(function ($global) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
var Main = function() {
	this.document = window.document;
	var _gthis = this;
	this.document.addEventListener("DOMContentLoaded",function(event) {
		_gthis.init();
	});
};
Main.__name__ = true;
Main.main = function() {
	new Main();
};
Main.prototype = {
	init: function() {
		var _gthis = this;
		this.panel1 = QuickSettings.create(10,10,"Panel 1").addRange("Range",0,100,30,1,function(value) {
			_gthis.output("Range",value == null?"null":"" + value);
		}).addNumber("Number",0,100,50,1,function(value1) {
			_gthis.output("Number",value1 == null?"null":"" + value1);
		}).addColor("Color","#ff0000",function(value2) {
			_gthis.output("Color",value2 == null?"null":"" + value2);
		}).addBoolean("Boolean",true,function(value3) {
			_gthis.output("Boolean",value3 == null?"null":"" + value3);
		}).addText("Text","some text",function(value4) {
			_gthis.output("Text",value4 == null?"null":"" + value4);
		}).addTextArea("TextArea","a whole bunch of text can go here",function(value5) {
			_gthis.output("TextArea",value5 == null?"null":"" + value5);
		}).addButton("Button",function() {
			_gthis.output("Button","clicked");
		}).addHTML("Info","Info. This is a description...");
		var canvas = js_Boot.__cast(this.document.createElement("canvas") , HTMLCanvasElement);
		var context = canvas.getContext("2d");
		canvas.width = 100;
		canvas.height = 100;
		context.beginPath();
		context.fillStyle = "red";
		context.arc(50,50,50,0,Math.PI * 2);
		context.fill();
		this.panel2 = QuickSettings.create(250,10,"Panel 2");
		this.panel2.addDropDown("DropDown",["one","two","three"],function(value6) {
			_gthis.output("DropDown",value6.value);
		});
		this.panel2.addImage("Image","boyhowdy.jpg");
		this.panel2.addProgressBar("ProgressBar",100,50);
		this.panel2.addElement("Element (canvas)",canvas);
		this.panel3 = QuickSettings.create(490,10,"Panel3");
		this.panel3.addHTML("HTML","<b>bold</b> <u>underline</u> <i>italic</i><ol><li>one</li><li>two</li><li>three</li>");
		this.panel3.addPassword("Password","12345678",function(value7) {
			_gthis.output("Password",value7 == null?"null":"" + value7);
		});
		this.panel3.addDate("Date","2016-07-11",function(value8) {
			_gthis.output("Date",value8 == null?"null":"" + value8);
		});
		this.panel3.addTime("Time","06:03:25",function(value9) {
			_gthis.output("Time",value9 == null?"null":"" + value9);
		});
		this.panel4 = QuickSettings.create(730,10,"Output Panel");
		this.panel4.addTextArea("Output");
		this.panel5 = QuickSettings.create(730,200);
		this.panel5.addFileChooser("file chooser","pick an image...","image/*",$bind(this,this.onFileChosen));
		this.panel5.addTextArea("file info","");
		this.panel5.setTextAreaRows("file info",10);
		this.panel5.addImage("image","");
		this.panel6 = QuickSettings.parse("{\n\t\"title\": \"Live Parse Demo\",\n\t\"x\": 490,\n\t\"y\": 350,\n\t\"draggable\": true,\n\t\"collapsible\": true,\n\t\"snapToGrid\": true,\n\t\"gridSize\": 10,\n\t\"controls\": [\n\t\t{\n\t\t\t\"type\": \"range\",\n\t\t\t\"title\": \"range test\",\n\t\t\t\"min\": 0,\n\t\t\t\"max\": 100,\n\t\t\t\"value\": 50,\n\t\t\t\"step\": 1\n\t\t},\n\t\t{\n\t\t\t\"type\": \"textarea\",\n\t\t\t\"title\": \"text area test\",\n\t\t\t\"value\": \"just some text\"\n\t\t},\n\t\t{\n\t\t\t\"type\": \"boolean\",\n\t\t\t\"title\": \"boolean test\",\n\t\t\t\"value\": true\n\t\t}\n\t]\n}");
		var settings = QuickSettings.create(970,10,"HTML demo");
		settings.addInfo("info","Since all the previous demos were canvas-based, I just wanted to show that there's no dependency on canvas here.");
		settings.addInfo("info2","Most of this is done through direct binding on the HTML objects.");
		settings.addInfo("info3","The fontSize control needs a callback because we have to add a unit (px or whatever)");
		settings.bindText("title",this.document.title,this.document);
		settings.bindColor("backgroundColor","#ffffff",this.document.body.style);
		settings.bindText("innerHTML","Hello world",this.document.getElementsByTagName("h1")[0]);
		settings.bindDropDown("fontFamily",["serif","sans-serif","monospace","cursive"],this.document.body.style);
		settings.addRange("fontSize",1,40,10,1,function(value10) {
			_gthis.document.getElementsByTagName("p")[0].style.fontSize = value10 + "px";
		});
	}
	,output: function(name,value) {
		this.panel4.setText("Output",name + " : " + value);
	}
	,onFileChosen: function(file) {
		window.console.log(file);
		this.panel5.setText("file info","name: " + file.name + "\n\nsize: " + file.size + " bytes\n\ndate: " + Std.string(file.lastModifiedDate) + "\n\ntype: " + file.type);
		this.panel5.setImageURL("image",URL.createObjectURL(js_Boot.__cast(file , File)));
	}
	,__class__: Main
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new js__$Boot_HaxeError(val);
	}
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = intf[_g1++];
			if(i == cl || js_Boot.__interfLoop(i,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		if((o instanceof Array)) {
			return o.__enum__ == null;
		} else {
			return false;
		}
		break;
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return true;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return (o|0) === o;
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					return true;
				}
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class?o.__name__ != null:false) {
			return true;
		}
		if(cl == Enum?o.__ename__ != null:false) {
			return true;
		}
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
js_Boot.__toStr = ({ }).toString;
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
