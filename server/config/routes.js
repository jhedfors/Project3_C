var user = require('../controllers/users.js')
var task = require('../controllers/tasks.js')


module.exports = function(){
  app.get('/users',user.index)
  app.get('/user/:name',user.show)
  app.get('/user_id/:id',user.show_id)

  app.post('/user', function(req, res){
    console.log('ROUTEs', req);
    user.create(req,res)
  })
  app.post('/complete/:id', task.toggle_complete)

  // app.get('/question/:id',question.show)
  // app.get('/questions',question.index)
  app.get('/tasks',task.index)

  app.post('/task',task.create)
  // app.post('/answer',question.add_answer)
  //
  // app.post('/like/:question_id/:answer_id',question.like)

}
