const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const middleware = require('../config/middleware');
const routes = require('../config/router');
const socketConnection = require('../components/Chat/socket.io');

/**
 * @type {express}
 * @constant {express.Application}
 */
const app = express();

const server = http.createServer(app);

const io = socketio(server);

/**
 * @description express.Application Middleware
 */
middleware.init(app);

/**
 * @description express.Application Routes
 */
routes.init(app);

/**
 * @description fastify.Application Sockets for Chat component
 */
socketConnection.init(io);

/**
 * @description sets port 5000 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 5000);

module.exports = {
    server,
    app,
};
