var name;

function setName() {
    name = document.getElementById("name").value;
    console.log(name);
    localStorage.setItem("Name", name);
    window.location.href = 'thanks.html';

}

