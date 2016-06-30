myApp.controller('usersController',function(userFactory,$location){
  var self = this
  self.newUser = {}
  self.login = function(){
    var self = this
    userFactory.login(self.name, function(response_from_factory){
      console.log('response_from_factory', response_from_factory);
      $location.url('/dashboard')
    })
  }
  self.logout = function(){
    userFactory.logout(function(){
      $location.url('/index')
    })
  }
})
