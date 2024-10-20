const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    schedule: { type: Boolean },
    friends: { type: Boolean },
});

module.exports = model("User", userSchema);
