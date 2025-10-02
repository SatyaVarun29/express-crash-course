const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

let posts = [
  { id: 1, text: "this is post1" },
  { id: 2, text: "this is post2" },
  { id: 3, text: "this is post3" },
];

app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  console.log(limit);
  if (!isNaN(limit) && limit > 0) {
  return  res.json(posts.slice(0, limit));
  } 
    res.json(posts);
  
});

app.get("/api/posts/:id", (req, res) => {
  // console.log(req.params);

  const id = parseInt(req.params.id);
  const post = posts.filter((post) => post.id === id);
  console.log(post);

  if (!post) {
    return res.status(404).json({ msg: `Data not found for this ${id}` });
  } 
    res.status(200).json(post);
});

// app.use(express.static(path.join(__dirname,'public')))

app.listen(port, () => console.log(`Listening on port ${port}`));
