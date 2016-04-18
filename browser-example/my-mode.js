ace.define('ace/mode/my-mode',["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules", "ace/worker/worker_client" ], function(require, exports, module) {
  var oop = require("ace/lib/oop");
  var TextMode = require("ace/mode/text").Mode;
  var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

  var MyHighlightRules = function() {
    var keywordMapper = this.createKeywordMapper({
      "keyword.control": "if|then|else",
      "keyword.operator": "and|or|not",
      "keyword.other": "class",
      "storage.type": "int|float|text",
      "storage.modifier": "private|public",
      "support.function": "print|sort",
      "constant.language": "true|false"
    }, "identifier");
    this.$rules = {
      "start": [
        { token : "comment", regex : "//" },
        { token : "string",  regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]' },
        { token : "constant.numeric", regex : "0[xX][0-9a-fA-F]+\\b" },
        { token : "constant.numeric", regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b" },
        { token : "keyword.operator", regex : "!|%|\\\\|/|\\*|\\-|\\+|~=|==|<>|!=|<=|>=|=|<|>|&&|\\|\\|" },
        { token : "punctuation.operator", regex : "\\?|\\:|\\,|\\;|\\." },
        { token : "paren.lparen", regex : "[[({]" },
        { token : "paren.rparen", regex : "[\\])}]" },
        { token : "text", regex : "\\s+" },
        { token: keywordMapper, regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b" }
      ]
    };
  };
  oop.inherits(MyHighlightRules, TextHighlightRules);

  var MyMode = function() {
    this.HighlightRules = MyHighlightRules;
  };
  oop.inherits(MyMode, TextMode);

  (function() {

    this.$id = "ace/mode/my-mode";

  }).call(MyMode.prototype);

  exports.Mode = MyMode;
});