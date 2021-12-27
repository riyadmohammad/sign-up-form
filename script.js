const form = document.getElementById("form");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["first__name"].value;
  const lastName = form["last__name"].value;
  const email = form["email"].value;
  const password = form["pass"].value;

  if (firstName === "") {
    document.getElementById("f__name").parentNode.classList.add("error");
    document.getElementById("f__name").innerHTML = "First name is empty";
  } else {
    document.getElementById("f__name").parentNode.classList.remove("error");
    document.getElementById("f__name").style.opacity = "0";
  }
  if (lastName === "") {
    document.getElementById("l__name").parentNode.classList.add("error");
    document.getElementById("l__name").innerHTML = "Last name is empty";
  } else {
    document.getElementById("l__name").parentNode.classList.remove("error");
    document.getElementById("l__name").style.opacity = "0";
  }
  if (email === "") {
    document.getElementById("mail").parentNode.classList.add("error");
    document.getElementById("mail").innerHTML = "Email name is empty";
  }
    else if (!validateEmail(email) ) {
    document.getElementById("mail").parentNode.classList.add("error");
    document.getElementById("mail").innerHTML = "Email name is not valid";
  } else {
    document.getElementById("mail").parentNode.classList.remove("error");
    document.getElementById("mail").style.opacity = "0";
  }

  if (password === "") {
    document.getElementById("passw").parentNode.classList.add("error");
    document.getElementById("passw").innerHTML = "Password  is empty";
  } else {
    document.getElementById("passw").parentNode.classList.remove("error");
    document.getElementById("passw").style.opacity = "0";
  }

  console.log(firstName, lastName, email, password);
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
