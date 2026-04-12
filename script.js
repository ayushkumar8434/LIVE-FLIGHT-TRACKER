const API_KEY = "55b8b20a69c62d2c84f642bf932e7db3";

const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const result = document.getElementById("result");
const statusFilter = document.getElementById("statusFilter");
const sortOption = document.getElementById("sortOption");

let allFlights = [];

// EVENTS
btn.addEventListener("click", fetchFlights);
statusFilter.addEventListener("change", processFlights);
sortOption.addEventListener("change", processFlights);

// FETCH (API SEARCH)
function fetchFlights() {
  const flightNumber = input.value.trim().toUpperCase();

  if (!flightNumber) {
    result.innerHTML = "<p class='error'>Enter flight number ❗</p>";
    return;
  }

  result.innerHTML = "<p class='loading'>Loading... ⏳</p>";

  fetch(`http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&flight_iata=${flightNumber}`)
    .then(res => res.json())
    .then(data => {
      allFlights = data.data || [];
      processFlights();
    })
    .catch(() => {
      result.innerHTML = "<p class='error'>Error fetching data ❌</p>";
    });
}

// FILTER + SORT
function processFlights() {
  let flights = [...allFlights];

  // FILTER
  if (statusFilter.value) {
    flights = flights.filter(f =>
      f.flight_status === statusFilter.value
    );
  }

  // SORT
  if (sortOption.value === "asc") {
    flights.sort((a, b) =>
      new Date(a.departure?.scheduled) - new Date(b.departure?.scheduled)
    );
  } else if (sortOption.value === "desc") {
    flights.sort((a, b) =>
      new Date(b.departure?.scheduled) - new Date(a.departure?.scheduled)
    );
  }

  displayFlights(flights);
}

// DISPLAY (MAP)
function displayFlights(flights) {

  if (!flights || flights.length === 0) {
    result.innerHTML = "<p class='error'>No flights found ❌</p>";
    return;
  }

  const html = flights.map(f => `
    <div class="card">
      <h3>${f.airline?.name || "N/A"}</h3>
      <p><b>Flight:</b> ${f.flight?.iata || "N/A"}</p>
      <p class="status">${f.flight_status || "Unknown"}</p>
      <p><b>Route:</b> ${f.departure?.airport || "N/A"} → ${f.arrival?.airport || "N/A"}</p>
      <p><b>Departure:</b> ${formatDate(f.departure?.scheduled)}</p>
    </div>
  `).join("");

  result.innerHTML = html;
}

// FORMAT DATE
function formatDate(date) {
  if (!date) return "N/A";
  return new Date(date).toLocaleString();
}
