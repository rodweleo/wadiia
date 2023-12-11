//populating the footer with the current year
const footerYearContainer = document.getElementById("footer-year-container");
const currentYear = new Date().getFullYear();
footerYearContainer.innerHTML = currentYear;

//getting the fare charges section
const fareCharges = document.getElementsByClassName("fare-charge");

//toggle the active when they are clicked
// toggle the active class when they are clicked
for (let i = 0; i < fareCharges.length; i++) {
  let fareCharge = fareCharges[i];
  fareCharge.addEventListener("click", () => {
    // deactivate all elements first
    for (let j = 0; j < fareCharges.length; j++) {
      fareCharges[j].classList.remove("active");
    }

    // toggle the active class on the clicked element
    fareCharge.classList.toggle("active");
  });
}
