module.exports = function (options) {
  const {Step} = options;
  /**
  * Makes the browser navigate to given url alias
  */
  Step('I go to the {string}', async function (name) {
    let url = global.config.hosts[name];
    if (url.port) {
      url = `${url.host}:${url.port}`;
    }
    await global.page.goto(url);

    /**
     * Removes the GDPR modal
     */

    try {
      await page.waitForSelector('[data-auto-id="glass-gdpr-default-consent-accept-button"]', { timeout: 5000 })
      await global.page.click('[data-auto-id="glass-gdpr-default-consent-accept-button"]');
    } catch (error) {`enter code here`
      console.log("The element didn't appear.")
    }

    
  });
};
