document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    const sectionsWrapper = document.getElementById("sections-wrapper");
  
    navLinks.forEach(function(navLink) {
      navLink.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
  
        const targetSection = document.querySelector(navLink.getAttribute("href"));
        const targetIndex = Array.from(targetSection.parentElement.children).indexOf(targetSection);
  
        sectionsWrapper.style.transform = `translateX(-${targetIndex * 100}%)`;
  
        navLinks.forEach(function(navLink) {
          navLink.classList.remove("active");
        });
  
        navLink.classList.add("active");
  
        const sections = document.querySelectorAll("section");
        sections.forEach(function(section) {
          section.classList.remove("active");
          section.style.filter = ""; // This should in theory remove the filter property for all sections... I hope
        });
  
        targetSection.classList.add("active");
      });
    });
    
    // Issue = when site initially loads, home section is blurred.... nice....
    // Removes the blur effect from the home section by default, issue is gone. good stuff
    const homeSection = document.getElementById("home");
    homeSection.style.filter = "";
    homeSection.classList.add("active");
  });
  