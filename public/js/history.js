
function updateHistoryTable(data) {
  const historyTable = document.getElementById("historyTable");
  historyTable.innerHTML = ""; 
  data.forEach((item) => {
    const row = `
      <tr>
        <td>${item.bmi}</td>
        <td>${item.weight}</td>
        <td>${item.height}</td>
        <td>${item.gender}</td>
        <td>${item.age}</td>
        <td>${item.units}</td>
        <td>${item.timestamp}</td>
        <td><button class="btn btn-danger" onclick="deleteEntry('${item.timestamp}')">Delete</button></td>
      </tr>
    `;

    historyTable.innerHTML += row;
  });
}


function deleteEntry(timestamp) {
  const encodedTimestamp = encodeURIComponent(timestamp);

  fetch(`/deleteentry?timestamp=${encodedTimestamp}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      updateHistoryTable(data);
    })
    .catch((error) => console.error("Error:", error));
}


fetch("/gethistory")
  .then((response) => response.json())
  .then((data) => {
    const historyTable = document.getElementById("historyTable");
    data.forEach((item) => {
      console.log(item);
      const row = `
        <tr>
          <td>${item.bmi}</td>
          <td>${item.weight}</td>
          <td>${item.height}</td>
          <td>${item.gender}</td>
          <td>${item.age}</td>
          <td>${item.units}</td>
          <td>${item.timestamp}</td>
          <td><button class="btn btn-danger" onclick="deleteEntry('${item.timestamp}', event)">Delete</button></td>

        </tr>
      `;

      historyTable.innerHTML += row;
    });
  });
