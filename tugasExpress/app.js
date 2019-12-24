const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.get('/create', (req, res) => {
        res.render('index')
})

app.post('/', (req, res) => {
    let username = req.body.username
    res.end(username)
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(port, () => console.log('app listening on port %s!', port))