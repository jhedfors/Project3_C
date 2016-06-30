myApp.factory('taskFactory', function($http,$location){
  var factory = {}
  var tasks = []
  factory.index = function(callback){
    $http.get('/tasks').success(function(questions_from_db){
      callback(questions_from_db)
      tasks = questions_from_db
    })
  }
  factory.create = function(data, callback){
    if (data.title && data.description) {
      $http.post('/task', data).success(function(response_from_server){
        console.log('response_from_server',response_from_server);
        callback()
      })
    }else callback({status:false})
  }

  factory.show = function(id,callback){
    console.log('id in factory', id);
    $http.get("/user/"+ id).success(function(data_from_db){
      // current_question = data_from_db
      callback(data_from_db)
    })
  }
  factory.toggle = function(id,callback){
    console.log('toggle in factory', id);
    $http.post('/complete/'+id).success(function(data){
      callback()
    })
  }

  return factory
})
