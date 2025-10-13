import express from "express";

const port = process.env.PORT || 8000;
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import Errorhandler from "./middleware/error.js";

const app = express();

//json body parser
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

//logger
app.use(logger);

app.use("/api/posts", posts);

app.use(Errorhandler);

// app.use(express.static(path.join(__dirname,'public')))

app.listen(port, () => console.log(`Listening on port ${port}`));
