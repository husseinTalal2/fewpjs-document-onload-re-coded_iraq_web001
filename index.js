// Your code goes here

function manipulate(){
   document.getElementById('text').innerText = "This is really cool!";
}
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  manipulate();
});
