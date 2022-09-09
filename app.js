const express = require('express');

const app = express();

const PORT = 3300;

app.use(express.static('static'))

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about/abc", (req, res) => {
    res.render("about")
})

app.listen(PORT, () => {
    console.log("Woahhhh I'm running it!!! ")
})