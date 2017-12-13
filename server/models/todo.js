var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,

    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = { Todo };

// //Another Todo
// var anotherTodo = new Todo({});

// anotherTodo.save().then((doc) => {
//     console.log('Saved another todo' , doc);

// }, (e) => {
//     console.log('Unable to save another todo');
// });