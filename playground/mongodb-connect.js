//Connect to MongoDB server
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//how to generate your own unique ID's
// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log('Unable to connect to database server.');
    }
   console.log('Connected to MondoDB server');

   //Insert new record into a collection
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, (err, result) => {
//        if(err){
//            return console.log('Unable to insert todo', err);
//        }

//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });

// db.collection('Users').insertOne({
//    //You can add your own id _id: 123,

//     name: 'Kendra',
//     age: 27,
//     location: 'Philadelphia'
// }, (err, result) => {
//     if(err){
//         return console.log('Unable to insert user information', err);
//     }
//     console.log(result.ops[0]._id.getTimestamp());
// });

   db.close();
});