require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/user");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// user table all commmand
app.use("/user", userRoute); 

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
