const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    userEmail: {type: String, required: true, unique: true},
    userPass: {type: String, required: true},
    likedMovies: [{type: Types.ObjectId, ref: 'Movie'}]
})

module.exports = model('User', schema)