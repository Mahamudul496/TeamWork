document.getElementById('studyForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get selected study level and reason
    const studyLevel = document.getElementById('studyLevel').value;
    const reason = document.getElementById('reason').value;

    // Display the result
    alert(`You selected: ${studyLevel}\nReason: ${reason}`);

    // Optionally, you can send this data to a server or process it further
});