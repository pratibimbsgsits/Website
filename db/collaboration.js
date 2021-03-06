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
const db = firestore.collection("collaboration")
document.getElementById('collaborationForm').addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
  
  let entityName = document.getElementById('entityName').value
  let contact = document.getElementById('contact').value
  let email = document.getElementById('email').value
  let expectations = document.getElementById('expectations').value
  
//    console.log(entityName, contact,email,expectations);
    saveMessages(entityName, contact,email,expectations);
    //   enable alert
  document.querySelector(".alert1").style.display = "block";

  //   remove the alert
  setTimeout(() => {
   document.querySelector(".alert1").style.display = "none";
  }, 3000);
 //   reset the form
 document.getElementById("collaborationForm").reset();
  
  }
  const saveMessages = (entityName, contact,email,expectations) => {  
    db.doc().set({
        entityName: entityName,
        contact: contact,
        email: email,
        expectations:expectations
    });
  };
  const getMessageVal=(id)=>{
    return document.getElementById(id).value;}

// --------------------------------------------------------------------------------------------------------------------------
//Sponsorship

//Variable to access database collection
const db1 = firestore.collection("sponsorship")
document.getElementById('sponsorshipForm').addEventListener("submit",submitForm1);

function submitForm1(e){
    e.preventDefault();
  
  let businessName = document.getElementById('businessName').value
  let contactName = document.getElementById('contactName').value
  let contactNumber = document.getElementById('contactNumber').value
  let email1 = document.getElementById('email1').value
  let category = document.getElementById('category').value
  
   console.log(businessName, contactName,contactNumber,email1,category);
    saveMessages1(businessName, contactName,contactNumber,email1,category);
    //   enable alert
  document.querySelector(".alert2").style.display = "block";

  //   remove the alert
  setTimeout(() => {
   document.querySelector(".alert2").style.display = "none";
  }, 3000);
 //   reset the form
 document.getElementById("sponsorshipForm").reset();
  
  }
  const saveMessages1 = (businessName, contactName,contactNumber,email1,category) => {  
    db1.doc().set({
        businessName: businessName,
        contactName: contactName,
        contactNumber: contactNumber,
        email1:email1,
        category:category

    });
  };
  const getMessageVal1=(id)=>{
    return document.getElementById(id).value;}

