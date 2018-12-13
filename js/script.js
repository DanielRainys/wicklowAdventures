
function reset() {
    document.getElementById("name").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("subject").innerHTML = "";
    document.getElementById("message").innerHTML = "";
}

function setName() {
var name, email,subject,message;
var empty = false;

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;

    try {
        if(name === "")  throw "empty";
        if(email === "")  throw "empty";
        if(subject === "")  throw "empty";
        if(message === "")  throw "empty";
    }
    catch(err) {
        empty = true;
        document.getElementById("error").innerHTML = "Input is " + err;
    }
    console.log(name);
    localStorage.setItem("Name", name);
    if (!empty) window.location.href = 'thanks.html';
}



window.onload = function () {
    var d = new Date();
    document.getElementById("tName").innerHTML = "Thanks " + localStorage.getItem("Name");
    document.getElementById("tDate").innerHTML = "Thank you for your message received on " + d.getDate() +"/"+ d.getMonth() + "/"+ d.getFullYear() + " We will get back to you within one\n" +
        "business day."
    document.getElementById("date").innerHTML = d.getFullYear();
};