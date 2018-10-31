module.exports = function preset(context, options = {}) {

  const { namespace } = options; ßß

  if (!namespace) {
    throw new Error("You must set config 'namespace' for babel-preset-ui5-next !")
  }

  return {
    plugins: [
      "babel-plugin-syntax-jsx",
      "babel-plugin-transform-es2015-template-literals",
      "babel-plugin-transform-es2015-literals",
      "babel-plugin-transform-es2015-function-name",
      "babel-plugin-transform-es2015-arrow-functions",
      "babel-plugin-transform-es2015-block-scoped-functions",
      "babel-plugin-transform-es2015-shorthand-properties",
      "babel-plugin-transform-es2015-computed-properties",
      "babel-plugin-transform-es2015-duplicate-keys",
      "babel-plugin-transform-es2015-for-of",
      "babel-plugin-transform-es2015-sticky-regex",
      "babel-plugin-transform-es2015-unicode-regex",
      "babel-plugin-check-es2015-constants",
      "babel-plugin-transform-es2015-spread",
      "babel-plugin-transform-es2015-parameters",
      "babel-plugin-transform-es2015-destructuring",
      "babel-plugin-transform-es2015-block-scoping",
      "babel-plugin-transform-es2015-typeof-symbol",
      "babel-plugin-transform-regenerator",
      "babel-plugin-syntax-class-properties",
      "babel-plugin-transform-async-to-generator",
      "babel-plugin-transform-object-assign",
      "babel-plugin-transform-object-rest-spread",
      ["babel-plugin-ui5-next", { namespace }]
    ]
  };
  
};