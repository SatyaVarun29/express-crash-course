const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const posts=require('./routes/posts')

const app = express();

app.use('/api/posts',posts)


// app.use(express.static(path.join(__dirname,'public')))

app.listen(port, () => console.log(`Listening on port ${port}`));
