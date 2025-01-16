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
    cookiePopup.style.position = 'fixed';
    cookiePopup.style.bottom = '20px';
    cookiePopup.style.left = '20px';
    cookiePopup.style.right = '20px';
    cookiePopup.style.backgroundColor = 'var(--background-dark)';
    cookiePopup.style.color = 'var(--text-light)';
    cookiePopup.style.padding = '15px 20px';
    cookiePopup.style.borderRadius = '8px';
    cookiePopup.style.boxShadow = '0 4px 8px var(--shadow-dark)';
    cookiePopup.style.display = 'flex';
    cookiePopup.style.justifyContent = 'space-between';
    cookiePopup.style.alignItems = 'center';
    cookiePopup.style.zIndex = '1000';

    cookiePopup.innerHTML = `
      <p>We use cookies to enhance your browsing experience. By continuing, you agree to our use of cookies. 
        <a href="#" style="color: var(--link-color); text-decoration: none;">Learn more</a>
      </p>
      <div>
        <button style="
          background-color: var(--button-color); 
          color: var(--text-light); 
          border: none; 
          padding: 10px 20px; 
          border-radius: 5px; 
          cursor: pointer; 
          font-size: 14px; 
          margin-left: 10px; 
          transition: background-color 0.3s;" 
          id="acceptCookies">Accept</button>
      </div>
    `;

    document.body.appendChild(cookiePopup);

    // Add event listener to the Accept button
    document.getElementById('acceptCookies').addEventListener('click', () => {
      setCookie('cookieConsent-xdpxi', 'accepted', 30); // Set the cookie for 30 days
      cookiePopup.remove(); // Remove the popup
    });
  }