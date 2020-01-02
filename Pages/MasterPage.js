var homePage = require("../Pages/HomePage.js");
var customerPage = require("../Pages/CustomerPage.js");
var accountPage = require("../Pages/AccountPage.js");
var page = function(){
  this.homePage = function(){return homePage};
  this.customerPage = function(){return customerPage};
  this.accountPage = function(){return accountPage};
};
module.exports= new page();
