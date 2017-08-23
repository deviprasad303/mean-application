/**
 * Created by devi on 8/15/2017.
 */

var User=require('../datasets/users');
var Group=require('../datasets/group')
module.exports.addtogroup=function(req,res){

    var group=new Group(req.body);
    group.save();
    res.json(req.body);
}
