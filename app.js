const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

// Create the express server instance
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use( (req, res, next) => {
    console.log("Hola");
    next();
})

app.get('/ta/:nombre', (req, res) => {
    
    //let nombre = req.params.nombre;
    let {color, surname, name} = req.query;

    res.render('home', {nombre:name, surname, color});
});


app.get('/bancoseguro', (req, res) => {
    //let nombre = req.params.nombre;
    res.render('banco', {login:false});
});


app.post('/bancoseguro', (req, res) => {
    console.log(req.query);
    let user = req.body.user;
    let login = false;
    console.log(req.nombrepropio);
    if(user == 'marc'){
        login = true;
    }
    console.log('POST')
    res.render('banco', {login});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));