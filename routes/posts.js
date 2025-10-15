import express from "express";
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

router.get("/:id", (req, res, next) => {
  // console.log(req.params);

  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  //   console.log(post);

  if (!post) {
    const error = new Error(` data not found for this ${id}`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
});

//post request
router.post("/", (req, res, next) => {
  // console.log(req.body)
  let newposts = {
    id: posts.length + 1,
    text: req.body.text,
  };
  if (!newposts.text) {
    const error = new Error("Please include a text");
    error.status = 400;
    return next(error);
  }
  posts.push(newposts);
  res.status(201).json(posts);
});

//put request(update)
router.put("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(400).json(`msg:Data Not found with this ${id}`);
  }
  post.text = req.body.text;
  res.status(200).json(posts);
});

router.delete("/:id", (req, res,next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id == id);
  if (!post) {
    return res.status(400).json({ msg: "cannot be deleted" });
  }
  posts = posts.filter((post) => post.id !== id);

  res.status(201).json(posts);
});

export default router;
