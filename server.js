const express = require("express");
const path = require("path");

const app = express();

let posts=[
    {id:1, text:'this is post1'},
    {id:2, text:'this is post2'},
    {id:3, text:'this is post3'},
    {id:4, text:'this is post4'},
]

app.get('/api/posts', (req,res)=>{
   res.json(posts)
})

// app.get("/", (req, res) => {
//   // res.send('<h1>I am express </h1>')

//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   // res.send('I am about ')
//   res.sendFile(path.join(__dirname, "public", "About.html"));
// });

app.use(express.static(path.join(__dirname,'public')))

app.listen(8000, () => console.log("Listening on port 8000"));
