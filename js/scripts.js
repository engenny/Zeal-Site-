
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

  

});

//Facilildades Div Display

const targetDiv = document.getElementById("btn-1");
const btn = document.getElementById("toggle-btn-1");
btn.onclick = function () {
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
    target2.style.display = "none";
    target3.style.display = "none"; 
    target4.style.display = "none";
    target5.style.display = "none";
  } 
};
//new
const target2 = document.getElementById("btn-2");
const btn2 = document.getElementById("toggle-btn-2");
btn2.onclick = function () {
  if (target2.style.display == "none") {
    target2.style.display = "block";
    target3.style.display = "none"; 
    targetDiv.style.display = "none";
    target4.style.display = "none";
    target5.style.display = "none";
  }
};

const target3 = document.getElementById("btn-3");
const btn3 = document.getElementById("toggle-btn-3");
btn3.onclick = function () {
  if (target3.style.display == "none") {
    target3.style.display = "block";  
    target2.style.display = "none";
    targetDiv.style.display = "none";
    target4.style.display = "none";
    target5.style.display = "none";
  }
};

const target4 = document.getElementById("btn-4");
const btn4 = document.getElementById("toggle-btn-4");
btn4.onclick = function () {
  if (target4.style.display == "none") {
    target4.style.display = "block";  
    target3.style.display = "none";  
    target2.style.display = "none";
    targetDiv.style.display = "none";
    target5.style.display = "none";
  }
};

const target5 = document.getElementById("btn-5");
const btn5 = document.getElementById("toggle-btn-5");
btn5.onclick = function () {
  if (target5.style.display == "none") {
    target5.style.display = "block"; 
    target4.style.display = "none";  
    target3.style.display = "none";  
    target2.style.display = "none";
    targetDiv.style.display = "none";
  }
};

