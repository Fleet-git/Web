var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res){
res.status(200).sendFile(__dirname+'/public/index.html');
});

app.listen(80, function() {
console.log('server running@port 80');
});
