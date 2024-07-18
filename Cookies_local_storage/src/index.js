// Javascript function to set cookies
function setCookies() {
    // Get values
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    // set cookies with obtained values
    document.cookie = `firstname=${firstname}; path=/`;
    document.cookie = `email=${email}; path=/`; 
}

// Function to show cookies
function showCookies() {
    // paragraph element to show cookies
    const p = document.createElement('p');
    const cookies = document.cookie;

    p.innerHTML = `Cookies: ${cookies}`;
    document.body.appendChild(p);
}