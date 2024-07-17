// Javascript function to set cookies
function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    document.cookie = `firstname=${firstname}; path=/`;
    document.cookie = `email=${email}; path=/`; 
}

// Function to show cookies
function showCookies() {
    const p = document.createElement('p');
    const cookies = document.cookie;

    p.innerHTML = `Cookies: ${cookies}`;
    document.body.appendChild(p);
}