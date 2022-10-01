let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar_link = document.querySelector(".navbar-link");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar_link.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar_link.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "25px",
  duration: 1000,
  reset: true,
});

sr.reveal(".home-text", { delay: 100, origin: "bottom" });

sr.reveal(
  ".Skills_aligner,.home-img,.about,.contact,.Skills_container,.project-section,#statictics",
  {
    delay: 300,
    origin: "top",
  }
);

function sendEmail() {
  let params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_by4fjus", "template_ymfhbyn", params).then((res) => {
    alert("Success!");
   
  });
  
}
