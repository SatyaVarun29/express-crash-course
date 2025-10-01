const express = require("express");
const path = require("path");
const port =process.env.PORT || 8000;

const app = express();

let posts=[
    {id:1, text:'this is post1'},
    {id:2, text:'this is post2'},
    {id:3, text:'this is post3'},
    
]

app.get('/api/posts', (req,res)=>{
   res.json(posts)
})

app.get('/api/posts/:id', (req,res)=>{
    console.log(req.params);
    
    const id=parseInt(req.params.id)
   res.json(posts.filter((post)=>post.id===id))
})



// app.use(express.static(path.join(__dirname,'public')))

app.listen(port, () => console.log(`Listening on port ${port}`));
