(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.timeout = factory());
})(this, (function () { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	module.exports = _classCallCheck;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var SandBoxWindow = function SandBoxWindow(context, frameWindow) {
	  _classCallCheck(this, SandBoxWindow);

	  return new Proxy(frameWindow, {
	    get: function get(target, name) {
	      if (name in context) {
	        return context[name];
	      }

	      return target[name];
	    },
	    set: function set(target, name, value) {
	      if (name in context) {
	        return context[name] = value;
	      }

	      target[name] = value;
	    }
	  });
	};

	return SandBoxWindow;

}));
