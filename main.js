function adduser(){
window.location="second.html";
localStorage.setItem("username",document.getElementById("username").value);

}

const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyB7kuLYagmwj5loCG5FY6mRzqAH8iFvAhw",
    authDomain: "organised-ed839.firebaseapp.com",
    databaseURL: "https://organised-ed839-default-rtdb.firebaseio.com",
    projectId: "organised-ed839",
    storageBucket: "organised-ed839.appspot.com",
    messagingSenderId: "972342986099",
    appId: "1:972342986099:web:080df29385de27c84b7106"
  };

// firebase.initializeApp(config);

// const auth = firebase.auth();
// const db = firebase.database();

// const username = process.argv[2];
// const password = process.argv[3];

// const user = await auth.createUserWithEmailAndPassword(username, password);

// const userRef = db.ref("/users/" + user.uid);

// userRef.set({
//   username,
//   password,
//   createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
// });

// console.log("User created successfully!");





//bottom one




// {
// // function getData() {firebase.database().ref("/").on('value',
// // function(snapshot) {snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
// // Room_names = childKey;
// // //Start code
// // row = "<div class='roomname' id='" + Room_names + "' onclick='redirectToRoom(this.id)'>" + Room_names + "</div><hr>";
           

// // //End code
// // });});}
// // getData();

// // const data = {
// //   username: 
  
// // };

// // const ref = db.ref("/users");

// // ref.push(data);

// // console.log("Data stored successfully!");
// }
