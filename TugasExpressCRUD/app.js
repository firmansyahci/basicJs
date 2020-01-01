const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const conn = require('./lib/mysql/connection.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sql = "SELECT * FROM todo";
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.render('index', {data: result});
    });
});

//create
app.post('/save', (req, res) => {    
    let data = { task: req.body.task };
    let sql = "INSERT INTO todo SET ?";
    let query = conn.query(sql, data,(err, data) => {
       if (err) throw err;
        res.redirect('/');
    });
});

//edit
app.post('/update', (req, res) => {
    let sql = "UPDATE todo SET task='"+req.body.task+"' WHERE id="+req.body.id;
    let query = conn.query(sql, (err, data) => {
        if (err) throw err;
        res.redirect('/');
    });
});

//delete
app.post('/delete', (req, res) => {
    let sql = 'DELETE FROM todo WHERE id='+req.body.id+'';
    let query = conn.query(sql, (err, data) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(port, () => console.log('app listen on port' + port))