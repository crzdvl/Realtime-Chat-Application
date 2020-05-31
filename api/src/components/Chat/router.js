const { Router } = require('express');

/**
 * Express router to mount chat related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route serving chat.
 * @name /v1/chat
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', (req, res) => {
    res.send({ response: 'Server is up and running.' }).status(200);
});

module.exports = router;
