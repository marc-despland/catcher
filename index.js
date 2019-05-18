
const express = require('express')
var cors = require('cors');
const app = express()
//var bodyParser = require('body-parser');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


var server_port = process.env.LISTEN_PORT || 8080;
var server_ip_address = process.env.LISTEN_IP || '0.0.0.0';

app.all('*', function(req, res, next){
    console.log('New Request '+req.method+ " "+ req.protocol+'://'+req.hostname+req.originalUrl);
    console.log(req.headers);
    if (req.body!=undefined) console.log(req.body);
    console.log("");
    res.statusCode=204;
    res.end();
});

app.listen(server_port, server_ip_address, function () {
	console.log( "Listening on " + server_ip_address + ", server_port " + server_port +" 1.0");
});

