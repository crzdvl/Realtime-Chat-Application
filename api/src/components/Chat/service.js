const UserModel = require('./model');

/**
 * @method find
 * @param { id }
 * @returns {any}
 */
function find(id) {
    return UserModel.find({ id }).exec();
}

/**
 * @exports
 * @method create
 * @param { profile }
 * @summary create a new user
 * @returns {Promise<any>}
 */
function create(profile) {
    return UserModel.create(profile);
}

/**
 * @exports
 * @method deleteById
 * @param {string} id
 * @summary delete a user from database
 * @returns {Promise<void>}
 */
function deleteById(id) {
    return UserModel.deleteOne({ id }).exec();
}

/**
 * @exports
 * @method findAllMembers
 * @param {string} id
 * @summary find all members in one room
 * @returns {Promise<void>}
 */
function findAllMembers(room) {
    return UserModel.find({ room }).exec();
}

module.exports = {
    find,
    create,
    deleteById,
    findAllMembers,
};
