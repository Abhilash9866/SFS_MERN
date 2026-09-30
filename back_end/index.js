let express = require("express");
let app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Secure File Storage Backend Running success");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});