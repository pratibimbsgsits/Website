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
const db = firestore.collection("contactForm")
document.getElementById('contactForm').addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
  
  let name = document.getElementById('name').value
  let phone = document.getElementById('phone').value
  let eId = document.getElementById('eId').value
  let agenda = document.getElementById('agenda').value
  
//    console.log(name, phone,eId,agenda);
    saveMessages(name, phone,eId,agenda);
    //   enable alert
  document.querySelector(".alert1").style.display = "block";

  //   remove the alert
  setTimeout(() => {
   document.querySelector(".alert1").style.display = "none";
  }, 2000);
 //   reset the form
 document.getElementById("contactForm").reset();
  
  }
  const saveMessages = (name, phone,eId,agenda) => {  
    db.doc().set({
        name: name,
        phone: phone,
        eId: eId,
        agenda:agenda
    });
  };
  const getMessageVal=(id)=>{
    return document.getElementById(id).value;}
