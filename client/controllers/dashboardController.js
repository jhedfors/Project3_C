myApp.controller('dashboardController',function(taskFactory,userFactory,$location,$filter){
  var self = this
  self.tasks = []
  self.users = []
  self.activeUser;
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
      self.tasks = user_from_factory._tasks
    })
  }
  getTasks(self.activeUser._id)

  var getUsers = function(){
    userFactory.index(function(questions_from_factory){
      self.users = questions_from_factory.filter(function(item) {
          return item.name !== self.activeUser.name;
      });
    })
  }
  getUsers()

  self.create = function(){
    var new_task = {creator: self.activeUser.name,_creator: self.activeUser._id, title: self.title, description: self.description, complete:false, tagged: self.tagged}
    taskFactory.create(new_task,function(){
      self.title = ''
      self.description = ''
      self.tagged = ''
      getTasks(self.activeUser._id)
    })
  }
  self.toggle = function(id){
    taskFactory.toggle(id,function(){
      getTasks(self.activeUser._id)
    })
  }
})
