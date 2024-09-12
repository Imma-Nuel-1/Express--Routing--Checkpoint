function showPage(page) {
  const contentDiv = document.getElementById("content");

  if (page === "home") {
    contentDiv.innerHTML = `
      <h1>Welcome to Our Home Page</h1>
      <p>Content for the home page goes here.</p>
    `;
  } else if (page === "services") {
    contentDiv.innerHTML = `
      <h1>Our Services</h1>
      <p>Details about our services go here.</p>
    `;
  } else if (page === "contact") {
    contentDiv.innerHTML = `
      <h1>Contact Us</h1>
      <p>Contact information goes here.</p>
    `;
  }
}

// Show the home page by default
showPage("home");
