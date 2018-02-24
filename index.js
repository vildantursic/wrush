const express = require('express')
const app = express()
var path = require('path');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/wrush/:type/:version/:file', (req, res) => {
  const type = req.params.type,
        version = req.params.version,
        file = req.params.file;

  res.sendFile(path.join(`${__dirname}/components/${type}/${version}/${file}`));
})

app.listen(4444, () => console.log('Example app listening on port 4444!'))
