// An example configuration file.
exports.config = {
  directConnect: true,  //no need to start webdriver manager. if it is false we need to provide selenium address

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../Specs/testHomePage.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare: function() {
    var exec = require('child_process').exec;
    console.log("removing directory");
    exec("RD /S /Q allure-results");
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
    exec("mvn jetty:stop -Djetty.port=1234");
  },
  onComplete: function () {
    var date = new Date();
    var dateFile = date.getFullYear()+""+(date.getMonth()+1)+""+date.getDate()+""+date.getHours()+""+date.getMinutes()+""+date.getSeconds();
    console.log(dateFile);
    var exec = require('child_process').exec;
    exec("cd/ && cd /WayToAutomationBankingApp/Results && mkdir "+String(dateFile));
    //exec("mvn site -Dallure.results_partten=allure-results && mvn jetty:run -Djetty.port=1234")
    //exec("mkdir allure-reports")
    exec("allure generate -o D://WayToAutomationBankingApp//Results//"+String(dateFile));
    exec("cd/ && cd /WayToAutomationBankingApp/Utils && node sentMail.js")
    console.log("executing report");
  }
};
