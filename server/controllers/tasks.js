var Task = mongoose.model('Task')
var User = mongoose.model('User')
module.exports = (function(){
  return {
    index: function(request, response){
      Task.find({}, function(err,all_tasks){
        response.json(all_tasks)
      })
    },
    create: function(request, response){
      // console.log('request', request);
      var new_task = new Task(request.body)
      new_task.save(function(err){
        if(err){
          console.log('err', err);
          response.json(err)
        }
        else {
          console.log('new_task',new_task);
          User.findOne({_id:new_task._creator}, function(err,user_creator){
            console.log('user_creator',user_creator);
            user_creator._tasks.push(new_task._id)
            user_creator.save(function(err){
              console.log('user_creator after save',user_creator);
              if (err) response.json(err)
              else if (request.body.tagged) {
                User.findOne({_id:request.body.tagged}, function(err,user_tagged){
                  console.log('user_tagged',user_tagged);
                  user_tagged._tasks.push(new_task._id)
                  user_tagged.save(function(err){
                    if (err) response.json(err)
                    else response.json({success:true})

                  })
                })
              }
              else{
                response.json({success:true})
              }
            })
          })
        }
      })
    },
    toggle_complete: function(request,response){
      Task.findOne({_id:request.params.id}, function(err,task){
        console.log('results', task.complete);
        if(task.complete == false){
          task.complete = true
        }
        else{
          task.complete = false
        }
        task.save()
        response.json({status:true})
      })
    }
  }
})()
