const expresskk = require("express");
const app = expresskk();
const port = 3000;

//route
app.get("/", (req, res) => {
    var a = 3
    var b = 2.3
    var c = a+b
    var d = a*b
    res.send("You know i'm saying ???!")
}) 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
