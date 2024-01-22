document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentPage = window.location.pathname;

    // Remove the leading '/' for comparison
    currentPage = currentPage.substring(1);

    // Identify the active link based on the current page
    var links = document.querySelectorAll(".nav-links a");
    links.forEach(function(link) {
        // Remove the "active" class from all links
        link.classList.remove("active");

        // Check if the link's href matches the current page
        if (link.getAttribute("href") === currentPage) {
            // Add the "active" class to the matching link
            link.classList.add("active");
        }
    });
});
