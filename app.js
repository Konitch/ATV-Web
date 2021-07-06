//importando o express 
var express = require('express');

//Criando a var app para chamar os métodos do express
var app = express();

//setando a view engine => EJS
app.set('view engine', 'ejs');

//Config path do arquivos estáticos
app.use(express.static('./public'));

app.get('/', function(req,res){
    res.render('home/index');
});

//----------------math-----------------------
//pow  (L)
app.get('/pow', function(req,res){
    res.render('potencia/calcpotencia');
});

//min and max (D)
app.get('/minemax', function(req,res){
    res.render('minemax/minmax');
});

//raiz 
app.get('/raiz', function(req,res){
    res.render('raiz/calcraiz');
});

//--------random----------------
app.get('/numeroaleatorio', function(req,res){
    res.render('random/random');
});


//--------Server----------------
app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});