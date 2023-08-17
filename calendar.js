

const firebaseConfig = {
    apiKey: "AIzaSyB7kuLYagmwj5loCG5FY6mRzqAH8iFvAhw",
    authDomain: "organised-ed839.firebaseapp.com",
    databaseURL: "https://organised-ed839-default-rtdb.firebaseio.com",
    projectId: "organised-ed839",
    storageBucket: "organised-ed839.appspot.com",
    messagingSenderId: "972342986099",
    appId: "1:972342986099:web:080df29385de27c84b7106"
  };

  firebase.initializeApp(firebaseConfig);

  function logout(){
    window.location="second.html";
    
    
    }

       
    function send() {
        write = document.getElementById("send").value;
        date= document.getElementById("date").value;
        firebase.database().ref(roomname).push({
            message: write, date:date
        });
        document.getElementById("send").value="";
        document.getElementById("date").value="";
    }

    function getData() {
      console.log("insidegetdata");
      firebase.database().ref("/" + roomname).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                  firebase_message_id = childKey; message_data = childData;
  
                  console.log(firebase_message_id);
                  dates = message_data["date"];
                  message = message_data["send"];
                
   
              row="<span>"+"<h4 id='name'>"+dates+ '   :  '+"</h4>"+"<h4 class='messageh4'>"+message+"</h4>"+"<button class= 'btn btn-primary' id="+firebase_message_id+ " value= "+like+" onclick='updatelike(this.id)'>" +"<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+" </span></button><hr>"+"</span>";
                
                   document.getElementById("output").innerHTML+=row;
               
              }
          });
      });
  }
  getData();

  
  