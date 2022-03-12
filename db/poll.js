const firebaseConfig = {

  apiKey: "AIzaSyA73INgkZCHjgsHfEEs6TUleBaf-qP-2mI",

  authDomain: "registration-kalopsia.firebaseapp.com",

  databaseURL: "https://registration-kalopsia-default-rtdb.firebaseio.com",

  projectId: "registration-kalopsia",

  storageBucket: "registration-kalopsia.appspot.com",

  messagingSenderId: "1076831617395",

  appId: "1:1076831617395:web:939d57bb9a520f00e50506"

};
  
 //Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("poll")
document.getElementById('new_form').addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
  
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let wallNo= document.getElementById('wallNo').value
  let college = document.getElementById('college').value
  
//    console.log(entityName, contact,email,expectations);
    saveMessages(name,email,wallNo,college);
    //   enable alert
//   document.querySelector(".alert1").style.display = "block";
alert("Details received")
  //   remove the alert
//   setTimeout(() => {
//    document.querySelector(".alert1").style.display = "none";
//   }, 3000);
 //   reset the form
 document.getElementById("new_form").reset();
  
  }
  const saveMessages = (name,email,wallNo,college) => {  
    db.doc().set({
        name: name,
        email: email,
        wallno: wallNo,
        college:college
    });
  };
  const getMessageVal=(id)=>{
    return document.getElementById(id).value;}