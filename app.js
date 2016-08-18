var express = require('express');
var app = express();
var Router = express.Router();
var bodyParser = require('body-parser');
app.use(express.static('public'));
// app.use(express.static('src/views'));
app.set('views' , './src/views');
app.set('view engine' , 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


Router.route('/')
	.get(function(req , res){
		res.render('index' , {listall: ['1' , '3'] , go: req.query.name});
		console.log(req.query.name);
		console.log(test.obj1);
	})
	.post(function(req , res){
		res.render('index' , {listall: ['1' , '3'] , gogo: req.body.name});
		console.log(req.body.name);
	});

Router.route('/some')
	.get(function(req , res){
		res.send('hello 1');
	});
app.use	('/' ,  Router);





// nav: [{link: '/something' , text: 'something'} , {link: '/something_else' , text: 'something}]
//do that to create links , and then create link tags in the jade view
//nav[i].links  

app.listen(3000 , function(){
	console.log("started");
});