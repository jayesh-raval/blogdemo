const express = require('express')
const app = express()
//const host = "https://demo1.treelinq.com"
//const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('about page')
})



app.listen(() => {
    console.log(`Example app listening`)
})