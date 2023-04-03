// Get the current date and time
let now = new Date();

// Create a function to save the diary entry
function saveEntry() {
  // Get the diary entry text and the current date and time
  let entryText = document.getElementById("diary-entry").value;
  let entryDate = now.toLocaleDateString();
  let entryTime = now.toLocaleTimeString();

  // Create a new object to store the entry
  let diaryEntry = {text: entryText, date: entryDate, time: entryTime};

  // Check if localStorage already has an entries array
  if (localStorage.getItem("entries") === null) {
    // If not, create a new array and add the diary entry
    let entries = [diaryEntry];
    localStorage.setItem("entries", JSON.stringify(entries));
  } else {
    // If so, get the existing entries array and add the diary entry
    let entries = JSON.parse(localStorage.getItem("entries"));
    entries.push(diaryEntry);
    localStorage.setItem("entries", JSON.stringify(entries));
  }

  // Update the list of diary entries
  displayEntries();

  // Clear the diary entry form
  document.getElementById("diary-entry").value = "";
}

// Create a function to display the diary entries
function displayEntries() {
  // Get the list element where the entries will be displayed
  let entryList = document.getElementById("entry-list");

  // Clear any existing entries from the list
  entryList.innerHTML = "";

  // Get the entries array from localStorage
  let entries = JSON.parse(localStorage.getItem("entries"));

  // Loop through the entries array and create a list item for each entry
  for (let i = 0; i < entries.length; i++) {
    let entry = entries[i];
    let listItem = document.createElement("li");
    let entryText = document.createTextNode(entry.text);
    let entryDateTime = document.createTextNode(entry.date + " " + entry.time);
    listItem.appendChild(entryText);
    listItem.appendChild(document.createElement("br"));
    listItem.appendChild(entryDateTime);
    entryList.appendChild(listItem);
  }
}

// Call the displayEntries function on page load
displayEntries();
