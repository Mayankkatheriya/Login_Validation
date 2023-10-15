let loginNow = document.querySelector(".login_now");
let landingView = document.querySelector(".landing-view");
let form = document.querySelector("form");

loginNow.addEventListener("click", () => {
  landingView.style.display = "none";
  form.style.display = "flex";
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = e.target.querySelector("#username").value;
  let passWord = e.target.querySelector("#password").value;
  let numInUsername = false;
  let charInUsername = false;
  let charInPassword = false;
  for (let i = 1; i < username.length; i++) {
    if (username[i] >= 0 && username[i] <= 9) {
      numInUsername = true;
    }
    if (
      (username.charCodeAt(i) >= 32 && username.charCodeAt(i) <= 47) ||
      (username.charCodeAt(i) >= 58 && username.charCodeAt(i) <= 64) ||
      (username.charCodeAt(i) >= 91 && username.charCodeAt(i) <= 96) ||
      (username.charCodeAt(i) >= 123 && username.charCodeAt(i) <= 126)
    ) {
      charInUsername = true;
    }
  }
  for (let i = 0; i < passWord.length; i++) {
    if (
      (passWord.charCodeAt(i) >= 32 && passWord.charCodeAt(i) <= 47) ||
      (passWord.charCodeAt(i) >= 58 && passWord.charCodeAt(i) <= 64) ||
      (passWord.charCodeAt(i) >= 91 && passWord.charCodeAt(i) <= 96) ||
      (passWord.charCodeAt(i) >= 123 && passWord.charCodeAt(i) <= 126)
    ) {
      charInPassword = true;
    }
  }
  if (username.length < 8) {
    alert("Username should be atleast 8 characters long");
  } else if (!(username[0] >= "A" && username <= "Z")) {
    alert("First character of the Username must be capital");
  } else if (!numInUsername) {
    alert("At least one number is required in username");
  } else if (!charInUsername) {
    alert("Username must Contains a special Character $#/.+-....");
  }  else if (!(passWord.length >= 8 && passWord.length <= 20)) {
    alert("Password length should be between 8 and 20 characters");
  } else if (!charInPassword) {
    alert("Password must contains a Special Character $#/.+-....");
  } else {
    alert(`
        username: ${username}
        password: ${passWord}`);
    e.target.querySelector("#username").value = "";
    e.target.querySelector("#password").value = "";
    alert(`Welcome ${username}`);
    landingView.style.display = "block";
    form.style.display = "none";
  }
});
