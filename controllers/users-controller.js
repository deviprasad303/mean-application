/**
 * Created by devi on 8/9/2017.
 */

var Users=require('../datasets/users');
module.exports.getUsers=function (req,res) {
    Users.find({},function(err,UsersData){
        if(err)
        {
            res.error(err);

        }else
        {
            res.json(UsersData);
            console.log(UsersData);
        }
    })
    
}
