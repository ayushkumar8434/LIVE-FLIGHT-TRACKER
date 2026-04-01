const API_KEY = "55b8b20a69c62d2c84f642bf932e7db3";

const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const result = document.getElementById("result");

btn.addEventListener("click", searchFlight);

function searchFlight() {
  const flightNumber = input.value.trim().toUpperCase();

  if (!flightNumber) {
    result.innerHTML = "Enter flight number ❗";
    return;
  }

  result.innerHTML = "Loading...";

  fetch(`http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&flight_iata=${flightNumber}`)
    .then(res => res.json())
    .then(data => {

      const flights = data.data;

      if (!flights || flights.length === 0) {
        result.innerHTML = "No flight found ❌";
        return;
      }

      const f = flights[0];

      result.innerHTML = `
        <div class="card">
          <h2>${f.airline?.name || "N/A"}</h2>
          <p><b>Flight:</b> ${f.flight?.iata || "N/A"}</p>
          <p><b>Status:</b> ${f.flight_status || "Unknown"}</p>
          <p><b>Route:</b> ${f.departure?.airport || "N/A"} → ${f.arrival?.airport || "N/A"}</p>
          <p><b>Departure:</b> ${f.departure?.scheduled || "N/A"}</p>
        </div>
      `;
    })
    .catch(err => {
      console.error(err);
      result.innerHTML = "Error fetching data ❌";
    });
}
