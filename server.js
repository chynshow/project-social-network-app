const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
const fileUpload = require("express-fileupload");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json());

app.use(logger);

app.use(fileUpload());

app.use(mongoSanitize());

app.use(cors());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/posts", require("./routes/posts"));
app.use("/api/v1/profile", require("./routes/profile"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
