const express = require('express');
const app = express();
const port = 3000;

const { checkUser } = require('./js/checkUser');
const { checkCourses } = require('./js/checkCourses');
const { getCourseData } = require('./js/getCourseData');
const { addFormContent } = require('./js/addFormContent');

app
    .use(express.static('public'))
    .use(express.urlencoded({extended: true}))
    .set('view engine', 'ejs')

//routes
app.get('/', (req, res) => {
    res.render('pages/login')
})

app.post('/', (req, res) => {
    checkUser(req.body, res);
})

app.get('/courses/:id', (req, res) => {
    res.render('pages/overview', { data: checkCourses(req.params.id)[0], id: req.params.id })
})

app.get('/courses/:course/:id', (req, res) => {
    res.render('pages/form', { data: getCourseData(req.params.course)[0], studentId: req.params.id })
})

app.post('/courses/:course/:id', (req, res) => {
    addFormContent(req.body, res, req.params.course, req.params.id);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});