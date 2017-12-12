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

   // deleteMany
//    db.collection('Todos').deleteMany({text: 'Eat dinner'}).then((result) => {
//        console.log(result);
//    });

   //deleteOne
//    db.collection('Todos').deleteOne({text: 'Get this money'}).then((result) => {
//        console.log(result);
//    });

   //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // db.collection('Users').deleteMany({name: 'Kendra'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: ObjectID("5a3029d0573178dd36f5b6cc")}).then((result) => {
        console.log(result);
    })
//    db.close();
});