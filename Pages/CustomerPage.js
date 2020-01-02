var CustomerPage = function(){


  this.userName = function(){return $("#userSelect")};
  this.login = function(){return element(by.buttonText('Login'))};
};

module.exports= new CustomerPage();
