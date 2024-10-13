// Function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById("api-data");  // Reference to the data container

    try {
        const response = await fetch(apiUrl);  // Fetch the data from the API
        const users = await response.json();   // Convert response to JSON

        // Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Create a list to display the users
        const userList = document.createElement('ul');

        // Loop through the users and add each to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as the text content
            userList.appendChild(listItem); // Append the list item to the user list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // If an error occurs, show a failure message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Invoke fetchUserData when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
