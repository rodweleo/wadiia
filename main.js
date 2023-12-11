const travel_countries = [
  {
    name: "United States",
    image: "/public//images/HD-wallpaper-dubai-city-color-life-night.jpg",
  },
  {
    name: "Dubai",
    image: "/public//images/HD-wallpaper-dubai-city-color-life-night.jpg",
  },
  {
    name: "USA",
    image: "/public//images/HD-wallpaper-dubai-city-color-life-night.jpg",
  },
  {
    name: "Alaska",
    image: "/public//images/HD-wallpaper-dubai-city-color-life-night.jpg",
  },
];

const countriesContainer = document.querySelector(".countries");

function populateTravelCountries(countries) {
  countries.forEach((country) => {
    //creating a country's div
    const countryDiv = document.createElement("div");
    countryDiv.className = "country";
    countryDiv.style.backgroundImage = `url("${country.image}")`;
    // Creating the country name div
    const countryName = document.createElement("div");
    countryName.className = "country-name";
    countryName.innerHTML = country.name;
    // Appending the country name div to the country div
    countryDiv.appendChild(countryName);

    // Appending the country div to the countries container
    countriesContainer.appendChild(countryDiv);
  });
}

populateTravelCountries(travel_countries);

// Get today's date
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;

// Set minimum departure date to today
document.getElementById("departure-date-input").setAttribute("min", today);

// Set minimum return date to the selected departure date
document
  .getElementById("departure-date-input")
  .addEventListener("change", function () {
    var selectedDepartureDate = document.getElementById(
      "departure-date-input"
    ).value;
    document
      .getElementById("return-date-input")
      .setAttribute("min", selectedDepartureDate);
  });

const fromLocation = document.getElementById("from");
const searchQuery = [];
fromLocation.addEventListener("input", async (event) => {
  searchQuery.push(event.data);
  const newSearchQuery = searchQuery.join("");
  fetch(
    "http://13.245.210.67/trip/clients/rest/public/flight-locations.php?q=lon"
  )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });

  console.log(response.data);
});
