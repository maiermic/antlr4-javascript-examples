ace.define('ace/ext/antlr4/token-type-map', [], function (require, exports, module) {
  "use strict";

  /**
   * Create a token type map for an Antlr4Tokenizer.
   *
   * @example
   * <pre><code>
   * var map = createTokenTypeMap({
   *   literals: {
   *     'keyword.operator': ['+', '-'],
   *     'keyword.control': 'return'
   *   },
   *   symbols: {
   *     'identifier': 'ID',
   *     'constant.numeric': 'INT'
   *   }
   * });
   * var tokenizer = new Antlr4Tokenizer(MyLexer, tokenTypeToNameMap);
   * </pre></code>
   *
   * @param mapping
   * An object that maps ACE token types to ANTLR4 token names.
   *
   * @param {Object.<string, (string|string[])>} mapping.literals
   * An object that maps ACE token types to ANTLR4 literal tokens.
   * Literal tokens are not enclosed in quotes.
   * That means instead of <code>"'+'"</code> you just write <code>"+"</code>.
   *
   * @param {Object.<string, (string|string[])>} mapping.symbols
   * An object that maps ACE token types to ANTLR4 symbol tokens.
   *
   * @returns {AntlrTokenNameToAceTokenTypeMap}
   */
  function createTokenTypeMap(mapping) {
    var literals = mapLiterals(mapping.literals);
    var symbols = mapSymbols(mapping.symbols);
    return mergeObjects(literals, symbols);
  }

  function mergeObjects(a, b) {
    return toPairs(a).concat(toPairs(b))
      .reduce(addKeyValuePairToObject, {});
  }

  function mapLiterals(literals) {
    return mapObject(
      literals,
      function (type, tokenName) {
        return toArray(tokenName)
          .map(toLiteralName)
          .map(function (literalName) {
            return [literalName, type];
          });
      }
    );
  }

  function mapSymbols(symbols) {
    return mapObject(
      symbols,
      function reverse(type, tokenName) {
        return toArray(tokenName)
          .map(function (symbolName) {
            return [symbolName, type];
          });
      }
    );
  }

  function mapObject(obj, mapFn) {
    return toPairs(obj)
      .map(function (pair) {
        return mapFn(pair[0], pair[1]);
      })
      .reduce(flatten, [])
      .reduce(addKeyValuePairToObject, {});
  }

  function addKeyValuePairToObject(obj, pair) {
    obj[pair[0]] = pair[1];
    return obj;
  }

  function toPairs(obj) {
    return Object.keys(obj)
      .map(function (key) {
        return [key, obj[key]];
      });
  }

  function flatten(a, b) {
    return a.concat(b);
  }

  function keysWithValue(keys, value) {
    return keys.reduce(function (obj, key) {
      obj[key] = value;
      return obj;
    }, {});
  }

  function toArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  function toLiteralName(name) {
    return "'" + name + "'";
  }

  module.exports = {
    createTokenTypeMap: createTokenTypeMap,
    mergeObjects: mergeObjects,
    mapLiterals: mapLiterals,
    mapSymbols: mapSymbols,
    flatten: flatten,
    keysWithValue: keysWithValue,
    mapObject: mapObject,
    toArray: toArray,
    toLiteralName: toLiteralName,
    toPairs: toPairs
  };
});