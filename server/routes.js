const cors = require('cors');
const path = require('path');
const config = require('./config.js');
const bodyParser= require('body-parser');
const favicon = require('serve-favicon');
const url = require('url');
const axios = require('axios');

function handleRoutes(express, accountService) {
    const app = express();
    app.use(cors());
	app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'build')));
    app.use(favicon(path.join(__dirname, '/', '/../build/favicon.ico')));
    app.use("/static/media/", express.static(__dirname + '/../build/static/media'));
    app.use("/static/css/", express.static(__dirname + '/../build/static/css'));
    app.use("/static/js/", express.static(__dirname + '/../build/static/js'));
    app.use("/service-worker.js", express.static(__dirname + '/../build'));

    app.get('/beers', async function(req, res){
        let url_parts = url.parse(req.url, true);
        let query = url_parts.query;
        let queryString = "?key=" + config.breweryApiKey + "&p=" + query.p + "&name=" + query.beername + "&ibu=" + query.ibu + "&abv=" + query.abv + "&year=" + query.year + "&order=" + query.sort;
        
        let result = await (axios({
            method: 'get',
            url: config.breweryApiEndpoint + 'beers' + queryString,
          }));
    	res.send(result.data);
    });

    app.get('/beer', async function(req, res){
        let url_parts = url.parse(req.url, true);
        let query = url_parts.query;
        let beerid = query.id;

        let result = await (axios({
            method: 'get',
            url: config.breweryApiEndpoint + 'beer/' + beerid + "?key=" + config.breweryApiKey,
          }));
    	res.send(result.data);
    });

    app.get('/', function(req, res) {
        res.redirect('/home');
    });

    app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, '/../build', 'index.html')); });
    app.listen(config.port, () => console.log('listening to connections on port: ' + config.port));

    app.post('/account/signup', async (request, response) => {
        let body = request.body;
        let result = await accountService.signUp(body);
		response.send({success: result});
    });
    
    app.post('/account/signin', async (request, response) => {
        let body = request.body;
        var result = await accountService.signIn(body);
		response.send({success: result});
	});
}

module.exports = handleRoutes;