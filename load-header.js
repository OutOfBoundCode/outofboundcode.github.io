// Function to load the header
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
            highlightActivePage(); // Optional: Highlight current page
        })
        .catch(err => console.error('Failed to load header:', err));
}

// Optional: Highlight active link in nav
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', loadHeader);