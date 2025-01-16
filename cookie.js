// Helper function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;`;
}

// Helper function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}
// Check if the cookie popup has already been accepted
if (!getCookie('cookieConsent-xdpxi')) {
  // Create the cookie popup
  const cookiePopup = document.createElement('div');
  cookiePopup.id = 'cookiePopup';
  Object.assign(cookiePopup.style, {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    right: '20px',
    backgroundColor: 'var(--button-color)',
    color: 'var(--text-light)',
    padding: '15px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px var(--shadow-dark)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: '1000',
  });

  cookiePopup.innerHTML = `
    <p style="margin: 0; font-size: 18px;">
      We use cookies to enhance your browsing experience. By continuing, you agree to our use of cookies. 
      <a href="#" style="color: var(--link-color); text-decoration: none;">Learn more</a>
    </p>
    <div>
      <button id="acceptCookies" style="
        background-color: var(--background-dark); 
        color: var(--text-light); 
        border: none; 
        padding: 10px 20px; 
        border-radius: 5px; 
        cursor: pointer; 
        font-size: 18px; 
        margin-left: 10px; 
        transition: background-color 0.3s ease;
      ">Accept</button>
    </div>
  `;

  // Append the popup to the body
  document.body.appendChild(cookiePopup);

  // Add event listener to the Accept button
  document.getElementById('acceptCookies').addEventListener('click', () => {
    setCookie('cookieConsent-xdpxi', 'accepted', 30); // Set the cookie for 30 days
    cookiePopup.remove(); // Remove the popup
    console.log('Cookie consent accepted and stored.');
  });
}