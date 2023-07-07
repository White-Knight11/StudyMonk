function searchItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i; // Item found, return the index
        }
    }
    return -1; // Item not found
}

// Example usage
const items = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const searchTerm = 'orange';
const result = searchItem(items, searchTerm);

if (result !== -1) {
    console.log(`The item '${searchTerm}' was found at index ${result}.`);
} else {
    console.log(`The item '${searchTerm}' was not found.`);
}


// Access the search form and search results elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Add an event listener to the form for the submit event
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = searchInput.value; // Get the search term from the input field

    // Perform your search logic here
    // For demonstration purposes, we'll simply display the search term in the searchResults element
    searchResults.textContent = `You searched for: ${searchTerm}`;
});