// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {

  apiKey: "AIzaSyADjaHMwnjBNUDW1sTSaXQ0ySmkn4xnamM",

  authDomain: "membership-1e742.firebaseapp.com",

  databaseURL: "https://membership-1e742-default-rtdb.firebaseio.com",

  projectId: "membership-1e742",

  storageBucket: "membership-1e742.appspot.com",

  messagingSenderId: "373055091171",

  appId: "1:373055091171:web:1908dc236208f5f88bf0d6"

};

firebase.initializeApp(firebaseConfig);

var membershipFormDB=firebase.database().ref('membershipForm');

document.getElementById('membershipForm').addEventListener("submit",submitForm);

function submitForm(e){
  e.preventDefault();

  var name=document.getElementById("name").value;
  var branch=document.getElementById("branch").value;
  var email=document.getElementById("email").value;
  var birthdate =document.getElementById("birthdate").value;
  var contact =document.getElementById("contact").value;
  var payment =document.getElementById("payment").value;

// console.log(name, branch,email,birthdate,contact,payment);
  saveMessages(name, branch,email,birthdate,contact,payment);

  //   enable alert
  document.querySelector(".alert1").style.display = "block";

   //   remove the alert
   setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
   }, 3000);
  //   reset the form
  document.getElementById("membershipForm").reset();

}
const saveMessages = (name, branch, email, birthdate,contact,payment) => {
  var newmembershipForm = membershipFormDB.push();

  newmembershipForm.set({
    name: name,
    branch:branch,
    email: email,
    birthdate:birthdate,
    contact:contact,
    payment:payment
  });
};
const getMessageVal=(id)=>{
  return document.getElementById(id).value;
}

//-----------------------------------------------------------------------------------------------------------------------------------------
