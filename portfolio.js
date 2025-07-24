//alert('Js file well connected')

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menulists");
const closeIcon = document.querySelector(".close-icon");

hamburger.addEventListener("click", function () {
  navMenu.classList.add("show-menu");
  hamburger.style.display = "none";
  closeIcon.style.display = "block";
  hamburger.classList.toggle("is-active");
});

closeIcon.addEventListener("click", function () {
  navMenu.classList.remove("show-menu");
  closeIcon.style.display = "none";
  hamburger.style.display = "block";
});

const navLinks = document.querySelectorAll(".menulists a"); // menu links in the nav. hides the menu when click event is detected

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    hamburger.style.display = "block";
  });
});

// CONTACT FORM SECTION

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const Myname = document.getElementById("name");
const mail = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    Myname.value.trim() === "" ||
    mail.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    messages.textContent = "Please fill in all fields"; // Error message that displays
    messages.style.color = "red";
  } else {
    messages.textContent = "Message sent successfully"; // this clears the error message one all fields have been filled
    messages.style.color = "green"; // style the success color to green

    setTimeout(function () {
      messages.textContent = "";
    }, 3000); // This disappears the success message in 3secs

    Myname.value = "";
    mail.value = "";
    message.value = "";
  }
});
