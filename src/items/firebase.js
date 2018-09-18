var admin = require("firebase-admin");

var serviceAccount = require("./vue-menu-test.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vue-menu-test.firebaseio.com"
});

var fireData = admin.database();
var try_menu = require('./try-menu');
// import try_menu from './try-menu'

/*
fireData.ref('menuOne').set(try_menu)
    .then(function(){
        fireData.ref().once('value', function(snapshot){
            console.log(snapshot.val())
        })
    })
*/