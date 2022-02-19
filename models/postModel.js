const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: 'Title'
    },
    mushroom:{
        type: mongoose.Types.ObjectId, 
        required: true,
        ref: 'mushroom',
        default: "undefined"
    },
    content: {
        type: String,
        required: true,
        default: 'My Post'
    },
    images: {
        type: String,
        required: true,
        default: "https://www.pngitem.com/pimgs/m/114-1146463_red-mushroom-png-fantasy-mushrooms-png-transparent-png.png"
    },
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    user: {type: mongoose.Types.ObjectId, ref: 'user'}
}, {
    timestamps: true
})

module.exports = mongoose.model('post', postSchema)
