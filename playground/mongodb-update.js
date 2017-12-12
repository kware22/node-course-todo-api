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

//    db.collection('Users').findOneAndUpdate(
//        {
//            name: 'Kendra',
// }, {
//        $set: {
//            completed: true
//        }

//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });

   //$inc
   
   db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a302c2023a302dd765a5251')
}, {
    $set: {
        name: 'Kendra'
    },
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});


//    db.close();
});