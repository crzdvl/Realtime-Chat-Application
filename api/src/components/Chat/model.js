const { Schema } = require('mongoose');
const connections = require('../../config/connection');

const UserSchema = new Schema(
    {
        id: {
            type: Schema.Types.Mixed,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        room: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true,
        },
    },
    {
        collection: 'users',
        versionKey: false,
    },
);

module.exports = connections.model('UserModel', UserSchema);
