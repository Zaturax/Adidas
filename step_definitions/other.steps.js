const assert = require('assert');

module.exports = function (options) {
  const {Step} = options;
  /**
  * Keeps textcont of element in specified value/global variable
  */
  Step(
    'I keep the {string} in variable {string}',
    async function (element, variable) {
      const text = await global.page.textContent(global.config.paths[element]);
      global.config.variables[variable] = text.replace(/"/g, '');
    }
  );

  Step(
    'I select a random shoe size',
    async function () {
      await global.page.waitForLoadState('networkidle');
      await global.page.click(`button:has-text("${global.config.inputs.shoeSize}")`);
    }
  );
};
