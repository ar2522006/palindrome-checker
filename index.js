let checking = false;
Palindrome = false;

function checkPalindrome(word) {
  const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = "";
  for (let index = cleaned.length - 1; index >= 0; index--) {
    reversed += cleaned[index];
  }
  if (cleaned === reversed) {
    document.querySelector("#result").innerHTML = `${word} is a Palindrome!`;
  } else {
    document.querySelector("#result").innerHTML = `${word} is not a Palindrome!`;
  }
}


const checkbutton = document.querySelector("#checkbutton");

checkbutton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputvalue = document.querySelector("#wordinput").value;
  checkPalindrome(inputvalue);
});
