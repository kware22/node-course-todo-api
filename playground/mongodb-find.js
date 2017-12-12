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

   db.collection('Users').find({name: 'Kendra'}).toArray().then((docs) => {
       console.log('Users');
       console.log(JSON.stringify(docs, undefined, 2));

   }, (err) => {
       console.log('Unable to fetch todos' ,err );
   });


// db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);

// }, (err) => {
//     console.log('Unable to fetch todos' ,err );
// });


//    db.close();
});