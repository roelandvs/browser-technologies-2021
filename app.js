const express = require('express');
const app = express();
const port = 3000;

const { getCourseData } = require('./js/getCourseData');

app
    .use(express.static('public'))
    .set('view engine', 'ejs')

//routes
app.get('/courses', (req, res) => {
    // dataTransformation()
    //     .then(response => {
            res.render('pages/overview')
        // });
})

app.get('/courses/:id', (req, res) => {
    // getCourseData(req.params.id)
    //     .then(response => {
    //         res.render('pages/form', { data: response })
    //     });

    res.render('pages/form', { data: getCourseData(req.params.id)[0] })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});