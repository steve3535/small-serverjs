var http=require('http');
var swig=require('swig');
var url=require('url');
var querystring = require('querystring');

exports.startServer = function(port) {

var server=http.createServer(function(req,res){

	var page=url.parse(req.url).pathname;

	if ( page === '/') {
        var params = querystring.parse(url.parse(req.url).query);
        var data = { name : 'unknown user' };
        if ('name' in params) {
        data['name'] = params['name'];
        }
	res.writeHead(200,{'Content-Type':'Text/html'});
	//res.write(swig.renderFile('templates/home.tpl', { name: 'Steve' }));
	
	res.write(swig.renderFile('templates/home.tpl', data ));
        res.end();
	}
	else {
		res.writeHead(404,{'Content-Type':'Text/html'});
		res.write('<h1>Error 404 Page Not Found</h1>');
	}

});

server.listen(port);


console.log('Server running on ' + port);

}

