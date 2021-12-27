const firebaseConfig = {

    apiKey: "AIzaSyADjaHMwnjBNUDW1sTSaXQ0ySmkn4xnamM",
  
    authDomain: "membership-1e742.firebaseapp.com",
  
    databaseURL: "https://membership-1e742-default-rtdb.firebaseio.com",
  
    projectId: "membership-1e742",
  
    storageBucket: "membership-1e742.appspot.com",
  
    messagingSenderId: "373055091171",
  
    appId: "1:373055091171:web:1908dc236208f5f88bf0d6"
  
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

