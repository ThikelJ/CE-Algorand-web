const express = require("express");
const renderTemplate = require("./functions/renderTemplate.js")
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

require("./functions/prepareApp.js")(app)

app.get('/', async (req, res) => {
    renderTemplate(res, req, "homeCE.ejs", {account: req.session.wallet});
  });

app.get('/crazy-guys', async (req, res) => {
    renderTemplate(res, req, "homeCG.ejs");
 });

app.get('/login', async (req,res)=> {
  if (!req?.query?.json) return res.redirect("/")
  if (req.session.wallet) return res.redirect("/") //res.send('<script> window.location.href = "/"; alert("Already Loged"); </script>');
    let decode = decodeURIComponent(req.query.json)
    let json = JSON.parse(decode)
    let wallet = json.address
    if (!wallet) return res.redirect("/")
    req.session.wallet = wallet
    return res.redirect("/")
})


app.listen(port, () => {
    console.log(`API listening on port ${port}!`)
  })