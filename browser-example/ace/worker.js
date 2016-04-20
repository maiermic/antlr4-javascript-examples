"no use strict";
(function(e) {
  if (typeof e.window != "undefined" && e.document) return;
  e.console = function() {
    var e = Array.prototype.slice.call(arguments, 0);
    postMessage({
      type: "log",
      data: e
    })
  }, e.console.error = e.console.warn = e.console.log = e.console.trace = e.console, e.window = e, e.ace = e, e.onerror = function(e, t, n, r, i) {
    postMessage({
      type: "error",
      data: {
        message: e,
        file: t,
        line: n,
        col: r,
        stack: i.stack
      }
    })
  }, e.normalizeModule = function(t, n) {
    if (n.indexOf("!") !== -1) {
      var r = n.split("!");
      return e.normalizeModule(t, r[0]) + "!" + e.normalizeModule(t, r[1])
    }
    if (n.charAt(0) == ".") {
      var i = t.split("/")
        .slice(0, -1)
        .join("/");
      n = (i ? i + "/" : "") + n;
      while (n.indexOf(".") !== -1 && s != n) {
        var s = n;
        n = n.replace(/^\.\//, "")
          .replace(/\/\.\//, "/")
          .replace(/[^\/]+\/\.\.\//, "")
      }
    }
    return n
  }, e.require = function(t, n) {
    n || (n = t, t = null);
    if (!n.charAt) throw new Error("worker.js require() accepts only (parentId, id) as arguments");
    n = e.normalizeModule(t, n);
    var r = e.require.modules[n];
    if (r) return r.initialized || (r.initialized = !0, r.exports = r.factory()
      .exports), r.exports;
    var i = n.split("/");
    if (!e.require.tlns) return console.log("unable to load " + n);
    i[0] = e.require.tlns[i[0]] || i[0];
    var s = i.join("/") + ".js";
    return e.require.id = n, importScripts(s), e.require(t, n)
  }, e.require.modules = {}, e.require.tlns = {}, e.define = function(t, n, r) {
    arguments.length == 2 ? (r = n, typeof t != "string" && (n = t, t = e.require.id)) : arguments.length == 1 && (r = t, n = [], t = e.require.id);
    if (typeof r != "function") {
      e.require.modules[t] = {
        exports: r,
        initialized: !0
      };
      return
    }
    n.length || (n = ["require", "exports", "module"]);
    var i = function(n) {
      return e.require(t, n)
    };
    e.require.modules[t] = {
      exports: {},
      factory: function() {
        var e = this,
          t = r.apply(this, n.map(function(t) {
            switch (t) {
              case "require":
                return i;
              case "exports":
                return e.exports;
              case "module":
                return e;
              default:
                return i(t)
            }
          }));
        return t && (e.exports = t), e
      }
    }
  }, e.define.amd = {}, e.initBaseUrls = function(t) {
    require.tlns = t
  }, e.initSender = function() {
    var n = e.require("ace/lib/event_emitter")
        .EventEmitter,
      r = e.require("ace/lib/oop"),
      i = function() {};
    return function() {
      r.implement(this, n), this.callback = function(e, t) {
        postMessage({
          type: "call",
          id: t,
          data: e
        })
      }, this.emit = function(e, t) {
        postMessage({
          type: "event",
          name: e,
          data: t
        })
      }
    }.call(i.prototype), new i
  };
  var t = e.main = null,
    n = e.sender = null;
  e.onmessage = function(r) {
    var i = r.data;
    if (i.command) {
      if (!t[i.command]) throw new Error("Unknown command:" + i.command);
      t[i.command].apply(t, i.args)
    } else if (i.init) {
      initBaseUrls(i.tlns), require("ace/lib/es5-shim"), n = e.sender = initSender();
      var s = require(i.module)[i.classname];
      t = e.main = new s(n)
    } else i.event && n && n._signal(i.event, i.data)
  }
})(this);