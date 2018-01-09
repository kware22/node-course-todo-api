const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a3062d2c89b9ae7b474ab22';

// if(!ObjectID.isValid(id)) {
//     console.log('ID is not valid!');
// }

// Todo.find({
//     _id:id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found!')
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => conosle.log(e));

User.findById('5a3062d2c89b9ae7b474ab22').then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
