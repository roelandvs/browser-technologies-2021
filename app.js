const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const { getCourseData } = require('./js/getCourseData');
const { checkUser } = require('./js/checkUser');

app
    .use(express.static('public'))
    .use(bodyParser.urlencoded({extended: true}))
    .set('view engine', 'ejs')

//routes
app.get('/', (req, res) => {
    res.render('pages/login')
})

app.post('/', (req, res) => {
    checkUser(req.body, res);
})

app.get('/courses', (req, res) => {
    res.render('pages/overview')
})

app.get('/courses/:id', (req, res) => {
    res.render('pages/form', { data: getCourseData(req.params.id)[0] })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});