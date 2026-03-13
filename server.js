const express = require("express");

const app = express();

// use Render's port or fallback to 3000 locally
const PORT = process.env.PORT || 3000;

// serve static files
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});