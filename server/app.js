const express = require('express');
const port = process.env.PORT ?? 3000;
const app = express();

let db;

app.use(express.urlencoded({extended: true}));
app.use("/", express.static('./build', {
    index: "index.html"
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

