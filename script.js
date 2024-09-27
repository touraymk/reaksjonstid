let htmlOutput = document.getElementById("app");

updateView();
function updateView() {
  htmlOutput.innerHTML = /*html*/ `
    <h1>Valider e-postadresse</h1>
    <input type="text" placeholder="skriv inn epost.." autofocus/>
    <button onclick="validateEmail()">Valider</button>
    <div></div>
  `;
}

function isEmailValid(text) {
  let isAtSymbol = text.includes("@");
  let isNoSpaces = !text.includes(" ");
  let isPeriodAfterAt = text.indexOf(".") > text.indexOf("@");

  return isAtSymbol && isNoSpaces && isPeriodAfterAt;
}

function validateEmail() {
  let emailInput = document.querySelector("input").value;
  let result = document.querySelector("div");

  if (isEmailValid(emailInput)) {
    result.textContent = "Gyldig e-postadresse";
    result.style.color = "green";
  } else {
    result.textContent = "Ugyldig e-postadresse";
    result.style.color = "red";
  }
}
