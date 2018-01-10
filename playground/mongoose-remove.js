const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//removes all docs
// Todo.remove({}).then((result => {
//     console.log(result);
// }));

Todo.findOneAndRemove({_id: '5a5687615361226a0202e1c5'}).then((todo) => {

});

Todo.findByIdAndRemove('5a5687615361226a0202e1c5').then((todo) => {
    console.log(todo);
});

