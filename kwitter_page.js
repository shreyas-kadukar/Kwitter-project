//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCYMPUXDcdPLfBvo12h1aAgJCzm3-oAO6k",
      authDomain: "kwitter-7e4f0.firebaseapp.com",
      databaseURL: "https://kwitter-7e4f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-7e4f0",
      storageBucket: "kwitter-7e4f0.appspot.com",
      messagingSenderId: "427843526613",
      appId: "1:427843526613:web:17b7b1a19bf074cf68a75c"
    };
    
    // Initialize Firebase
    const app =firebase.initializeApp(firebaseConfig);
  
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("username");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name:username,
                 likes:0,
                message:msg
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 
//End code
      } });  }); }
getData();

