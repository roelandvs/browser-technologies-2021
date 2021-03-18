const express = require('express');
const app = express();
const port = 3000;

// const { dataTransformation } = require('./js/data/dataTransformation');
// const { detailDataTransformation } = require('./js/data/detailDataTransformation');

app
    .use(express.static('public'))
    .set('view engine', 'ejs')

//routes
app.get('/', (req, res) => {
    // dataTransformation()
    //     .then(response => {
            res.render('pages/overview')
        // });
})

app.get('/:id', (req, res) => {
    // detailDataTransformation(req.params.id)
    //     .then(response => {
            res.render('pages/form')
        // });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});