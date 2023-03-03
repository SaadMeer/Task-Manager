const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const taskRouter = require("./routes/taskroute");
// const connectDB = require("./config/connectDB");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extented: false }));
app.use("/api/tasks", taskRouter);

// Define your routes
app.get("/", (req, res) => {
  res.send("This is Home Page");
});

// Connect Database
// Start the server
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server listening on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// startServer();
