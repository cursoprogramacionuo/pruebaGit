let express = require("express")
let app = express();

app.get("/", (req,res) => {
    res.send("Prueba")
})

app.get("/a", (req,res) => {
    res.send("a")
})

app.get("/b", (req,res) => {
    res.send("b")
})

app.get("/c", (req,res) => {
    res.send("c")
})

app.listen(3000, () => {
    console.log("Listen in 3000")
})