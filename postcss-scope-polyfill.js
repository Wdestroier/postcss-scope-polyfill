const postcss = require('postcss');

module.exports = postcss.plugin('postcss-scope-polyfill', () => {
  return (root) => {
    root.walkAtRules('scope', (rule) => {
      const scopeSelectors = rule.params.match(/\((.*?)\)/);
      if (scopeSelectors) {
        const [from, to] = scopeSelectors[1].split('to').map(s => s.trim());

        const polyfillAtRule = postcss.atRule({
          name: 'supports',
          params: `(polyfill @scope (${scopeSelectors[1]})) `
        });

        rule.walkRules((innerRule) => {
          const clonedRule = innerRule.clone();
          clonedRule.selector = clonedRule.selector.replace(from, to);
          polyfillAtRule.append(clonedRule);
        });

        rule.after(polyfillAtRule);
      }
    });
  };
});
