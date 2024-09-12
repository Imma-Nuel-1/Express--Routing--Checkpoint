const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Custom middleware to check working hours
function checkWorkingHours(req, res, next) {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // Continue to the next middleware or route
  } else {
    res
      .status(403)
      .send(
        "The application is only available during working hours (Monday to Friday, from 9 to 17)."
      );
  }
}

app.use(checkWorkingHours);

// Route handler for the single page
app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "public", "index.html");
  console.log(`Serving file from: ${indexPath}`);
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
