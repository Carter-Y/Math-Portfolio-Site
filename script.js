document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const navLinks = document.querySelectorAll("nav a");

  function showTab(id) {
    tabs.forEach(tab => {
      if (tab.id === id) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  }

  function handleNavLinkClick(event) {
    event.preventDefault();
    const id = event.target.getAttribute("href").substr(1);
    showTab(id);
  }

  navLinks.forEach(link => {
    link.addEventListener("click", handleNavLinkClick);
  });

  showTab("tab1");
});

const rect = document.querySelector(".rect");
rect.addEventListener("click", function() {
  window.location.href = "https://drive.google.com/drive/folders/1_yyIMneYBa8vWJuyU8DUaHSBdddfK4Jy?usp=sharing";
});