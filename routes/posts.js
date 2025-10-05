import express, { json, text } from "express";
const router = express.Router();

let posts = [
  { id: 1, text: "this is post1" },
  { id: 2, text: "this is post2" },
  { id: 3, text: "this is post3" },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  console.log(limit);
  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }
  res.json(posts);
});

router.get("/:id", (req, res) => {
  // console.log(req.params);

  const id = parseInt(req.params.id);
  const post = posts.filter((post) => post.id === id);
  console.log(post);

  if (!post) {
    return res.status(404).json({ msg: `Data not found for this ${id}` });
  }
  res.status(200).json(post);
});

//post request
router.post("/", (req, res) => {
  // console.log(req.body)
  let newposts={
    id:posts.length+1,
    text:req.body.text
  }
  if(!newposts.text) {
    return res.status(400).json({msg:'please include a title'})
  }
   posts.push(newposts)
   res.status(201).json(posts)

});

export default router;
