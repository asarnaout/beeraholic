const cors = require('cors');
const path = require('path');
const config = require('./config.js');
const bodyParser= require('body-parser');

function handleRoutes(express, accountService) {
    const app = express();
    app.use(cors());
	app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'build')));
    app.use("/static/media/", express.static(__dirname + '/../build/static/media'));
    app.use("/static/css/", express.static(__dirname + '/../build/static/css'));
    app.use("/static/js/", express.static(__dirname + '/../build/static/js'));
    app.use("/service-worker.js", express.static(__dirname + '/../build'));
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