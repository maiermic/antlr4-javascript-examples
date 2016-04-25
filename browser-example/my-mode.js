ace.define(
  'ace/mode/my-mode',
  [
    "require",
    "exports",
    "module",
    "ace/lib/oop",
    "ace/mode/text",
    "ace/ext/antlr4/token-type-map",
    "ace/ext/antlr4/tokenizer",
    "ace/mode/text_highlight_rules",
    "ace/worker/worker_client"
  ],
  function(require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var tokenTypeMapping = antlr4_require('./cymbol-token-type-mapping');
    var createTokenTypeMap = require('ace/ext/antlr4/token-type-map').createTokenTypeMap;
    var tokenTypeToNameMap = createTokenTypeMap(tokenTypeMapping);
    var CymbolLexer = antlr4_require('./parser/CymbolLexer').CymbolLexer;
    var Antlr4Tokenizer = require('ace/ext/antlr4/tokenizer').Antlr4Tokenizer;

    var MyMode = function() {
    };
    oop.inherits(MyMode, TextMode);

    (function() {

      this.$id = "ace/mode/my-mode";

      this.getTokenizer = function() {
        if (!this.$tokenizer) {
          this.$tokenizer = new Antlr4Tokenizer(CymbolLexer, tokenTypeToNameMap);
        }
        return this.$tokenizer;
      };

      var WorkerClient = require("ace/worker/worker_client").WorkerClient;
      this.createWorker = function(session) {
        this.$worker = new WorkerClient(["ace"], "ace/worker/my-worker", "MyWorker");
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

    }).call(MyMode.prototype);

    exports.Mode = MyMode;
});