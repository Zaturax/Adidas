const assert = require('assert');
const {resolve} = require('path');

module.exports = function (options) {
  const { Step } = options;

  /**
  * Clicks on specified element 
  */
  Step('I click the {string} element', async function (element) {
    await global.page.waitForLoadState('networkidle');
    await global.page.click(global.config.paths[element]);
  });

  /**
  * Hovers on specified element 
  */
  Step('I hover the {string} element', async function (element) {
    await global.page.waitForLoadState('networkidle');
    await global.page.hover(global.config.paths[element]);
  });

  /**
  * Fills specified element with string (Can use string literal or aliases, useful for username or passwords)
  */
  Step(
    'I fill the {string} element with {string}',
    async function (element, content) {
      const _content =
        global.config.inputs && global.config.inputs[content]
          ? global.config.inputs[content]
          : content;

      await global.page.fill(global.config.paths[element], _content);
    }
  );

  /**
  * Creates a handler for the file uploaded dom event which uploads specified file. Use the extension in the step invocation
  */
  Step(
    'I upload the {string} file to the {string} uploader element',
    async function (fileName, element){
      const fileChooserPromise = page.waitForEvent('filechooser');
      await global.page.click(global.config.paths[element]);
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles(resolve(fileName));
    }
  );

  /**
  * Select the specified option from the specified dropdown element
  */
  Step(
    'I select the {string} option on the {string} dropdown',
    async function (option, element){
      await global.page.selectOption(global.config.paths[element],option);
    });
};
