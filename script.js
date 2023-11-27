var activeButton;

function toggleAccordion(sectionId) {
    var content = document.getElementById(sectionId);
    var clickedButton = document.querySelector(`.sidenav a[href="javascript:void(0)"][onclick="toggleAccordion(\'${sectionId}\')"]`);

    // Check if the clicked button is already active
    var isButtonActive = clickedButton.classList.contains('active');

    // Deactivate the initially active button
    if (activeButton && !isButtonActive) {
        activeButton.classList.remove('active');
        hideAllAccordionContents();
    }

    if (!isButtonActive) {
        content.style.display = "block";

        // Mark the clicked button as active
        clickedButton.classList.add('active');
        activeButton = clickedButton;
    } else {
        // If the button is already active, you can choose to hide the content or do nothing
        content.style.display = "none";
        activeButton = null; // Update activeButton since the content is hidden
    }
}

function hideAllAccordionContents() {
    var contents = document.getElementsByClassName("accordion-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
}

// Initially show Section 1 content and mark the corresponding button as active
document.getElementById("section1").style.display = "block";
activeButton = document.querySelector('.sidenav a[href="javascript:void(0)"][onclick="toggleAccordion(\'section1\')"]');
if (activeButton) {
    activeButton.classList.add('active');
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
window.onscroll = function() {scrollFunction()};

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
