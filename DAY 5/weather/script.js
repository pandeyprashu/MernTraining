function fetchAPI() {
    const url =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=L35XE7EBRMAGCEPZCGV8M4XGN";
  
    fetch(url)
      .then((res) => res.json())
      .then(renderUI)
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  
  fetchAPI();
  
  const root = document.getElementById('root');
  
  function renderUI(data) {
    const days = data.days; // Extracting 'days' from the received data
  
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
  
    let cell = document.createElement("th");
    cell.innerText = 'Date';
    headerRow.appendChild(cell);
  
    cell = document.createElement("th");
    cell.innerText = 'Max Temperature';
    headerRow.appendChild(cell);
  
    table.appendChild(headerRow);
  
    // Loop through each day's data and create a row for each
    days.forEach((day) => {
      const row = document.createElement("tr");
  
      cell = document.createElement("td");
      cell.innerText = day.datetime;
      row.appendChild(cell);
  
      cell = document.createElement("td");
      cell.innerText = day.tempmax + "°F"; // Assuming temperature is provided in Fahrenheit
      row.appendChild(cell);
  
      table.appendChild(row);
    });
  
    root.appendChild(table);
  }
  
  