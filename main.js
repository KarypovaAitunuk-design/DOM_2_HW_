const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", function () {
  
  text.innerText = "5 секунд";

 
  setTimeout(function () {
    text.innerText = "-";
  }, 5000);
});
