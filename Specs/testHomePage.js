//var homePage = require("../Pages/HomePage.js");
var page = require("../Pages/MasterPage.js");
var Select = require("../Utils/select-wrapper.js")
var data = require("../data/testData.json")
describe("Test WayToAutomation Banking App",function(){
  it("Navigating to customer page",function(){
    browser.manage().window().maximize();
    browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    page.homePage().customerLogin().click();
    var select = new Select(page.customerPage().userName());
    select.selectByText("Harry Potter");
    page.customerPage().login().click();
    expect(page.accountPage().userNameText().getText()).toEqual("Harry Potter");
    //page.accountPage().depositeTab().click();
    //page.accountPage().depositeAmmount().sendKeys(data.depositeAmmountValue);
    //page.accountPage().depositeBtn().click();
    //expect(page.accountPage().depositeSuccessfullMessage().getText()).toEqual("Deposit Successful");

  });

  it("Adding the Deposite Ammount",function(){
    page.accountPage().depositeTab().click();
    page.accountPage().depositeAmmount().sendKeys(data.depositeAmmountValue);
    page.accountPage().depositeBtn().click();
    expect(page.accountPage().depositeSuccessfullMessage().getText()).toEqual("Deposit Successful");
  });

});
