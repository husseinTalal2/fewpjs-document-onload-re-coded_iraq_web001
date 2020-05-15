// Your code goes here
const text = Document.getElementById('text');
function manipulate(){
  text.innerText = "This is really cool!";
}
Document.addEventListener("DOMContentLoaded", function(){
  console.log("The DOM has loaded");
  manipulate();
});
