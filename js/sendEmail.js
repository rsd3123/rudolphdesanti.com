

var fullName = document.getElementById("name-field")
var email = document.getElementById("email-field");
var message = document.getElementById("message-field");
var sendBtn = document.getElementById("send-button");

var currentFullName = "";
var currentEmail = "";
var currentMessage = "";
 
fullName.addEventListener('keydown', update);
fullName.addEventListener('keyup', update);

email.addEventListener('keydown', update);
email.addEventListener('keyup', update);

message.addEventListener('keydown', update);
message.addEventListener('keyup', update);

function update(e) {
    if(e.target == fullName)
        currentFullName = fullName.value;
    else if(e.target == email)
        currentEmail = email.value;
    else
        currentMessage = message.value;
}

function send_message(){
    
    if(currentFullName != "" && currentEmail != ""){

      var data = JSON.stringify({'name':currentFullName,'email':currentEmail,'message':currentMessage});
      
      var xhttp = new XMLHttpRequest();

      xhttp.open("POST","https://rm8e4u2px1.execute-api.us-east-1.amazonaws.com/default/rudolphdesantiSendEmail",true);
      xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          console.log("Mesasge sent successfully.")
          alert("Message Sent!");
        }
      }

      xhttp.send(data);
      }   
      

    else if(currentFullName == "" && currentEmail == ""){
      alert("Please enter name and email.");
    }
    else if(currentFullName == ""){
      alert("Please enter name.")
    }
    else{
      alert("Please enter email.")
    }
    
}
