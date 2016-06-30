myApp.factory('userFactory', function($http,$location){
  var self = this
  var factory = {}
  var users = []
  self.activeUser = '';
  factory.index = function(callback){
    $http.get('/users').success(function(questions_from_db){
      callback(questions_from_db)
      users = questions_from_db
    })
  }
  factory.show = function(name,callback){
    $http.get("/user/"+ name).success(function(data_from_db){
      callback(data_from_db)
    })
  }
  factory.show_id = function(id,callback){
    $http.get("/user_id/"+ id).success(function(data_from_db){
      callback(data_from_db)
    })
  }
  factory.getActiveUser = function(callback){
    callback(self.activeUser)
  }
  factory.login = function(user,callback){
    var new_user= {name:user}
    $http.get('/user/'+user).success(function(data){
      self.activeUser = data
      if(data == null){
        $http.post('/user',new_user).success(function(data){
          self.activeUser = data
          callback(self.activeUser)
        })
      }
      else{
        callback(self.activeUser)
      }
    })
  }
  factory.logout = function(callback){
    self.activeUser = ''
    callback()
  }
  return factory
})
