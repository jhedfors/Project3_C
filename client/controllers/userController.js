myApp.controller('userController',function(taskFactory,userFactory,$location, $routeParams){
  console.log('params', $routeParams);
  var self = this
  self.profile_user;//which profile we are looking at
  self.activeUser;//for check if logged in
  self.current_profile = $routeParams.id
  var getActiveUser = function(){
    userFactory.getActiveUser(function(data){
      if (!data) {
        $location.url('/index')
      }
      self.activeUser = data

    })
  };
  getActiveUser()
  var getTasks = function(id){
    userFactory.show_id(id, function(user_from_factory){
      self.profile_user = user_from_factory
      console.log(self.profile_user);
    })
  }
  getTasks(self.current_profile)
  self.toggle = function(id){
    console.log(id);
    taskFactory.toggle(id,function(){
      getTasks(self.profile_user._id)
    })
  }
})
