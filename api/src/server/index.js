const events = require('./events');
const { server, app } = require('./server');

const port = app.get('port');

events.bind(server.listen(port), port);
