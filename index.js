// khoi tao
const express = require('express');
const app = express();
const port = 3000;


// render
app.get('/',(req,res) => {
    res.send('Hello world!');
})


//lang nghe
app.listen(port,() => {
    console.log(`Web app listening on port ${port}`);
})