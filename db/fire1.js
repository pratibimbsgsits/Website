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
const db = firestore.collection("membershipForm")
document.getElementById('membershipForm').addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
  
    let name=document.getElementById("name").value;
    let branch=document.getElementById("branch").value;
    let email=document.getElementById("email").value;
    let birthdate =document.getElementById("birthdate").value;
    let contact =document.getElementById("contact").value;
    let payment =document.getElementById("payment").value;
    
  
//    console.log(name, branch,email,birthdate,contact,payment);
    saveMessages(name, branch,email,birthdate,contact,payment);
    //   enable alert
  document.querySelector(".alert1").style.display = "block";

  //   remove the alert
  setTimeout(() => {
   document.querySelector(".alert1").style.display = "none";
  }, 2000);
 //   reset the form
 document.getElementById("membershipForm").reset();
  
  }
  const saveMessages = (name, branch,email,birthdate,contact,payment) => {  
    db.doc().set({
          name: name,
          branch:branch,
          email: email,
          birthdate:birthdate,
          contact:contact,
          payment:payment
    });
  };
  const getMessageVal=(id)=>{
    return document.getElementById(id).value;}
