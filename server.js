var server = require('http').createServer(handler);
var fs = require('fs');

function handler(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(fs.readFileSync(__dirname + '/index.html'));
	res.end();
}

server.listen(8080, function(){
	console.log('server is listening');
});