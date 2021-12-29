// import 'firebase/storage';

function myFunction(){
  document.querySelector(".box1").style.display = "block";
}
function myFunction1(){
  document.querySelector(".box2").style.display = "block";
  document.querySelector(".box3").style.display = "none";
}
function myFunction2(){
  document.querySelector(".box2").style.display = "none";
  document.querySelector(".box3").style.display = "block";
}
function myFunction3(){
  document.querySelector(".box1").style.display = "none";
}

//------------------------------------------------------------------------------------------------------------------------------//
const firebaseConfig = {

  apiKey: "AIzaSyA73INgkZCHjgsHfEEs6TUleBaf-qP-2mI",

  authDomain: "registration-kalopsia.firebaseapp.com",

  databaseURL: "https://registration-kalopsia-default-rtdb.firebaseio.com",

  projectId: "registration-kalopsia",

  storageBucket: "registration-kalopsia.appspot.com",

  messagingSenderId: "1076831617395",

  appId: "1:1076831617395:web:939d57bb9a520f00e50506"

};
//
firebase.initializeApp(firebaseConfig);
//
var regFormDB=firebase.database().ref('Registration-Kalopsia');

document.getElementById('Registration-Kalopsia').addEventListener("submit",submitForm);

function submitForm(e){
e.preventDefault();

var name=document.getElementById("name").value;
var contact=document.getElementById("contact").value;
var whatsappNumber=document.getElementById("whatsappNumber").value;
var gsStudent =Array.from(document.getElementsByClassName("memberOfPratibimb")).find(memberOfPratibimbInput=> memberOfPratibimbInput.checked).value;
var memberOfPratibimb =Array.from(document.getElementsByClassName("memberOfPratibimb")).find(memberOfPratibimbInput=> memberOfPratibimbInput.checked).value;
var memberId =document.getElementById("memberId").value;
var branch =document.getElementById("branch").value;
var enrolNo =document.getElementById("enrolNo").value;
var wsAttending =Array.from(document.getElementsByClassName("wsAttending")).find(wsAttendingInput=> wsAttendingInput.checked).value;
var offlinePayment =Array.from(document.getElementsByClassName("offlinePayment")).find(offlinePaymentInput=> offlinePaymentInput.checked).value;
var onlinePayment =Array.from(document.getElementsByClassName("onlinePayment")).find(onlinePaymentInput=> onlinePaymentInput.checked).value;
var paymentOption =Array.from(document.getElementsByClassName("paymentOption")).find(paymentOptionInput=> paymentOptionInput.checked).value;



//console.log(name, contact,whatsappNumber,gsStudent,memberOfPratibimb,memberId,branch,enrolNo,wsAttending,offlinePayment,onlinePayment,paymentOption);
   saveMessages(name, contact,whatsappNumber,gsStudent,memberOfPratibimb,memberId,branch,enrolNo,wsAttending,offlinePayment,onlinePayment,paymentOption);

//   //   enable alert
//   document.querySelector(".alert1").style.display = "block";

   //   remove the alert
//    setTimeout(() => {
//     document.querySelector(".alert1").style.display = "none";
//    }, 3000);
 alert("You have successfully registered for Kalopsia!");
//   //   reset the form
document.getElementById("Registration-Kalopsia").reset();

}
const saveMessages = (name, contact,whatsappNumber,gsStudent,memberOfPratibimb,memberId,branch,enrolNo,wsAttending,offlinePayment,onlinePayment,paymentOption) => {
  var newregForm = regFormDB.push();

  newregForm.set({
    name: name,
    contact:contact,
    whatsappNumber:whatsappNumber,
    gsStudent:gsStudent,
    memberOfPratibimb:memberOfPratibimb,
    memberId:memberId,
    branch:branch,
    enrolNo:enrolNo,
    wsAttending:wsAttending,
    offlinePayment:offlinePayment,
    onlinePayment: onlinePayment,
    paymentOption:paymentOption
  });
};
const getMessageVal=(id)=>{
return document.getElementById(id).value;
}

//-----------------------------------------------------------------------------------------------------------------------------------------

function uploadImage1() {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#photos").files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      // console.log(url);
      alert("uploaded");
      // document.querySelector("#image").src = url;
    })
    .catch(console.error);
}

function uploadImage() {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#photo").files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      // console.log(url);
      alert("uploaded");
      // document.querySelector("#image").src = url;
    })
    .catch(console.error);
}
function uploadImage2() {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#photo1").files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      // console.log(url);
      alert("uploaded");
      // document.querySelector("#image").src = url;
    })
    .catch(console.error);
}
function uploadImage3() {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#photo2").files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      // console.log(url);
      alert("uploaded");
      // document.querySelector("#image").src = url;
    })
    .catch(console.error);
}
