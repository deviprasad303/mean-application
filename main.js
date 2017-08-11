var express=require('express');
var mongoose=require('mongoose');
var body_parser=require('body-parser');
var path=require('path');
//var multer=require('multer');
var multipart=require('connect-multiparty');
var multipartMiddleware=multipart();

var app=express();
var authenticationController=require('../server/controllers/authentication-controller');
var profileController=require('../server/controllers/profile-controller');
var  meanController=require('../server/controllers/mean-controller');
var usersController=require('../server/controllers/users-controller');
mongoose.connect('mongodb://localhost:27017/mean-demo', {useMongoClient: true});
app.use(multipartMiddleware);
app.use(body_parser.json());
//app.use(multipartMiddleware);
app.use('/app',express.static(path.join(__dirname,'../main', "/app")));
app.use('/node_modules',express.static(path.join(__dirname ,'../main',"/node_modules")));
app.use('/uploads',express.static(path.join(__dirname,'../../mean-demo','/uploads')));
app.get('/api/mean/get',meanController.getMean);
app.get('/api/user/get',usersController.getUsers);
app.get('/',function(req,res){
res.sendFile(path.join(__dirname, '../main', 'index.html'));});


app.post('/api/user/login',authenticationController.login);
app.post('/api/user/signup',authenticationController.signup);
app.post('/api/profile/editPhoto',multipartMiddleware,profileController.updatePhoto);
app.post('/api/profile/updateUsername',profileController.updateUsername);
app.post('/api/profile/updateBio',profileController.updateBio);
app.post('/api/mean/post',meanController.postMean);
app.get('/api/user/login',function(req,res){
    res.send('hi hello')});
app.get('/api/profile/editPhoto',function(req,res){
    res.send('hi hello')});


app.listen('3000',function(){
    console.log("listening for localhost 3000");
});