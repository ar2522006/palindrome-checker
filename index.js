let checking = false;
Palindrome = false;

function checkPalindrome(word) {
  const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = "";
  for (let index = cleaned.length - 1; index >= 0; index--) {
    reversed += cleaned[index];
  }
  if (!word.length) {
    return
  }
  if (cleaned === reversed) {
    document.querySelector("#result").innerHTML = `<span class="font-bold text-black">${word}</span> is a Palindrome!`;
    document.querySelector("#result").style.color = "green"
    document.getElementById("infoIco").style.display = "none"
  } else {
    document.querySelector("#result").innerHTML = `<span class="font-bold text-black">${word}</span> is not a Palindrome!`;
    document.querySelector("#result").style.color = "red"
    document.getElementById("infoIco").style.display = "none"
  }
}


const checkbutton = document.querySelector("#checkbutton");

checkbutton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputvalue = document.querySelector("#wordinput").value;
  checkPalindrome(inputvalue);
});
