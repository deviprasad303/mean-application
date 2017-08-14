/**
 * Created by devi on 8/9/2017.
 */

var Users=require('../datasets/users');
module.exports.getUsers=function (req,res) {
    Users.find({}, function (err, UsersData) {
        if (err) {
            res.error(err);

        } else {
            res.json(UsersData);

        }
    })

}

module.exports.followUser=function(req,res){
    var userId=req.body.userId,
        meanId=req.body.meanId;
   Users.findById(meanId,function(req,meaner){
meaner.followers.push({userId:userId});
meaner.save();
    });
       Users.findById(userId,function(err,follower){
follower.following.push({userId:meanId})
follower.save();
    });
}

module.exports.unfollowUser=function(req,res){
    var userId=req.body.userId,
        meanId=req.body.meanId;
    Users.findById(meanId,function(req,meaner){
        meaner.followers.pop({userId:userId});
        meaner.save();
    });
    Users.findById(userId,function(err,follower){
        follower.following.pop({userId:meanId})
        follower.save();
    });
}


