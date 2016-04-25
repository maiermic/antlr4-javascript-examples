# ACE worker scripts

This package provides the two scripts *mirror.js* and *worker.js* that are required to write a worker for the
[ACE editor][ace-website] but are not bundled in [ace-builds][ace-builds-github].

## How to use

Add compatible versions of `ace-builds` and `ace-worker` to your *bower.json*

```json
"dependencies": {
  "ace-builds": "^1.2.3",
  "ace-worker": "^1.2.3"
}
```

and install dependencies:

```sh
bower install
```

The following example is a slightly modified version of the [ACE Wiki - Syntax validation][ace-syntax-validation-wiki] example: 

To add syntax validation to a new language

1. Find a syntax checker for the language. E.g. for javascript Ace uses jsHint
2. add createWorker method to your mode

```js
var WorkerClient = require("ace/worker/worker_client").WorkerClient;
this.createWorker = function(session) {
  this.$worker = new WorkerClient(["ace"], "ace/worker/my-worker", "MyWorker", "my-worker.js");
  this.$worker.attachToDocument(session.getDocument());

  this.$worker.on("errors", function(e) {
    session.setAnnotations(e.data);
  });

  this.$worker.on("annotate", function(e) {
    session.setAnnotations(e.data);
  });

  this.$worker.on("terminate", function() {
    session.clearAnnotations();
  });

  return this.$worker;

};
```

1. create a module that invokes linter and converts it's output to the format that ace can understand

**my-worker.js**

```js
importScripts("bower_components/ace-worker/worker.js");
importScripts("bower_components/ace-builds/src-noconflict/ace.js");
importScripts("bower_components/ace-worker/mirror.js");
importScripts("./my_language/lint");

ace.define('ace/worker/my-worker',["require","exports","module","ace/lib/oop","ace/worker/mirror","./my_language/lint"], function(require, exports, module) {
  "use strict";
  
  var oop = require("ace/lib/oop");
  var Mirror = require("ace/worker/mirror").Mirror;
  var lint = require("./my_language/lint");
  
  var WorkerModule = exports.WorkerModule = function(sender) {
      Mirror.call(this, sender);
      this.setTimeout(500);
      this.setOptions();
  };
  
  // Mirror is a simple class which keeps main and webWorker versions of the document in sync
  oop.inherits(WorkerModule, Mirror);
  
  (function() {
      this.onUpdate = function() {
          var value = this.doc.getValue();
          var errors = [];
          var results = lint(value);
  
          for (var i = 0; i < results.length; i++) {
              var error = results[i];
              // convert to ace gutter annotation
              errors.push({
                  row: error.line-1, // must be 0 based
                  column: error.character,  // must be 0 based
                  text: error.message,  // text to show in tooltip
                  type: "error"|"warning"|"info"
              });
          }
          this.sender.emit("lint", errors);
      };
  }).call(WorkerModule.prototype);
  
}
```


[ace-website]: https://ace.c9.io/
[ace-builds-github]: https://github.com/ajaxorg/ace-builds
[ace-syntax-validation-wiki]: https://github.com/ajaxorg/ace/wiki/Syntax-validation