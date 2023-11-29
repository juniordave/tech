// Initialize the default state
toggleAccordion('section1');

function toggleAccordion(sectionId) {
  // Hide all content sections
  const allSections = document.querySelectorAll('.accordion-content');
  allSections.forEach(section => {
    section.style.display = 'none';
  });

  // Remove 'active' class from all buttons
  const allButtons = document.querySelectorAll('.accordion-btn');
  allButtons.forEach(button => {
    button.classList.remove('active');
  });

  // Show the selected content section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = 'block';

  // Add 'active' class to the clicked button
  const clickedButton = document.querySelector(`[onclick="toggleAccordion('${sectionId}')]`);
  clickedButton.classList.add('active');
}

function toggleNav() {
  var nav = document.getElementById("myTop-nav");
  nav.style.display = (nav.style.display === "none" || nav.style.display === "") ? "block" : "none";
}


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


$('#myTab a').on('shown.bs.tab', function (e) {
  // Remove active class from all tabs
  $('#myTab a').removeClass('active');
  // Add active class to the shown tab
  $(e.target).addClass('active');
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
