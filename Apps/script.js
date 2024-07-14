document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch server status
    function fetchServerStatus() {
        // Simulating a fetch request to a server
        setTimeout(() => {
            const serverStatus = Math.random() < 0.8 ? 'Server updated successfully' : 'Server update failed';
            updateStatus(serverStatus);
        }, 2000); // Simulating delay of 2 seconds (2000 milliseconds)
    }

    // Function to update status message
    function updateStatus(message) {
        const statusElement = document.getElementById('statusMessage');
        if (statusElement) {
            statusElement.textContent = message;
            if (message.includes('failed')) {
                statusElement.classList.add('error');
            } else {
                statusElement.classList.remove('error');
            }
        }
    }

    // Initial fetch when the page loads
    fetchServerStatus();

    // Optionally, you can set an interval to periodically fetch server status
    // setInterval(fetchServerStatus, 5000); // Fetch every 5 seconds (5000 milliseconds)
});
