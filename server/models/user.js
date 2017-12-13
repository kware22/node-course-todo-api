var mongoose = require('mongoose');

var User = mongoose.model('User' , {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: '     '
});

module.exports = {User};

// newUser.save().then((doc) => {
//     console.log('Saved new user', doc);
// }, (e) => {
//     console.log('Unable to save new user' , e);
// });
