
var userSchema = mongoose.Schema({
  name:{type:String, required:true, minlength:2},
  _tasks:[{type:mongoose.Schema.Types.ObjectId, ref: 'Task'}]
},{timestamps:true})
var user = mongoose.model('User', userSchema)

var taskSchema = mongoose.Schema({
  title:{type:String, required:true, minlength:5},
  creator:{type:String},
  _creator:{type:mongoose.Schema.Types.ObjectId, ref: 'User'},
  description:{type:String, required:true, minlength:10},
  complete:{type:Boolean}
},{timestamps:true})
var task = mongoose.model('Task', taskSchema)
