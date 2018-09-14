const server = require('selenium-server');
const IEdriver = require('iedriver');
const driver = require('chromedriver');

var config = require('./nightwatch.json');
config.selenium.server_path = server.path;
config.selenium.cli_args['webdriver.ie.driver'] = IEdriver.path;
config.selenium.cli_args['webdriver.chrome.driver'] = driver.path;

//require('babel-core/register')

console.log(IEdriver.path)
console.log(driver.path)

module.exports = config