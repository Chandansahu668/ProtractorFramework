require("../Utils/customlocators.js")


var AccountPage = function(){

 this.userNameText = function(){return element(by.binding('user'))};
 this.depositeTab = function(){return element(by.ngClick('deposit()'))};
 this.depositeAmmount = function(){return element(by.model('amount'))};
 this.depositeBtn = function(){return element(by.css("button[type='submit' i]"))};
 this.depositeSuccessfullMessage = function(){return element (by.ngShow('message'))};

};
module.exports= new AccountPage();
