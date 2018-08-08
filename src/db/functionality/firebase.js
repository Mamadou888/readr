// var firebase = require("firebase/app");
//
// require("firebase/database");
// // require("firebase/auth");
//
// var config = {
//     apiKey: "AIzaSyAUtyTaEKOvU_y4RotG5p5uc0jp4Q59tN4",
//     authDomain: "readr-60904.firebaseapp.com",
//     databaseURL: "https://readr-60904.firebaseio.com",
//     projectId: "readr-60904",
//     storageBucket: "readr-60904.appspot.com",
//     messagingSenderId: "162831871185"
// };
// firebase.initializeApp(config);
//
// // Get a reference to the database service
// var database = firebase.database();
//
// //Write date of a specific category
// // Input:
// // {
// //     model1: {
// //             id: {
// //                 info: "info"
// //                 },
// //             id2: {
// //                 info: "info2"
// //             },
// //         },
// //     users : {
// //             1: {
// //                 author: "jk",
// //                 uid: "uid",
// //                 body: "body",
// //                 title: "title",
// //                 authorPic: "picture"
// //             },
// //         }
// //
// //     }
//
// function writeData(toWrite) {
//
//     var postData = {};
//     var keys = Object.keys(toWrite)
//     var updates = {};
//
//     console.log("here",toWrite.users);
//
//     keys.map((key) => {
//
//         var model = Object.keys(toWrite[key]);
//         // var modelIds = toWrite[model]
//         model.map((id) => {
//              firebase.database().ref(key + '/' + id)
//                                 .set(toWrite[''+key]['' +id]);
//     })
//     })
//
// }
//
// // writeData(1, "2", "1", "1.com");
//
// //Read data
// //Input:
// // model type, model id
//
// function readData(type, id) {
//     return firebase.database().ref('/' + type + '/' + id).once('value').then(function(snapshot) {
//         //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//         console.log(snapshot.val());
//     });
// }
//
// //Update data
// //Input: object with type --> id
// // {
// //     users: [1,3,4,2],
// //     books: [2,3]
// // }
//
//
// function deleteData(toDelete) {
//
//     var postData = {};
//     var keys = Object.keys(toDelete)
//     var updates = {};
//
//     keys.map((key) => {
//         toDelete[key].map((id) => {
//         updates['/' + key+ '/' + id] = postData;
//         })
//     })
//
//     return firebase.database().ref().update(updates);
// }
//
// //Update database
// // Input:
// // toUpdate = {
// //     model: [id1, id2],
// //     model2: [id1, id7]
// // }
// //
// // Following will be applied to all ids update is requested for
// // updates = {
// //     info1: "info1",
// //     info2: "info2",
// //     info3: "info3",
// //   };
//
// function updateData(toUpdate , updates) {
//
//     var keys = Object.keys(toUpdate)
//     var newUpdate = {};
//
//     keys.map((key) => {
//         toUpdate[key].map((id) => {
//         newUpdate['/' + key+ '/' + id] = updates;
//         })
//     })
//
//     return firebase.database().ref().update(newUpdate);
// }
//
// // var toUpdate = {
// //     users: [1],
// //     books: [1,2]
// // };
// //
// // var updates = {
// //     author: "jk",
// //     uid: "uid",
// //     body: "body",
// //     title: "title",
// //     authorPic: "picture"
// //   };
// //
// // var toWrite = {
// //     users: {
// //         1: {name: "1"},
// //         3: {name: "3"},
// //         4: {name: "4"},
// //         2: {name: "2"}
// //     },
// //     books: {
// //         2: {title: "2"},
// //         3: {title: "3"}
// //     }
// // }
// //
// // writeData(toWrite)
// //
// // // var toDelete = {
// // //     books: [3],
// // // }
// // //
// // // deleteData(toDelete)
// //
// // updateData(toUpdate, updates);
// //
// // readData('users', 1);
// // readData('users', 2);
// // readData('books', 1);
//
// export default {writeData, readData , deleteData, updateData }
