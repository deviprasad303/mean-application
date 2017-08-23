/**
 * Created by devi on 8/15/2017.
 */

var User=require('../datasets/users');
module.exports.removetask=function(req,res){
    var userId=req.body.userId;
    var taskname=req.body.taskname;


        User.findById(userId,function(err,userData){
            var user=userData;
            user.tasks.pop({taskname:taskname});
            user.save();
    })
}
