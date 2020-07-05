/* eslint-disable func-names */
/* eslint-disable no-undef */

describe('CEP Researcher', function () {
  before((browser) => browser.url(`${process.env.TESTS_URL}`));

  test('Step 1: Input valid CEP should return address info', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('CEP Researcher')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', '06243170')
      .assert.visible('input[type=submit]')
      .click('input[type=submit]')
      .assert.containsText('h2', 'Address found:');
  });

  test('Step 2: Click on the CEP found should redirect to CEP details page', function (browser) {
    browser.assert
      .visible('a[id=cepFound]')
      .click('a[id=cepFound]')
      .assert.titleContains('06243170');
  });

  test('Step 3: Click on footer link should redirect to home page', function (browser) {
    browser.assert
      .visible('a[id=backToHome]')
      .click('a[id=backToHome]')
      .assert.titleContains('CEP Researcher');
  });

  after((browser) => browser.end());
});
