function logout(){
window.location="index.html";
localStorage.removeItem("username");

}
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "! How would you to organize today?";

function calendar(){
window.location="calendar.html"

}
function notes(){
    window.location="notes.html"
    
    }

    function todo(){
        window.location="todo.html"
        
        }