const cors = require('cors');

module.exports = {
    /**
     * @function
     * @description fastify middleware
     * @param {Express.Application} app
     * @returns void
     */
    init(app) {
        app.use(cors());
        // cors
    },
};
