const cors = require('cors');
const path = require('path');
const config = require('./config.js');
const bodyParser= require('body-parser');
const favicon = require('serve-favicon');

function handleRoutes(express, accountService, beerService) {
    const app = express();
    app.use(cors());
	app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'build')));
    app.use(favicon(path.join(__dirname, '/', '/../build/favicon.ico')));
    app.use("/static/media/", express.static(__dirname + '/../build/static/media'));
    app.use("/static/css/", express.static(__dirname + '/../build/static/css'));
    app.use("/static/js/", express.static(__dirname + '/../build/static/js'));
    app.use("/service-worker.js", express.static(__dirname + '/../build'));
    
    app.post('/beer/togglefav', async (request, response) => {
        let result = await beerService.toggleFavorites(request.body);
		response.send(result);
    });
    
    app.post('/beers', async function(req, res){
        let result = await beerService.getAllBeers(req.url, req.body);
    	res.send(result);
    });

    app.get('/beer', async function(req, res){
        let result = await beerService.getBeer(req.url);
        res.send(result);
    });

    app.get('/', function(req, res) {
        res.redirect('/home');
    });

    app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, '/../build', 'index.html')); });
    app.listen(config.port, () => console.log('listening to connections on port: ' + config.port));

    app.post('/account/signup', async (request, response) => {
        let result = await accountService.signUp(request.body);
		response.send(result);
    });
    
    app.post('/account/signin', async (request, response) => {
        var result = await accountService.signIn(request.body);
		response.send(result);
    });
    
    app.post('/account/auth', async (request, response) => {
        var result = await accountService.authenticateUser(request.body.key);
		response.send(result);
	});
}

module.exports = handleRoutes;