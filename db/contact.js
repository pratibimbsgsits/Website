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
